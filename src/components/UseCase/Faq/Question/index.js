import styled from "@emotion/styled";
import React from "react";
import ArrowRight from "./ArrowRight";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import TypographyComponent from "components/Base/TypographyComponent";

const SelectQuestionIcon = styled("div")(({ theme, selected }) => ({
  width: relative_height_size_generator(24),
  height: relative_height_size_generator(24),
  background: selected ? theme.palette.primary.main : "#FFDAFD",
  borderRadius: "50%",
  margin: `0 ${relative_width_size_generator(16)}`,
}));

const QuestionText = styled(TypographyComponent)(({ theme }) => ({
  textAlign: "left",
  flexGrow: 1,
}));

const Question = ({ selected, question, selectHandler, id }) => {
  return (
    <li
      style={{ listStyle: "none", height: relative_height_size_generator(72) }}
    >
      <button
        style={{
          cursor: "pointer",
          width: "100%",
          height: "100%",
          background: selected ? "#FAFBFF" : "transparent",
          border: "1px solid #FAFBFF",
          outline: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "Poppins",
        }}
        onClick={() => selectHandler(id)}
      >
        <SelectQuestionIcon selected={selected}>&nbsp;</SelectQuestionIcon>
        <QuestionText variant="body2" component="span">
          {question}
        </QuestionText>
        <ArrowRight selected={selected} />
      </button>
    </li>
  );
};

export default Question;
