import { GameQuestions } from "./GameQuestions"
import { GameInput } from "./GameInput"
import { useState, useEffect, useRef } from "react"


export const GamePage = ({userId, questions, solutionList}) => {
    const solveRef = useRef([])
    const solutionRef = useRef([])
    const [chosenSolution, setChosenSolution] = useState([])//no input on render
    const [correctSolutions, setCorrectSolutions] = useState([])//not loading on rerender
    const [currentQuestion, setCurrentQuestion] = useState({})//not loading on rerender
    const [completedQuestion, setCompletedQuestion] = useState(false)// not functioning
    const randomQuestion = (qt) => { return qt[Math.floor(Math.random() * qt.length)]; }
    

    useEffect(() => {
if  (questions.length > 0) 
{       let qS = [ ...questions ]
        let currentQ = randomQuestion(qS)
        setCurrentQuestion(currentQ)
        const Arr = []
        currentQuestion?.solution?.map(t => Arr.push(t))
        console.log(Arr)
        solveRef.current = Arr
        setCorrectSolutions(Arr)
} else {}
      
 }, [questions])


    return <><h1>Game goes here bb</h1>
        <div>
            <GameQuestions currentQuestion={currentQuestion} /></div>
        <div>
            <GameInput solutionRef={solutionRef} completedQuestion={completedQuestion}setCompletedQuestion={setCompletedQuestion} correctSolutions={correctSolutions} 
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