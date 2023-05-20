import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { googleMapApiKey } from "config/index.js";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function MapComponent({
  lat,
  lng,
  containerWidth,
  containerHeight,
  parentStyles,
  ...otherProps
}) {
  return (
    <div
      style={{
        width: containerWidth,
        height: containerHeight,
        ...parentStyles,
      }}
    >
      <LoadScript googleMapsApiKey={googleMapApiKey}>
        <GoogleMap
          {...otherProps}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{ lat, lng }}
          zoom={10}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <>PIN</>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

MapComponent.defaultProps = {
  lat: -3.745,
  lng: -38.523,
  containerHeight: containerStyle.height,
  containerWidth: containerStyle.width,
};

export default MapComponent;
