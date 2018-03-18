// @flow
import { NavigationActions } from 'react-navigation';

// this function will navigate to passed routeName and will reset navigation stack
export const navigateAndReset = (dispatch: Function, routeName: string): void => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName })
        ],
        key: null
    });
    dispatch(resetAction);
};