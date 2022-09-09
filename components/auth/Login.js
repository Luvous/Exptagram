import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const auth = getAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignUp = () => {
        signInWithEmailAndPassword(auth, email, password)
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
                title='Sign In'
            />
        </View>
    )
}