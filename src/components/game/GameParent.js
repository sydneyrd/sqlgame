import { GamePage } from "./Game"
import React from "react";
import { getQuestionsByDifficulty } from "../../managers/QuestionManagers"
import { getUserById } from "../../managers/UserManagers"
import { getAllSolutions } from "../../managers/SolutionManagers"
import { useEffect, useState, useRef } from "react"
import { render } from "react-dom";
import ReactDOM from 'react-dom'
import Popup from './Erd';
import './game.css'


export const GameParent = ({ userId }) => {
  const [solutionList, setSolutionList] = useState([])
  const [user, setUser] = useState({})
  const [questions, setQuestions] = useState([])
  const loadUser = (id) => getUserById(id).then(data => setUser(data))
  const loadQuestions = (diff) => getQuestionsByDifficulty(diff).then(data => setQuestions(data))
  const loadSolutions = () => getAllSolutions().then(data => setSolutionList(data))
  const gameRef = useRef()
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0)
  const [difficulty, setDifficulty] = useState(0)
  useEffect(() => {
    loadUser(userId)
    loadSolutions()
  }, [])

  useEffect(() => {

    let diff = user.score
    console.log(user.score)
    if (diff > 1000) {
      loadQuestions(10)
      
    }
    else {
      for (let j = 100; j < 1000; j += 100) {
        if (diff < j) {
          let i = (j / 100);
          setDifficulty(i)  
          loadQuestions(i)
          break
        }
        else { }
      }
    }
  
  }, [user])





  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return <>
    <input
      type="button"
      value="Click to view ERD"
      onClick={togglePopup}
    />


    {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
      </>}
      handleClose={togglePopup}
    />}
    <GamePage setQuestions={setQuestions} score={score} setScore={setScore} questions={questions} solutionList={solutionList} user={user} />



  </>

};
