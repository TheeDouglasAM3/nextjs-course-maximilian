import { useRouter } from 'next/router'

function ClientProjectsPage() {

  const router = useRouter()

  console.log(router.query)

  function loadProjectHandler() {
    //load data... 
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { 
        id: 'doug',
        clientprojectid: 'projecta'
      }
    })
  }

  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClientProjectsPage
