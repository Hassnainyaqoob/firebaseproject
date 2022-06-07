import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SMbuttons from "../components/button";
import SMinputs from "../components/input";
import { signUpUser } from "../config/firebase/firebasemethods";


export default function Signup() {

    const [userObj, setUserObj] = useState({});

const navigate = useNavigate()

    let signupUser = () => {


        if (!userObj.email) {
            alert("email is required")
            return
        }


        if (!userObj.password || userObj.password.length < 6) {
            alert("Password is required password must be greater then 6 characters")
            return
        }

        // console.log(userObj);

        signUpUser(userObj).then((res) => {
            console.log(res);
            navigate('/login')
        })
            .catch((err) => {
                console.log(err);
            });

    }

    return (

        <Box id='signupmain'>

            <h1 id='signupword'>Sign Up</h1>

            <Box className="signupinputs">
                <SMinputs type='text' onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} color='primary' label='Name' />
            </Box>

            <Box className="signupinputs">
                <SMinputs type='text' onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} color='primary' label='Email' />
            </Box>
            <Box className="signupinputs">
                <SMinputs type='password' onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} color='primary' label='password' />
            </Box>
            <Box className="signupbutton">
                <SMbuttons onClick={signupUser} label="Sign Up" />
            </Box>

        </Box>

    )
}