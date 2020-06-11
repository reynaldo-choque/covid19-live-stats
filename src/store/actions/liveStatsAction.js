//https://covid2019-api.herokuapp.com/
//https://documenter.getpostman.com/view/11144369/Szf6Z9B3?version=latest
import axios from "axios";

export const setCovidData = (data) => {
    return {
        type: "SET_COVID_STATS_DATA",
        payload: {
            countries: data
        }
    };
};

export const getCovidData = () => async (dispatch, getState) => {
    const request = axios.get("https://corona.lmao.ninja/v2/countries?yesterday&sort");
    try {
        const {data} = await request;
        //const {data: {Countries, Global, Date}} = await request;
        dispatch(setCovidData(data));
    } catch (e) {
        console.log("error", e);
    }
}