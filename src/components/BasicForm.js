import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: LastNameChangeHandler,
    inputBlurHandler: LastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const feedback = <p>Invalid input! Please provide valid credentials.</p>;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredLastName, enteredEmail);

    resetNameInput();
    resetEmailInput();
    resetLastNameInput();
    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredLastNameIsValid
    ) {
      return;
    }
  };

  const nameInputClasses = enteredNameHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = enteredEmailHasError
    ? "form-control invalid"
    : "form-control ";

  const LastNameInputClasses = enteredLastNameHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {enteredNameHasError && <p className="error-text">{feedback}</p>}
        </div>
        <div className={LastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={LastNameChangeHandler}
            onBlur={LastNameBlurHandler}
            value={enteredLastName}
          />
          {enteredLastNameHasError && <p className="error-text">{feedback}</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          name="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailHasError && <p className="error-text">{feedback}</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
