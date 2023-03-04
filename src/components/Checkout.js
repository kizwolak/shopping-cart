import React from "react";

export default function Checkout() {
    const [radioState, setRadioState] = React.useState(false);
    function handleChange() {
        setRadioState(!radioState)
    }
    return (
        <div className="checkout">
            <h2>It's time to pay! Or is it...?</h2>
            <fieldset className="agree-field">
                <legend>I agree to all Terms and Conditions and I promise to pay no matter what. I promise.</legend>
                <input type='checkbox' id='agree' checked={radioState} onChange={handleChange}/>
                <label htmlFor='agree'>Pinky swear.</label>
            </fieldset>
            <button className="payment-button">Pay</button>
            {!radioState && <p>Please agree to Terms and Conditions before proceeding.</p>}
        </div>
    )
}