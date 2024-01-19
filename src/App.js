import MyData from "./Lec15";
import MyDatabyButton from "./Lec15B button";
import MyShowHide from "./Lec16";
import MyFormData from "./Lec17";
import Profile from "./Lec18/Lec18";
import MyProfile from "./Lec18/Lec18 Suggested";
import MyPracticeLec18 from "./Lec18/Lec18Practice";
import LogInOut from "./Lec18/Lec18Practice2";
import MyUserProfile from "./Lec18/Lec18SuggestExample";
import Login from "./Lec19/Lec19FormValidation";
import MyApp from "./Lec20/Lec20App";


function App() {
  return (
    <>

      {/* Lec15.js */}
      <MyData />
      <br></br>
      {/* Lec15B button.js */}
      {/* button click kar ke wo text show krna. */}
      <MyDatabyButton></MyDatabyButton>

      <br />
      <hr />

      {/* Lec16.js */}
      <MyShowHide />






      <br />

      <br />
      <hr />


      {/* Lec 17.js ko call krna */}
      <MyFormData></MyFormData>







      {/* Lec18.js */}

      <br /><br /><br /><hr></hr>

      <Profile></Profile>

      {/* Lec18 Suggested.js  */}
      {/* ye suggested tarika hai */}
      <MyProfile />

      {/* Lec18SuggestedExample.js  */}
      <MyUserProfile />




      {/* Practicing Lec 18 */}
      <MyPracticeLec18 />
      <LogInOut />






      <hr /><br /><br />
      {/* Lec19 */}
      <Login></Login>




      {/* Lec20  */}
      <MyApp></MyApp>

    </>
  );
}

export default App;
