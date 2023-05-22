import BoxComponent from "components/Base/BoxComponent";
import ButtonComponent from "components/Base/ButtonComponent";
import PersonalProfile from "components/UseCase/personalProfile";
import FormDialog from "components/Base/Dialog";
import { useState } from "react";

const PersonalProfiles = () => {
  const [open, setOpen] = useState("Hii");
  return (
    <BoxComponent>
      <ButtonComponent onClick={() => setOpen(true)}>Add Post</ButtonComponent>
      <PersonalProfile />
      <FormDialog
        open={open}
        title="What you want add"
        subTitle="Select the respective option and continue."
        handleClose={() => setOpen(false)}
      >
        <div>Hi</div>
      </FormDialog>
    </BoxComponent>
  );
};

export default PersonalProfiles;
