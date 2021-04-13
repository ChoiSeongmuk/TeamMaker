import React, { useEffect, useState } from 'react';

function Team({ Agenre, Bgenre, Cgenre }) {
  const candidates = ['1 ', '2 ', '3 ', '4 ', '5 ', '6 ', '7 ', '8 ', '9 '];

  const [team, setTeam] = useState({
    teamA: [],
    teamB: [],
    teamC: [],
  });
  const [oldTeam, setOldTeam] = useState({
    oldA: [],
    oldB: [],
    oldC: [],
  });
  const [state, setState] = useState({
    text: null,
  });
  const [oldCandidate, setOldCandidate] = useState({
    oldTeamArray: [],
  });
  const { teamA, teamB, teamC } = team;
  const { oldA, oldB, oldC } = oldTeam;
  const { oldTeamArray } = oldCandidate;
  const { text } = state;
  useEffect(() => {
    console.log(text, oldA, oldB, oldC);
    if (text === '중복발생') {
      onClick();
    }
  }, [text]);

  const shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  const compareArray = (arr1, arr2) => {
    // 결과값
    var rst = false;

    // arr1 배열의 크기만큼 반복
    arr1.forEach(function (item) {
      // arr1 배열 아이템이, arr2 배열에 있는지 확인
      // 있으면, arr2에 item이 존재하는 index 리턴
      // 없으면, -1 리턴
      var i = arr2.indexOf(item);

      // 존재하면, splice함수를 이용해서 arr2 배열에서 item 삭제
      if (i > -1) arr2.splice(i, 1);
    });

    // compare2의 길이가 0이면 동일하다고 판단.
    rst = arr2.length === 1 || 0;

    return rst;
  };

  const onClick = () => {
    const newCandidates = shuffle(candidates);
    const candiArray = newCandidates.slice();
    const teamA = newCandidates.splice(0, 3);
    const teamAlpha = teamA.join(', ');
    const teamB = newCandidates.splice(0, 3);
    const teamBeta = teamB.join(', ');
    const teamC = newCandidates.splice(0, 3);
    const teamChallie = teamC.join(', ');
    setOldCandidate({
      oldTeamArray: candiArray,
    });
    setTeam({
      teamA: teamAlpha,
      teamB: teamBeta,
      teamC: teamChallie,
    });
    const oldA = oldTeamArray.splice(0, 3);
    const oldB = oldTeamArray.splice(0, 3);
    const oldC = oldTeamArray.splice(0, 3);
    setOldTeam({
      oldA: oldA,
      oldB: oldB,
      oldC: oldC,
    });
    const valueA = compareArray(oldA, teamA);
    const valueB = compareArray(oldB, teamB);
    const valueC = compareArray(oldC, teamC);

    if (valueA || valueB || valueC) {
      setState({ text: '중복발생' });
      console.log(oldA, oldB, oldC);
      console.log('중복발생');
    } else {
      setState({ text: 'ㄱㅊ' });
      console.log(oldA, oldB, oldC);
      console.log('ㄱㅊ');
    }
  };

  return (
    <>
      <div>
        <br />
        <br />
        {Agenre}팀: 임원A , {teamA} 전시즌 팀: {oldA.join(', ')}
        <br />
        <br />
        {Bgenre}팀: 임원B , {teamB} 전시즌 팀: {oldB.join(', ')}
        <br />
        <br />
        {Cgenre}팀: 임원C , {teamC} 전시즌 팀: {oldC.join(', ')}
      </div>
      <button onClick={onClick}>Mix</button>
    </>
  );
}

export default Team;
