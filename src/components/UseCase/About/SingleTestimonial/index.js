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
      spacing={relative_width_size_generator(41)}
      direction="row"
      alignItems="center"
      justifyContent="stretch"
    >
      <StackCompoent direction="column" sx={{ width: "100%" }}>
        <TypographyComponent
          variant="TestimonialsHeading"
          component="h1"
          sx={{
            width: relative_width_size_generator(550),
            mb: relative_height_size_generator(24),
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
          }}
        >
          Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel.
          Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus
          eleifend nec felis vel auctor.
        </TypographyComponent>
        <StackCompoent direction="row">
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
