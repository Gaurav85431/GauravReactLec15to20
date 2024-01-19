import { useState } from "react";

function MyFormData() {

  const [name, setName] = useState('');
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");





  function getFormData(e) {

    // jo value enter karega wo print hoga console pr

    console.log(name, tnc, interest);


    e.preventDefault();
  }
  // is function ke under parameter aata hai event (e se denoted). Ye is form ko submit hone se rokta hia jb hm e.preventDefault() karenge



  return (

    <>

      <h1>Handle Form in React</h1>


      {/*React single page application hoti hai wo refresh nhi hoti hai lekin jb hm submit per call karte hai to wo refresh hoti hai. TO overcome this problem hm form pr event call karenge. onSubmit aur isme ek functin pas kar dete hai getFormData, hm is function ko bana lete hai. */}
      <form onSubmit={getFormData}>


        {/* jaise hi hm type karenge to usko hand to hand update kar denge */}
        {/* yaha per input me onChange ke aate hi hm update karenge state ko */}
        <input type='text' placeholder="Enter name" onChange={(e) => setName(e.target.value)} /> <br /><br />
        <select onChange={(e) => setInterest(e.target.value)}>

          <option>Select Option</option>
          <option>Marvel</option>
          <option>DC</option>

        </select><br /><br />


        {/* checkbox ke liye hm onChange pr checked lenge. Bcz checked true or false deta hia. */}

        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /
        ><span>Accept Terms and conditions</span>

        <br /><br />

        <button type="submit">submit</button>


      </form>


    </>





  )




}

export default MyFormData;