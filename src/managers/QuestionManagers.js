export const getAllQuestions = () => {
    return fetch("http://localhost:8000/questions", {
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    })
      .then(res => res.json())
  }
  export const createQuestion = (question) => {
    return fetch("http://localhost:8000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify(question)
    })
      .then(res => res.json())
  }
  export const getQuestionById = id => {
    return fetch(`http://localhost:8000/questions/${id}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    })
      .then(res => res.json())
  }
  
  export const updateQuestion = (id, question) => {
    return fetch(`http://localhost:8000/questions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify(question)
    })
  }
  export const getQuestionsByDifficulty = (id) => {
    return fetch(`http://localhost:8000/questions?difficulty=${id}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    })
      .then(res => res.json())
  }
  
  export const getQuestionsBySearch = (searchTerms) => {
    return fetch(`http://localhost:8000/questions?search=${searchTerms}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    }).then(res => res.json())
  }
  
  export const deleteQuestion = (questionId) => {
    return fetch(`http://localhost:8000/questions/${questionId}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    })
  }