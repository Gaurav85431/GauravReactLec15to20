import { useState } from "react";

function MyDatabyButton() {

  const [data, setData] = useState(null);

  const [print, setPrint] = useState(false);



  function getData(val) {

    // console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false);  // if we want  ki jaise hi type krna chahe to old value hide ho jay



  }
  return (
    <>

      <h1>hh</h1>

      {
        print ?
          <h1>{data}</h1>
          : null
      }

      <input type='text' onChange={getData} />

      <button onClick={() => setPrint(true)}>Print Data</button>


    </>


  )

}
export default MyDatabyButton;