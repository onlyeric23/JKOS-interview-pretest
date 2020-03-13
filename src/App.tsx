import React, { useState } from "react";
import accountTypes from "./constants/accountTypes";
import AccountType from "./components/AccountType";
import Button from "./components/Button";

import { ReactComponent as SvgBackground } from "./assets/img_town_370x170@3x.svg";

import "./App.scss";

export default function App() {
  const [selectedType, setSelectedType] = useState(accountTypes[0]);

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

        <div className="actions">
          <div>
            No account? <a href="#somewhereelse">Signup</a>
          </div>
          <Button>Login</Button>
        </div>
      </div>
      <SvgBackground className="background" />
    </div>
  );
}
