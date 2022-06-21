import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql `
  query {
    lessons {
      id
      title
    }
  }
`
interface Lessons {
  id: string;
  title: string;
}
function App() {

  const {data} = useQuery<{lessons: Lessons []}>(GET_LESSONS_QUERY);

  return (
    <ul className="text-green-400 text-4xl">
      {data?.lessons.map(lessons => {
        return <li className="space-x-10" key={lessons.id}>{lessons.title}</li>
      })}
    </ul>
  )
}

export default App
