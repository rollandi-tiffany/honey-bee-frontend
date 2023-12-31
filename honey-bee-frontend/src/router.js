import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { indexLoader, showLoader, usersLoader, usersShowLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { createAction, updateAction, deleteAction } from "./actions"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
//import Home from "./pages/Home"
import Post from "./components/Post"
import User from "./pages/User"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path="post/:id" element={<Show/>} loader={showLoader}/>
            <Route path="sitters" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
            <Route path="login" element={<Login />} loader={usersLoader} />
            <Route path="signup" element={<Signup />} loader={usersLoader} />
            <Route path="user/:id" element={<User />} loader={usersShowLoader}/>
            <Route path="logout" element={<Post/>}/>
        </Route>
    </>
))

export default router