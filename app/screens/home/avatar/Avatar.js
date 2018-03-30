// @flow

import React, { PureComponent } from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';

type IAvatarProps = {
    styles: Object
};

type IAvatarState = {
    avatarUri: string,
}

export default class Avatar extends PureComponent<IAvatarProps, IAvatarState> {
    options: Object;

    constructor(props: IAvatarProps) {
        super(props);

        this.options = {
            title: 'Select Avatar',
        };

        this.state = {
            avatarUri: '',
        };
    }

    handleAvatarPress = () => {
        ImagePicker.showImagePicker(this.options, (response) => {
            this.setState({
                avatarUri: response.uri
            });
        });
    };

    render () {
        console.log(this.state.avatarUri);
        return (
            <View
                style={this.props.styles}
            >
                <TouchableOpacity
                    onPress={this.handleAvatarPress}
                >
                    <Image
                        resizeMode={'contain'}
                        style={{width: '100%', height: 270}}
                        source={this.state.avatarUri? {uri: this.state.avatarUri} : require('../dev-icon.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
