import styled from "@emotion/styled";
import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import InfoPagesLayout from "components/Layouts/InfoPagesLayout";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import Question from "./Question";
import AnswerBox from "./AnswerBox";
import { QUESTIONS } from "./questions.static";
import { useState } from "react";
import Footer from "../Footer";

export const BodyContent = styled("div")(({ theme }) => ({
  "& p": {
    marginBottom: relative_height_size_generator(80),
  },
  "& h2": {
    marginBottom: relative_height_size_generator(24),
  },
}));

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(QUESTIONS[0].id);
  const selectedQuestionData = QUESTIONS.find(
    (each) => each.id === selectedQuestion
  );
  return (
    <>
      <InfoPagesLayout fullWidth={true} heading="Frequently Asked Questions">
        <BoxComponent
          component="section"
          sx={{ height: relative_height_size_generator(890) }}
        >
          <BoxComponent
            component="div"
            sx={{
              marginTop: relative_height_size_generator(273),
              marginLeft: relative_width_size_generator(360),
              width: relative_width_size_generator(640),
              position: "relative",
            }}
          >
            <ul
              style={{
                position: "relative",
                padding: 0,
                margin: 0,
                zIndex: 1000,
                backgroundColor: "#ffffff",
              }}
            >
              {QUESTIONS.map((eachQuestion, index) => (
                <Question
                  question={eachQuestion.question}
                  {...eachQuestion}
                  selectHandler={(_id) => {
                    setSelectedQuestion(_id);
                  }}
                  selected={eachQuestion.id === selectedQuestion}
                  key={eachQuestion.id}
                />
              ))}
            </ul>
            {selectedQuestionData.answer &&
            selectedQuestionData.answer !== "" ? (
              <AnswerBox {...selectedQuestionData} />
            ) : null}
          </BoxComponent>
        </BoxComponent>
      </InfoPagesLayout>
    </>
  );
};

export default Faq;
