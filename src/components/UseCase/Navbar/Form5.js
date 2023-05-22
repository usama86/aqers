import BoxComponent from "components/Base/BoxComponent";
import DividerComponent from "components/Base/DividerComponent";
import RadioButtons from "components/Base/RadioButton";
import TypographyComponent from "components/Base/TypographyComponent";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
} from "utils/helpers";

export const Form5 = () => {
  return (
    <BoxComponent
      sx={{ display: "flex", flexDirection: "column", gap: "14px" }}
    >
      <BoxComponent sx={{ display: "flex", justifyContent: "space-between" }}>
        <TypographyComponent variant="AddpropertyPopOver" component="p">
          Subtotal
        </TypographyComponent>
        <TypographyComponent variant="AddpropertyPopOver1" component="p">
          $15.00
        </TypographyComponent>
      </BoxComponent>
      <BoxComponent sx={{ display: "flex", justifyContent: "space-between" }}>
        <TypographyComponent variant="AddpropertyPopOver" component="p">
          Tax & Fee
        </TypographyComponent>
        <TypographyComponent variant="AddpropertyPopOver1" component="p">
          $15.00
        </TypographyComponent>
      </BoxComponent>
      <BoxComponent sx={{ display: "flex", justifyContent: "space-between" }}>
        <TypographyComponent variant="AddpropertyPopOver" component="p">
          Discount
        </TypographyComponent>
        <TypographyComponent variant="AddpropertyPopOver1" component="p">
          $15.00
        </TypographyComponent>
      </BoxComponent>
      <DividerComponent />
      <BoxComponent sx={{ display: "flex", justifyContent: "space-between" }}>
        <TypographyComponent variant="AddpropertyPopOver" component="p">
          Discount
        </TypographyComponent>
        <TypographyComponent variant="AddpropertyPopOver" component="p">
          $15.00
        </TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
};
