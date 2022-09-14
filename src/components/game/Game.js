import { GameQuestions } from "./GameQuestions"
import { GameInput } from "./GameInput"
import { useState, useEffect, useRef } from "react"


export const GamePage = ({userId, questions, solutionList}) => {
    const solveRef = useRef([])
    const choiceRef = useRef([])
    const [chosenSolution, setChosenSolution] = useState([])//no input on render
    const [correctSolutions, setCorrectSolutions] = useState([])//not loading on rerender
    const [currentQuestion, setCurrentQuestion] = useState({})//not loading on rerender
    const [completedQuestion, setCompletedQuestion] = useState(false)// not functioning
    const randomQuestion = (qt) => { return qt[Math.floor(Math.random() * qt.length)]; }
    

    useEffect(() => {
if  (questions?.length >= 0) 
{       const qS = [ ...questions ]
        const currentQ = randomQuestion(qS)
        setCurrentQuestion(currentQ)
        // const Arr = []
        // currentQuestion?.solution?.map(t => Arr.push(t))
        // console.log(Arr)
        // solveRef.current = currentQuestion?.solution
        // setCorrectSolutions(Arr)
} else {}
}, [questions])

useEffect(() => {
    if  (currentQuestion) 
    {       
            const Arr = []
            currentQuestion?.solution?.map(t => Arr.push(t))
            console.log(Arr)
            solveRef.current = currentQuestion?.solution
            setCorrectSolutions(Arr)
    } else {}
    }, [currentQuestion])
    


function getRandomSolutions(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);}
const optLength = correctSolutions.length; 
const extraSol = (6 - optLength); //how many extra do we need to have 6 options including correct
const optArr = solutionList.filter(sol => !correctSolutions.some(s => s?.label === sol?.label))//create a new array of incorrect solutions to add to correct solutions for 6 options
const randomSolutions = getRandomSolutions(optArr, extraSol); //creates a randomized array of the incorrect solutions, only returns enough to create 6 options - yes
const createOptions = randomSolutions.concat(correctSolutions);//join the new extra option incorrect array, and the correct array - yes
const shuffledOptions = getRandomSolutions(createOptions, 6);//shuffle the complete array of 6 including all the correct sol and extra incorrect as needed for 6

 
    return <><h1>Game goes here bb</h1>
        <div>
            <GameQuestions currentQuestion={currentQuestion} /></div>
        <div>
            <GameInput solveRef={solveRef} choiceRef={choiceRef} completedQuestion={completedQuestion}setCompletedQuestion={setCompletedQuestion} correctSolutions={correctSolutions} 
            currentQuestion={currentQuestion} solutionList={solutionList} chosenSolution={chosenSolution} setChosenSolution={setChosenSolution} /></div></>
}





// /get difficulty from score change score into string, take first character and use that to get the difficulty, not session score, but overall score
// get maps on the same difficulty
// display inputs and questions (questions one at a time)// 
// correctly answered questions should be removed from the pool of available questions
// after 10 correct questions the difficulty should be increased
// on difficulty increase ideally display an animation of the map increasing in size
// the difficulty increase will get the questions attached to the next difficulty level
// some of the logic may need to be passed instead of in the children modules
// display main animation
// get animations for failure and success
// there should be a button with a pop up containing the erd the user can acc////