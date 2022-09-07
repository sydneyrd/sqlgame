import { useEffect, useState } from "react"
import { getAllQuestions, getQuestionsByDifficulty, getQuestionsBySearch} from "../../managers/QuestionManagers"
import { QuestionList } from "./QuestionList"


export const Questions = () => {
    const [questions, setQuestions] = useState([])
    const [filteredQuestions, setFiltered] = useState([])
    const [chosenSolution, setChosenSolution] = useState(0)
    const [searchTerms, setSearchTerms] = useState("")
    const [solutionList, setSolution] = useState([])

    const loadQuestions = () => getAllQuestions().then(data => setQuestions(data))
    //   const loadUsers = () => getAllUsers().then(data => setUsers(data))
    //   const loadCategories = () => getAllCategories().then(data => setCategories(data))
    //   const loadTags = () => getAllTags().then(data => setTagList(data))

    useEffect(() => {
        loadQuestions()
    }, [])

    // useEffect(
    //     () => {
    //         if (chosenSolution === 0) {
    //             setFiltered(posts)
    //         }
    //         else {
    //             getPostsByCategory(chosenCat)
    //                 .then((data) => {
    //                     setFiltered(data)
    //                 })
    //         }
    //     },
    //     [chosenCat, posts] this is to search by solution/category
    // )

    // useEffect(
    //     () => {
    //         if (chosenSolution === 0) {
    //             setFiltered(posts)
    //         }
    //         else {
    //             getPostsByTag(chosenTag)
    //                 .then((data) => {
    //                     setFiltered(data)
    //                 })
    //         }
    //     },
    //     [chosenTag, posts]
    // )

    // useEffect(
    //     () => {
    //         if (chosenUser === 0) {
    //             setFiltered(posts)
    //         }
    //         else {
    //             getPostsByUser(chosenUser)
    //                 .then((data) => {
    //                     setFiltered(data)
    //                 })
    //         }
    //     },
    //     [chosenUser, posts]
    // )

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

            {/* <select className="categoryFilter" onChange={(event) => {
                let chosenSolution = event.target.value
                setChosenSolution(parseInt(chosenSolution))
            }}>
                <option value="0">Filter by Category...</option>
                {categoryList.map(category => {
                    return <option value={`${category.id}`}>{category.label}</option>
                })}
            </select> */}
            {/* <select className="userFilter" onChange={(event) => {
                let chosen = event.target.value
                setChosenUser(parseInt(chosen))
            }}>
                <option value="0">Filter by User...</option>
                {userList.map(user => {
                    return <option value={`${user.id}`}>{user?.user?.username}</option>
                })}
            </select>
            <select className="tagFilter" onChange={(event) => {
                let chosenT = event.target.value
                setChosenTag(parseInt(chosenT))
            }}>
                <option value="0">Filter by Tag...</option>
                {tagList.map(tag => {
                    return <option value={`${tag.id}`}>{tag.label}</option>
                })}
            </select> */}
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
                <QuestionList questions={filteredQuestions} />
            </div>
        </article>
    </section>
}
