import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RadioButton } from 'react-native-paper'

const Form = () => {
    const [checked, setChecked] = useState('male');
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    const handleNameChange = (text) => {
        setName(text);
        if (text.trim() === '') {
            setNameError('Name is required');
        } else {
            setNameError('');
        }
    }
    const handleEmailChange = (text) => {
        setEmail(text);
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(text)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    }
    const handlePasswordChange = (text) => {
        setPassword(text);
        if (text.trim() === '') {
            setPasswordError('Password is required');
        } else if (text.length < 8) {
            setPasswordError('Password must be at least 8 characters');
        } else {
            setPasswordError('');
        }
    }
    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(text)) {
            setPhoneNumberError('Invalid phone number');
        } else {
            setPhoneNumberError('');
        }
    }
    const onSubmit = () => {
        if (nameError || emailError || passwordError || phoneNumberError) {
            Alert.alert('Error', 'Please fill all fields');
        } else {
            Alert.alert('Success', 'Form submitted');
        }
    }

    return (
        <SafeAreaView
            style={styles.container}>
            <TouchableOpacity
                style={styles.headingview}>
                <Text
                    style={styles.headingtest}>
                    RegistrationForm
                </Text>
            </TouchableOpacity>
            <View
                style={styles.nameinput}>
                <TextInput
                    placeholder="Name"
                    style={styles.inputtext}
                    onChangeText={handleNameChange}
                />
                <Text style={{ color: 'red' }}>{nameError}</Text>
            </View>
            <View
                style={styles.emailinput}>
                <TextInput placeholder="Email"
                    style={styles.inputtext}
                    keyboardType="email-address"
                    onChangeText={handleEmailChange} />
                <Text style={{ color: 'red' }}>{emailError}</Text>
            </View>
            <View
                style={styles.passwordinput}>
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.inputtext}
                    keyboardType="password"
                    onChangeText={handlePasswordChange} />
            </View>
            <Text style={{ color: 'red', top: '8%' }}>{passwordError}</Text>
            <View
                style={styles.radioButtonsContainer}>
                <TouchableOpacity
                    style={styles.age}>
                    <Text>
                        Gender
                    </Text>
                </TouchableOpacity>
                <RadioButton
                    value="male"
                    status={checked === 'male' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('male')}
                />
                <Text
                    style={styles.radioText}>Male</Text>
                <RadioButton
                    value="female"
                    status={checked === 'female' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('female')}
                />
                <Text
                    style={styles.radioText}>Female</Text>
            </View>
            <View
                style={styles.phoneinput}>
                <TextInput
                    placeholder="+91  Phone Number"
                    secureTextEntry={true}
                    style={styles.inputtext}
                    keyboardType="phone-pad"
                    onChangeText={handlePhoneNumberChange} />
            </View>
            <Text style={{ color: 'red', top: '5%' }}>{phoneNumberError}</Text>
            <TouchableOpacity
                style={styles.submit}
                onPress={onSubmit}
            >
                <Text style={styles.sumbittext}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Form;

const styles = StyleSheet.create({
    container: {
        height: 820,
        backgroundColor: '#d3e6e5'
    },
    headingview: {
        top: '2%',
        height: '7%',
        justifyContent: 'center'
    },
    headingtest: {
        fontSize: 20,
        textAlign: 'center',
    },
    nameinput: {
        height: '6%',
        backgroundColor: 'white',
        top: '3%',
        width: '50%',
        left: '20%',
        borderRadius: 10
    },
    inputtext: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    emailinput: {
        height: '6%',
        backgroundColor: 'white',
        top: '5%',
        width: '50%',
        left: '20%',
        borderRadius: 10
    },
    passwordinput: {
        height: '6%',
        backgroundColor: 'white',
        top: '7%',
        width: '50%',
        left: '20%',
        borderRadius: 10
    },
    submit: {
        backgroundColor: '#FFFFFF',
        top: '40%',
        height: '5%',
        borderRadius: 10,
        width: '50%',
        left: '25%'
    },
    sumbittext: {
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '50%',
        left: '40%',
        borderRadius: 10,
        top: '10%'
    },
    radioview: {
        top: '20%',
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
    },
    age: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: '20%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: '10%',
        left: '10%'
    },
    radioText: {
        marginLeft: 5,
    },
    phoneinput: {
        height: '6%',
        backgroundColor: 'white',
        top: '4%',
        width: '50%',
        left: '20%',
        borderRadius: 10
    }

})


