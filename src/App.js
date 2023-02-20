import React from "react";
import "./App.css";
import { Progress } from "./progress";

function App() {
  const [score, setScore] = React.useState(0);
  const [mistakes, setMiskates] = React.useState(0);
  const [currentProblem, setCurrentProblem] = React.useState(generateProblem());
  const [userAnswer, setUserAnswer] = React.useState("")

  function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  function generateProblem() {
    return {
      numberOne: generateNumber(10),
      numberTwo: generateNumber(10),
      operator: ["+", "-", "x"][generateNumber(2)],
    };
  }

  function handleSubmit(e){
    e.preventDefault()
    let correctAnswer;

    if (currentProblem.operator == "+") 
      correctAnswer = currentProblem.numberOne + currentProblem.numberTwo
    if (currentProblem.operator == "-") 
      correctAnswer = currentProblem.numberOne - currentProblem.numberTwo
    if (currentProblem.operator == "x") 
      correctAnswer = currentProblem.numberOne * currentProblem.numberTwo

    if (correctAnswer == parseInt(userAnswer, 10)) {
      setScore(prev => prev + 1)
      setCurrentProblem(generateProblem())
      setUserAnswer("")
    }else{
      setMiskates (prev => prev + 1)
      setCurrentProblem(generateProblem())
      setUserAnswer("")
    }
    
    
  }

  function handleReset(){
    setScore(0)
    setMiskates(0)
    setUserAnswer("")
    setCurrentProblem(generateProblem())
   }

  return (
    <>
      <div className={"main-ui" + (mistakes == 3 || score == 10 ? " blurred" : "")}>
        <p className="problem">
          {currentProblem.numberOne} {currentProblem.operator} {currentProblem.numberTwo}
        </p>

        <form action="" className="our-form" onSubmit={handleSubmit}>
          <input 
          type="text" 
          className="our-field" 
          autocomplete="off" 
          onChange={(e) => {
            setUserAnswer(e.target.value)
          }}
          value={userAnswer}

          />
          <button>Submit</button>
        </form>
        <p className="status">
          You need {10 - score} more points, and are allowed to make{" "}
          {2 - mistakes} more mistakes.
        </p>

        <Progress score={score}/>
      </div>

      <div
        className={
          "overlay" + (mistakes == 3 || score == 10 ? " overlay--visible" : "")
        }
      >
        <div className="overlay-inner">
          <p className="end-message">{score == 10 ? "You won!" : "You lost"}</p>
          <button onClick={handleReset} className="reset-button">
            Start Over
          </button>
        </div>
      </div>
    </>
  );

}

export default App;
