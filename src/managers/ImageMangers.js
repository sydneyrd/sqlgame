export const createImage = (image) => {
    return fetch("http://localhost:8000/media/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify(image)
    })
      .then(res => res.json())
  }
