import * as React from "react";
import { config } from "../config";

export interface IWrappedComponentProps {
  data: any[];
}

export const WithGoogleData = (
  WrappedComponent: React.ComponentType<IWrappedComponentProps>
) => {
  return class extends React.Component<{
    range: string;
    customOptions?: Highcharts.Options;
  }> {
    public static defaultProps = { customOptions: {} };
    public range = "";
    public state = { data: [] };
    constructor(props: any) {
      super(props);
      this.range = props.range;
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
            client.sheets.spreadsheets.values
              .get({
                spreadsheetId: config.spreadsheetId,
                range: this.range
              })
              .then(
                (response: any) => {
                  const data = response.result.values;
                  this.setState({ data });
                },
                (response: any) => {
                  console.error(response.result.error);
                }
              );
          });
        });
    }

    public render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};
