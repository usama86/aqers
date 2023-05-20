import styled from "@emotion/styled";
import PropertyDetailsCard from "components/Advance/PropertyDetailsCard";
import ImageComponent from "components/Base/ImageComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const Divider = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: relative_height_size_generator(81.02),
  position: "absolute",
  height: "1px",
  backgroundColor: "rgba(18, 18, 18, 0.2)",
}));

const PropertySummary = ({
  price,
  viewedBy,
  location,
  contact,
  lastUpdated,
  agentName,
  agentMemberSince,
}) => {
  return (
    <PropertyDetailsCard width={relative_width_size_generator(449.24)}>
      <Divider>&nbsp;</Divider>
      <StackCompoent direction="column">
        <StackCompoent
          sx={{ mb: relative_height_size_generator(17.88) }}
          alignItems="center"
        >
          <TypographyComponent
            sx={{ flexGrow: 1 }}
            variant="PropertySummaryAmount"
            component="h3"
          >
            {price}
          </TypographyComponent>
          <ImageComponent
            width={relative_width_size_generator(26.82)}
            height={relative_width_size_generator(26.82)}
            source="/Common/eye.png"
          />
          <TypographyComponent
            sx={{ ml: relative_width_size_generator(6.71) }}
            component="span"
            variant="PropertySummaryViewedBy"
          >
            {viewedBy}
          </TypographyComponent>
          <ImageComponent
            containerStyle={{
              cursor: "pointer",
              marginLeft: relative_width_size_generator(29.82),
            }}
            width={relative_width_size_generator(24)}
            height={relative_width_size_generator(24)}
            source="/Common/share.png"
          />
          <ImageComponent
            containerStyle={{
              cursor: "pointer",
              marginLeft: relative_width_size_generator(24.62),
            }}
            width={relative_width_size_generator(24)}
            height={relative_width_size_generator(24)}
            source="/Common/heart.png"
          />
        </StackCompoent>
        {/* location */}
        <StackCompoent
          sx={{ mb: relative_height_size_generator(15.65) }}
          alignItems="flex-start"
        >
          <ImageComponent
            containerStyle={{
              marginRight: relative_width_size_generator(5.59),
            }}
            width={relative_width_size_generator(24.59)}
            height={relative_width_size_generator(24.59)}
            source="/Common/location_pink.png"
          />
          <TypographyComponent variant="PropertySummaryLocation" component="p">
            Location:{" "}
            <span style={{ color: "rgba(0, 91, 153, 1)" }}>{location}</span>
          </TypographyComponent>
        </StackCompoent>
        <StackCompoent
          alignItems="flex-start"
          sx={{ mb: relative_height_size_generator(35.76) }}
        >
          <ImageComponent
            containerStyle={{
              marginRight: relative_width_size_generator(5.59),
            }}
            width={relative_width_size_generator(24.59)}
            height={relative_width_size_generator(24.59)}
            source="/Common/contact_pink.png"
          />
          <TypographyComponent
            sx={{ flexGrow: 1 }}
            variant="PropertySummaryLocation"
            component="p"
          >
            {contact}
          </TypographyComponent>
          <TypographyComponent
            variant="PropertySummaryLocation"
            component="p"
            sx={{ color: "rgba(0, 47, 52, 0.64)" }}
          >
            {lastUpdated}
          </TypographyComponent>
        </StackCompoent>
        <StackCompoent sx={{ gap: relative_width_size_generator(6.71) }}>
          <ImageComponent
            source="/PropertyDetails/ryan_image.png"
            width={relative_width_size_generator(44.7)}
            height={relative_width_size_generator(44.7)}
          />
          <StackCompoent direction="column">
            <TypographyComponent
              variant="PropertySummaryAgentName"
              component="span"
            >
              {agentName}
            </TypographyComponent>
            <TypographyComponent
              variant="PropertySummaryAgentMemberSince"
              component="span"
              sx={{ color: "rgba(0, 47, 52, 0.64)" }}
            >
              Member since {agentMemberSince}
            </TypographyComponent>
          </StackCompoent>
        </StackCompoent>
      </StackCompoent>
    </PropertyDetailsCard>
  );
};

PropertySummary.defaultProps = {
  price: "90,000 $",
  viewedBy: "569",
  location: "Lorem ipsum dolor sit amet, consectetur",
  contact: "+1 3125558367",
  lastUpdated: "4 weeks ago",
  agentName: "Ryan Danny",
  agentMemberSince: "Oct 2018",
};

export default PropertySummary;
