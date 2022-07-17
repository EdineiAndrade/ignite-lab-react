import { List, X } from "phosphor-react";
import { useState } from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar(){

    const [vbSidebar, setVbSidebar] = useState(true);
    const { data } = useGetLessonsQuery()

    return(
         <aside className="text-sm p-2 h-full md:w-[348px] bg-gray-700 md:p-6 border-1 border-gray-600 ">
            {/* COMMENT 
            <div>
                <button type="button" onClick={() => setVbSidebar(false)}> 
                <List size={32} /> 
                </button>
                <button type="button" onClick={() => setVbSidebar(false)}> 
                <X size={32} /> 
                </button>
            </div> */}
                
            <span className="font-bold text-xl items-center text-center justify-center pb-4 mb-6 border-b border-gary-500 md:text-2xl md:pb-6 md:mb-6">
                Cronograma de aulas
            </span>
            <div className="gap-8 md:flex md:flex-col">
               {data?.lessons.map(lessons =>{
                return(
                    <Lesson
                    key={lessons.id}
                    title={lessons.title}
                    slug={lessons.slug}
                    availableAt={new Date(lessons.availableAt)}
                    type={lessons.lessonType}
                />
                )
               })}
            </div>

        </aside>
    )
}