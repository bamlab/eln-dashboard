import { renderCategory } from "./RoutesCategory";
import { renderDemand } from "./RoutesDemand";

export const renderPage = (props: any) => {
  if (props.match.params.department === "category") {
    return renderCategory(props);
  } else if (props.match.params.department === "demand") {
    return renderDemand(props);
  }
};
