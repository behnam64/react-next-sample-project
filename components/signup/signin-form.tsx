import { useState } from "react";
import { signinInputEnum } from "./signin-types";
import SigninInput from "./signin-input";
import Router from 'next/router'

export default function SigninForm(props: any) {
  const [form, setForm] = useState({email: "", password: ""});
  const onEmailChange = (text: string) => {
    setForm({...form, email: text});
  }
  const onPasswordChange = (text: string) => {
    setForm({...form, password: text});
  }
  const goToHome = () => {
    Router.push('/');
  }

  return (
    <div className="signin-form">
      <h2 className="signin-form__title">Log into account</h2>
      <SigninInput type={signinInputEnum.email} onChange={onEmailChange} value="Maximiller@mail.com"/>
      <SigninInput type={signinInputEnum.password} onChange={onPasswordChange}/>
      <div className="signin-form__forgot-password">
        <button className="signin-form__forgot-password--text">Forgot your password?</button>
      </div>

      <button className="signin-form__main-button">
        <span className="signin-form__main-button--text" onClick={goToHome}>Log in</span>
      </button>
      <div className="signin-form__no-account">
        <span className="signin-form__no-account--text">Don't have an account?</span>
        <button className="signin-form__no-account--text-register">Register now</button>
      </div>
    </div>
  )
}