import { useState } from "react";

const useCategorySelection = () => {
  const [selections, setSelections] = useState([]);
  const toggleSelections = (choice) => {
    let temp = [...selections];
    const choiceIsPresent = temp.findIndex((eachItem) => eachItem === choice);
    if (choiceIsPresent === -1) {
      temp.push(choice);
    } else {
      temp.splice(choiceIsPresent, 1);
    }
    setSelections(temp);
  };
  const getSelectionValue = (choice) => {
    return selections.includes(choice);
  };
  return { toggleSelections, getSelectionValue };
};

export default useCategorySelection;
