import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { indexLoader, showLoader, usersLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { createAction, updateAction, deleteAction } from "./actions"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
//import Home from "./pages/Home"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="index" element={<Index/>} loader={indexLoader}/>
            <Route path="post/:id" element={<Show/>} loader={showLoader}/>
            <Route path="sitters" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
            <Route path='' element={<Login />} loader={usersLoader} />
            <Route path='signup' element={<Signup />} loader={usersLoader} />
        </Route>
    </>
))

export default router