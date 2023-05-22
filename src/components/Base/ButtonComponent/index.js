import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { CustomButton, TransButtons } from "./style";
import CircularProgressComponent from "../CircularProgressComponent";
// import { LoaderWrapper } from 'components/UseCase/Common/FormRoundedButton/style'

// eslint-disable-next-line react/display-name
const ButtonComponent = forwardRef((props, ref) => {
  const {
    path,
    width,
    color,
    typeB,
    height,
    onClick,
    variant,
    borderradius,
    loading,
    children,
    disabled,
    ...other
  } = props;

  const handleClick = () => {
    if (onClick) onClick();
  };

  if (typeB) {
    return (
      <TransButtons
        variant={variant}
        href={path}
        onClick={handleClick}
        ref={ref}
        sx={{
          width: width,
          height: height,
        }}
        {...other}
      >
        {children}
      </TransButtons>
    );
  }
  return (
    <CustomButton
      borderradius={borderradius}
      variant={variant}
      href={path}
      onClick={handleClick}
      ref={ref}
      sx={{
        width: width,
        height: height,
        pointerEvents: disabled ? "none" : "auto",
        padding: 0,
      }}
      color={color}
      {...other}
      disabled={disabled}
    >
      {/* {loading && (
        <LoaderWrapper>
          <CircularProgressComponent />
        </LoaderWrapper>
      )} */}
      {!loading && children}
    </CustomButton>
  );
});

// export default function ButtonComponent({
//   children,
//   variant,
//   typeB,
//   path,
//   onClick,
//   ...otherProps
// }) {
//   const handleClick = () => {
//     if (onClick) onClick()
//   }

//   return (
//     <>
//       {typeB ? (
//         <TransButtons
//           variant={variant}
//           href={path}
//           onClick={handleClick}
//           {...otherProps}
//         >
//           {children}
//         </TransButtons>
//       ) : (
//         <CustomButton
//           variant={variant}
//           href={path}
//           onClick={handleClick}
//           {...otherProps}
//         >
//           {children}
//         </CustomButton>
//       )}
//     </>
//   )
// }

ButtonComponent.propTypes = {
  typeB: PropTypes.bool,
  children: PropTypes.node,
  variant: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};
ButtonComponent.defaultProps = {
  typeB: false,
  children: <></>,
  loading: false,
  disabled: false,
  variant: "contained",
  path: null,
  color: "secondary",
  onClick: () => {},
  borderradius: "14px",
};

export default ButtonComponent;
