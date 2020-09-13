import React from "react";
import { Button } from "../components/AuthForm";
import {useHistory,withRouter} from 'react-router-dom';
//import { useAuth } from "../context/auth";

function Admin(props) {
  //const { setAuthTokens } = useAuth();
  let history = useHistory();

  function logOut() {
    localStorage.removeItem('tokens');
    //setAuthTokens();
    history.push('/login');
  }

  return (
    <div>
      <div>Admin Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default withRouter(Admin);