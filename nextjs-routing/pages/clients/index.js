import Link from "next/link"

function ClientPage() {
  const clients = [
    { id: "doug", name: "Douglas" },
    { id: "rm", name: "Robert" },
    { id: "caca", name: "Cacatua" },
    { id: "nico", name: "Nicolly" },
    { id: "edu", name: "Eduardo" },
    { id: "nava", name: "Navarro" },
  ]

  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={{
              pathname: "/clients/[id]",
              query: { id: client.id }  
            }}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientPage
