const liveStatsReducer = (state = {countries: []}, action) => {
    switch (action.type) {
        case "SET_COVID_STATS_DATA":
            return {...state, countries: action.payload.countries};
        default:
            return state;
    }
};

export default liveStatsReducer;