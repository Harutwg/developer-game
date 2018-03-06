// @flow

import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

type ILogoProps = {
    title: string,
    style?: Object,
    fontStyle?: Object,
    titleStyle?: Object,
};

export default class Logo extends PureComponent<ILogoProps> {
    render() {
        return (
            <View style={[
                styles.logoContainer,
                this.props.style || {}
            ]}>
                <Text style={[
                    styles.logo,
                    this.props.fontStyle || {},
                ]}>
                    <Text style={{
                        color: 'aqua'
                    }}>
                        {'<'}
                    </Text>
                    <Text style={[
                        styles.title,
                        this.props.titleStyle || {}
                    ]}>
                        {this.props.title}
                    </Text>
                    <Text style={{
                        color: 'aqua'
                    }}>
                        {'>'}
                    </Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {},
    logo: {
        fontSize: 70,
        fontFamily: 'Oswald-Regular',
    },
    title: {
        color: 'white'
    }
});