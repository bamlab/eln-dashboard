import * as React from "react";
import { SummaryDefinition, SummaryKeyAssumption } from "../pages";
import {
  KPISChinaDC,
  KPISChinaDI,
  KPISInternationalDI,
  KPISInternationalEIB,
  KPISInternationalIL
} from "../pages/KPIS/";
import {
  PreviousForecastsChinaDC,
  PreviousForecastsChinaDI,
  PreviousForecastsInternationalDI,
  PreviousForecastsInternationalEIB,
  PreviousForecastsInternationalIL
} from "../pages/PreviousForecasts/";
import {
  SummaryCurrentForecastChinaDC,
  SummaryCurrentForecastChinaDI,
  SummaryCurrentForecastInternationalDI,
  SummaryCurrentForecastInternationalEIB,
  SummaryCurrentForecastInternationalIL
} from "../pages/SummaryCurrentForecast";

export const renderPage = ({ match }: { match: any }) => {
  const hashMapRoute = {
    // KPIS
    "/china/dc/kpis": <KPISChinaDC />,
    "/china/di/kpis": <KPISChinaDI />,
    "/international/eib/kpis": <KPISInternationalEIB />,
    "/international/il/kpis": <KPISInternationalIL />,
    "/international/di/kpis": <KPISInternationalDI />,

    // Previous Forecasts
    "/china/dc/previous_forecasts": <PreviousForecastsChinaDC />,
    "/china/di/previous_forecasts": <PreviousForecastsChinaDI />,
    "/international/eib/previous_forecasts": (
      <PreviousForecastsInternationalEIB />
    ),
    "/international/il/previous_forecasts": (
      <PreviousForecastsInternationalIL />
    ),
    "/international/di/previous_forecasts": (
      <PreviousForecastsInternationalDI />
    ),

    // Previous Forecasts
    "/china/dc/summary_current_forecast": <SummaryCurrentForecastChinaDC />,
    "/china/di/summary_current_forecast": <SummaryCurrentForecastChinaDI />,
    "/international/eib/summary_current_forecast": (
      <SummaryCurrentForecastInternationalEIB />
    ),
    "/international/il/summary_current_forecast": (
      <SummaryCurrentForecastInternationalIL />
    ),
    "/international/di/summary_current_forecast": (
      <SummaryCurrentForecastInternationalDI />
    ),

    // Summary definition
    "/china/dc/summary_definition": <SummaryDefinition />,
    "/china/di/summary_definition": <SummaryDefinition />,
    "/international/eib/summary_definition": <SummaryDefinition />,
    "/international/il/summary_definition": <SummaryDefinition />,
    "/international/di/summary_definition": <SummaryDefinition />,

    // Summary Key Assumptions
    "/china/dc/summary_key_assumptions": <SummaryKeyAssumption />,
    "/china/di/summary_key_assumptions": <SummaryKeyAssumption />,
    "/international/eib/summary_key_assumptions": <SummaryKeyAssumption />,
    "/international/il/summary_key_assumptions": <SummaryKeyAssumption />,
    "/international/di/summary_key_assumptions": <SummaryKeyAssumption />
  };
  return hashMapRoute[match.url];
};
