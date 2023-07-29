import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const feedback = <p>Invalid input! Please provide valid credentials.</p>;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault();

    resetNameInput();
    resetEmailInput();
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">{feedback}</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">
            Invalid e-mail! Please provide valid e-mail.
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
