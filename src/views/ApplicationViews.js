import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { GamePage } from "../components/game/Game"
import { Questions } from "../components/admin.js/Questions"
import { AccountForm } from "../components/account.js/AccountForm"
import { Users } from "../components/users/Users"
import { HomePage } from "../components/home/Home"
import {UserDetail} from "../components/users/UserDetails"
import {UserEdit} from "../components/users/UserEdit"
import {Profile } from "../components/profile/Profile"


export const ApplicationViews = ({ isStaff, token, setToken, setUserId, userId, isActive }) => {
  return <Routes>
    
    <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} />} />
    <Route path="/register" element={<Register setToken={setToken} setUserId={setUserId} />} />
    <Route path="/game" element={<GamePage />} />
    <Route element={<Authorized token={token} isActive={isActive} />}>
    <Route path="/home" element={<HomePage />} />
    <Route path="/profile" element={< Profile />} />
      {/* Add Routes here */}
      {/* 
      <Route path="/account" element={<Account />} /> */}
        
      {/* <Route path="/posts" element={<PostList />} />
      <Route path="/my-posts" element={<MyPost />} />
      <Route path="/posts/create" element={<PostForm />} />
      <Route path="/posts/:postId/edit" element={<EditPost />} />
      <Route path="/authors/:authorId" element={<AuthorDetails />} />
      <Route path="/posts/:postId/comments" element={<CommentsList userId={userId} />} />
      <Route path="/posts/:postId" element={<PostDetails userId={userId} />} />
      <Route path="/posts/:postId/add-comment" element={<CommentForm />} />
      <Route path="/posts/:postId/comments/:commentId/edit" element={<CommentEdit />} />
      <Route path="/users/:userId" element={<UserDetail />} /> */}
      {
          isStaff === true
            ? <>
            <Route path="/users">
                <Route index element={<Users />} />
                <Route path=":userId" element={<UserDetail />} />
                <Route path=":userId/edit" element={<UserEdit />} />
              </Route>
              <Route path="/questions">
                <Route index element={<Questions />} />
                {/* <Route path=":questionId/edit" element={<QuestionEdit />} />
                <Route path="/add" element={<QuestionForm />} /> */}
              </Route>
              </>
            : ""
        }
    </Route>
  </Routes>
}
