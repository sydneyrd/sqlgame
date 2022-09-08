import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { updateSolution } from "../../managers/SolutionManagers"
import { getSolutionById } from "../../managers/SolutionManagers"

export const SolutionEdit = () => {

    const [solution, setSolution] = useState({})
    let navigate = useNavigate()
    const { solutionId } = useParams()

    useEffect(() => {
        getSolutionById(solutionId).then(solutionsData => setSolution(solutionsData))
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        let copySolution = { ...solution }
        const solutionData = {
            label: copySolution?.label
        }
        updateSolution(solutionId, solutionData).then(() => {
            navigate(`/solutions`)
        })
    }
    const handleChange = (event) => {
        const newSolution = { ...solution }
        newSolution[event.target.name] = event.target.value
        setSolution(newSolution)
    }
    return <section className="section">
        <article className="panel is-info">
            <h2 className="panel-heading">Create Solution</h2>
            <div className="panel-block">
                <form style={{ width: "100%" }}>
                    <div className="field">
                        <label htmlFor="question" className="question">Solution: </label>
                            <div className="control">
                                <div className="control">
                                    <textarea
                                    className="textarea"
                                    name="label"
                                    value={solution?.label}
                                    onChange={handleChange}
                                    />
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
                    </div>
                </form>
            </div>
        </article>
    </section>
}