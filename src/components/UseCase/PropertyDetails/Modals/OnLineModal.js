import ModalComponent from "components/Base/Modal";
import React, { useState } from "react";

const OnLineModal = () => {
  const [page, setPage] = useState(0);
  switch (page) {
    case 0:
      return <>Select Dates</>;
    case 1:
      return <>When are you looking to buy</>;
    case 2:
      return <>Are you working with a real estate agent</>;
    case 3:
      return <>Have you been pre qualified for a mortgage loan</>;
    default:
      return <></>;
  }
};

export default OnLineModal;
