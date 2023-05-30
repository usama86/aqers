import styled from "@emotion/styled";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const Wrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: relative_height_size_generator(-32),
  left: relative_width_size_generator(552),
  width: relative_width_size_generator(648),
  height: relative_height_size_generator(472),
  paddingRight: "1rem",
  background: "#FAFBFF",
  zIndex: 1,
  boxShadow: "0px 0px 3px -1px rgba(0, 0, 0, 0.15)",
  borderRadius: "16px",
  "@media (max-width: 1550px)": {
    width: "500px",
    height: "fit-content",
  },
  "@media (max-width: 1350px)": {
    width: "400px",
    left: "400px",
  },
  "@media (max-width: 1000px)": {
    position: "relative",
    left: 0,
    width: "100%",
    padding: "1rem",
    marginTop: "2rem",
    top: 0,
  },
}));

const Content = styled("div")(({ theme }) => ({
  paddingLeft: relative_width_size_generator(144),
  paddingTop: relative_height_size_generator(40),
  "@media (max-width: 1000px)": {
    padding: "0",
  },
}));
const Question = styled(TypographyComponent)(({ theme }) => ({}));
const Answer = styled("div")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: "24px",
}));

const AnswerBox = ({ question, answer }) => {
  return (
    <Wrapper>
      <Content>
        <Question variant="FaqAnswerHeading" component="h3">
          {question}
        </Question>
        <Answer dangerouslySetInnerHTML={{ __html: answer }} />
      </Content>
    </Wrapper>
  );
};

export default AnswerBox;
