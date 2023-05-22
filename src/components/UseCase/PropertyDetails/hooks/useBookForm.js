import { useState } from "react";

const DEFAULT_FORM_STATE = {
  choice: "",
};

const useBookForm = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);
  const [error, setError] = useState({ value: false, msg: "" });

  function checkInvalidFormData({ choice }) {
    // choice must be either online or onsite
    const ALLOWED_CHOICES = ["on-line", "on-site"];
    if (!ALLOWED_CHOICES.includes(choice)) {
      return { error: true };
    } else return { error: false };
  }

  function updateChoice(choice) {
    const { error } = checkInvalidFormData({ choice });
    if (error) {
      setError({
        value: true,
        msg: "Invalid Choice",
      });
    } else {
      setError({
        value: false,
        msg: "",
      });
      setFormData((prevState) => ({ ...prevState, choice }));
    }
  }

  return {
    formData,
    error: error.value,
    errorMessage: error.msg,
    updateChoice,
  };
};

export default useBookForm;
