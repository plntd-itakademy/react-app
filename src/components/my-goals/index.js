import "./style.scss";

function MyGoals({ sampleGoals, setSampleGoals }) {
  const deleteGoal = (index) => {
    const newGoals = [...sampleGoals];
    newGoals.splice(index, 1);
    setSampleGoals(newGoals);
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
                  <button className="delete-button" onClick={() => deleteGoal(index)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Aucun objectif.</p>
      )}
    </div>
  );
}

export default MyGoals;
