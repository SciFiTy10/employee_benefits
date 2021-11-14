import React from "react";
import Input from "../../UI/Input/Input";
import nameSectionStyles from "./NameSection.module.scss";
const NameSection = (props) => {
  return (
    <address className={nameSectionStyles.nameSection}>
      <div className={nameSectionStyles.firstName}>
        <Input
          labelText="First Name"
          placeholder="Pat"
          type="text"
          value={props.firstName}
          onChange={props.onFirstNameChange}
        />
      </div>
      <div className={nameSectionStyles.lastName}>
        <Input
          labelText="Last Name"
          placeholder="Johnson"
          type="text"
          value={props.lastName}
          onChange={props.onLastNameChange}
        />
      </div>
    </address>
  );
};

export default NameSection;
