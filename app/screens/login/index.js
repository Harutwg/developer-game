// @flow

import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

type ILoginScreenProps = {
    navigation: Object
};

import Logo from 'components/logo';

export default class LoginScreen extends PureComponent<ILoginScreenProps, {}> {
    static navigationOptions = { header: null };

    componentWillMount(){
        const { navigate } = this.props.navigation;
        if(true) {
            navigate('Home');
        }
    }

    componentWillReceiveProps(nextProps: ILoginScreenProps){
        const { navigate } = nextProps.navigation;
        if(true) {
            navigate('Home');
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Logo
                    title="epamer"
                    titleStyle={{
                        color: '#555',
                    }}
                    style={styles.logo}
                />
                <View style={styles.signin}>
                    <TextInput
                        placeholder="Username"
                        underlineColorAndroid='transparent'
                        style={styles.textinput}
                        editable = {true}
                    />
                    <TextInput
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        style={styles.textinput}
                        editable = {true}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigate('Home');
                        }}
                        style={styles.loginButton}
                    >
                        <Text style={styles.loginButtonText}> Login </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
        flexDirection: 'column',
    },
    logo: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    signin: {
        paddingTop: 40,
        flexGrow: 0,
        height: 250,
        justifyContent: 'space-between'
    },
    textinput: {
        height: 50,
        fontSize: 23,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'yellowgreen',
    },
    loginButtonText: {
        fontSize: 30,
        color: 'white',
    }
});