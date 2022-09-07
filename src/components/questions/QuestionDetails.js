///question details and edit question
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteQuestion, getQuestionById, updateQuestion } from "../../managers/QuestionManagers"



export const QuestionDetails = () => {
    const [question, setQuestion] = useState({})
    const [solutions, setSolutions] = useState([])
    const { questionId } = useParams()
    let navigate = useNavigate()


    useEffect(() => {
        getQuestionById(questionId).then(questionData => setQuestion(questionData))
    }, [questionId])

    // useEffect(() => {
    //     let solution = []
    //     question?.solution?.map(solution => {
    //         solution.push(parseInt(solution?.id))
    //     })

    //     setQuestion(question)
    // }, [questionId])

    const handleDelete = (questionId) => {
        deleteQuestion(questionId).then(() => {
            navigate('/questions')
        })
    }

    return <><section className="section">
        <div className="card">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{question?.label} </p>
                        <p className="subtitle is-6">Difficulty: {question?.difficulty}</p>
                    </div>
                </div> </div>

                <div className="content">
                         {
              question?.solution?.map(sol => {
                return <div key={sol?.id}>{sol?.label}</div>
              })
            } 
                    
                </div>
            <div>
            <button style={{ background: "#D1483F" }} onClick={() => {
                handleDelete()
            }}>Delete</button>
        <Link to={`/questions/${questionId}/edit`} className="card-footer-item">Edit</Link></div>
    </section ></>
}

