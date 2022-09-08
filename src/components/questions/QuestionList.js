import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deleteQuestion } from "../../managers/QuestionManagers"

export const QuestionList = ({ questions, loadQuestions }) => {
    let navigate = useNavigate()
    //   useEffect(() => {
    //     let isStaff=localStorage.getItem("is_staff")
    //     setStaff(isStaff)
    //   }, [])
    const handleDelete = (id) => {
        const confirmBox = window.confirm("Are you sure you want to permanently delete this Question?   This action cannot be undone")
        if (confirmBox)
            deleteQuestion(id).then(() => {
                loadQuestions()
            })
    }
    return <table className="table is-fullwidth">
        <thead>
            <tr>
                <th>Label</th>
                <th>Difficulty</th>
                <th>Solutions</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                questions.map((question) => {
                    {
                        return <tr key={question.id}>
                            <td><Link to={`/questions/${question?.id}`}>{question?.label}</Link></td>
                            <td>{question?.difficulty}</td>
                            <td>{question?.solution?.label}</td>
                            <td>
                                <div className="buttons">
                                    <button className="button is-warning" onClick={() => navigate(`/questions/edit/${question?.id}`)}>edit</button>
                                    <button className="button is-danger" onClick={() => { handleDelete(question?.id) }}>delete</button>
                                </div>
                            </td>
                        </tr>
                    }

                })
            }
        </tbody>
    </table>
}
