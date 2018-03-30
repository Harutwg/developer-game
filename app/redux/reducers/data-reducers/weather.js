import { createAction, createReducer } from 'redux-action';
import { getWeather } from 'api/';

const GET_WEATHER = 'GET_WEATHER';

export const getWeatherAction = createAction(GET_WEATHER, () => getWeather())

const defaultState = {
    payload: undefined
};

export default getWeatherReducer = createReducer(defaultState, {
    [GET_WEATHER]: (actionPayload, state) => ({
        ...state,
        payload: actionPayload,
    }),
})