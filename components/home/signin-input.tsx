import { useState } from "react";
import { signinInputEnum, signinInputType } from "./signin-types";
import HideIcon from "../icons/hide-icon";
import MessageIcon from "../icons/message-icon";
import PasswordIcon from "../icons/password-icon";

export default function SigninInput(props: {type: signinInputType, onChange: any, value?: string}) {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(props.value ? props.value : "");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const changeValue = (event: any) => {
    setValue(event.target.value);
    props.onChange(value)
  }

  return(
    <div className="signin-form-input">
      <input className="signin-form-input__input"
        style={{paddingRight: props.type === signinInputEnum.password ? "3.5rem" : undefined}}
        type={
          props.type === signinInputEnum.email ? 
          "text"
          : showPassword ? "text" : "password"}
          placeholder={props.type}
          value={value}
          onChange={changeValue}
      />

      <div className="signin-form-input__button">
        {props.type === signinInputEnum.email && <MessageIcon className="signin-form-input__icon"/>}
        {props.type === signinInputEnum.password && <PasswordIcon className="signin-form-input__icon"/>}
      </div>
      {props.type === signinInputEnum.password && <button className="signin-form-input__button signin-form-input__button--hide" onClick={toggleShowPassword}><HideIcon className="signin-form-input__icon signin-form-input__icon--hide"/></button>}
    </div>
  )
}