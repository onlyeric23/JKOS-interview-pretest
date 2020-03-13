import React, { useState, useCallback } from "react";
import accountTypes from "./common/accountTypes";
import AccountType from "./components/AccountType";
import Button from "./components/Button";
import Input from "./components/Input";
import { GoMail, GoLock } from "react-icons/go";
import { longestCommonSubstring } from "./common/utils";
import { PATTERN_EMAIL } from "./common/regex";

import { ReactComponent as SvgBackground } from "./assets/img_town_370x170@3x.svg";

import "./App.scss";

interface Fields {
  email: string;
  password: string;
}

const MOCK_EMAIL = "abc12345@gmail.com";
const MOCK_PASSWORD = "c124345ksfh";

const mockSubmit = ({ email, password }: Fields) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === MOCK_EMAIL) {
        if (password === MOCK_PASSWORD) {
          resolve();
        } else {
          reject({ password: "Wrong password" });
        }
      } else {
        reject({ email: "Unknown email" });
      }
    }, 500);
  });

export default function App() {
  const [selectedType, setSelectedType] = useState(accountTypes[0]);
  const [values, setValues] = useState<Fields>({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<Partial<Fields>>({
    email: "",
    password: ""
  });

  const validate = useCallback(() => {
    const errors = {} as Partial<Fields>;
    if (!values.email) {
      errors.email = "Required";
    }
    if (!PATTERN_EMAIL.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (longestCommonSubstring(values.email, values.password).length >= 6) {
      errors.password = "Cannot have same string in 6 characters";
    }
    setErrors(errors);
    return errors;
  }, [values]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setErrors({});
      if (Object.keys(validate()).length === 0) {
        mockSubmit(values)
          .then(() => {
            alert("pass");
          })
          .catch(setErrors);
      }
    },
    [values, validate]
  );

  const updateValues = useCallback(
    (newValues: Partial<Fields>) => {
      setValues({ ...values, ...newValues });
    },
    [values]
  );

  return (
    <div className="App">
      <div>
        <h1>Choose Account Type</h1>
        <div className="account-types">
          {accountTypes.map(accountType => (
            <AccountType
              {...accountType}
              selected={accountType === selectedType}
              onSelect={() => setSelectedType(accountType)}
              key={accountType.typeName}
            />
          ))}
        </div>
        <p className="notification">
          Hello <span className="type-name">{selectedType.typeName}</span>!
          <br />
          Please fill out the form below to get started
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            value={values.email}
            error={errors.email}
            onChange={e => updateValues({ email: e.target.value })}
            type="email"
            autoComplete="email"
            icon={GoMail}
            placeholder="Email"
          />
          <Input
            value={values.password}
            error={errors.password}
            onChange={e => updateValues({ password: e.target.value })}
            type="password"
            autoComplete="current-password"
            icon={GoLock}
            placeholder="Password"
            suffix={() => <a href="#toforgot">Forgot?</a>}
          />
          <div className="actions">
            <div>
              No account? <a href="#tosignup">Signup</a>
            </div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
      <SvgBackground className="background" />
    </div>
  );
}
