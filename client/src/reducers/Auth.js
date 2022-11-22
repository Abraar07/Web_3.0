import { AUTH } from "../constants/actionTypes";

const Auth = (state={ authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            console.log(action?.data);
            return state;
            
    
        default:
            return state;
    }
}

export default Auth;