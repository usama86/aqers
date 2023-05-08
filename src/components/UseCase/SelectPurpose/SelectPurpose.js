import React from "react";
import LoginPagesForm from "components/Layouts/LoginPagesForm";
import CardComponent from "components/ServiceComponents/CardComponent";
import StackCompoent from "components/Base/StackCompoent";
import {
  relative_width_size_generator,
  relative_height_size_generator,
} from "utils/helpers";
import SellProperty from "./SellProperty";
import BuyProperty from "./BuyProperty";

const PurposeLayout = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  );
};

const SelectPurpose = () => {
  return (
    <LoginPagesForm heading="Thank you for being part of us!">
      <StackCompoent spacing={relative_width_size_generator(60.4)}>
        <CardComponent
          id="purpose-buy-property"
          cardStyles={{
            height: relative_height_size_generator(267.42),
            width: relative_width_size_generator(607.49),
          }}
        >
          <PurposeLayout>
            <SellProperty />
          </PurposeLayout>
        </CardComponent>
        <CardComponent
          id="purpose-sell-property"
          cardStyles={{
            height: relative_height_size_generator(267.42),
            width: relative_width_size_generator(607.49),
          }}
        >
          <PurposeLayout>
            <BuyProperty />
          </PurposeLayout>
        </CardComponent>
      </StackCompoent>
    </LoginPagesForm>
  );
};

export default SelectPurpose;
