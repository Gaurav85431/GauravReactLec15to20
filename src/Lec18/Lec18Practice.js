import { useState } from "react";

export default function MyPracticeLec18() {

  // let initaialValue= prompt("Enter level")
  let [phase, setPhase] = useState(1);

  // phase=1 (initially)



  return (

    <>

      {phase == 1 ? <h2>Ready for mains</h2> :
        phase == 2 ? <h2>Ready for Interview</h2> : phase == 3 ? <h2>Kitna pasie loge</h2> : null



      }

      <button onClick={() => setPhase(phase == 3 ? phase = 1 : phase + 1)}>PHASE</button>

      {/* 
      if(phase==3){phase==1}
      else {phase=phase+1}

*/}



    </>


  )




}