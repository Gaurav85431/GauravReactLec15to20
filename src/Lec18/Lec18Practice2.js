import { useState } from "react";

function LogInOut() {


  let [log, setLog] = useState(0);

  return (
    <>

      {
        log == 1 ? <h1>Log in</h1> :
          log == 0 ? <h1>Log Out</h1> :
            null
      }


      <button onClick={() => setLog(log == 1 ? log = 0 : log += 1)}>click  </button>


    </>


  )



}
export default LogInOut;