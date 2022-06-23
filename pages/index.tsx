import { ArrowsOut } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Heder } from "../src/components/Heder";
import { Sidebar } from "../src/components/Sidebar";
import { Video } from "../src/components/Video";

export function Event() {
  const { slug } = useParams<{slug: string}>()

  return(
    <div className="flex flex-col min-h-screen" >  
         <Heder/>
         <main className="flex flex-1 ">
          {slug 
          ? <Video lessonSlug={slug}/> 
          : <div className="flex-1"> 
            <div className="flex items-center">

            <h1></h1>''
            
            </div>
          
          </div>
          }
            
          <Sidebar/>
         </main>
    </div>  
  )
}