import React, { useState } from 'react';

function Team({ Agenre, Bgenre, Cgenre }) {
  const candidates = [
    '효인(여)',
    '민아(여)',
    '소영(여)',
    '주미(여)',
    '태연(여)',
    '민지(여)',
    '성묵',
    '회영',
    '대희',
    '형섭',
    '형석',
    '기철',
  ];

  const [team, setTeam] = useState({
    teamA: [],
    teamB: [],
    teamC: [],
  });

  const { teamA, teamB, teamC } = team;

  const makeCandidates = (array) => {
    const newCandidates = array.sort((a, b) => {
      return parseInt(Math.random() * 10) - 5;
    });
    return newCandidates;
  };

  const onClick = () => {
    const newCandidates = makeCandidates(candidates);
    const teamA = newCandidates.splice(0, 4);
    const teamAlpha = teamA.join(', ');
    const teamB = newCandidates.splice(0, 4);
    const teamBeta = teamB.join(', ');
    const teamC = newCandidates.splice(0, 4);
    const teamChallie = teamC.join(', ');
    setTeam({
      teamA: teamAlpha,
      teamB: teamBeta,
      teamC: teamChallie,
    });
  };

  return (
    <>
      <div>
        {Agenre}팀: {teamA}
        <br />
        {Bgenre}팀: {teamB}
        <br />
        {Cgenre}팀: {teamC}
      </div>
      <button onClick={onClick}>Mix</button>
    </>
  );
}

export default Team;
