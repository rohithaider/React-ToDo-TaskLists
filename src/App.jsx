import Page from "./Page";
import {FormContext} from "./context";
import {useState} from 'react'

export default function App() {
  const [isShow,setIsShow] =useState(false);


  return (
    <>
    <FormContext.Provider value={{isShow,setIsShow}}>
    <Page/>
    </FormContext.Provider>
      
      
    </>
  );
}
