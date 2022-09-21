import { GameQuestions } from "./GameQuestions"
import { GameInput } from "./GameInput"
import { updateScore } from "../../managers/UserManagers"
import { useState, useEffect, useRef, forwardRef } from "react"
import { Slots } from './SlotReels'
import { WinningSlots } from './Slot'





export const GamePage = ({ userId, setQuestions, questions, solutionList, score, setScore }) => {
    const solveRef = useRef([])
    const choiceRef = useRef([])
    const [incorrectSolutions, setIncorrectSolutions] = useState(0)
    const [chosenSolution, setChosenSolution] = useState([])
    const [correctSolutions, setCorrectSolutions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [completedQuestion, setCompletedQuestion] = useState(false)
    const [winLoss, setWinLoss] = useState(null)
    const [counter, setCounter] = useState(0)
    
    const randomQuestion = (qt) => { return qt[Math.floor(Math.random() * qt.length)]; }
    useEffect(() => {
        if (questions?.length >= 0) {
            const qS = [...questions]
            const currentQ = randomQuestion(qS)
            setCurrentQuestion(currentQ)
        } else { }
    }, [questions])
    useEffect(() => {
        if (currentQuestion) {
            const Arr = []
            currentQuestion?.solution?.map(t => Arr.push(t))
            console.log(Arr)
            solveRef.current = currentQuestion?.solution
            setCorrectSolutions(Arr)
        } else { }
    }, [currentQuestion])

    useEffect(() => {
        if (incorrectSolutions >= 2) {
            if (score > 0){ const copyScore = score - 100;
            setScore(copyScore);} else {}
            const qS = [...questions];
            const currentQ = randomQuestion(qS);
            setCurrentQuestion(currentQ);
            setWinLoss(false);
            setCounter(counter+1)
            window.alert('wrong answer');
            setIncorrectSolutions(0);
            const arr = [];
            setChosenSolution(arr);
            let currentScore =
            {"score" : score}
            updateScore(userId, currentScore)
        } else { }
    }, [incorrectSolutions])

    useEffect(() => {
        if (completedQuestion) {
            const qS = [...questions];
            const copyScore = score + 100
            setScore(copyScore) 
            setWinLoss(true)
            setCounter(counter+1)//
            // window.alert('right answer yay');
            setCompletedQuestion(false);
            const arr = [];
            setChosenSolution(arr);
            setIncorrectSolutions(0);
            const newQ = qS.filter(function (item) {
                return item?.id !== currentQuestion?.id
            });
            const currentQ = randomQuestion(qS);
            setCurrentQuestion(currentQ);
            setQuestions(newQ);
        } else { }
let currentScore = 
   {"score" : score}
   updateScore(userId, currentScore)


    }, [completedQuestion])

//       useEffect(() => {
   

//   }, [completedQuestion])




    return <>
        <div className="parent_question_box">
            <GameQuestions currentQuestion={currentQuestion} /></div>
      <div className="parent_solution_slot">  <div className="parent_solution_box">
            <GameInput setWinLoss={setWinLoss}incorrectSolutions={incorrectSolutions} solveRef={solveRef} setIncorrectSolutions={setIncorrectSolutions} choiceRef={choiceRef} completedQuestion={completedQuestion} setCompletedQuestion={setCompletedQuestion} correctSolutions={correctSolutions}
                currentQuestion={currentQuestion} solutionList={solutionList} chosenSolution={chosenSolution} setChosenSolution={setChosenSolution} /></div>
                   
                  
       <div className="slot_animate"><div id="slot_score">{score}</div> <WinningSlots counter={counter} winLoss={winLoss} setWinLoss={setWinLoss}/></div>
   </div></>
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