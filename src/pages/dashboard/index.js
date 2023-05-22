import BoxComponent from "components/Base/BoxComponent";
import ButtonComponent from "components/Base/ButtonComponent";
import PersonalProfile from "components/UseCase/personalProfile";
import FormDialog from "components/Base/Dialog";
import { useState } from "react";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
} from "utils/helpers";
import RadioButtons from "components/Base/RadioButton";

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
        <BoxComponent
          sx={{
            display: "flex",
            gap: relative_width_font_size_generator(14),
            "& > div": {
              flexGrow: 1,
            },
            // height: relative_height_size_generator(172),
          }}
        >
          <RadioButtons label="New Property" sx={{ pl: "0px" }} />
          <RadioButtons label="New Collection" />
        </BoxComponent>
      </FormDialog>
    </BoxComponent>
  );
};

export default PersonalProfiles;
