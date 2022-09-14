import { useEffect, useState } from "react"
import { getAllQuestions, getQuestionsBySearch} from "../../managers/QuestionManagers"
import { QuestionList } from "./QuestionList"
import { QuestionAdd } from "./QuestionAdd"
import { Solution } from "./Solution"


export const Questions = () => {
    const [questions, setQuestions] = useState([])
    const [filteredQuestions, setFiltered] = useState([])
    const [chosenSolution, setChosenSolution] = useState(0)
    const [searchTerms, setSearchTerms] = useState("")
    const [solutionList, setSolution] = useState([])

    const loadQuestions = () => getAllQuestions().then(data => setQuestions(data))
    useEffect(() => {
        loadQuestions()
    }, [])

    useEffect(
        () => {
            if (searchTerms !== "") {
                getQuestionsBySearch(searchTerms).then(data => setFiltered(data))
            }
            else {
                setFiltered(questions)
            }
        },
        [searchTerms, questions]
    )

    return <section className="section">
        <article className="panel is-info">
            <p className="panel-heading">
                Posts
            </p>
            <div className="searchBar">
                <input
                    type="text"
                    placeholder="Input Keyword..."
                    onChange={
                        (changeEvent) => {
                            let search = changeEvent.target.value
                            setSearchTerms(search)
                        }
                    }
                />
            </div>

            <div className="panel-block">
                <QuestionList loadQuestions={loadQuestions} questions={filteredQuestions} />
            </div>
            <div><QuestionAdd loadQuestions={loadQuestions} /></div>
        </article>
    </section>
}
