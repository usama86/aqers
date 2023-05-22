import React, { useState } from "react";
import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import PropertyCard from "components/Advance/PropertyCard";
import CollectionCard from "components/Advance/CollectionCard";
import { styles } from "./style";
import { cardData, collectionCardData } from "utils/dummy_data";
import ButtonComponent from "components/Base/ButtonComponent";
import LinkComponent from "components/Base/LinkComponent";
import { useRouter } from "next/router";
import FormDialog from "components/Base/Dialog";
import { Form4 } from "pages/dashboard/Form4";
import { Form5 } from "pages/dashboard/Form5";

const Booking = ({ heading, heading2, isContinue, isPay }) => {
  const router = useRouter();
  const [open, setOpen] = useState([false, false]);

  const onClickButton = () => {
    const copy = [...open];
    copy[0] = true;
    setOpen(copy);
  };

  const handleClose = (index) => {
    const copy = [...open];
    copy[index] = false;
    setOpen(copy);
  };
  const onSaveOption = (index) => {
    if (index === 1) {
      router.push("/preview-property-details");
    }
    const copy = [...open];
    copy[index + 1] = true;
    copy[index] = false;
    setOpen(copy);
  };
  return (
    <BoxComponent sx={styles.pageStyle}>
      <BoxComponent sx={styles.mainBox}>
        <TypographyComponent
          sx={{ fontSize: "32px" }}
          variant="profileListing"
          component="h1"
        >
          {heading}
        </TypographyComponent>
        <BoxComponent sx={styles.cardsBox}>
          {cardData.map((data) => (
            <React.Fragment key={data.id}>
              <PropertyCard data={data} type="drop" />
            </React.Fragment>
          ))}
        </BoxComponent>
        {heading2 && (
          <BoxComponent
            sx={{
              pt: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <TypographyComponent
              sx={{ fontSize: "32px" }}
              variant="profileListing"
              component="h2"
            >
              {heading2}
            </TypographyComponent>
            <BoxComponent
              sx={{ display: "flex", gap: "114px", flexWrap: "wrap" }}
            >
              {collectionCardData.map((data) => (
                <React.Fragment key={data.id}>
                  <CollectionCard data={data} />
                </React.Fragment>
              ))}
            </BoxComponent>
          </BoxComponent>
        )}
      </BoxComponent>

      {isContinue && (
        <BoxComponent sx={{ width: "100%", height: "100%", pt: "20px" }}>
          <LinkComponent href="/selected-property">
            <ButtonComponent
              sx={{
                height: "48px",
                width: "185px",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "18px",
                letterSpacing: "0em",
                textAlign: "center",
                background: "#92198C",
                color: "#FFFF",
                "&:hover": {
                  background: "#92198C",
                },
              }}
            >
              Continue
            </ButtonComponent>
          </LinkComponent>
        </BoxComponent>
      )}
      {isPay && (
        <BoxComponent sx={{ width: "100%", height: "100%", pt: "20px" }}>
          <ButtonComponent
            sx={{
              height: "48px",
              width: "185px",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "18px",
              letterSpacing: "0em",
              textAlign: "center",
              background: "#92198C",
              color: "#FFFF",
              "&:hover": {
                background: "#92198C",
              },
            }}
            onClick={onClickButton}
          >
            Pay
          </ButtonComponent>
        </BoxComponent>
      )}

      <FormDialog
        open={open[0]}
        title="Connect Card"
        handleClose={() => handleClose(0)}
        handleSave={() => onSaveOption(0)}
      >
        <Form4 />
      </FormDialog>
      <FormDialog
        open={open[1]}
        title="Add Property"
        handleClose={() => handleClose(1)}
        handleSave={() => onSaveOption(1)}
        ButtonText="Pay"
      >
        <Form5 />
      </FormDialog>
    </BoxComponent>
  );
};

export default Booking;
