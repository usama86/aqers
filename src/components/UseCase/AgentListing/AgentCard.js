import CardComponent from "components/ServiceComponents/CardComponent";
import UserCardComponent from "../UserCard";
import StackCompoent from "components/Base/StackCompoent";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import DividerComponent from "components/Base/DividerComponent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import LinkComponent from "components/Base/LinkComponent";

const AgentCard = ({ img, name, email, listedProperties, collections, id }) => {
  return (
    <UserCardComponent
      style={{
        marginBottom: relative_height_size_generator(50),
        cursor: "pointer",
      }}
    >
      <LinkComponent
        linkStyle={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        href={{ pathname: "/agent-profile", query: { agent_id: 123 } }}
      >
        <StackCompoent alignItems="center" direction="column">
          <ImageComponent
            width={relative_width_size_generator(100)}
            height={relative_width_size_generator(100)}
            source={img}
            style={{ marginBottom: relative_height_size_generator(14) }}
          />
          <TypographyComponent
            sx={{
              color: "rgba(49, 49, 49, 1)",
              mb: relative_height_size_generator(2),
            }}
            variant="AgentListingCardName"
            component="div"
          >
            {name}
          </TypographyComponent>
          <TypographyComponent
            sx={{
              color: "rgba(97, 101, 105, 1)",
              mb: relative_height_size_generator(18),
            }}
            variant="AgentListingCardEmail"
            component="div"
          >
            {email}
          </TypographyComponent>
          <StackCompoent
            justifyContent="space-between"
            sx={{ alignSelf: "stretch", mb: relative_height_size_generator(6) }}
          >
            <TypographyComponent
              sx={{
                color: "rgba(97, 101, 105, 1)",
              }}
              variant="AgentListingCardProperties"
              component="div"
            >
              Number of listed property:
            </TypographyComponent>
            <TypographyComponent
              sx={{ color: "rgba(97, 101, 105, 1)" }}
              variant="AgentListingCardProperties"
              component="div"
            >
              {listedProperties}
            </TypographyComponent>
          </StackCompoent>
          <DividerComponent
            sx={{
              alignSelf: "stretch",
              mb: relative_height_size_generator(6),
              "& .css-qywfm8-MuiDivider-wrapper": {
                display: "none",
              },
            }}
            variant="fullWidth"
            orientation="horizontal"
          >
            &nbsp;
          </DividerComponent>
          <StackCompoent
            justifyContent="space-between"
            sx={{ alignSelf: "stretch" }}
          >
            <TypographyComponent
              sx={{ color: "rgba(97, 101, 105, 1)" }}
              variant="AgentListingCardProperties"
              component="div"
            >
              Number of Collection:
            </TypographyComponent>
            <TypographyComponent
              sx={{ color: "rgba(97, 101, 105, 1)" }}
              variant="AgentListingCardProperties"
              component="div"
            >
              {collections}
            </TypographyComponent>
          </StackCompoent>
        </StackCompoent>
      </LinkComponent>
    </UserCardComponent>
  );
};

export default AgentCard;
