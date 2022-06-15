import { useState, useRef } from 'react';
import FormInput from '../form-input/form-input.component';
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { createUserAdress } from '../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { 
    ShippingFormContainer, 
    CustomCountryDropdown, 
    CustomRegionDropdown, 
    CountrySelectorContainer, 
    AddressContainer,
    CustomFormInput,
    ValidateAddressButton,
    ZipCodeAndNumberContainer
 } from './shipping-form.styles';

 import PaymentForm from '../payment-form/payment-form.component';

const defaultShippingAddress = {
    country: '',
    region: '',
    fullName: '',
    streetAddress: '',
    cityName: '',
    zipCode: '',
    phoneNumber: ''
}

const ShippingForm = () => {

    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    const [shippingAddress, setShippingAddress] = useState(defaultShippingAddress);
    const [isAddressValidated, setIsAddressValidated] = useState(false);
    const { country, region, fullName, streetAddress, cityName, zipCode, phoneNumber } = shippingAddress;
    const currentUser = useSelector(selectCurrentUser);


    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setShippingAddress({ ...shippingAddress, [name]: value});
    };

    const selectCountryHandler = (value) => {
        setShippingAddress({ ...shippingAddress, country: value });
    }

    const selectRegionHandler = (value) => {
        setShippingAddress({ ...shippingAddress, region: value});
    }

    const submitAddressHandler = async (event) => {
        event.preventDefault();
        if (currentUser === null) return;
        try {
            await createUserAdress(currentUser, shippingAddress);
            setIsAddressValidated(true);
            executeScroll();
        } catch (error) {
            console.log('Address is invalid.')
        }
    }

    return(
        <>
            <ShippingFormContainer onSubmit={submitAddressHandler}>
                <CountrySelectorContainer>
                    <h3>Country:</h3>
                    <h3>Region:</h3>
                    <CustomCountryDropdown
                        name="country"
                        value={country}
                        onChange={selectCountryHandler}
                        priorityOptions={["CA", "US", "GB"]} 
                        disabled={isAddressValidated} />
                    <CustomRegionDropdown
                        name="region"
                        country={country}
                        value={region}
                        onChange={selectRegionHandler} 
                        disabled={isAddressValidated} />
                </CountrySelectorContainer>
                <AddressContainer>
                    <FormInput disabled={isAddressValidated} groupStyle={{ margin: 0}} required label="Full name" type="text" onChange={onChangeHandler} name="fullName" value={fullName}/>
                    <FormInput disabled={isAddressValidated} groupStyle={{ margin: 0}} required label="Street address" type="text" onChange={onChangeHandler} name="streetAddress" value={streetAddress}/>
                    <FormInput disabled={isAddressValidated} groupStyle={{ margin: 0}}  required label="City name" type="text" onChange={onChangeHandler} name="cityName" value={cityName}/>
                    <ZipCodeAndNumberContainer>
                        <CustomFormInput disabled={isAddressValidated} required groupStyle={{ margin: 0}}  label="Zip code" type="number" onChange={onChangeHandler} name="zipCode" value={zipCode}/>
                        <CustomFormInput disabled={isAddressValidated} required groupStyle={{ margin: 0}}  label="Phone number" type="number" onChange={onChangeHandler} name="phoneNumber" value={phoneNumber}/>
                    </ZipCodeAndNumberContainer>
                    </AddressContainer>
                    <ValidateAddressButton disabled={isAddressValidated} buttonType={BUTTON_TYPE_CLASSES.inverted}> {(!isAddressValidated)?'Next -> Payment details': 'Continue with payment.'} </ValidateAddressButton>
            </ShippingFormContainer>
            {
                isAddressValidated ? <PaymentForm /> : null
            } 
            <div style={{ height: 100}} ref={myRef}>
                &nbsp;
            </div>
        </>
    )
};

export default ShippingForm;