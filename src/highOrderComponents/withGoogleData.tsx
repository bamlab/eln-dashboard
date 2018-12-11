import * as React from "react";
import { config } from "../config";

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
  }> {
    public static defaultProps = { customOptions: {} };
    public range = "";
    public sheetTitle = "";
    public state = { data: [], gid: "" };
    constructor(props: any) {
      super(props);
      this.range = props.range;
      this.sheetTitle = props.range.match(/^[^!]*/)[0];
      this.initClient = this.initClient.bind(this);
    }

    public componentDidMount() {
      (window as any).gapi.load("client", this.initClient);
    }

    public initClient() {
      const gapi = (window as any).gapi;
      const client = gapi.client;
      client
        .init({
          apiKey: config.apiKey,
          discoveryDocs: config.discoveryDocs
        })
        .then(() => {
          client.load("sheets", "v4", () => {
            const self = this;
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
                const gid = gids[self.sheetTitle];
                self.setState({ gid });
              });
          });
        })
        .then(() => {
          client.load("sheets", "v4", () => {
            client.sheets.spreadsheets.values
              .get({
                spreadsheetId: config.spreadsheetId,
                range: this.range
              })
              .then((response: any) => {
                const data = response.result.values;
                this.setState({ data });
              });
          });
        });
    }

    public render() {
      return (
        <React.Fragment>
          {this.state.data.length ? (
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
          ) : (
            ""
          )}
          <WrappedComponent data={this.state.data} {...this.props} />
        </React.Fragment>
      );
    }
  };
};
