import { Heder } from "../components/Heder";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {

  return(
    <div className="flex flex-col " >  
         <Heder/>
         <main className="flex flex-1 min-h-screen">
            <Video/>
            <Sidebar/>
         </main>
    </div>  
  )
}