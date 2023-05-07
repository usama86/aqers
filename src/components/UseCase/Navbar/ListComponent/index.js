import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  CustomList,
  CustomListItemButton,
  CustomListItemText,
  styles,
} from "./style";
import BoxComponent from "./../../../Base/BoxComponent";
// import DividerComponent from '../DividerComponent'

export default function ListComponent({
  disableTypography,
  listArray,
  listTypes,
  purpose,
  isLink,
  onItemClick,
  ...otherProps
}) {
  return (
    <>
      <CustomList {...otherProps}>
        {listArray.length > 0 &&
          listArray?.map((item, index) => {
            if (isLink) {
              return (
                <Link
                  prefetch={false}
                  key={index}
                  href={
                    listTypes && listTypes[index] == "add-property" && purpose
                      ? `/${listTypes[index]}?purpose=${purpose}`
                      : listTypes && listTypes[index] && purpose
                      ? `/${purpose}?type=${listTypes[index]}`
                      : `/${listTypes[index]}`
                  }
                  style={styles.listStyle}
                >
                  <CustomListItemButton>
                    <CustomListItemText
                      disableTypography={disableTypography}
                      primary={item}
                    />
                  </CustomListItemButton>
                  {/* {listArray.length - 1 !== index && (
                <DividerComponent style={styles.divider} />
              )} */}
                </Link>
              );
            } else {
              return (
                <BoxComponent key={index} sx={styles.listStyle}>
                  <CustomListItemButton
                    onClick={() => {
                      onItemClick(item);
                    }}
                  >
                    <CustomListItemText
                      disableTypography={disableTypography}
                      primary={item.name}
                    />
                  </CustomListItemButton>
                </BoxComponent>
              );
            }
          })}
      </CustomList>
    </>
  );
}

ListComponent.propTypes = {
  disableTypography: PropTypes.bool,
  isLink: PropTypes.bool,
  listArray: PropTypes.array,
};
ListComponent.defaultProps = {
  disableTypography: true,
  isLink: true,
  listArray: [],
};
