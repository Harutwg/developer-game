// @flow

import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet
} from 'react-native';

import TouchableIcon from 'components/touchable-icon';
import { actions } from './mock-actions';

type IModalScreenProps = {
    open: boolean,
    onRequestClose: Function,
};

export default class ModalScreen extends PureComponent<IModalScreenProps, {}> {

    handleActionClick = () => {
        console.log('click action button')
    };

    render() {
        return (
            <Modal
                visible={this.props.open}
                transparent
                animationType="slide"
                onRequestClose={this.props.onRequestClose}
            >
                <View style={styles.modalContainer}>
                    <TouchableIcon
                        iconFamily="IconEvil"
                        name="close-o"
                        style={{
                            position: 'absolute',
                            zIndex: 10,
                            top: 10,
                            right: 10
                        }}
                        iconStyle={styles.iconStyle}
                        size={50}
                        onPress={this.props.onRequestClose}
                    />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}> {'<'}Epamer{'>'} </Text>
                        <Text style={styles.userPosition}> Junior Software Engineer </Text>
                    </View>
                    <View style={styles.actionsMenu}>
                        {actions.map((action, i) => (
                            <TouchableIcon
                                key={i}
                                iconFamily={action.iconFamily}
                                name={action.name}
                                style={{
                                    flexBasis: '33%',
                                    marginTop: 40,
                                    alignItems: 'center',
                                }}
                                iconStyle={{
                                    color: 'white',
                                }}
                                size={60}
                                title={action.title}
                                onPress={this.handleActionClick}
                            />
                        ))}
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        position: 'relative',
        flex: 1,
        padding: 15,
        backgroundColor: 'rgba(0,0,0, .9)'
    },
    iconStyle: {
        color: 'white'
    },
    userInfo: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
    },
    userName: {
        color: 'white',
        fontSize: 25,
    },
    userPosition: {
        color: 'blue',
        fontSize: 14,
    },
    actionsMenu: {
        flex: 2,
        justifyContent: 'space-between',
        paddingTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

