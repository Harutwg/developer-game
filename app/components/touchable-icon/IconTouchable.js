// @flow

import React, { PureComponent } from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';

import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

type IIconTouchableProps = {
    iconFamily: 'string',
    name: 'string',
    size: number,
    onPress: Function,
    style: Object,
    iconStyle: Object,
    title: string,
};

export default class IconTouchable extends PureComponent<IIconTouchableProps, {}> {

    getIconFamily = (familyName: string) => {
        switch(familyName) {
            case 'IconEvil' :
                return IconEvil;
            case 'FontAwesome':
                return IconFA;
            case 'IonIcon':
                return IonIcon;
            case 'SimpleLineIcons':
                return SimpleLineIcon;
            default: return IonIcon;
        }
    };

    render() {
        const Icon = this.getIconFamily(this.props.iconFamily);

        return(
            <TouchableOpacity
                style={{
                    flexDirection: 'column',
                    ...(this.props.style || {}),
                }}
                onPress={this.props.onPress}
            >
                <Icon
                    name={this.props.name || ''}
                    size={this.props.size || 0}
                    style={this.props.iconStyle || {}}
                />
                {
                    !!this.props.title &&
                    <Text style={{ marginTop: 10, color: 'white' }} >{this.props.title}</Text>
                }
            </TouchableOpacity>
        );
    }
}