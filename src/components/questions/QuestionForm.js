import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { createQuestion, getQuestionById, updateQuestion } from "../../managers/QuestionManagers"
import { getAllSolutions } from "../../managers/SolutionManagers"

export const QuestionForm = () => {

    const [solutions, setSolutions] = useState([])
    const [question, setQuestion] = useState({})
    const [solutionsForQuestion, setSolutionForQuestion] = useState([])
    let navigate = useNavigate()
    const [difficulty, setDifficulty] = useState(false)
    const { questionId } = useParams()

    useEffect(() => {
        getAllSolutions().then(solutionsData => setSolutions(solutionsData)).then(
            getQuestionById(questionId).then(questionData => setQuestion(questionData))
        )
    }, [])
    const updateSolutions = (solutionId) => {
        let solutionsCopy = [...solutionsForQuestion]
        const index = solutionsCopy.indexOf(solutionId)
        if (index < 0) {
            solutionsCopy.push(solutionId)
        } else {
            solutionsCopy.splice(index, 1)
        }
        setSolutionForQuestion(solutionsCopy)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()

        const solutionData = {
            ...question,
            solution: solutionsForQuestion
        }
        updateQuestion(questionId, solutionData).then(() => {
            navigate(`/questions`)
        })
    }
    const handleChange = (event) => {
        const newQuestion = { ...question }
        newQuestion[event.target.name] = event.target.value
        setQuestion(newQuestion)
    }
    return <section className="section">
        <article className="panel is-info">
            <h2 className="panel-heading">Create post</h2>
            <div className="panel-block">
                <form style={{ width: "100%" }}>
                    <div className="field">
                        <label htmlFor="question" className="question">Question: </label>
                        <div className="control">
                            <div className="control">
                                <textarea
                                    className="textarea"
                                    name="label"
                                    value={question?.label}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="difficulty" className="label">Difficulty: </label>
                        <div className="control">
                            <div className="select">
                                <input type="number" min="1" max="10" name="difficulty"
                                    value={question?.difficulty}
                                    onChange={handleChange} />
                                {/* //this field might be multiselectable for drop downs maybe easier */}
                            </div>
                            <div className="field">
                                <label htmlFor="solutions" className="solution">Solutions: </label>
                                {
                                    solutions.map(sol => {
                                        return (
                                            <div className="field" key={`sol--${sol.id}`}>
                                                <div className="control">
                                                    <label className="checkbox" htmlFor={sol?.label}>
                                                        <input type="checkbox" name={sol?.label}
                                                            checked={solutionsForQuestion.includes(sol.id)}
                                                            onChange={() => {
                                                                updateSolutions(sol.id)
                                                            }} />
                                                        {sol.label}
                                                    </label>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button type="submit"
                                        onClick={handleSubmit}
                                        className="button is-link">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </article>
    </section>
}