import { match } from "react-router";

export interface NavigationProps {
  match: match<matchParameters>;
}

interface matchParameters {
  department: string;
}
