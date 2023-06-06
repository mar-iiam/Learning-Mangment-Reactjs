import {createBrowserRouter,} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import App from "./App";
import Login from './Shared/Login';
import Home from "./pages/Home";
import Signup from './/pages/Signup';
import Staffonly from "./pages/Staffonly";
import Signupstaff from "./pages/Signupstaff";
import Addinstructor from "./pages/Addinstructor";
import Registcourse from "./pages/Registcourse";
import Add from "./pages/Add";
import AddStudent from "./pages/AddStudent";
import Profile from "./pages/Profile";
import ManageCourse from "./pages/ManageCourse";
import ManageInstructor from "./pages/ManageInstructor";
import StudentInstructor from "./pages/StudentInstructor";
import Update from "./pages/Update";
import Allstudents from "./pages/Allstudents";
import StudentProfile from "./pages/StudentProfile";
import Guest from './middleware/Guest'
import Addcourse from "./pages/AddCourse";
export const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path: "",
                element: <Home />, 
            },
       
            {
                path: "/login",
                element: <Login/>,
            }, 
            {
                path: "/staffonly",
                element: <Staffonly/>,
            },  
            {
                path: "/signupstaffonly",
                element: <Signupstaff/>,
            },
            
            
        ],
        
    },
    {
        element : <Guest/>,
        children :[
           
            {
                  path: "/about",
                  element: <AboutPage />,
            },
            {
                  path: "/contact",
                  element: <ContactPage />,
            },
           
           
           
            {
                path: "/addinstructor",
                element: <Addinstructor/>,
            },
            {
                path: "/registcourse",
                element: <Registcourse/>,
            }, 
            {
                path: "/create",
                element: <Add/>,
            },
            {
                path: "update/:id",
                element: <Update/>,
            },
            {
                path: "/addstudent",
                element: <AddStudent/>,
            },
            {
                path: "/profile",
                element: <Profile/>,
            },
            {
                path: "/managecourse",
                element: <ManageCourse/>,
            },
            {
                path: "/manageinstructor",
                element: <ManageInstructor/>,
            },
            {
                path: "/studentinfo",
                element: <StudentInstructor/>,
            },
            {
                path: "/AllStudents",
                element :<Allstudents/>
            },
            {
                path : "/studentProfile",
                element : <StudentProfile/>
            }, {
                path : "/addCourse",
                element : <Addcourse/>
            }

            
        ]
     },
  ]);





