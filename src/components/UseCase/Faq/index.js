import styled from "@emotion/styled";
import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import InfoPagesLayout from "components/Layouts/InfoPagesLayout";
import {
  relative_height_size_generator,
  relative_width_size_generator,
  updated_width_generator,
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
              marginLeft: updated_width_generator(360),
              width: relative_width_size_generator(640),
              position: "relative",
              "@media (max-width: 1550px)": {
                width: "600px",
              },
              "@media (max-width: 1350px)": {
                width: "500px",
              },
              "@media (max-width: 1000px)": {
                display: "flex",
                flexDirection: "column",
              },
              "@media (max-width: 800px)": {
                margin: "273px auto 273px auto",
              },
            }}
          >
            <BoxComponent
              component="ul"
              sx={{
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
            </BoxComponent>
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
