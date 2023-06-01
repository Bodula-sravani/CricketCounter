import React, { useState } from "react";

function CounterComponent() {
  const [totalScore, setTotalScore] = useState(0);
  const [noofBalls, setNoOfBalls] = useState(0);
  const [noOfWideBalls, setNoOfWideBalls] = useState(0);
  const [noOfNoBalls, setNoOfNoBalls] = useState(0);
  const [noOfWickets, setNoOfWickets] = useState(0);

  function maxBalls() {
    if (noofBalls >= 20) {
      alert("...Reached maximum no of balls(20)...");
      return true;
    }
    return false;
  }

  function allOut() {
    if (noOfWickets >= 10) {
      alert(".....All Out.....");
      return true;
    }
    return false;
  }

  function updateScore(value) {
    if (!maxBalls() && !allOut()) {
      setTotalScore(totalScore + value);
      setNoOfBalls(noofBalls + 1);
    }
  }

  function wideBall() {
    if (!maxBalls() && !allOut()) {
      setTotalScore(totalScore + 1);
      setNoOfWideBalls(noOfWideBalls + 1);
      setNoOfBalls(noofBalls + 1);
    }
  }

  function noBall() {
    if (!maxBalls() && !allOut()) {
      setTotalScore(totalScore + 1);
      setNoOfNoBalls(noOfNoBalls + 1);
    }
  }

  function wicket() {
    if (!maxBalls() && !allOut()) {
      setNoOfBalls(noofBalls + 1);
      setNoOfWickets(noOfWickets + 1);
    }
  }
  return (
    <React.Fragment>
      <h1>Score Board</h1>
      <h4>Total Runs: {totalScore}</h4>
      <h4>No of Balls: {noofBalls}/20</h4>
      <h4>Wide Balls: {noOfWideBalls}</h4>
      <h4>No Balls: {noOfNoBalls}</h4>
      <h4>Wickets: {noOfWickets}</h4>
      <button onClick={() => updateScore(1)} style={{ marginRight: "10px" }}>
        Run
      </button>
      <button onClick={() => updateScore(2)} style={{ marginRight: "10px" }}>
        Two runs
      </button>
      <button onClick={() => updateScore(3)} style={{ marginRight: "10px" }}>
        Three runs
      </button>
      <button onClick={() => updateScore(4)} style={{ marginRight: "10px" }}>
        Four
      </button>
      <button onClick={() => updateScore(5)} style={{ marginRight: "10px" }}>
        Five runs
      </button>
      <button onClick={() => updateScore(6)} style={{ marginRight: "10px" }}>
        Six
      </button>
      <button onClick={wideBall} style={{ marginRight: "10px" }}>
        WB
      </button>
      <button onClick={noBall} style={{ marginRight: "10px" }}>
        NB
      </button>
      <button onClick={wicket} style={{ marginRight: "10px" }}>
        Wicket
      </button>
    </React.Fragment>
  );
}

export default CounterComponent;
