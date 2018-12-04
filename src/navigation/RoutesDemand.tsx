import * as React from "react";
import { SummaryDefinition, SummaryKeyAssumption } from "../pages/Demand";
import {
  KPISChinaDC,
  KPISChinaDI,
  KPISInternationalDI,
  KPISInternationalEIB,
  KPISInternationalIL
} from "../pages/Demand/KPIS";
import {
  PreviousForecastsChinaDC,
  PreviousForecastsChinaDI,
  PreviousForecastsInternationalDI,
  PreviousForecastsInternationalEIB,
  PreviousForecastsInternationalIL
} from "../pages/Demand/PreviousForecasts";
import {
  SummaryCurrentForecastChinaDC,
  SummaryCurrentForecastChinaDI,
  SummaryCurrentForecastInternationalDI,
  SummaryCurrentForecastInternationalEIB,
  SummaryCurrentForecastInternationalIL
} from "../pages/Demand/SummaryCurrentForecast";

export const renderDemand = ({ match }: { match: any }) => {
  const hashMapRoute = {
    // KPIS
    "/demand/china/dc/kpis": <KPISChinaDC />,
    "/demand/china/di/kpis": <KPISChinaDI />,
    "/demand/international/eib/kpis": <KPISInternationalEIB />,
    "/demand/international/il/kpis": <KPISInternationalIL />,
    "/demand/international/di/kpis": <KPISInternationalDI />,

    // Previous Forecasts
    "/demand/china/dc/previous_forecasts": <PreviousForecastsChinaDC />,
    "/demand/china/di/previous_forecasts": <PreviousForecastsChinaDI />,
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
    "/demand/china/dc/summary_current_forecast": (
      <SummaryCurrentForecastChinaDC />
    ),
    "/demand/china/di/summary_current_forecast": (
      <SummaryCurrentForecastChinaDI />
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
    "/demand/china/dc/summary_definition": <SummaryDefinition />,
    "/demand/china/di/summary_definition": <SummaryDefinition />,
    "/demand/international/eib/summary_definition": <SummaryDefinition />,
    "/demand/international/il/summary_definition": <SummaryDefinition />,
    "/demand/international/di/summary_definition": <SummaryDefinition />,

    // Summary Key Assumptions
    "/demand/china/dc/summary_key_assumptions": <SummaryKeyAssumption />,
    "/demand/china/di/summary_key_assumptions": <SummaryKeyAssumption />,
    "/demand/international/eib/summary_key_assumptions": (
      <SummaryKeyAssumption />
    ),
    "/demand/international/il/summary_key_assumptions": (
      <SummaryKeyAssumption />
    ),
    "/demand/international/di/summary_key_assumptions": <SummaryKeyAssumption />
  };
  return hashMapRoute[match.url];
};
