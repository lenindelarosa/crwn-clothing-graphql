// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { SignContainer }from './authentication.styles'

const Authentication = () => {
    // ## This piece of code is to use when using google redirect, maintain the user information with the reloading of the page##
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if(response){
    //         const userDocRef = await crearUserDocumentFromAuth(response.user);
    //     }
    //     console.log(response);
    // }, [])

    return (
        <SignContainer>
            <SignInForm />
            <SignUpForm />
        </SignContainer>
    );
};

export default Authentication;