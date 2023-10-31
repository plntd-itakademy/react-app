import { useState } from "react";
import "./style.scss";
import Modal from "../modal";

function MyGoals({ sampleGoals, setSampleGoals }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goalIndexToEdit, setGoalIndexToEdit] = useState(null);

  const deleteGoal = (index) => {
    const newGoals = [...sampleGoals];
    newGoals.splice(index, 1);
    setSampleGoals(newGoals);
  };

  const openModal = (index) => {
    setGoalIndexToEdit(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="section my-goals">
      <h1>Mes objectifs ({sampleGoals.length})</h1>

      {sampleGoals.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleGoals.map((goal, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{goal}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => deleteGoal(index)}
                  />
                  <button
                    className="open-modal-button"
                    onClick={() => openModal(index)}
                  >
                    Modifier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Aucun objectif.</p>
      )}

      <Modal
        sampleGoals={sampleGoals}
        setSampleGoals={setSampleGoals}
        goalIndexToEdit={goalIndexToEdit}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

export default MyGoals;
