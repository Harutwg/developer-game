// @flow

import React, { PureComponent } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Button,
    Text,
    TouchableOpacity
} from 'react-native';

import ActionBar from 'components/action-bar';
import ModalScreen from './ModalScreen';

type IHomeScreenProps = {
    characteristics: Array<Object>;
    navigation: Object
};

type IHomeScreenState = {
    modalOpened: boolean,
};

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
        const { openModal = (() => {}) } = params;

        return {
            title: '\<epamer\>',
            headerRight: (
                <TouchableOpacity
                    onPress={openModal}
                    style={styles.headerModalButton}
                >
                    <Text>Open</Text>
                </TouchableOpacity>
            ),
        };
    };

    constructor(props: IHomeScreenProps) {
        super(props);

        this.state = {
            modalOpened: false,
        };

        props.navigation.setParams({
            openModal: this.openModal,
        });
    }

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