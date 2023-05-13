import React from "react";
import dynamic from "next/dynamic";
import BoxComponent from "components/Base/BoxComponent";
import Header from "./HeaderProfile";
import MainSectionHeader from "./MainSectionHeader";
import GraphsPage from "./GraphsPage";
import { styles } from "./style";
import DividerComponent from "components/Base/DividerComponent";

const PersonalProfiles = () => {
  return (
    <BoxComponent sx={styles.pageStyle}>
      asad
      <BoxComponent sx={styles.paddingStyle}>
        <Header />
        <DividerComponent sx={styles.dividerStyle} />
        <MainSectionHeader />
        <GraphsPage />
      </BoxComponent>
    </BoxComponent>
  );
};

export default PersonalProfiles;
