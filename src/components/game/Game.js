import { GameQuestions } from "./GameQuestions"
import { GameInput } from "./GameInput"
import { useState, useEffect, useRef } from "react"
import { getQuestionsByDifficulty } from "../../managers/QuestionManagers"
import { getUserById } from "../../managers/UserManagers"
import { getAllSolutions } from "../../managers/SolutionManagers"

export const GamePage = () => {
    const questRef = useRef({})
    const solveRef = useRef([])
    const [questions, setQuestions] = useState([])
    const [chosenSolution, setChosenSolution] = useState([])
    const [solutionList, setSolutionList] = useState([])
    const [user, setUser] = useState({})
    const [difficulty, setDifficulty] = useState(0)
    const [score, setScore] = useState(0)
    const [sessionScore, setSessionScore] = useState(0)
    const [correctSolutions, setCorrectSolutions] = useState([])
    const [usedQuestions, setUsedQuestions] = useState([])
    const [question, setCurrentQuestion] = useState({})
    const [completedQuestion, setCompletedQuestion] = useState(false)
    const userId = localStorage.getItem('user_id')
    const loadUser = () => getUserById(userId).then(data => setUser(data))
    const loadQuestions = (diff) => getQuestionsByDifficulty(diff).then(data => setQuestions(data))
    const loadSolutions = () => getAllSolutions().then(data => setSolutionList(data))
    const random_question = (questions) => { return questions[Math.floor(Math.random() * questions.length)]; }
    
    
    //convert the score into a string?  get only the first number, use that to set difficulty
    //useeffect watches score on appropriate increase get appropriate questions and send score here?  not sure
    //maybe better way to get just the first integer would need to max out at 10, check to see if maxed before comparison so if your score is 1000 you don't get level 1 questions
// useEffect(() => {}, [])  // we need to check for a complete set of correct answers, 

    useEffect(() => {
        loadUser(userId).then(() => {
        }
        ).then(() => { loadQuestions(1) } ///duh no diff on user, only on questions.  need to grab the user score first to determine difficulty. 
        ).then(() => { loadSolutions() }
        )
        let qS = [...questions ]
        const currentQ = random_question(qS)
        setCurrentQuestion(currentQ)
        console.log(question) 
    }, [])
    useEffect(() => {
        
    }, [])

    useEffect(() => {
        let qS = [...questions ]
        let currentQuestion = random_question(qS)
        setCurrentQuestion(currentQuestion)
        let Arr = []
        currentQuestion?.solution.map(t => Arr.push(t))
        solveRef.current = Arr
        setCorrectSolutions(Arr)
        console.log(currentQuestion)
    }, [completedQuestion])

    return <><h1>Game goes here bb</h1>
        <div>
            <GameQuestions questRef={questRef} questions={questions} question={question} /></div>
        <div>
            <GameInput completedQuestion={completedQuestion}setCompletedQuestion={setCompletedQuestion} correctSolutions={correctSolutions} 
            question={question} solutionList={solutionList} chosenSolution={chosenSolution} setChosenSolution={setChosenSolution} /></div></>
}
// setSolutionOptions={setSolutionOptions} solutionOptions={solutionOptions} 
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