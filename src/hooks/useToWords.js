import React from "react";
import { ToWords } from "to-words";
import { removeCommas } from "utils/helpers";

const useToWords = ({ currency = false, localeCode = "en-IN" }) => {
  const toWords = new ToWords({
    localeCode,
    converterOptions: {
      currency,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        // can be used to override defaults for the selected locale
        name: "Rupee",
        plural: "Rupees",
        symbol: "₹",
        fractionalUnit: {
          name: "Paisa",
          plural: "Paise",
          symbol: "",
        },
      },
    },
  });
  const convertFn = (numerical) => {
    const inWords = toWords.convert(+numerical);
    return inWords;
  };

  return { convertFn };
};

export default useToWords;
