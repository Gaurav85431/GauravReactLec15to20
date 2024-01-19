import { useState } from "react";

function Login() {

  const [UserID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);



  function LoginHandle(e) {

    //
    // ydi user na to id na hi pw de tb kiya err show karna hai.

    if (UserID.length < 3 || password.length < 3) {
      alert("Enter valid UserID and Password");
    }

    else {
      alert("well");
    }




    //

    // alert("hello");

    e.preventDefault(); //form ka button click pr load na ho.

  }
  // User Handler = valid userId

  function userHandler(e) {

    let item = e.target.value; //item means ki user jo userId de rha hai
    if (item.length < 3) {
      // console.log("Invalid");
      setUserError(true);
      // yadi error hai to setUserError true ho jayega.


    }
    else {
      // console.log("Valid");
      setUserError(false);
    }

    // User ko set kar denge 

    setUserID(item)



  }


  // valid Password:-
  function passwordHandler(e) {

    let pwItm = e.target.value;

    if (pwItm.length < 3) {
      setPasswordErr(true);
    }
    else {
      setPasswordErr(false);
    }

    // 
    setPassword(pwItm);

  }



  return (
    <>

      <h1>Login</h1>
      <form onSubmit={LoginHandle}>
        {/* form pr LoginHandle laga diyen hai to ye refresh nhi hoga */}
        <input type="text" placeholder="Enter UserID" onChange={userHandler} />{userError ? <span>Invalid User</span> : null}

        {/* ydi userID ka length 3 se kam hoga to Invalid User dega. */}




        <br /><br />

        <input type='password' placeholder='Enter Password' onChange={passwordHandler} />{passwordErr ? <span>Invalid Password</span> : null}


        <br /><br />
        <button type="submit">Login</button>

      </form>


    </>
  )
}
export default Login;