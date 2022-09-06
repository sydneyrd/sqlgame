import { useEffect, useState } from "react"

// import { getSubscribedPosts } from "../../managers/PostManager"
// import { PostsTable } from "../posts/PostsTable"


export const HomePage = () => {
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//  getSubscribedPosts().then(setPosts)
//   }, [])
 


  return <section className="section">
    <article className="panel is-info">
      <p className="panel-heading">
        HERE IS THE HOME PAGE FOR USERS AND MAYBE ADMIN TOO IDK
      </p>


      {/* <div className="panel-block">
        <PostsTable posts={posts} />
      </div> */}
    </article>
  </section>
}
