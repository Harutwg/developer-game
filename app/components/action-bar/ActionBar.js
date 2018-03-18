// @flow

import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated
} from 'react-native';

type IActionBarProps = {
    percentage: number,
    title: 'string',
};

type IActionBarState = {
    widthAnim: any,
};

export default class ActionBar extends PureComponent<IActionBarProps, IActionBarState> {
    constructor(props: IActionBarProps) {
        super(props);

        this.state = {
            widthAnim: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.widthAnim,
            {
                toValue: this.props.percentage,
                duration: 1000,
            }
        ).start();
    }

    render() {
        const width = this.state.widthAnim.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%']
        });
        return (
            <View style={styles.actionBar}>
                <View style={styles.actionBarTitle}>
                    <Text>
                        {this.props.title}
                    </Text>
                </View>
                <View style={styles.actionBarContainer}>
                    <Animated.View style={{
                        backgroundColor: '#a73e4b',
                        width,
                        flexGrow: 1,
                    }} />
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