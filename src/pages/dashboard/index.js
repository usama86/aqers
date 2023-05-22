import BoxComponent from "components/Base/BoxComponent";
import ButtonComponent from "components/Base/ButtonComponent";
import PersonalProfile from "components/UseCase/personalProfile";
import FormDialog from "components/Base/Dialog";
import { useState } from "react";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { Form3A } from "./Form3-a";
import { Form3B } from "./Form3-b";
import { Form4 } from "./Form4";
import { Form5 } from "./Form5";

const PersonalProfiles = () => {
  const [open, setOpen] = useState([false, false, false, false, false, false]);
  const [type, setType] = useState([true, false]);
  const onSaveOption = (index) => {
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
  return (
    <BoxComponent>
      <ButtonComponent onClick={onClickButton}>Add Post</ButtonComponent>
      <PersonalProfile />
      <FormDialog
        open={open[0]}
        title="What you want add"
        subTitle="Select the respective option and continue."
        handleClose={() => handleClose(0)}
        handleSave={() => onSaveOption(0)}
      >
        <Form1 />
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
    </BoxComponent>
  );
};

export default PersonalProfiles;
