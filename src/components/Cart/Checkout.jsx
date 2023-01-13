import React, { useRef, useState } from "react";
import classes from "./checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const charLength = (value) => value.length.trim() === 5;

const Checkout = (props) => {
  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enterName = nameInputRef.current.value;
    const enterStreet = streetInputRef.current.value;
    const enterPostal = postalInputRef.current.value;
    const enterCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enterName);
    const enteredStreetIsValid = !isEmpty(enterStreet);
    const enteredPostalIsValid = !charLength(enterPostal);
    const enteredCityIsValid = !isEmpty(enterCity);

    setFormInputIsValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

      if (!formIsValid) {
        return;
      }
      props.onConfirm({
        name: enterName,
        street: enterStreet,
        postal: enterPostal,
        city: enterCity
      })
  };

  const nameControlClasses = `${classes.control} ${formInputIsValid.name ? '' : classes.invalid}`
  const streetControlClasses = `${classes.control} ${formInputIsValid.street ? '' : classes.invalid}`
  const postalControlClasses = `${classes.control} ${formInputIsValid.postal ? '' : classes.invalid}`
  const cityControlClasses = `${classes.control} ${formInputIsValid.city ? '' : classes.invalid}`
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputIsValid.name && <p>name cannot be empty!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputIsValid.street && <p>Street cannot be empty!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputIsValid.postal && <p>Postal Code cannot be must be greater than 5 characters!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="address" ref={cityInputRef} />
        {!formInputIsValid.city && <p>City cannot be empty!</p>}
      </div>
      <div className={classes.actions}>
        <button
          className={classes.button}
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button type="submit" className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
