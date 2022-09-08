
export const getAllSolutions = () => {
    return fetch("http://localhost:8000/solutions", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}
export const createSolution = (solution) => {
    return fetch("http://localhost:8000/solutions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(solution)
    })
        .then(res => res.json())
}
export const getSolutionById = id => {
    return fetch(`http://localhost:8000/solutions/${id}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}
export const updateSolution = (id, solution) => {
    return fetch(`http://localhost:8000/solutions/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(solution)
    })
}