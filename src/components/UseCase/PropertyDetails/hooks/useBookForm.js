import { useState } from "react";

const DEFAULT_FORM_STATE = {
  choice: "",
  selectedDate: "",
  timeSlot: {
    startTime: "",
    endTime: "",
  },
};

const useBookForm = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);
  const [error, setError] = useState({ value: false, msg: "" });

  function checkInvalidFormData({ choice }) {
    // choice must be either online or onsite
    const ALLOWED_CHOICES = ["on-line", "on-site"];
    if (!ALLOWED_CHOICES.includes(choice)) {
      return { error: true };
    }
    // timeSlot must be an object with start time and end time in HH:MM 24 hours format
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (
      !timeRegex.test(timeSlot.startTime) ||
      !timeRegex.test(timeSlot.endTime)
    ) {
      return { error: true, msg: "Invalid Time Slot" };
    }

    // selectedDate must be a valid Date object
    if (!(selectedDate instanceof Date) || isNaN(selectedDate)) {
      return { error: true, msg: "Invalid Date" };
    }
    return { error: false };
  }

  return {
    formData,
    error: error.value,
    errorMessage: error.msg,
  };
};

export default useBookForm;
