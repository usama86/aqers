import ImageComponent from "components/Base/ImageComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const SingleTestimonial = () => {
  return (
    <StackCompoent
      direction="row"
      alignItems="center"
      justifyContent="stretch"
      sx={{
        gap: relative_width_size_generator(41),
        "@media (max-width:1200px)": {
          flexDirection: "column",
        },
      }}
    >
      <StackCompoent direction="column" sx={{ width: "100%" }}>
        <TypographyComponent
          variant="TestimonialsHeading"
          component="h1"
          sx={{
            width: relative_width_size_generator(550),
            mb: relative_height_size_generator(24),
            "@media (max-width:1200px)": {
              width: "auto",
            },
          }}
        >
          Finsweet was a dream to work with
        </TypographyComponent>
        <TypographyComponent
          variant="TestimonialsDescription"
          component="p"
          sx={{
            width: relative_width_size_generator(550),
            mb: relative_height_size_generator(40),
            color: "rgba(91, 91, 91, 1)",
            "@media (max-width:1200px)": {
              width: "auto",
            },
          }}
        >
          Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel.
          Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus
          eleifend nec felis vel auctor.
        </TypographyComponent>
        <StackCompoent
          direction="row"
          sx={{
            "@media (max-width:1200px)": {
              alignSelf: "center",
            },
          }}
        >
          <ImageComponent
            width={relative_width_size_generator(80)}
            height={relative_width_size_generator(80)}
            style={{ marginRight: relative_width_size_generator(24) }}
            source="/About/testimonials/testimonials_small.png"
          />
          <StackCompoent direction="column">
            <TypographyComponent component="h6" variant="TestimonialName">
              Chikelu Neo
            </TypographyComponent>
            <TypographyComponent
              color="primary.main"
              component="h6"
              variant="TestimonialPosition"
            >
              CEO at MazeAI
            </TypographyComponent>
          </StackCompoent>
        </StackCompoent>
      </StackCompoent>
      <ImageComponent
        imageSxStyle={{
          "@media (max-width:1700px)": {
            height: "300px",
          },
          "@media (max-width:1500px)": {
            height: "200px",
          },
          "@media (max-width:1400px)": {
            height: "400px",
          },
          "@media (max-width:1200px)": {
            height: "400px",
          },
          "@media (max-width:600px)": {
            width: "200px",
            height: "200px",
          },
        }}
        // width={relative_width_size_generator(620)}

        height={relative_height_size_generator(501)}
        style={{ borderRadius: "20px" }}
        source="/About/testimonials/testimonials_big.png"
        objectFit="cover"
      />
    </StackCompoent>
  );
};

export default SingleTestimonial;
