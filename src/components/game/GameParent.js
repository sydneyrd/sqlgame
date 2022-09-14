import { GamePage } from "./Game"
// import React from "react";
import { getQuestionsByDifficulty } from "../../managers/QuestionManagers"
import { getUserById } from "../../managers/UserManagers"
import { getAllSolutions } from "../../managers/SolutionManagers"
import { useEffect, useState, useRef } from "react"


export const GameParent = ({ userId }) => {
  const [solutionList, setSolutionList] = useState([])
  const [user, setUser] = useState({})
  const [questions, setQuestions] = useState([])
  const loadUser = (id) => getUserById(id).then(data => setUser(data))
  const loadQuestions = (diff) => getQuestionsByDifficulty(diff).then(data => setQuestions(data))
  const loadSolutions = () => getAllSolutions().then(data => setSolutionList(data)) 
 
  useEffect(() => {
    loadQuestions(1)
    loadUser(userId)
    loadSolutions()
  }, [])






  return <><GamePage questions={questions} solutionList={solutionList} user={user} /></>

};
