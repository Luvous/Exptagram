import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export default function Register() {
    const auth = getAuth();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <View>
            <TextInput
                placeholder='name'
                onChangeText={(name) => setName(name) }
            />
            <TextInput
                placeholder='email'
                onChangeText={(email)  => setEmail(email) }
            />
            <TextInput
                placeholder='password'
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password) }
            />
            <Button 
                onPress={()=>onSignUp()}
                title='Sign Up'
            />
        </View>
    )
}