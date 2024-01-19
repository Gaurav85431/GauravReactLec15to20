import { useState } from "react";
function MyShowHide() {

  const [status, setStatus] = useState(false);

  const [toggle, setToggle] = useState(true)

  return (

    <>

      {/* yadi status true hai to Hello World show hoga agat status false hai to null */}
      {
        status ? <h1>Hello World</h1> : null
      }

      <button onClick={() => setStatus(false)}>Hide</button>

      <button onClick={() => setStatus(true)}>Show</button>



      {/* toggle */}





      <br />
      <hr />

      {
        toggle ? <h1>click to toggle </h1> : null
      }




      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {/* here bydefault true hai jb toggle button pr click krte hai to false ho jata hai. */}




    </>

  )


}

export default MyShowHide;