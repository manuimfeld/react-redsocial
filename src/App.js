import { useState, useEffect } from "react";
import PrincipalRouter from "./routers/PrincipalRouter";

function App() {
  /*Validate if user already are Login*/
  const [user, setUser] = useState(false);

  useEffect(() => {
    /*If localStorage is null, user = false*/
    if (localStorage.getItem("JWT") === null) {
      setUser(!true);
      /*If localStorage is not null, user = true */
    } else {
      setUser(true);
    }
  }, [user]);

  return <PrincipalRouter user={user} setUser={setUser} />;
}

export default App;
