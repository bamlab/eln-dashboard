import { match } from "react-router";

export interface INavigationProps {
  match: match<IMatchParameters>;
}

interface IMatchParameters {
  department: string;
}
