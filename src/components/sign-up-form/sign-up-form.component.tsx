import { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from './sign-up-form.styles';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { signUpStart } from "../../store/user/user.action";
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(password!==confirmPassword) {
            alert('Passwords do not match! Please try again.');
            return;
        }
        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        }
        catch(error){
            if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS){
                alert('Email already exists.');
            } else {
                console.log('Error in signing up user.', error as AuthError);
            }
            
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value});
    };

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>
                Sign up with your email and password.
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
};

export default SignUpForm;