import Page from "./Page";
import {FormContext} from "./context";
import {useState} from 'react'

export default function App() {
  const [isShow,setIsShow] =useState(false);
  const [task, setTask] = useState([]) 
  console.log(task)
  
  


  return (
    <>
    <FormContext.Provider value={{isShow,setIsShow,setTask,task}}>
    <Page/>
    </FormContext.Provider>
      
      
    </>
  );
}
