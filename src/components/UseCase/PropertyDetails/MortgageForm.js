import CustomizedButtonComponent from "components/Advance/CustomizedButton";
import ButtonComponent from "components/Base/ButtonComponent";
import StackCompoent from "components/Base/StackCompoent";
import TextFieldComponent from "components/Base/TextFieldComponent";
import React, { useState } from "react";
import { relative_height_size_generator } from "utils/helpers";

const INITIAL_FORM_STATE = {
  homePrice: "",
  downPayment: "",
  loanProgram: "",
  interestRate: "",
};

const MortgageForm = () => {
  const [mortgageFormValues, setMortgageFormValues] =
    useState(INITIAL_FORM_STATE);

  const changeFormValuesHandler = (key, value) => {
    let temp = { ...mortgageFormValues };
    temp = {
      ...temp,
      [key]: value,
    };
    setMortgageFormValues(temp);
  };

  return (
    <StackCompoent
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ mortgageFormValues });
        setMortgageFormValues(INITIAL_FORM_STATE);
      }}
      component="form"
      direction="column"
      sx={{ gap: relative_height_size_generator(32) }}
    >
      <TextFieldComponent
        onInputChange={(val) => changeFormValuesHandler("homePrice", val)}
        value={mortgageFormValues.homePrice}
        label="home price"
      />
      <TextFieldComponent
        onInputChange={(val) => changeFormValuesHandler("downPayment", val)}
        value={mortgageFormValues.downPayment}
        label="down payment"
      />
      <TextFieldComponent
        onInputChange={(val) => changeFormValuesHandler("loanProgram", val)}
        value={mortgageFormValues.loanProgram}
        label="loan program"
      />
      <TextFieldComponent
        onInputChange={(val) => changeFormValuesHandler("interestRate", val)}
        value={mortgageFormValues.interestRate}
        label="interest rate"
      />
      <CustomizedButtonComponent type="submit">
        Calculate
      </CustomizedButtonComponent>
    </StackCompoent>
  );
};

export default MortgageForm;
