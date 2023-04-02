import { Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const PrivateRoute = (props) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
      return <Route {...props}/>;
        // ...
    } else {
        return <Navigate to="/loginpage" />;
      }
    });
    // if(!props.user) 
    // return 
}
