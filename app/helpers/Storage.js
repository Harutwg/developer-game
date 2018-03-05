// @flow
import { AsyncStorage } from 'react-native'

export default class Storage {
    setItem = (key: string, data: Object): any => {
        return AsyncStorage.setItem(key, JSON.stringify(data))
            .then(item => ({
                ok: true,
                data: JSON.parse(item),
            }))
            .catch(error =>({
                error: error,
                ok: false
            }))
    };

    getItem = (key: string): any => {
        return AsyncStorage.getItem(key)
            .then(item => ({
                ok: true,
                data: JSON.parse(item),
            }))
            .catch(error =>({
                error: error,
                ok: false
            }))
    };
}