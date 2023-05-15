import React, { useEffect, useState } from "react";
import ButtonComponent from "components/Base/ButtonComponent";
import { StyledSelect, StyledSelectBtn, styles } from "./style";
import ImageComponent from "components/Base/ImageComponent";
import Chip from "@mui/material/Chip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextFieldComponent from "components/Base/TextFieldComponent";
import { useRouter } from "next/router";
import TypographyComponent from "components/Base/TypographyComponent";
import { CITIES } from "config/dummy_search_data";
import {
  capitalizeFirstLetter,
  relative_height_size_generator,
  relative_width_size_generator,
} from "../../../utils/helpers";
import { getDesignSystem } from "theme/DesignToken";
import LinkComponent from "components/Base/LinkComponent";
import DropdownComponent from "components/Base/DropDownComponent";
import BoxComponent from "components/Base/BoxComponent";

export default function SearchBar({ purpose }) {
  const [areas, setAreas] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedList, setSelectedList] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  const [openList, setOpenList] = useState(true);

  const router = useRouter();

  const handleChange = async (event) => {
    setInputValue(event?.target?.value);
    setAreas(areas);
  };
  const handleSearch = () => {};
  const onFocusDisplay = (bool) => {};
  return (
    <>
      <ClickAwayListener onClickAway={() => onFocusDisplay(false)}>
        <div
          style={{
            display: "flex",
            borderRadius: relative_width_size_generator(5),
            overflow: "hidden",
            width: relative_width_size_generator(589),
            margin: "0 auto",
          }}
        >
          <DropdownComponent transparent>
            <BoxComponent
              variant="contained"
              color="primary"
              sx={{
                ...styles.dropDownButton,
                borderRadius: "0px",
                height: relative_height_size_generator(50),

                padding: `0 ${relative_width_size_generator(
                  13
                )} 0 ${relative_width_size_generator(22.75)}`,
              }}
              onClick={handleSearch}
            >
              <ImageComponent
                width={relative_width_size_generator(17)}
                height={relative_height_size_generator(17)}
                style={{ marginRight: relative_width_size_generator(9.15) }}
                source="/Common/location.png"
              />
              <TypographyComponent
                sx={{
                  color: "rgba(77, 77, 77, 1)",
                  mr: relative_width_size_generator(7.35),
                  textTransform: "capitalize",
                }}
                variant="HomeMedium"
                component="span"
              >
                Location
              </TypographyComponent>
              <ImageComponent
                source="/Common/dropdown.png"
                width={relative_width_size_generator(9)}
                height={relative_width_size_generator(4.5)}
              />
            </BoxComponent>
          </DropdownComponent>
          <TextFieldComponent
            placeholder="Find Property"
            onChange={handleChange}
            value={inputValue}
            onFocus={() => onFocusDisplay(true)}
            isAuto
            focused={openList}
            height={relative_height_size_generator(50)}
            borderradius="0px"
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "0",
                border: "none",
                padding: `0 ${relative_width_size_generator(21)}`,
                ...getDesignSystem(400, 14, 21),
                "&::placeholder": {
                  ...getDesignSystem(400, 14, 21),
                },
                "& fieldset": {
                  border: "none",
                },
              },
              "& *": { ...getDesignSystem(400, 14, 21) },
            }}
          />
          <ButtonComponent
            variant="contained"
            color="primary"
            sx={{
              ...styles.button,
              borderRadius: "0px",
              height: relative_height_size_generator(50),
              minWidth: "auto",
              padding: `0 ${relative_width_size_generator(24)}`,
            }}
            onClick={handleSearch}
          >
            <LinkComponent
              href={{
                pathname: "featured-properties",
                query: {
                  search: inputValue,
                },
              }}
              linkStyle={{
                width: "100%",
                height: "100%",
                display: "flex",
                // justifyContent: "center",
                // gap: relative_width_size_generator(12),
                alignItems: "center",
              }}
            >
              <ImageComponent
                source="/HomePage/searchIcon.svg"
                width={relative_width_size_generator(14)}
                height={relative_width_size_generator(14)}
                alt="Search Icon"
                style={{ marginRight: relative_width_size_generator(12) }}
              />
              <TypographyComponent variant="HomeMedium" component="span">
                Search
              </TypographyComponent>
            </LinkComponent>
          </ButtonComponent>
        </div>
      </ClickAwayListener>
    </>
  );
}
