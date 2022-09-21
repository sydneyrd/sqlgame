// //need to get all inputs
// //randomly display correct input 
// //randomly display incorrect inputs
// // check to see if inputs match question.solution
// //on incorrect input show random failure animation decrease score
// // on correct input show success animation increase score
// //
// //when new question is presented
// //new input options are displayed
import { useEffect, useState, useRef } from "react"
// import React from "react";



export const GameInput = ({ setCompletedQuestion, incorrectSolutions, setIncorrectSolutions, setWinLoss, choiceRef, solutionList, completedQuestion, chosenSolution, setChosenSolution, correctSolutions }) => {
  function getRandomSolutions(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  const optLength = correctSolutions.length;
  const extraSol = (6 - optLength); //how many extra do we need to have 6 options including correct
  const optArr = solutionList.filter(sol => !correctSolutions.some(s => s?.label === sol?.label))//create a new array of incorrect solutions to add to correct solutions for 6 options
  const randomSolutions = getRandomSolutions(optArr, extraSol); //creates a randomized array of the incorrect solutions, only returns enough to create 6 options - yes
  const createOptions = randomSolutions.concat(correctSolutions);//join the new extra option incorrect array, and the correct array - yes
  const shuffledOptions = getRandomSolutions(createOptions, 6);//shuffle the complete array of 6 including all the correct sol and extra incorrect as needed for 6

  const handleSelect = (click, obj) => {
    click.preventDefault()
    updateSolutions(obj)
  }
  const updateSolutions = (obj) => {
    let solutionsCopy = [...chosenSolution]
    const index = solutionsCopy.indexOf(obj.id)
    if (index < 0) {
      solutionsCopy.push(obj)
    } else {
      solutionsCopy.splice(index, 1)
    }
    setChosenSolution(solutionsCopy);
    choiceRef.current = chosenSolution
  }

  function areEqual(array1, array2) {
    array1?.sort();
    array2?.sort();
    if (array1.length === array2.length) {
      return array1.every((element, index) => {
        if (element === array2[index]) {
          return true;
        }
        return false;
      });
    }
    return false;
  }

  useEffect(() => {
    if (chosenSolution.length && areEqual(chosenSolution, correctSolutions)) {
      setCompletedQuestion(true)
      setIncorrectSolutions(0)
    } else if (chosenSolution.length && chosenSolution.some(r => correctSolutions.indexOf(r) >= 0)) {
    } else if (incorrectSolutions >= 2) {
      setIncorrectSolutions(0);
      setCompletedQuestion(false);
      const arr = [];
      setChosenSolution(arr);
      setWinLoss(false)
     } else {
      setCompletedQuestion(false)
      let count = incorrectSolutions
      let counted = count + 1
      setIncorrectSolutions(counted)
      console.log('no')
    }
  }, [chosenSolution])

  // const ok = correctSolutions.includes(el => chosenSolution.forEach(el))
  // console.log(ok)

  const found = chosenSolution.find(element => element > 10);

  return <>
    {shuffledOptions.map((sol) => {
      { return <><button className="solution_button" key={sol?.id} onClick={(click) => { handleSelect(click, sol) }} value={sol?.id}> {sol?.label}</button></> }
    })}   </>
};