import * as React from "react";
import { Error404Page } from "src/pages";
import { SummaryDefinition, SummaryKeyAssumption } from "../pages/Demand";
import {
  KPISChina,
  KPISInternationalDI,
  KPISInternationalEIB,
  KPISInternationalIL
} from "../pages/Demand/KPIS";
import {
  PreviousForecastsChina,
  PreviousForecastsInternationalDI,
  PreviousForecastsInternationalEIB,
  PreviousForecastsInternationalIL
} from "../pages/Demand/PreviousForecasts";
import {
  SummaryCurrentForecastChina,
  SummaryCurrentForecastInternationalDI,
  SummaryCurrentForecastInternationalEIB,
  SummaryCurrentForecastInternationalIL
} from "../pages/Demand/SummaryCurrentForecast";

export const renderDemand = ({ match }: { match: any }) => {
  const hashMapRoute = {
    // KPIS
    "/demand/china/all/kpis": <KPISChina />,
    "/demand/international/eib/kpis": <KPISInternationalEIB />,
    "/demand/international/il/kpis": <KPISInternationalIL />,
    "/demand/international/di/kpis": <KPISInternationalDI />,

    // Previous Forecasts
    "/demand/china/all/previous_forecasts": <PreviousForecastsChina />,
    "/demand/international/eib/previous_forecasts": (
      <PreviousForecastsInternationalEIB />
    ),
    "/demand/international/il/previous_forecasts": (
      <PreviousForecastsInternationalIL />
    ),
    "/demand/international/di/previous_forecasts": (
      <PreviousForecastsInternationalDI />
    ),

    // Previous Forecasts
    "/demand/china/all/summary_current_forecast": (
      <SummaryCurrentForecastChina />
    ),
    "/demand/international/eib/summary_current_forecast": (
      <SummaryCurrentForecastInternationalEIB />
    ),
    "/demand/international/il/summary_current_forecast": (
      <SummaryCurrentForecastInternationalIL />
    ),
    "/demand/international/di/summary_current_forecast": (
      <SummaryCurrentForecastInternationalDI />
    ),

    // Summary definition
    "/demand/china/all/summary_definition": <SummaryDefinition />,
    "/demand/international/eib/summary_definition": <SummaryDefinition />,
    "/demand/international/il/summary_definition": <SummaryDefinition />,
    "/demand/international/di/summary_definition": <SummaryDefinition />,

    // Summary Key Assumptions
    "/demand/china/all/summary_key_assumptions": <SummaryKeyAssumption />,
    "/demand/international/eib/summary_key_assumptions": (
      <SummaryKeyAssumption />
    ),
    "/demand/international/il/summary_key_assumptions": (
      <SummaryKeyAssumption />
    ),
    "/demand/international/di/summary_key_assumptions": <SummaryKeyAssumption />
  };
  return hashMapRoute[match.url] || <Error404Page />;
};
