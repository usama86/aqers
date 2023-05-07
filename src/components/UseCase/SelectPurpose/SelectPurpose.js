import React from "react";
import LoginPagesForm from "components/Layouts/LoginPagesForm";
import CardComponent from "components/ServiceComponents/CardComponent";
import StackCompoent from "components/Base/StackCompoent";
import { relative_width_size_generator } from "utils/helpers";
import SellProperty from "./SellProperty";
import BuyProperty from "./BuyProperty";

const SelectPurpose = () => {
  return (
    <LoginPagesForm heading="Thank you for being part of us!">
      <StackCompoent spacing={relative_width_size_generator(60.4)}>
        <CardComponent>
          <SellProperty />
        </CardComponent>
        <CardComponent>
          <BuyProperty />
        </CardComponent>
      </StackCompoent>
    </LoginPagesForm>
  );
};

export default SelectPurpose;
