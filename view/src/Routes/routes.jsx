import Root from "../Components/Root";
import AddForm from "../Pages/AddForm";
import Home from "../Pages/Home";


const ROUTES = [
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/addform",
                element:<AddForm/>
            }
        ]
    }
]


export default ROUTES