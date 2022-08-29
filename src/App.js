import { useState, useEffect } from "react";
import PrincipalRouter from "./routers/PrincipalRouter";
import "./styles/layout.css";

function App() {
  const [user, setUser] = useState(false); // ¿El usuario está logueado?

  useEffect(() => {
    if (localStorage.getItem("JWT") === null) {
      /*Si el item en localstorage es null =>  user = false*/
      setUser(!true);
    } /* else {
      /*Si el item en localstorage no es null => user = true */ /*
      setUser(true)
    } */
  }, [user, setUser]);

  return (
    <div className="layout">
      <PrincipalRouter user={user} setUser={setUser} />
    </div>
  );
}

export default App;
