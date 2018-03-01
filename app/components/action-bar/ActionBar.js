// @flow

import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

type IActionBarProps = {
    percentage: number,
    title: 'string',
};

export default class ActionBar extends PureComponent<IActionBarProps, {}> {
    render() {
        const actionBarBodyStyles = StyleSheet.create({
            body: {
            }
        });

        return (
            <View style={styles.actionBar}>
                <View style={styles.actionBarTitle}>
                    <Text>
                        {this.props.title}
                        </Text>
                </View>
                <View style={styles.actionBarContainer}>
                    <View style={{
                        backgroundColor: '#a73e4b',
                        width: `${this.props.percentage}%`,
                        flexGrow: 1,
                    }}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actionBar: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    actionBarTitle: {

    },
    actionBarContainer: {
        height: 10,
        marginTop: 5,
        backgroundColor: '#505050',
        overflow: 'hidden',
        borderRadius: 40,

    },
});