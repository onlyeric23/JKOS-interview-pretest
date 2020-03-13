import React, { FunctionComponent, ComponentType } from "react";
import classNames from "classnames";

import "./styles.scss";

export interface AccountTypeProps {
  typeName: string;
  icon: ComponentType;
  selected: boolean;
  onSelect: () => void;
}

const AccountType: FunctionComponent<AccountTypeProps> = ({
  typeName,
  icon: Icon,
  selected,
  onSelect
}) => {
  return (
    <div
      className={classNames("account-type", { selected })}
      onClick={onSelect}
    >
      <Icon />
      <div>{typeName}</div>
    </div>
  );
};

export default AccountType;
