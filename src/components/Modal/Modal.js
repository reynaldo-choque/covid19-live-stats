import * as React from "react";
import './Modal.scss';

const ns = 'my-modal';
const Modal = ({closeModalFn, getCountryFn}) => {
    console.log("current", getCountryFn());
    const currentCountry = getCountryFn();
    const lastUpdate = new Date(currentCountry.updated);
    return (
        <div className={`${ns}`}>
            <div className={`${ns}__content`}>
                <div className={`${ns}__content--close-button`}>
                    <span onClick={() => {
                        closeModalFn();
                    }}>
                        X
                    </span>
                </div>
                <div className={`${ns}__content--title`}>{currentCountry.country}</div>
                <div className={`${ns}__content--data`}>
                    <span><b>Active: </b>{currentCountry.active}</span>
                    <span><b>Active per one million: </b>{currentCountry.activePerOneMillion}</span>
                    <span><b>Cases: </b>{currentCountry.cases}</span>
                    <span><b>Cases per One Million: </b>{currentCountry.casesPerOneMillion}</span>
                    <span><b>Critical: </b>{currentCountry.critical}</span>
                    <span><b>Critical per One Million: </b>{currentCountry.criticalPerOneMillion}</span>
                    <span><b>Deaths: </b>{currentCountry.deaths}</span>
                    <span><b>DeathsPerOneMillion: </b>{currentCountry.deathsPerOneMillion}</span>
                    <span><b>One case per people: </b>{currentCountry.oneCasePerPeople}</span>
                    <span><b>Population: </b>{currentCountry.population}</span>
                    <span><b>Recovered: </b>{currentCountry.recovered}</span>
                    <span><b>Recovered per One Million: </b>{currentCountry.recoveredPerOneMillion}</span>
                    <span><b>Number of tests: </b>{currentCountry.tests}</span>
                    <span><b>Test per One Million: </b>{currentCountry.testsPerOneMillion}</span>
                    <span><b>Taday Cases: </b>{currentCountry.todayCases}</span>
                    <span><b>Today Deaths: </b>{currentCountry.todayDeaths}</span>
                    <span><b>Today Recovered: </b>{currentCountry.todayRecovered}</span>
                    <span>
                        <b>Last Update: </b>
                        {`${lastUpdate.getDate()}/${lastUpdate.getMonth() + 1}/${lastUpdate.getFullYear()} ${lastUpdate.getHours()}:${lastUpdate.getMinutes()}`}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Modal;