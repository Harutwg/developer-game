// @flow

import React, { PureComponent } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

import Logo from 'components/logo';
import ActionBar from 'components/action-bar';
import ModalScreen from './ModalScreen';

import TouchableIcon from 'components/touchable-icon';

import { navigateAndReset } from "helpers/navigation";

type IHomeScreenProps = {
    characteristics: Array<Object>;
    navigation: Object
};

type IHomeScreenState = {
    modalOpened: boolean,
};

const voidFunction = (): void => {};

export default class HomeScreen extends PureComponent<IHomeScreenProps, IHomeScreenState> {

    static defaultProps = {
        characteristics: [
            {
                title: 'Personal',
                percent: 24,
            },
            {
                title: 'Project Activities',
                percent: 30,
            },
            {
                title: 'Soft Skills',
                percent: 75,
            },
            {
                title: 'Hard Skills',
                percent: 10,
            },
        ]
    };

    static navigationOptions = ({ navigation }: Object) => {
        const { params = {} } = navigation.state;
        const {
            openModal = voidFunction,
            handleLogout = voidFunction
        } = params;

        return {
            headerTitle: (
                <Logo
                    title = 'epamer'
                    style={{
                        width: '100%',
                        alignItems: 'center',
                    }}
                    fontStyle={{
                        fontSize: 22
                    }}
                    titleStyle={{
                        color: 'white'
                    }}
                />
            ),
            headerLeft: (
                <TouchableIcon
                    name="logout"
                    iconFamily="SimpleLineIcons"
                    size={30}
                    style={{ marginLeft: 20 }}
                    iconStyle={{ color: 'white' }}
                    onPress={handleLogout}
                />
            ),
            headerRight: (
                <View style={styles.headerButtons}>
                    <TouchableIcon
                        name="ios-information-circle-outline"
                        size={40}
                        style={{ marginRight: 20 }}
                        iconStyle={{ color: 'white' }}
                        onPress={() => navigation.navigate('About')}
                    />
                    <TouchableIcon
                        name="ios-person-outline"
                        size={40}
                        style={{ marginRight: 20 }}
                        iconStyle={{ color: 'white' }}
                        onPress={openModal}
                    />
                </View>
            ),
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'white',
                width: '100%',
                textAlign: 'center',
            }
        };
    };

    constructor(props: IHomeScreenProps) {
        super(props);

        this.state = {
            modalOpened: false,
        };

        props.navigation.setParams({
            openModal: this.openModal,
            handleLogout: this.handleLogout,
        });
    }

    handleLogout = () => {
        navigateAndReset(this.props.navigation.dispatch, 'Login');
    };

    openModal = (): void => {
        this.setState({
            modalOpened: true,
        });
    };

    closeModal = (): void => {
        this.setState({
            modalOpened: false,
        });
    };

    render() {
        const { characteristics } = this.props;
        return (
            <View style={styles.homeContainer}>
                <ModalScreen
                    open={this.state.modalOpened}
                    onRequestClose={this.closeModal}
                />
                <View style={styles.epamerLogo}>
                    <Image
                        resizeMode={'contain'}
                        style={{ width: '100%', height: 270 }}
                        source={require('./dev-icon.png')}
                    />
                </View>
                <View style={styles.actionBar}>
                    {
                        characteristics.map((character, i) => (
                            <ActionBar
                                percentage={character.percent}
                                title={character.title}
                                key={i}
                            />
                        ))
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerModalButton: {
        marginRight: 20,
    },
    homeContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    epamerLogo: {
        padding: 20,
    },
    actionBar: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
});