import { gql, useQuery } from '@apollo/client'

const GET_CLIENTS = gql`
    query getClients {
        clients {
            id
            name
            email
            phone
        }
    }
`

export default function Clients() {
    const { loading, error, data} = useQuery(GET_CLIENTS)

    if (loading) return <p>loading...</p>
    if (error) return <p>Something went wrong</p>
    
    return (
        <>
            {!loading && !error && <h1>Clients</h1>}
        </>
    )
}