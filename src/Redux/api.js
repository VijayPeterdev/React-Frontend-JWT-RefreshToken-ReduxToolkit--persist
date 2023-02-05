import { loginUserFailed, loginUserStart, loginUserSuccess } from "./userSlice"
import  axios  from 'axios';


export const login = async(action,email,password ) => {

    action(loginUserStart());

    try{

        const res = await axios.post("/signin",email,password);

        action(loginUserSuccess(res.data));

    }catch(err){
        action(loginUserFailed(err));
    }

}