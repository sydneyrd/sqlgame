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

export const GameInput = ({ solutionList, currentQuestion, chosenSolution, setChosenSolution, correctSolutions }) => {
    const handleSelect = (evt) => {
        let sol = evt.target.value
        updateSolutions(parseInt(sol))

    }
    // useEffect(() => {
    // const solutionOptions = currentQuestion?.solution.concat(randomSolutions)
    // setSolOptions(solutionOptions)
    // const arr = []
    // const solOpt = currentQuestion?.solution.map((s) => {arr.concat(s)})
    //   setSolOptions(arr)

    // }, [])
    const updateSolutions = (solutionId) => {
        let solutionsCopy = [...chosenSolution]
        const index = solutionsCopy.indexOf(solutionId)
        if (index < 0) {
            solutionsCopy.push(solutionId)
        } else {
            solutionsCopy.splice(index, 1)
        }
        setChosenSolution(solutionsCopy)
    }
        ///get the correct solutions.   find how many there are, add the amount of random solutions to get the full number of options.  6?
        //map the newly created array of options containing the correct and random incorrect answers
// function handleSubmit()

    function getRandomSolutions(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);}
    
        const randomSolutions = getRandomSolutions(solutionList, 2)
    
    
    
    
    
    return <>GAME INPUTS DISPLAY
        {randomSolutions.map((sol) => {
            { return <><button onClick={(evt) => {handleSelect(evt)}} value={sol.id}> {sol.label}</button></> }
        })}<div><button>Submit</button></div></>

}