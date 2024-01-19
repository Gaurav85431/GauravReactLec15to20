import { useState } from "react";

// It is suggested to use bcz isme multiple reetturn statement nhi laga hai.
function MyProfile() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>

      <br /><br />


      {loggedIn ? <h2>Welcome Gaurav</h2> : <h2>Welcome Guest</h2>}




    </>



  )


}
export default MyProfile