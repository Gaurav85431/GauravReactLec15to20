// Pass Function as Props

function User(props) {

  return (

    <>

      <h1>User Component</h1>

      {/* button pr click krke we want ki getAppData() function call ho. */}

      {/* <button onClick={props.data}>Call </button> */}
      {/* <button onClick={props.data()}>Call </button>  */}{/* To automatically call */}
      {/* <button onClick={() => props.data}>Call </button> */}
      {/* Not called  */}
      <button onClick={() => props.data()}>Call </button>

    </>

  )
}
export default User;