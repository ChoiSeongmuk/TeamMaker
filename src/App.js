import React, { useState } from 'react';
import Team from './Team';

function App() {
  const [ganres, setGanre] = useState({ Agenre: '', Bgenre: '', Cgenre: '' });
  const { Agenre, Bgenre, Cgenre } = ganres;

  const onChanges = (e) => {
    const { value, name } = e.target;
    setGanre({
      ...ganres,
      [name]: value,
    });
  };

  return (
    <>
      팀A 장르 : <input name="Agenre" onChange={onChanges} value={Agenre} />
      팀B 장르 : <input name="Bgenre" onChange={onChanges} value={Bgenre} />
      팀C 장르 : <input name="Cgenre" onChange={onChanges} value={Cgenre} />
      <Team Agenre={Agenre} Bgenre={Bgenre} Cgenre={Cgenre} />
    </>
  );
}

export default App;
