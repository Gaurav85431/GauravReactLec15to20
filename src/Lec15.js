//  to show input box value while typing.

import { useState } from "react";

function MyData() {

  const [data, setData] = useState(null);
  // to hmari state ki destructuring hogi. TO hm isme data, setData likhenge. useState()ko destruct karke. Hm chahe to koi value de sakte hai ya null ya undefined rakh skate hia.



  function getData(val) {

    console.warn(val.target.value);

    /**
     * Jb clWarn(val) kerenge to pora DOM print hoga console me.
     * 
     * Jb clwarn(val.target) karenge, target means jiske uper hm avi point kar rhe hia. TO ye krne per hme poora input field aa gya
     * 
     * Jb console.warn(val.target.value) likhenge to jo v hm type karenge wo print ho jayega console me.
     * 
     * Lekin hme jb isko show krna hai screen per to iske liye hm ek state le lenge
     */




    // hm av setData() ke under value ko print kara sakte hai.
    setData(val.target.value);

    // ab hme jahn pr value print krni hai waha pr likh denge {data}

  }

  return (

    <>

      <h1>Get input box value</h1>

      {/* To show what data inserted */}
      <p>{data}</p>
      {/*  */}


      <input type="text" onChange={getData} />
      {/* hm wo data ko lenge jo ki type kar rha hia aur usko send karenge api etc. per.  to uske liye hm ek function banayenge jisko ki hm onChange event me wo function ko call kar denge */}


      {/* To hmne getData() function banaye aur iske under koi value aa jayegi i.e. val */}


    </>



  )




}

export default MyData;