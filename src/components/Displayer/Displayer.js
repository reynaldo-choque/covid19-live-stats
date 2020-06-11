import * as React from "react";
import Modal from 'components/Modal';
import "./Displayer.scss";

const ns = "displayer";

class Displayer extends React.Component {
    intervalApi;

    state = {
        displayModal: false,
        currentCountry: null
    }

    setModal = newState => {
        this.setState({
            displayModal: newState
        });
    }

    setCurentCountry = (newCountry) => {
        this.setState({
            currentCountry: newCountry
        });
    }
    getCurrentCountry = () => {
        return this.state.currentCountry;
    }

    componentDidMount() {
        const {getCovidData} = this.props;
        this.intervalApi = window.setInterval(() => {
            getCovidData();
        }, 5 * 60 * 1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.intervalApi);
    }

    render() {
        const {countries} = this.props;
        return (
            <React.Fragment>
                {this.state.displayModal && (
                    <Modal
                        closeModalFn={this.setModal}
                        getCountryFn={this.getCurrentCountry}
                    />
                )
                }
                <div className={`${ns}`}>
                    {countries.map(
                        country =>
                            <div
                                className={`${ns}__country-wrapper`}
                                onClick={
                                    () => {
                                        console.log("click");
                                        this.setModal(true);
                                        this.setCurentCountry(country);
                                    }
                                }
                            >
                                <div className={`${ns}__country-content`}>
                                    <div className={`${ns}__country-content--header`}>
                                        <img src={country.countryInfo.flag}/>
                                        {country.country}
                                    </div>
                                    <div className={`${ns}__country-content--data`}>
                                        <span><b>Confirmed: </b>{`${country.cases}`}</span>
                                        <span><b>Actives: </b>{` ${country.active}`}</span>
                                        <span><b>Recovered: </b>{` ${country.recovered}`}</span>
                                        <span><b>Deaths: </b>{` ${country.deaths}`}</span>
                                    </div>
                                </div>
                            </div>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Displayer;