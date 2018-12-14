import * as React from "react";
import { config } from "../config";
declare var gapi: any;

export interface IWrappedComponentProps {
  data: any[];
}

interface ISheet {
  properties: { sheetId: number; title: string };
}

export const WithGoogleData = (
  WrappedComponent: React.ComponentType<IWrappedComponentProps>
) => {
  return class extends React.Component<{
    range: string;
    customOptions?: Highcharts.Options;
    isStacked?: boolean;
    styleCells?: Array<Array<{}>>;
    styleRows?: Array<{}>;
    width?: number;
  }> {
    public static defaultProps = { customOptions: {} };
    public state = { data: [], gid: "" };

    public componentDidMount() {
      gapi.load("client", this.initClient.bind(this));
    }

    public initClient = () => {
      const client = gapi.client;
      client
        .init({
          apiKey: config.apiKey,
          discoveryDocs: config.discoveryDocs
        })
        .then(() => {
          client.load("sheets", "v4", () => {
            client.sheets.spreadsheets
              .get({
                spreadsheetId: config.spreadsheetId
              })
              .then((response: any) => {
                const gids = (response.result.sheets as ISheet[]).reduce(
                  (gidByTitle, sheet) => {
                    gidByTitle[sheet.properties.title] =
                      sheet.properties.sheetId;
                    return gidByTitle;
                  },
                  {}
                );
                // @ts-ignore
                const gid = gids[this.props.range.match(/^[^!]*/)[0]];
                this.setState({ gid });
              });
          });
        })
        .then(() => {
          client.load("sheets", "v4", () => {
            client.sheets.spreadsheets.values
              .get({
                spreadsheetId: config.spreadsheetId,
                range: this.props.range
              })
              .then((response: any) => {
                const data = response.result.values;
                this.setState({ data });
              });
          });
        });
    };

    public render() {
      return (
        <React.Fragment>
          {this.state.data.length > 0 && (
            <a
              href={`https://docs.google.com/spreadsheets/d/1rUencQt965RIFAGXac1VkyDEnx9TmId6Z-4NbC-8Sts/edit#gid=${
                this.state.gid
              }`}
              target="_blank"
              style={{
                fontSize: "xx-small",
                textDecoration: "none",
                color: "lightgrey"
              }}
            >
              data
            </a>
          )}
          <WrappedComponent data={this.state.data} {...this.props} />
        </React.Fragment>
      );
    }
  };
};
