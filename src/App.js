import React, { useEffect, useState } from 'react';
import Team from './Team';

function App() {
  const [ganres, setGanre] = useState({ Agenre: '', Bgenre: '', Cgenre: '' });
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState('');
  const { Agenre, Bgenre, Cgenre } = ganres;
  const onChanges = (e) => {
    const { value, name } = e.target;
    setGanre({
      ...ganres,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log('user updated', users);
  }, [users]);

  const onInput = (e) => {
    setUserInput(e.target.value);
  };
  const enterPressed = (e) => {
    if (e.key === 'Enter') {
      saveButton();
    }
  };
  const saveButton = () => {
    if (users.length < 9) {
      const user = userInput;
      setUsers([...users, user]);
      setUserInput('');
    } else {
      alert('회원수가 너무많아..');
    }
  };
  return (
    <>
      <div>
        팀A 장르 : <input name="Agenre" onChange={onChanges} value={Agenre} />
        팀B 장르 : <input name="Bgenre" onChange={onChanges} value={Bgenre} />
        팀C 장르 : <input name="Cgenre" onChange={onChanges} value={Cgenre} />
      </div>
      <br />
      <div>
        회원이름 입력 :{' '}
        <input
          name="userInput"
          onChange={onInput}
          value={userInput}
          onKeyPress={enterPressed}
        />
        <button onClick={saveButton}>저장</button> <br />
        회원: {users.join(', ')}
      </div>
      <Team
        Agenre={Agenre}
        Bgenre={Bgenre}
        Cgenre={Cgenre}
        candidates={users}
      />
    </>
  );
}

export default App;
