import styled from "@emotion/styled";
import ButtonComponent from "components/Base/ButtonComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import InfoPagesLayout from "components/Layouts/InfoPagesLayout";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export const BodyContent = styled("div")(({ theme }) => ({
  paddingTop: relative_height_size_generator(100),
  paddingLeft: relative_width_size_generator(243),
  paddingRight: relative_width_size_generator(243),
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "100vh",
  "& *": {
    textAlign: "center",
  },
}));

const AqersPlus = () => {
  return (
    <>
      <BodyContent>
        <TypographyComponent
          sx={{ mb: relative_height_size_generator(50) }}
          variant="InfoPageHeading"
          component="h1"
        >
          Aqers+
        </TypographyComponent>
        <TypographyComponent
          sx={{ mb: relative_height_size_generator(50) }}
          variant="PropertySummaryLocation"
          component="div"
        >
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Pellentesque vitae dui ut quam
            rhoncus lacinia. Mauris ac dictum orci. Phasellus eget auctor nisi.
            Pellentesque nec vestibulum felis. Cras dignissim mi lorem. Donec
            lobortis nunc interdum, bibendum neque in, sagittis nulla.
            Pellentesque scelerisque eget eros et gravida. Aenean aliquam
            convallis tortor. Fusce ultricies laoreet dolor ut dictum. Quisque
            quis massa urna. Suspendisse euismod hendrerit nisi vel euismod.
            Praesent porttitor nisl eu purus rutrum accumsan. Ut vel varius sem.
            Suspendisse eu nibh nec velit varius cursus. Suspendisse convallis
            tincidunt odio, at bibendum dolor placerat quis. Fusce luctus velit
            ac mi efficitur molestie. Suspendisse quis arcu quis mauris
            convallis mollis ut sit amet eros.
          </p>
          <p>
            {" "}
            Nullam sem odio, facilisis eget rhoncus a, sollicitudin eget purus.
            Phasellus fringilla suscipit nibh vitae tincidunt. Curabitur tempor
            luctus dignissim. Pellentesque non efficitur elit. Phasellus a
            imperdiet mauris. Vestibulum hendrerit arcu quis arcu fermentum
            posuere. Duis dignissim consectetur libero ac rutrum. Sed vulputate,
            ligula a consequat tristique, odio lacus vehicula metus, sit amet
            interdum tellus elit facilisis elit. Nunc porta condimentum nulla, a
            porta ante finibus sed. Nam vitae venenatis arcu. Aenean ut mi ut
            diam tincidunt suscipit. In nec elit fermentum, aliquam tortor ac,
            tempor ligula. Etiam quis venenatis ex. Maecenas aliquet eros in
            gravida ultrices. Etiam gravida ullamcorper cursus. Curabitur
            feugiat, tortor quis viverra ultricies, massa leo mollis lectus, vel
            auctor ante tellus ut odio. Proin vulputate ullamcorper bibendum.
            Praesent at velit lorem. Aliquam tellus nibh, semper vel enim eget,
            feugiat facilisis ipsum. Nam quam turpis, lacinia vel gravida quis,
            dignissim et lectus. Quisque fermentum, nulla id pharetra laoreet,
            mi metus auctor orci, id pulvinar augue eros varius purus. Phasellus
            fringilla suscipit nibh vitae tincidunt. Curabitur tempor luctus
            dignissim. Pellentesque non efficitur elit. Phasellus a imperdiet
            mauris. Vestibulum hendrerit arcu quis arcu fermentum posuere. Duis
            dignissim consectetur libero ac rutrum. Sed vulputate, ligula a
            consequat tristique, odio lacus vehicula metus, sit amet interdum
            tellus elit facilisis elit. Nunc porta condimentum nulla, a porta
            ante finibus sed. Nam vitae venenatis arcu. Aenean ut mi ut diam
            tincidunt suscipit. In nec elit fermentum, aliquam tortor ac, tempor
            ligula. Etiam quis venenatis ex. Maecenas aliquet eros in gravida
            ultrices. Etiam gravida ullamcorper cursus. Curabitur feugiat,
            tortor quis viverra ultricies, massa leo mollis lectus, vel auctor
            ante tellus ut odio. Proin vulputate ullamcorper bibendum. Praesent
            at velit lorem. Aliquam tellus nibh, semper vel enim eget, feugiat
            facilisis ipsum. Nam quam turpis, lacinia vel gravida quis,
            dignissim et lectus. Quisque fermentum, nulla id pharetra laoreet,
            mi metus auctor orci, id pulvinar augue eros varius purus.
          </p>
        </TypographyComponent>
        <ButtonComponent
          sx={{
            backgroundColor: "rgba(4, 97, 205, 1)",
            alignSelf: "center",
            width: relative_width_size_generator(185),
            borderRadius: relative_width_size_generator(14),
          }}
        >
          Read More
        </ButtonComponent>
      </BodyContent>
    </>
  );
};

export default AqersPlus;
