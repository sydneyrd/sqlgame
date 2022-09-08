//need to get all inputs
//randomly display correct input 
//randomly display incorrect inputs
// check to see if inputs match question.solution
//on incorrect input show random failure animation decrease score
// on correct input show success animation increase score
//
//when new question is presented
//new input options are displayed


export const GameInput = ({ solutionList }) => {
    return <>GAME INPUTS DISPLAY
        {solutionList.map((sol) => {
            { return <>sol.label</> }
        })}</>

}