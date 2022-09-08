//need to get all inputs
//randomly display correct input 
//randomly display incorrect inputs
// check to see if inputs match question.solution
//on incorrect input show random failure animation decrease score
// on correct input show success animation increase score
//
//when new question is presented
//new input options are displayed


export const GameInput = ({ solutionList, chosenSolution, setChosenSolution }) => {
    
    const handleSelect = (evt) => {
        let sol = evt.target.value
        updateSolutions(parseInt(sol))

    }
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
    
    
    
    
    return <>GAME INPUTS DISPLAY
        {solutionList.map((sol) => {
            { return <><button onClick={(evt) => {handleSelect(evt)}}value={sol.id}> {sol.label}</button></> }
        })}</>

}