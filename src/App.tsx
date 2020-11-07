import React, { useState } from 'react';
import './App.scss';
import { fetchTalents, toggleTalentSelection } from './TalentTree/TalentDataService';
import { TalentTreeView } from "./TalentTree/TalentTreeView";
import { ITalent, ITalentPath } from './TalentTree/TalentTreeModels';

function App() {

  const [talentTree, setTree] = useState(fetchTalents)

  function onToggle(path: ITalentPath, talent: ITalent) {
    setTree(prevTree => toggleTalentSelection(prevTree, path, talent))
  }

  return (
    <div className="App">
      <h1>Rune Mastery Loadout Talent Calculator 9000</h1>
      <TalentTreeView tree={talentTree} onToggle={onToggle}></TalentTreeView>
    </div>
  );
}

export default App;
