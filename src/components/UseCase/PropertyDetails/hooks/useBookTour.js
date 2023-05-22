import React, { useState } from "react";

const DEFAULT_MODEL_STATE = {
  value: false,
  selection: "",
  page: 0,
};

const useBookTour = ({ maxPagesWith0Index = 4 }) => {
  const [modelState, setModelState] = useState(DEFAULT_MODEL_STATE);

  function handleOpenOnlineModal() {
    handleOpenModal(true, "on-line");
  }

  function handleOpenOnSiteModal() {
    handleOpenModal(true, "on-site");
  }

  function handleOpenModal(value, selection) {
    setModelState((prevState) => ({
      ...prevState,
      value,
      selection,
    }));
  }

  function handleCloseModel(selection) {
    return resetState();
  }

  function incrementPage() {
    if (modelState.page === maxPagesWith0Index) {
      return resetState();
    }
    setModelState((prevState) => ({ ...prevState, page: prevState.page + 1 }));
  }

  function decrementPage() {
    if (modelState.page === 0) {
      return resetState();
    }
    setModelState((prevState) => ({ ...prevState, page: prevState.page - 1 }));
  }

  function resetPage() {
    setModelState((prevState) => ({ ...prevState, page: 0 }));
  }

  function resetState() {
    setModelState(DEFAULT_MODEL_STATE);
  }

  return {
    handleCloseModel,
    handleOpenModal,
    incrementPage,
    decrementPage,
    resetPage,
    resetState,
    currentPage: modelState.page,
    selectedModel: modelState.selection,
    modelState: modelState.value,
    handleOpenOnlineModal,
    handleOpenOnSiteModal,
  };
};

export default useBookTour;
