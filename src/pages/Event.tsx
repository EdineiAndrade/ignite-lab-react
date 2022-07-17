import { CaretDoubleRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Heder } from "../components/Heder";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{slug: string}>()

  return(
    <div className="md:flex md:flex-col min-h-screen" >  
         <Heder/>
         <main className="md:flex md:flex-1">
          {slug 
          ? <Video lessonSlug={slug}/> 
          : <div className="flex-1"> 
              <div className={` ${slug ? 'hidden display:none' : 'flex w-full h-[600px] justify-center items-center' }`}>
                
                  <div className="text-xl font-bold h-[60px] w-full md:text-2xl transition-colors border md:mx-50 md:rounded-2xl bg-purple-600 md:w-[520px] md:h-[100px] border-gray-900 text-gray-700 border-spacing-4 mt-100 flex justify-center items-center md:justify-between md:p-8 md:m-8">

                    <h1>Escolha uma Aula parra assistir</h1>
                    <CaretDoubleRight size={35} className="hidden display:none md:flex md:flex-color"/>
                  </div>
              </div>

          </div>
          }
          <Sidebar/>
         </main>
    </div>  
  )
}