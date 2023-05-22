import ButtonComponent from "components/Base/ButtonComponent";
import ImageComponent from "components/Base/ImageComponent";
import StackCompoent from "components/Base/StackCompoent";
import DropDownComponent from "components/Base/DropDownComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import TypographyComponent from "components/Base/TypographyComponent";
import IconButtonComponent from "components/Base/IconButton";
import DropdownIcon from "components/Icons/DropdownIcon";
import { getDesignSystem } from "theme/DesignToken";
import FormDialog from "components/Base/Dialog";
import { useState } from "react";
import { useRouter } from "next/router";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { Form3A } from "./Form3-a";
import { Form3B } from "./Form3-b";
import { Form4 } from "./Form4";
import { Form5 } from "./Form5";

const NavbarRightSellProperties = () => {
  const router = useRouter();
  const [open, setOpen] = useState([false, false, false, false, false, false]);
  const [type, setType] = useState([true, false]);
  const [typeProperty, setTypeProperty] = useState([true, false]);
  const onSaveOption = (index) => {
    if (index === 0 && typeProperty[1]) {
      const copy = [...open];
      copy[index] = false;
      setOpen(copy);
      router.push("/select-property");
      return;
    }
    if (index === 4) {
      //navigate
      router.push("/preview-property-details");
    }
    const copy = [...open];
    copy[index + 1] = true;
    copy[index] = false;
    setOpen(copy);
  };
  const handleClose = (index) => {
    const copy = [...open];
    copy[index] = false;
    setOpen(copy);
  };
  const onClickButton = () => {
    const copy = [...open];
    copy[0] = true;
    setOpen(copy);
  };
  const onChangeType = (event, index) => {
    const copy = [...type];
    copy[index] = event.target.checked;
    if (index === 0) copy[index + 1] = false;
    else copy[index - 1] = false;
    setType(copy);
  };
  const onChangeTypeProperty = (event, index) => {
    const copy = [...typeProperty];
    copy[index] = event.target.checked;
    if (index === 0) copy[index + 1] = false;
    else copy[index - 1] = false;
    setTypeProperty(copy);
  };
  return (
    <>
      <StackCompoent alignItems="center">
        <ButtonComponent
          color="primary"
          height={relative_height_size_generator(32)}
          style={{
            width: relative_width_size_generator(110),
            textTransform: "capitalize",
            ...getDesignSystem(500, 16, 16),
            padding: 0,
            borderRadius: relative_width_size_generator(10),
            // borderRadius: "10px",
          }}
          onClick={onClickButton}
        >
          Add Post
        </ButtonComponent>
        <DropDownComponent transparent={true}>
          <TypographyComponent
            component="span"
            color="black"
            variant="NavBarRightBuyPropertiesName"
            sx={{
              width: relative_width_size_generator(100),
              textAlign: "left",
              ml: relative_width_size_generator(30),
            }}
          >
            David
          </TypographyComponent>
        </DropDownComponent>
        {/* <DropDownComponent transparent={true}> */}
        {/* <StackCompoent
            sx={{
              gap: relative_width_size_generator(15),
              // width: relative_width_size_generator(65),
            }}
            alignItems="center"
          > */}
        <ImageComponent
          width={relative_width_size_generator(40)}
          height={relative_width_size_generator(40)}
          source="/Navbar/sell_img.png"
        />
        <DropdownIcon />
        {/* </StackCompoent> */}
        {/* </DropDownComponent> */}

        <FormDialog
          open={open[0]}
          title="What you want add"
          subTitle="Select the respective option and continue."
          handleClose={() => handleClose(0)}
          handleSave={() => onSaveOption(0)}
        >
          <Form1 type={typeProperty} onChangeType={onChangeTypeProperty} />
        </FormDialog>

        <FormDialog
          open={open[1]}
          title="Add Property"
          handleClose={() => handleClose(1)}
          handleSave={() => onSaveOption(1)}
        >
          <Form2 type={type} onChangeType={onChangeType} />
        </FormDialog>

        <FormDialog
          open={open[2]}
          title={
            type[0] === true
              ? "Add Property For Sell"
              : type[1] === true
              ? "Add Property For Rent"
              : null
          }
          handleClose={() => handleClose(2)}
          handleSave={() => onSaveOption(2)}
        >
          {type[0] === true ? <Form3A /> : type[1] === true ? <Form3B /> : null}
        </FormDialog>

        <FormDialog
          open={open[3]}
          title="Connect Card"
          handleClose={() => handleClose(3)}
          handleSave={() => onSaveOption(3)}
        >
          <Form4 />
        </FormDialog>

        <FormDialog
          open={open[4]}
          title="Add Property"
          handleClose={() => handleClose(4)}
          handleSave={() => onSaveOption(4)}
          ButtonText="Pay"
        >
          <Form5 />
        </FormDialog>
      </StackCompoent>
    </>
  );
};

export default NavbarRightSellProperties;
