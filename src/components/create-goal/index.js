import { useState } from "react";
import "./style.scss";

function CreateGoal({ sampleGoals, setSampleGoals }) {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const createGoal = () => {
    setInputError("");

    if (!inputValue) {
      setInputError("Veuillez remplir le champ.");
      return;
    }

    const newGoals = [...sampleGoals];
    newGoals.push(inputValue);
    setSampleGoals(newGoals);

    setInputValue("");
  };

  return (
    <div className="section create-goal">
      <h1>Créer un objectif</h1>
      <div className="input-group">
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Nom..." />
        <button onClick={createGoal}>Valider</button>
      </div>

      {inputError && <p className="error">{inputError}</p>}
    </div>
  );
}

export default CreateGoal;
