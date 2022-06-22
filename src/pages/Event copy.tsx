
import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql `
  query {
    lessons {
      id
      title
      teacher { 
        name
      }
    }
   
  }
`
interface Lessons {
  teacher: any;
  id: string;
  title: string;
  
}


export function Event() {

  


  const {data} = useQuery<{lessons: Lessons []}>(GET_LESSONS_QUERY);

  return (
    <ul className="pb-2 flex-col m-5">
      {data?.lessons.map(lessons => {
       return (
           <div className="border-2  m-5 space-x-5 px-4  pt-3 pb-3 border-slate-900 bg-violet-900 rounded-lg h-20 ">
             <li className="text-green-400 text-2xl " key={lessons.id}>{lessons.title}</li>
             <li className="text-1xl  text-amber-400" key={lessons.id}>{lessons.teacher.name}</li>
        

           </div> 
           
       )
      })}
     

    </ul>

  )
}