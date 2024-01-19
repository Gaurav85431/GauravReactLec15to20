import { useState } from "react";

// not suggested to do Because react me hme itna return lagane ki need nhi hai.
function Profile() {

  // const [loggedIn, setLoggedIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  if (loggedIn) {
    return (
      <><h1>Welcome Gaurav</h1></>
    )
  }
  else {
    return (
      <><h1>Welcome Guest</h1></>
    )
  }


}
export default Profile;