import { CaretRight, DiscordLogo, FileArrowDown, FileImage, Lightning } from "phosphor-react";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { PlayerTb } from "./player";

interface VideoProps{
    lessonSlug: string;
}

export function Video(props:VideoProps ){
   const {data} = useGetLessonBySlugQuery({
        variables:{
        slug:props.lessonSlug,
    }   
   })

   if(!data || !data.lesson){
    return(
        <div className="flex-1 text-2xl">
            <p >Carregando...</p>
        </div>
         )}
   
    return(
        <div className="flex-1">
           <div className="bg-black flex justify-center">
            <div className="  h-full w-[600px] max-w-[1100px] max-h-[60vh] aspect-video ">
             <div className="position:relative h-ful w-full aspect-video">
                <PlayerTb 
                Id={data.lesson.videoId}
                />
             </div>
             </div>
           </div>

           <div className="p-8 max-w-[1100px] mx-auto">
            <div className="block items-center gap-10 md:flex md:items-start md:gap-5 md:ml-10">
                <div className=" justify-center items-center md:flex-1 ">
                    <h1 className="text-sm font-bold md:text-2xl ">
                        {data.lesson.title}
                    </h1>
                <p className="flex mt-2 text-gray-200 leading-relaxed text-sm text-ellipsis max-w-[300px] text-justify indent-1 md:mt-4 md:max-w-[600px]">
                    {data.lesson.description}
                    </p>
                        {data.lesson.teacher && (   
                            <div className="justify-center items-center gap-2 md:gap-4 mt-4 h-full text-sm md:text-xl md:block md:justify-between">
                            <img 
                            className="h-12 w-12 rounded-full border-2 border-blue-500 md:h-16 md:w-16"
                            src={data.lesson.teacher.avatarURL} 
                            alt="" 
                            />
                            <div className=" flex flex-col item-center justify-center md:leading-relaxed ">
                                <strong className="font-bold text-[12px] md:text-xl md:block">
                                {data.lesson.teacher.name}
                                </strong>
                                <span className="text-gray-200 max-w-[300px] md:text-sm md:max-w-[600px] first-letter:md:block">
                                {data.lesson.teacher.bio}
                                </span>
                            </div>
                            </div>
                        )}
                </div>
                <div className="h-full m-2 p-2 max-w-200 md:flex flex-col gap-4">
                    <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase md:gap-2 justify-center  hover:bg-green-700 transition-colors m-2 max-w-[280px] max-h-[50px] md:max-w-[600px]">
                        <DiscordLogo size={24}/>
                        comunidade do discord
                    </a>
                    <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors m-2 max-w-[280px] max-h-[50px] md:max-w-[600px]">
                        <Lightning size={24}/>
                        Acesse o desafio
                    </a>
                </div>
            </div>
            
            <div className=" gap-2 mt-2 flex flex-col md:gap-8 md:mt-10 md:flex-row md:justify-center md:gird grid-cols-3  ">
                <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-2 hover:bg-gray-600 transition-colors max-w-[350px] max-h-[80px]md:max-w-[600px] md:max-h-[600px]md:gap-4">
                    <div className="bg-green-700 p-2 flex items-center">
                        <FileArrowDown size={40}/>
                    </div>
                    <div className="py-2 leading-relaxed">
                        <strong className="text-[12] md:text-xl">  
                            Material complementar
                        </strong>
                        <p className="text-[10px] text-gray-200 mt-2 md:text-sm">
                            Acesse o material complementar para acelerar o seu desenvolvimento
                        </p>
                    </div>
                    <div className="p-2 md:p-6 h-full flex items-center "> 
                        <CaretRight size={24}/>
                    </div>
                </a>
                <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-2 hover:bg-gray-600 transition-colors max-w-[350px] max-h-[80px]md:max-w-[600px] md:max-h-[600px]md:gap-4">
                    <div className="bg-green-700 p-2 flex items-center">
                        <FileImage size={40}/>
                    </div>
                    <div className="py-2 leading-relaxed">
                        <strong className=" text-[12px] md:text-xl">    
                            Wallpapers exclusivos
                        </strong>
                        <p className="text-[10px] text-gray-200 mt-2 md:text-sm">
                            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                        </p>
                    </div>
                    <div className="p-2 md:p-6 h-full flex items-center">
                        <CaretRight size={24}/>
                    </div>
                </a>
            </div>
           </div>
        </div>
    
    )
}

function useGetLessonsBySlugQuery(arg0: { variables: { slug: string; }; }): { data: any; } {
    throw new Error("Function not implemented.");
}
