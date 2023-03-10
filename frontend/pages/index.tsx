import Head from "next/head"
import { gql, useQuery } from "@apollo/client"

interface ITodos {
  id: string
  todo: string
  createdAt: string
}

const GET_TODOS = gql`
  query Todos {
    todos {
      id
      todo
      createdAt
    }
  }
`

export default function Home() {
  const { data, loading } = useQuery<{ todos: ITodos[] }>(GET_TODOS)

  console.log("test")
  if (loading) return <div>Loading</div>
  console.log(data)
  return (
    <>
      <Head>
        <title>Trelando</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          {data?.todos.map((todo) => (
            <ul key={todo.id}>
              <li>{todo.todo}</li>
            </ul>
          ))}
        </div>
      </main>
    </>
  )
}
