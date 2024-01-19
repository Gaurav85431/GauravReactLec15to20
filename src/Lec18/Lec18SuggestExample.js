import { useState } from "react";

function MyUserProfile() {
  const [loggedIn, setLoggedIn] = useState(1);

  // There is three user if useState(1) then welcome user1 &if uS(2) w u2 and if uS(3) then welcome user3.

  return (

    <>


      {/* 1 hi line me likhna jaruri nhi hai. */}

      {loggedIn == 1 ? <h1>Welcome User1</h1> : loggedIn == 2 ? <h1>Welcome User2</h1> : loggedIn == 3 ? <h1>WelcomeUser3</h1> : null}


    </>
  )
}
export default MyUserProfile;