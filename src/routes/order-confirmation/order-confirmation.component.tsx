import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const OrderConfirmation = () => { 
    const currentUser = useSelector(selectCurrentUser);

    return(
        <div>
            <h2>Thanks {currentUser ? currentUser.displayName : ''} for your purchase! </h2>
            {
                currentUser ?  (
                <h3>An email has been sent to {currentUser.email} with the details. If you need any asistance don't hesitate and contact us.</h3>
                ) : ''
            }
            <p>Feel free to come back anytime! </p>
        </div>
    )
};

export default OrderConfirmation;