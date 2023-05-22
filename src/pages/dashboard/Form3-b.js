import React from "react";
import BoxComponent from "components/Base/BoxComponent";
import CheckBoxComponent from "components/Base/CheckboxComponent";
import GridComponent from "components/Base/GridComponent";
import TextFieldComponent from "components/Base/TextFieldComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import ImageComponent from "components/Base/ImageComponent";

const checkBoxValue = [
  { id: 1, label1: "Parking Space", label2: "Furnished" },
  { id: 2, label1: "Electricity", label2: "Tiles Flooring" },
  { id: 3, label1: "Attached Bath", label2: "Lorem ipsum" },
  { id: 4, label1: "Lorem ipsum", label2: "Lorem ipsum" },
];

export const Form3B = () => {
  return (
    <BoxComponent
      sx={{ display: "flex", flexDirection: "column", gap: "32px" }}
    >
      <BoxComponent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          "& > div": {
            flexGrow: 1,
          },
        }}
      >
        <TextFieldComponent label={"Duration"} placeholder="Select here" />
        <TextFieldComponent label={"Price"} placeholder="Select here" />
      </BoxComponent>
      <BoxComponent>
        {" "}
        <TypographyComponent component="label">Features</TypographyComponent>
        <GridComponent container>
          {checkBoxValue.map((data) => (
            <React.Fragment key={data.id}>
              <GridComponent xs={7}>
                <CheckBoxComponent label={data.label1} />
              </GridComponent>
              <GridComponent xs={5}>
                <CheckBoxComponent label={data.label2} />
              </GridComponent>
            </React.Fragment>
          ))}
        </GridComponent>
      </BoxComponent>
      <BoxComponent
        sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TypographyComponent>Add Pictures</TypographyComponent>
        <BoxComponent sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <ImageComponent
            height="60px"
            width="60px"
            position="relative"
            source={"/Common/Add_Picture.png"}
            imageStyle={{ objectFit: "cover", border: "0.5px solid #FFFFFF" }}
          />
          <ImageComponent
            height="60px"
            width="60px"
            position="relative"
            source={"/Common/AddPicture.png"}
            imageStyle={{ objectFit: "cover", border: "0.5px solid #FFFFFF" }}
          />
          <ImageComponent
            height="60px"
            width="60px"
            position="relative"
            source={"/Common/AddPicture.png"}
            imageStyle={{ objectFit: "cover", border: "0.5px solid #FFFFFF" }}
          />
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
};
