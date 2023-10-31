import { useState } from "react";
import "./style.scss";
import clsx from "clsx";

function Modal({
  sampleGoals,
  setSampleGoals,
  goalIndexToEdit,
  isModalOpen,
  closeModal,
}) {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const editGoal = () => {
    setInputError("");

    if (!inputValue) {
      setInputError("Veuillez remplir le champ.");
      return;
    }

    const newGoals = [...sampleGoals];
    newGoals[goalIndexToEdit] = inputValue;
    setSampleGoals(newGoals);

    setInputValue("");
    closeModal();
  };

  return (
    <div className={clsx("modal", isModalOpen && "open")}>
      <div className="header">
        <button className="close-button" onClick={closeModal} />
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Nom..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={editGoal}>Valider</button>
      </div>

      {inputError && <p className="error">{inputError}</p>}
    </div>
  );
}

export default Modal;
