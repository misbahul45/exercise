import { useEffect, useMemo, useReducer, useState } from "react"
import style from "./FormReducer.module.css"
const formReducer=(state,actions)=>{
  switch(actions.type){
    case "addParagraph":
      return{
        ...state,
        paragraph:[...state.paragraph,actions.payload]
      };
  }
}
const FormReducer = () => {
  const [state, dispatch]=useReducer(formReducer, { paragraph:[] })
  const [content, setContent]=useState('')

  useEffect(()=>{
    if(content.includes('\n')){
      dispatch({ type:"addParagraph", payload:content })
    }
  },[content])

  console.log(state.paragraph)

  return (
    <main>
      <div
        className={style.inputForm}
        onInput={(e)=>setContent(e.currentTarget.textContent)} contentEditable={true}>
      </div>
      <button>Save</button>
    </main>
  )
}

export default FormReducer
