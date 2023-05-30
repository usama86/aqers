import "react-day-picker/dist/style.css";

import React, { useState } from "react";
import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import PropertyCard from "components/Advance/PropertyCard";
import CollectionCard from "components/Advance/CollectionCard";
import { styles } from "./style";
import { collectionCardData } from "utils/dummy_data";
import ButtonComponent from "components/Base/ButtonComponent";
import LinkComponent from "components/Base/LinkComponent";
import { useRouter } from "next/router";
import FormDialog from "components/Base/Dialog";
import { Form4 } from "components/UseCase/Navbar/Form4";
import { Form5 } from "components/UseCase/Navbar/Form5";
import {
  relative_width_font_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

import { addDays, format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import styled from "@emotion/styled";

const pastMonth = new Date(2020, 10, 15);

const StyledDatePicker = styled(DayPicker)(({ theme, selected, ...params }) => {
  const from = selected?.from;
  const to = selected?.to;
  return {
    "& .rdp-day_range_start": {
      background: "#FFDAFD",
      position: "relative",
      "&::before": {
        content: `'${from?.getDate()}'`,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: "50%",
        backgroundColor: "#92198C",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    "& .rdp-day_range_middle": {
      backgroundColor: "#FFDAFD",
      position: "relative",
    },
    "& .rdp-day_range_end": {
      background: "#FFDAFD",
      position: "relative",
      "&::before": {
        content: `'${to && to.getDate() ? to.getDate() : from?.getDate()}'`,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: "50%",
        backgroundColor: "#92198C",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  };
});

const Booking = ({
  heading,
  heading2,
  isContinue,
  isPay,
  cardData,
  selectedCard,
  setCard,
  handleClick,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState([false, false]);

  const defaultSelected = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };
  const [range, setRange] = useState({});

  const setRangeFunc = (date) => {
    const copy = {};
    copy.from = date?.from;
    if (date?.to) copy.to = date?.to;
    setRange(copy);
  };

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

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
          sx={{ fontSize: relative_width_font_size_generator(32) }}
          variant="profileListing"
          component="h1"
        >
          {heading}
        </TypographyComponent>
        <BoxComponent sx={styles.cardsBox}>
          {cardData.map((data) => (
            <BoxComponent
              key={data.id}
              onClick={() => {
                if (setCard) setCard(data, data.id);
              }}
              sx={{
                border: selectedCard?.find((ind) => ind.id === data.id)
                  ? "2px solid rgb(102, 17, 98)"
                  : "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <PropertyCard data={data} type="drop" />
            </BoxComponent>
          ))}
        </BoxComponent>
        {isContinue && (
          <BoxComponent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "11px",
            }}
          >
            <TypographyComponent
              sx={{ fontSize: relative_width_font_size_generator(32) }}
              variant="profileListing"
              component="h1"
            >
              Duration Of Collection Properties
            </TypographyComponent>

            <BoxComponent
              sx={{
                height: "341px",
                width: "max-content",
                borderRadius: "14px",
                background: "white",
                boxShadow: "0px 4px 24px 0px #00000014",
              }}
            >
              <StyledDatePicker
                id="test"
                mode="range"
                defaultMonth={pastMonth}
                selected={range}
                footer={footer}
                onSelect={setRangeFunc}
                style={{ width: "100%" }}
              />
            </BoxComponent>
          </BoxComponent>
        )}
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
              sx={{ fontSize: relative_width_font_size_generator(32) }}
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
        {isContinue && (
          <BoxComponent sx={{ width: "100%", height: "100%", pt: "20px" }}>
            <LinkComponent
              onClick={() => {
                if (handleClick) handleClick();
              }}
              href={{
                pathname: "/selected-property",
              }}
            >
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
                disabled={selectedCard?.length === 0}
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
                width: "222px",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "18px",
                letterSpacing: "0em",
                textAlign: "center",
                background: "#92198C",
                borderRadius: "14px",
                color: "#FFFF",
                "&:hover": {
                  background: "#92198C",
                },
              }}
              onClick={onClickButton}
            >
              Continue to Pay
            </ButtonComponent>
          </BoxComponent>
        )}
      </BoxComponent>

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
