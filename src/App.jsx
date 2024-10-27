import Page from "./Page";
import {FormContext,SearchContext} from "./context";
import {useState} from 'react'

export default function App() {
  const [isShow,setIsShow] =useState(false);
  const [task, setTask] = useState([]) 
  const [currentTask,setCurrentTask]=useState(null)
  
  function handleSearch(item){
    const filtered = task.filter((t)=>{
      return t.taskName.toLowerCase().includes(item.toLowerCase())
    })
    setTask([...filtered])

  }
  

  

  


  return (
    <>
    <SearchContext.Provider value={{handleSearch}}>
    <FormContext.Provider value={{isShow,setIsShow,setTask,task,currentTask,setCurrentTask}}>
    <Page/>
    </FormContext.Provider>
    </SearchContext.Provider>
      
      
    </>
  );
}
