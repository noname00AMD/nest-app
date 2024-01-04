
import postM from "@/../model/posts"
// import { headers } from 'next/headers'
import AdminQuestion from "@/app/_components/Question"

// import categoryM from "@/../model/category"



export default async function Question(props) {
  let questions = await postM.findAll()
  questions = []
  return (
    <>
      <AdminQuestion questions={questions} {...props} />
    </>
  )
}

