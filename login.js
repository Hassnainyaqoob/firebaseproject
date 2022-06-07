import { useState } from "react";
import SMinputs from "../components/input";
import SMbuttons from "../components/button";
import { Box } from "@mui/material";
import { logInUser } from "../config/firebase/firebasemethods";
import { useNavigate } from "react-router-dom";



export default function Login() {

    const [userObg, setUserObg] = useState({});

    const navigatee = useNavigate()

    let LoginUser = () => {

        if (!userObg.email) {
            alert("email is required")
            return
        }


        if (!userObg.password || userObg.password.length < 6) {
            alert("Password is required password must be greater then 6 characters")
            return
        }

        console.log(userObg);

        logInUser(userObg)
            .then((success) => {
                console.log(success);
                navigatee(`/dashboared ${success.user.uid}`)
            })
            .catch((errr) => {
                console.log(errr);
            })

    }
    return (

        <Box id='signupmain'>

            <h1 id='signupword'>Login</h1>



            <Box className="signupinputs">
                <SMinputs onChange={(e) => setUserObg({ ...userObg, email: e.target.value })} type='text' color='primary' label='Email' />
            </Box>

            <Box className="signupinputs">
                <SMinputs onChange={(e) => setUserObg({ ...userObg, password: e.target.value })} type='password' color='primary' label='Password' />
            </Box>

            <Box className="signupbutton">
                <SMbuttons onClick={LoginUser} label="Login" />
            </Box>

        </Box>

    )
}