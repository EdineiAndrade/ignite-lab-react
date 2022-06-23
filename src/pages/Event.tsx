import { useParams } from "react-router-dom";
import { Heder } from "../components/Heder";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{slug: string}>()

  return(
    <div className="flex flex-col min-h-screen" >  
         <Heder/>
         <main className="flex flex-1 ">
          {slug 
          ? <Video lessonSlug={slug}/> 
          : <div className="flex-1"></div>
          }
            
          <Sidebar/>
         </main>
    </div>  
  )
}