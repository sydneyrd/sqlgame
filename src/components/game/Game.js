import { GameQuestions } from "./GameQuestions"
import { GameInput } from "./GameInput"
import { useState, useEffect } from "react"
import { getQuestionsByDifficulty } from "../../managers/QuestionManagers"
import { getUserById } from "../../managers/UserManagers"
import { getAllSolutions } from "../../managers/SolutionManagers"







export const GamePage = () => {
    const [questions, setQuestions] = useState([])
    const [filteredQuestions, setFiltered] = useState([])
    const [chosenSolution, setChosenSolution] = useState(0)
    const [solutionList, setSolutionList] = useState([])
    const [user, setUser] = useState({})

    const userId = localStorage.getItem('user_id')
    const loadUser = () => getUserById(userId).then(data => setUser(data))
    const loadQuestions = (diff) => getQuestionsByDifficulty(diff).then(data => setQuestions(data))
    const loadSolutions = () => getAllSolutions.then(data => setSolutionList(data))
    useEffect(() => {
        loadUser(userId).then(() => {
        }
        ).then(() => {loadQuestions(user.difficulty)}
        ).then(() => {loadSolutions()})
        
        
        
    }, [])


    return <><h1>Game goes here bb</h1>

    <GameQuestions questions={questions} />
    <GameInput solutionList={solutionList} /></>
}




//get questions by difficulty and all solutions
//pass to input and questions




//pass down to game input and questions
//display inputs and questions (questions one at a time)// 
//correctly answered questions should be removed from the pool of available questions
//after 10 correct questions the difficulty should be increased
//on difficulty increase ideally display an animation of the map increasing in size
//the difficulty increase will get the questions attached to the next difficulty level
//some of the logic may need to be passed instead of in the children modules
//display main animation
//get animations for failure and success
//there should be a button with a pop up containing the erd the user can access