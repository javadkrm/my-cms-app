import Dashboard from "./pages/dashboard/Dashboard"
import Projects from "./pages/projects/Projects"
import NewUsers from "./components/newUsers/NewUsers"
import Users from "./components/users/Users"
import UsersList from "./components/usersList/UsersList"
import MainUser from "./pages/mainUser/MainUser"

let routes = [
    {path: '/', element: <Dashboard/> },
    {path: '/projects', element: <Projects/> },
    {path: '/users', element: <UsersList/> },
    {path: '/users/:id', element: <MainUser/> },
    {path: '/newusers', element: <NewUsers/> },
]

export default routes