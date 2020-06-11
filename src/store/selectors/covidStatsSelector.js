import {createSelector} from "reselect";

const covidSelector = (state) => state.liveStats;

export const getCountriesSelector = createSelector(
    [covidSelector],
    (covidData) => covidData.countries
);