//need to get all inputs
//randomly display correct input 
//randomly display incorrect inputs
// check to see if inputs match question.solution
//on incorrect input show random failure animation decrease score
// on correct input show success animation increase score
//
//when new question is presented
//new input options are displayed
import { useEffect, useState } from "react"

export const GameInput = ({ solutionList, setSolutionOptions, solutionOptions,  currentQuestion, chosenSolution, setChosenSolution, correctSolutions }) => {
     
    function getRandomSolutions(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);}
    const optLength = correctSolutions.length; 
    const extraSol = (6 - optLength); //how many extra do we need to have 6 options including correct
    const optArr = solutionList.filter(sol => correctSolutions.filter(solution => solution.id != sol.id));//create a new array of incorrect solutions to add to correct solutions for 6 options
    const randomSolutions = getRandomSolutions(optArr, extraSol); //creates a randomized array of the incorrect solutions, only returns enough to create 6 options
    const createOptions = randomSolutions.concat(correctSolutions);//join the new extra option incorrect array, and the correct array
    const shuffledOptions = getRandomSolutions(createOptions, 6);//shuffle the complete array of 6 including all the correct sol and extra incorrect as needed for 6
        // console.log(shuffledOptions);

    const handleSelect = (event, obj) => {
        // event.preventDefault
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
        setChosenSolution(solutionsCopy)
    }


// function handleSubmit()
    return <>GAME INPUTS DISPLAY
        {shuffledOptions.map((sol) => {
            { return <><button onClick={(event) => {handleSelect(event, sol)}} value={sol.id}> {sol.label}</button></> }
        })}<div><button>Submit</button></div></>

}