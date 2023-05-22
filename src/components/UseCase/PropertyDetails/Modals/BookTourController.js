import ModalComponent from "components/Base/Modal";
import React, { useState } from "react";
import useBookTour from "../hooks/useBookTour";
import BookOnline from "./BookOnLine";
import BookOnSite from "./BookOnSite";
import useBookForm from "../hooks/useBookForm";
import Page0 from "./Page0";

const BookTourController = ({ selectedModel, currentPage }) => {
  const { formData, updateChoice, error, errorMessage } = useBookForm();
  React.useEffect(() => {
    updateChoice(selectedModel);
  }, []);
  switch (currentPage) {
    case 0: {
      switch (selectedModel) {
        case "on-line": {
          return (
            <>
              <Page0 choice={formData.choice} />
            </>
          );
        }
        case "on-site": {
          return (
            <>
              <Page0 choice={formData.choice}>
                <BookOnSite />
              </Page0>
            </>
          );
        }
        default: {
          return <>invalid props sent</>;
        }
      }
    }

    default: {
      return <>invalid prop</>;
    }
  }
};

export default BookTourController;
