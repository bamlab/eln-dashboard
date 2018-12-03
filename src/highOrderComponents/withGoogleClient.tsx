import * as React from "react";
import { config } from "../config";

interface IProps {
  data: any[];
}

export const WithGoogleClient = (
  WrappedComponent: React.ComponentType<IProps>
) => {
  return class extends React.Component<{ range: string }> {
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
          // Your API key will be automatically added to the Discovery Document URLs.
          discoveryDocs: config.discoveryDocs
        })
        .then(() => {
          client.load("sheets", "v4", () => {
            client.sheets.spreadsheets.values
              .get({
                spreadsheetId: config.spreadsheetId,
                // tslint: disable-next-line
                range: this.range
              })
              .then(
                (response: any) => {
                  const data = response.result.values;
                  this.setState({ data });
                },
                (response: any) => {
                  console.log(false, response.result.error);
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
