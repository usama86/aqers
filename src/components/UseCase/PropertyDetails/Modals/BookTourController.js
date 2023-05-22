import ModalComponent from "components/Base/Modal";
import React, { useEffect, useState } from "react";
import useBookTour from "../hooks/useBookTour";
import BookOnline from "./BookOnLine";
import BookOnSite from "./BookOnSite";
import useBookForm from "../hooks/useBookForm";
import Page0 from "./Page0";
import BookTourFlow from "../Layouts/BookTourFlow";
import PersonalInfo from "./PersonalInfo";
import WhenLookingToBuy from "./WhenLookingToBuy";
import { WHEN_LOOKING_TO_BUY_TIMEFRAMES } from "config/static";
import WorkingWithRealtor from "./WorkingWithRealtor";
import PreQualifiedForLoan from "./PreQualifiedForLoan";

const BookTourController = ({
  selectedModel,
  currentPage,
  incrementPage,
  maxPage,
}) => {
  const [formData, setFormData] = useState({
    choice: "",
    tourDate: null,
    timeSlot: {
      startTime: "",
      endTime: "",
    },
    name: "",
    email: "",
    phoneNumber: "",
    firstTimeBuyer: true,
    bookingUrgency: WHEN_LOOKING_TO_BUY_TIMEFRAMES[0].value,
    currentlyWorkingWithEstateAgent: true,
    prequalified: false,
  });

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, choice: selectedModel }));
  }, []);

  if (formData.choice === "") {
    return <div style={{ padding: "2rem" }}>Loading...</div>;
  }

  const firstPageProps = {
    getDateSelection: (e) => {
      setFormData((prevState) => ({
        ...prevState,
        tourDate: e.toDateString(),
      }));
    },
    handleGoToPageOne: ({ startTime, endTime }) => {
      setFormData((prevState) => ({
        ...prevState,
        timeSlot: { startTime, endTime },
      }));
      incrementPage();
    },
    choice: formData.choice,
  };

  const tourFlowContainerProps = (pageNumber) => {
    return {
      nextPageHandler: () => {
        incrementPage();
      },
      currentPage: currentPage,
      maxPage: maxPage,
    };
  };

  switch (currentPage) {
    case 0: {
      switch (selectedModel) {
        case "on-line": {
          return (
            <>
              <Page0 {...firstPageProps} />
            </>
          );
        }
        case "on-site": {
          return (
            <>
              <Page0 {...firstPageProps} />
            </>
          );
        }
        default: {
          return <>invalid props sent</>;
        }
      }
    }

    case 1: {
      return (
        <>
          <BookTourFlow
            isDisabledNextBtn={
              formData.name === "" ||
              formData.email === "" ||
              formData.phoneNumber === ""
            }
            {...tourFlowContainerProps("1")}
          >
            <PersonalInfo
              name={formData.name}
              updateName={(val) =>
                setFormData((prevState) => ({ ...prevState, name: val }))
              }
              email={formData.email}
              updateEmail={(val) =>
                setFormData((prevState) => ({ ...prevState, email: val }))
              }
              phoneNumber={formData.phoneNumber}
              updatePhoneNumber={(val) =>
                setFormData((prevState) => ({ ...prevState, phoneNumber: val }))
              }
              firstTimeBuyer={formData.firstTimeBuyer}
              updateFirstTimeBuyer={(val) =>
                setFormData((prevState) => ({
                  ...prevState,
                  firstTimeBuyer: val,
                }))
              }
            />
          </BookTourFlow>
        </>
      );
    }
    case 2: {
      return (
        <>
          <BookTourFlow {...tourFlowContainerProps("2")}>
            <WhenLookingToBuy
              selectedValue={formData.bookingUrgency}
              updateSelection={(val) =>
                setFormData((prevState) => ({
                  ...prevState,
                  bookingUrgency: val,
                }))
              }
            />
          </BookTourFlow>
        </>
      );
    }
    case 3: {
      return (
        <>
          <BookTourFlow {...tourFlowContainerProps("3")}>
            <WorkingWithRealtor
              workingWithAgent={formData.currentlyWorkingWithEstateAgent}
              updateWorkingWithAgent={(val) =>
                setFormData((prevState) => ({
                  ...prevState,
                  currentlyWorkingWithEstateAgent: val,
                }))
              }
            />
          </BookTourFlow>
        </>
      );
    }
    case 4: {
      return (
        <>
          <BookTourFlow {...tourFlowContainerProps("4")}>
            <PreQualifiedForLoan
              prequalified={formData.prequalified}
              updatePrequalified={(val) =>
                setFormData((prevState) => ({
                  ...prevState,
                  prequalified: val,
                }))
              }
            />
          </BookTourFlow>
        </>
      );
    }

    default: {
      return <>invalid prop</>;
    }
  }
};

export default BookTourController;
