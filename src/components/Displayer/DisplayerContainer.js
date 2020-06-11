import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import {getCountriesSelector} from 'store/selectors/covidStatsSelector';
import {getCovidData} from 'store/actions/liveStatsAction';
import Displayer from "./Displayer";

const mapStateToProps = (state) => (
    {
        countries: getCountriesSelector(state)
    }
);

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getCovidData
        },
        dispatch
    );
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Displayer);
