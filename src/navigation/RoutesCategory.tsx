import * as React from "react";
import {
  KPISChinaDC,
  KPISChinaDI,
  KPISInternationalEIB
} from "../pages/Category/KPIS";

export const renderCategory = ({ match }: { match: any }) => {
  const hashMapRoute = {
    // KPIS
    "/category/imf/total/kpis": <KPISChinaDC />,
    "/category/imf/goat/kpis": <KPISChinaDI />,
    "/category/imf/organic/kpis": <KPISInternationalEIB />,
    "/category/tailored_nutrition/regular/kpis": <KPISInternationalEIB />,

    // Overview
    "/category/imf/total/summary_overview": <KPISChinaDC />,
    "/category/imf/goat/summary_overview": <KPISChinaDI />,
    "/category/imf/organic/summary_overview": <KPISInternationalEIB />,
    "/category/tailored_nutrition/regular/summary_overview": (
      <KPISInternationalEIB />
    ),

    // Actual
    "/category/imf/total/summary_actual": <KPISChinaDC />,
    "/category/imf/goat/summary_actual": <KPISChinaDI />,
    "/category/imf/organic/summary_actual": <KPISInternationalEIB />,
    "/category/tailored_nutrition/regular/summary_actual": (
      <KPISInternationalEIB />
    ),

    // Forecast Future
    "/category/imf/total/summary_forecast_future": <KPISChinaDC />,
    "/category/imf/goat/summary_forecast_future": <KPISChinaDI />,
    "/category/imf/organic/summary_forecast_future": <KPISInternationalEIB />,
    "/category/tailored_nutrition/regular/summary_forecast_future": (
      <KPISInternationalEIB />
    ),

    // Input Past & Future
    "/category/imf/total/summary_input_past_and_future": <KPISChinaDC />,
    "/category/imf/goat/summary_input_past_and_future": <KPISChinaDI />,
    "/category/imf/organic/summary_input_past_and_future": (
      <KPISInternationalEIB />
    ),
    "/category/tailored_nutrition/regular/summary_input_past_and_future": (
      <KPISInternationalEIB />
    ),

    // Forecast Past
    "/category/imf/total/summary_forecast_past": <KPISChinaDC />,
    "/category/imf/goat/summary_forecast_past": <KPISChinaDI />,
    "/category/imf/organic/summary_forecast_past": <KPISInternationalEIB />,
    "/category/tailored_nutrition/regular/summary_forecast_past": (
      <KPISInternationalEIB />
    ),

    // Definition
    "/category/imf/total/summary_definitions": <KPISChinaDC />,
    "/category/imf/goat/summary_definitions": <KPISChinaDI />,
    "/category/imf/organic/summary_definitions": <KPISInternationalEIB />,
    "/category/tailored_nutrition/regular/summary_definitions": (
      <KPISInternationalEIB />
    ),

    // Key Assumptions
    "/category/imf/total/summary_key_assumptions": <KPISChinaDC />,
    "/category/imf/goat/summary_key_assumptions": <KPISChinaDI />,
    "/category/imf/organic/summary_key_assumptions": <KPISInternationalEIB />,
    "/category/tailored_nutrition/regular/summary_key_assumptions": (
      <KPISInternationalEIB />
    )
  };
  return hashMapRoute[match.url];
};
