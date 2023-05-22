import BoxComponent from "components/Base/BoxComponent";
import GridComponent from "components/Base/GridComponent";
import ImageComponent from "components/Base/ImageComponent";
import RadioButtons from "components/Base/RadioButton";
import TextFieldComponent from "components/Base/TextFieldComponent";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
} from "utils/helpers";

export const Form4 = () => {
  return (
    <BoxComponent
      sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
    >
      <ImageComponent
        height="190px"
        width="316px"
        position="relative"
        source={"/Common/Card mockup.png"}
        imageStyle={{
          objectFit: "cover",
          border: "0.5px solid #FFFFFF",
          bordeRadius: "20px",
        }}
      />

      <GridComponent container spacing={3}>
        <GridComponent xs={9}>
          <TextFieldComponent
            label={"Name on card"}
            placeholder="Select here"
          />
        </GridComponent>
        <GridComponent xs={3}>
          <TextFieldComponent label={"Expiry"} placeholder="Select here" />
        </GridComponent>
        <GridComponent xs={9}>
          <TextFieldComponent label={"Card number"} placeholder="" />
        </GridComponent>
        <GridComponent xs={3}>
          <TextFieldComponent label={"CVV"} placeholder="***" />
        </GridComponent>
      </GridComponent>
    </BoxComponent>
  );
};
