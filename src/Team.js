import React, { useEffect, useState } from 'react';

function Team({ Agenre, Bgenre, Cgenre, candidates }) {
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

  const [oldCandidate, setOldCandidate] = useState({
    oldTeamArray: [],
  });

  const { oldA, oldB, oldC } = oldTeam;
  const { teamA, teamB, teamC } = team;
  const { oldTeamArray } = oldCandidate;

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
    const newCandi = candidates.slice();
    if (newCandi.length === 9) {
      const shuffled = shuffle(newCandi);
      const shuffledArray = shuffled.slice();
      setOldCandidate({
        oldTeamArray: shuffledArray,
      });
      setTeam({
        teamA: shuffled.splice(0, 3),
        teamB: shuffled.splice(0, 3),
        teamC: shuffled.splice(0, 3),
      });

      setOldTeam({
        oldA: oldTeamArray.splice(0, 3),
        oldB: oldTeamArray.splice(0, 3),
        oldC: oldTeamArray.splice(0, 3),
      });
    } else {
      alert('9명을 입력하세요.');
    }
  };

  useEffect(() => {
    const conditionA = compareArray(oldA, teamA);
    const conditionB = compareArray(oldB, teamB);
    const conditionC = compareArray(oldC, teamC);
    if (conditionA || conditionB || conditionC) {
      console.log('mixed again');
      onClick();
    }
    /* eslint-disable-next-line */
  }, [teamA, oldA]);

  return (
    <>
      <div>
        <br />
        <br />
        {Agenre}팀: 임원A , {teamA.join(', ')}
        <br />
        <br />
        {Bgenre}팀: 임원B , {teamB.join(', ')}
        <br />
        <br />
        {Cgenre}팀: 임원C , {teamC.join(', ')}
      </div>
      <br />
      <button onClick={onClick}>다음시즌</button>
    </>
  );
}

export default Team;
