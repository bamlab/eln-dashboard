import * as React from "react";
import {
  KPISIMFGoat,
  KPISIMFOrganic,
  KPISIMFTotal,
  KPISTailored
} from "../pages/Category/KPIS";
import {
  SummaryActualIMFGoat,
  SummaryActualIMFOrganic,
  SummaryActualTailored,
  SummaryActualTotal
} from "../pages/Category/SummaryActual";

import {
  SummaryDefinitionsIMFGoat,
  SummaryDefinitionsIMFORganic,
  SummaryDefinitionsIMFTotal,
  SummaryDefinitionsTailored
} from "../pages/Category/SummaryDefinitions";

import {
  SummaryForecastFutureIMFGoat,
  SummaryForecastFutureIMFOrganic,
  SummaryForecastFutureIMFTotal,
  SummaryForecastFutureTailored
} from "../pages/Category/SummaryForecastFuture";

import {
  SummaryForecastPastIMFGoat,
  SummaryForecastPastIMFOrganic,
  SummaryForecastPastTailored,
  SummaryForecastPastTotal
} from "../pages/Category/SummaryForecastPast";
import {
  SummaryOverviewIMFGoat,
  SummaryOverviewIMFOrganic,
  SummaryOverviewIMFTotal,
  SummaryOverviewTailored
} from "../pages/Category/SummaryOverview";

import {
  SummaryInputPastAndFutureIMFGoat,
  SummaryInputPastAndFutureIMFOrganic,
  SummaryInputPastAndFutureIMFTotal,
  SummaryInputPastAndFutureTailored
} from "../pages/Category/SummaryInputPastAndFuture";

import {
  SummaryKeyAssumptionsIMFGoat,
  SummaryKeyAssumptionsIMFOrganic,
  SummaryKeyAssumptionsIMFTotal,
  SummaryKeyAssumptionsTailored
} from "../pages/Category/SummaryKeyAssumptions";

export const renderCategory = ({ match }: { match: any }) => {
  const hashMapRoute = {
    // KPIS
    "/category/imf/total/kpis": <KPISIMFTotal />,
    "/category/imf/goat/kpis": <KPISIMFGoat />,
    "/category/imf/organic/kpis": <KPISIMFOrganic />,
    "/category/tailored_nutrition/regular/kpis": <KPISTailored />,

    // Overview
    "/category/imf/total/summary_overview": <SummaryOverviewIMFTotal />,
    "/category/imf/goat/summary_overview": <SummaryOverviewIMFGoat />,
    "/category/imf/organic/summary_overview": <SummaryOverviewIMFOrganic />,
    "/category/tailored_nutrition/regular/summary_overview": (
      <SummaryOverviewTailored />
    ),

    // Actual
    "/category/imf/total/summary_actual": <SummaryActualTotal />,
    "/category/imf/goat/summary_actual": <SummaryActualIMFGoat />,
    "/category/imf/organic/summary_actual": <SummaryActualIMFOrganic />,
    "/category/tailored_nutrition/regular/summary_actual": (
      <SummaryActualTailored />
    ),

    // Forecast Future
    "/category/imf/total/summary_forecast_future": (
      <SummaryForecastFutureIMFTotal />
    ),
    "/category/imf/goat/summary_forecast_future": (
      <SummaryForecastFutureIMFGoat />
    ),
    "/category/imf/organic/summary_forecast_future": (
      <SummaryForecastFutureIMFOrganic />
    ),
    "/category/tailored_nutrition/regular/summary_forecast_future": (
      <SummaryForecastFutureTailored />
    ),

    // Input Past & Future
    "/category/imf/total/summary_input_past_and_future": (
      <SummaryInputPastAndFutureIMFTotal />
    ),
    "/category/imf/goat/summary_input_past_and_future": (
      <SummaryInputPastAndFutureIMFGoat />
    ),
    "/category/imf/organic/summary_input_past_and_future": (
      <SummaryInputPastAndFutureIMFOrganic />
    ),
    "/category/tailored_nutrition/regular/summary_input_past_and_future": (
      <SummaryInputPastAndFutureTailored />
    ),

    // Forecast Past
    "/category/imf/total/summary_forecast_past": <SummaryForecastPastTotal />,
    "/category/imf/goat/summary_forecast_past": <SummaryForecastPastIMFGoat />,
    "/category/imf/organic/summary_forecast_past": (
      <SummaryForecastPastIMFOrganic />
    ),
    "/category/tailored_nutrition/regular/summary_forecast_past": (
      <SummaryForecastPastTailored />
    ),

    // Definition
    "/category/imf/total/summary_definitions": <SummaryDefinitionsIMFTotal />,
    "/category/imf/goat/summary_definitions": <SummaryDefinitionsIMFGoat />,
    "/category/imf/organic/summary_definitions": (
      <SummaryDefinitionsIMFORganic />
    ),
    "/category/tailored_nutrition/regular/summary_definitions": (
      <SummaryDefinitionsTailored />
    ),

    // Key Assumptions
    "/category/imf/total/summary_key_assumptions": (
      <SummaryKeyAssumptionsIMFTotal />
    ),
    "/category/imf/goat/summary_key_assumptions": (
      <SummaryKeyAssumptionsIMFGoat />
    ),
    "/category/imf/organic/summary_key_assumptions": (
      <SummaryKeyAssumptionsIMFOrganic />
    ),
    "/category/tailored_nutrition/regular/summary_key_assumptions": (
      <SummaryKeyAssumptionsTailored />
    )
  };
  return hashMapRoute[match.url];
};
