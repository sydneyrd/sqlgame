////I need to get all games with the specified difficulty,
///pick one at random
///display
///wait for input
//display score on screen
//on correct input increase score
//on incorrect input decrease score
//on session leave, with each score adjustment, (less taxing on the front end would be to do only once on leave) need to save session score and add to score
//correctly answered questions should be removed from the pool of available questions
//on 10 correct answers the difficulty should increase, get new questions


export const GameQuestions = ({questions}) => {
    return <>HERE IS WHERE GAME QUESTIONS WILL BE DISPLAYED
    return <>GAME INPUTS DISPLAY
        {questions.map((sol) => {
            { return <>sol.label</> }
        })}</></>
}