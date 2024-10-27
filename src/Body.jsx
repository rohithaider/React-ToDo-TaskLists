import Projects from "./Projects";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Body(){
    return (
        <body className="bg-gray-900 text-white">
        <div className="flex h-screen">
          
         <Sidebar/>
    
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            
            <Topbar/>
            <Projects/>
            
          </main>
        </div>
      </body>
        
    );
}