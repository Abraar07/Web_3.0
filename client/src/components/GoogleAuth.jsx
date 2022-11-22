import { useState } from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";

const AuthResponse = () => {
  token= string,
  user= User
}

const User = () => {
  _id= string;
  firstname= string,
  lastname= string,
  email= string,
  password= string,
  confirm_password=string
}

const GoogleAuth = () => {
  const [user, setUser] = useState("");
  const onSuccess = async (res) => {
    try {
      const result= await axios.post("/auths/", {
        token: res?.tokenId,
      });

      setUser(result.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const googleError = (error) => console.log(error);

  return (
    <div >
      {!user && (
        <GoogleLogin
          prompt="consent"
          clientId="283138669990-ekm5j2hoptivvp8f260764v9qi5oct35.apps.googleusercontent.com"
          onSuccess={onSuccess}
          onFailure={googleError}
        />
      )}

      {user && (
        <>
          <img src={user.avatar} className="rounded-full" />
          <h1 className="text-xl font-semibold text-center my-5">
            {user.name}
          </h1>
        </>
      )}
    </div>
  );
};

export default GoogleAuth;