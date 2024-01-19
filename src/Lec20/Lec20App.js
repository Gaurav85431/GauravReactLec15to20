import User from "./Lec20User";

function MyApp() {

  function getAppData() {
    alert("Alert from App");
  }

  return (
    <>
      {/* <User></User> */}

      {/* send function to Lec20User.js */}
      <User data={getAppData} />

    </>
  )

}
export default MyApp;