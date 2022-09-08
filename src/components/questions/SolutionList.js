import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getAllSolutions, deleteSolution } from "../../managers/SolutionManagers"
import { SolutionAdd } from "./SolutionAdd"

export const SolutionList = ({  }) => {
    let navigate = useNavigate()
    const [solutions, setSolutions] = useState([])
    const [filteredQuestions, setFiltered] = useState([])
    const [chosenSolution, setChosenSolution] = useState(0)
    const [searchTerms, setSearchTerms] = useState("")
    const [solutionList, setSolution] = useState([])
    const { solutionId } = useParams()

    const loadSolutions = () => getAllSolutions().then(data => setSolutions(data))


    const handleDelete = (id) => {
        const confirmBox = window.confirm("Are you sure you want to permanently delete this Solution?   This action cannot be undone")
        if (confirmBox)
            deleteSolution(id).then(() => {
                loadSolutions()
            })
    }

    useEffect(() => {
        loadSolutions()
    }, [])

    return <>
    < SolutionAdd loadSolutions={loadSolutions} />
    {
        solutions.map((solution) => {
            {
                return <tr key={solution.id}>
                    <td><Link to={`/solutions/${solution?.id}`}>{solution?.label}</Link></td>
                    <td>
                        <div className="buttons">
                            <button className="button is-warning" onClick={() => navigate(`/solutions/edit/${solution?.id}`)}>edit</button>
                            <button className="button is-danger" onClick={() => { handleDelete(solution?.id) }}>delete</button>
                        </div>
                    </td>
                </tr>
            }

        })
    }</>
}