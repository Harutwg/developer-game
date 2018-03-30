import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getWeatherAction as getWeather } from 'reduxStore/reducers/data-reducers/weather';

import HomeScreen from './HomeScreen';

const mapStateToProps = (state) => ({
    weatherData: state.data.weatherData
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        getWeather,
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);