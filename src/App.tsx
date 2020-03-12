import React, { useState } from "react";
import accountTypes from "./constants/accountTypes";
import AccountType from "./components/AccountType";

import "./styles.css";

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
      </div>
    </div>
  );
}
