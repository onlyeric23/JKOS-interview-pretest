import React, { FunctionComponent } from "react";

import "./styles.scss";

export interface AccountTypeProps {
  typeName: string;
  imgSrc: string;
  selected: boolean;
  onSelect: () => void;
}

const AccountType: FunctionComponent<AccountTypeProps> = ({
  typeName,
  imgSrc,
  selected,
  onSelect
}) => {
  return <div className="account-type" onClick={onSelect} />;
};

export default AccountType;
