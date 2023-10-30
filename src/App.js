import { useState } from "react";
import "./App.scss";
import CreateGoal from "./components/create-goal";
import MyGoals from "./components/my-goals";

function App() {
  const [sampleGoals, setSampleGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  return (
    <div className="app">
      <CreateGoal sampleGoals={sampleGoals} setSampleGoals={setSampleGoals} />
      <MyGoals sampleGoals={sampleGoals} setSampleGoals={setSampleGoals} />
    </div>
  );
}

export default App;
