import React from "react";
import { Route, Redirect, withRouter } from "react-router";
//import { connect } from "react-redux";
import {FriendsPage} from './FriendsPage';

const PrivateRoute = ({ component: FriendsPage, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() => {
          if (localStorage.getItem("token")) {
            return <FriendsPage />;
          } else {
            console.log("redirecting!!!!");
            return <Redirect to="/login" />;
          }
        }}
      />
    );  
};      

export default PrivateRoute;