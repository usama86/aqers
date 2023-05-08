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
import { capitalizeFirstLetter } from "../../../utils/helpers";

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
          style={{ display: "flex", borderRadius: "5px", overflow: "hidden" }}
        >
          {/* <StyledSelect
            typeB
            options={[
              ...CITIES.map((eachCity) => ({
                value: eachCity,
                label: capitalizeFirstLetter(eachCity),
              })),
            ]}
          /> */}
          {/* LOCATION */}
          {/* <StyledSelectBtn sx={{ background: "#F3F1F2", color: "#4D4D4D" }}>
            <span style={{ marginRight: "9.15px" }}>
              <ImageComponent
                height="18px"
                width="18px"
                position="relative"
                source="/Common/pin.png"
              />
            </span>
            <span>Location</span>
            <span style={{ marginLeft: "7.35px" }}>
              <ImageComponent
                height="18px"
                width="18px"
                position="relative"
                source="/Common/dropdown.png"
              />
            </span>
          </StyledSelectBtn> */}
          <TextFieldComponent
            placeholder="Find Property"
            onChange={handleChange}
            value={inputValue}
            onFocus={() => onFocusDisplay(true)}
            isAuto
            focused={openList}
            height={"50px"}
            borderRadius="0px"
          />
          <ButtonComponent
            variant="contained"
            color="primary"
            sx={{
              ...styles.button,
              borderRadius: "0px",
            }}
            onClick={handleSearch}
          >
            <ImageComponent
              source="/HomePage/searchIcon.svg"
              width="24px"
              height="24px"
              alt="Search Icon"
            />
            <TypographyComponent variant="HomeMedium" component="span">
              Search
            </TypographyComponent>
          </ButtonComponent>
          {/* {openList && (
            <div
              style={{
                backgroundColor: "#fff",
                width: "100%",
                position: "absolute",
              }}
            >
              <List sx={styles.listItem}>
                <div style={styles.chipsContainer}>
                  {selectedList?.map((item, index) => (
                    <Chip
                      key={index}
                      variant="outlined"
                      label={item.longName ? item.longName : item.name}
                      onDelete={() => handleDelete(item, index)}
                      sx={styles.chips}
                    />
                  ))}
                </div>
                {!inputValue ? (
                  <>
                    {recentSearch && recentSearch.length > 0 && (
                      <ListItemText
                        primary="Recent Searches"
                        disableTypography
                        sx={styles.listHeader}
                      />
                    )}
                    <>
                      {recentSearch &&
                        recentSearch.length > 0 &&
                        recentSearch.map((item, index) => (
                          <ListItemButton
                            key={item.longName}
                            onClick={() => handleClick(item, index)}
                            sx={styles.listButton}
                          >
                            {item && item.cityId ? item.longName : item.name}
                          </ListItemButton>
                        ))}
                    </>
                    {selectedList.length == 0 && CITIES && CITIES.length > 0 ? (
                      <ListItemText
                        primary="Popular Cities"
                        disableTypography
                        sx={styles.listHeader}
                      />
                    ) : null}
                    {selectedList.length == 0 &&
                      CITIES &&
                      CITIES.length > 0 &&
                      CITIES.map((item) => (
                        <ListItemButton
                          sx={styles.listButton}
                          key={item}
                          onClick={() => handleCity(item)}
                        >
                          {item}
                        </ListItemButton>
                      ))}
                  </>
                ) : (
                  areas &&
                  areas.length > 0 &&
                  areas.map((item, index) => (
                    <ListItemButton
                      key={item.longName}
                      onClick={() => handleClick(item, index)}
                      sx={styles.listButton}
                    >
                      {item.longName}
                    </ListItemButton>
                  ))
                )}
              </List>
            </div>
          )} */}
        </div>
      </ClickAwayListener>
    </>
  );
}
