function OpeningCeremony(callbackFnc) {
    console.log("Let the games begin!");
    const score = { red: 0, blue: 0, green: 0, yellow: 0 };
    setTimeout(() => {
      Race100M(score, callbackFnc);
    }, 1000);
  }
  
   function Race100M(score, callbackFnc) {
    
    setTimeout(() => {
        console.log("Race 100m begins!");
        const minTime = 10;
        const maxTime = 15;    
        const times = {
          red: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
          blue: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
          green: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
          yellow: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
        };
        
        let ranking = []; // key:value
        for (let color in times) {
          ranking.push({ color, time: times[color] });
        }
        // console.log(ranking);
        ranking.sort((a, b) => a.time - b.time);
        score[ranking[0].color] += 50;
        score[ranking[1].color] += 25;
        console.log("Score after Race 100m:", score);
        LongJump(score, callbackFnc);
    }, 3000);
  }

  function LongJump(score, callbackFnc) {
    console.log("Long Jump begins!");
    const colors = ["red", "yellow", "blue", "green"];
    const winningColor = colors[Math.floor(Math.random() * colors.length)];
    score[winningColor] += 150;
    console.log("Score after Long Jump:", score);
    setTimeout(() => {
      HighJump(score, callbackFnc);
    }, 2000);
  }
  
  function HighJump(score, callbackFnc) {
    console.log("High Jump begins!");
    let color = prompt("What color secured the highest jump?");
    if (!color || !score[color]) {
      console.log("Event was cancelled");
      callbackFnc(score);
    } else {
      score[color] += 100;
      console.log("Score after High Jump:", score);
      callbackFnc(score);
    }
  }
  
  function AwardCeremony(score) {
    console.log("Award Ceremony begins!");
    let sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
       console.log(
      `${sorted[0][0]} came first with ${sorted[0][1]} points.`+"\n"+
      `${sorted[1][0]} came second with ${sorted[1][1]} points.`+"\n"+
      `${sorted[2][0]} came third with ${sorted[2][1]} points.`
    ); 
  }
  
  OpeningCeremony(AwardCeremony);
  