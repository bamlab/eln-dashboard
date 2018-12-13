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

import { CreateNewForecast } from "src/pages/Category/NewForecast/CreateNewForecast";
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
    ),

    // Create New forecast
    "/category/imf/total/create_new_forecast": <CreateNewForecast />
  };
  return hashMapRoute[match.url];
};
