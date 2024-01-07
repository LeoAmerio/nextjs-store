import { GraphQLClientSingleton } from 'app/graphql'
import { customerName } from 'app/graphql/queries/customerName'
import { cookies } from 'next/headers'

export const validateAccessToken = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const response = await graphqlClient.request(customerName, {
    customerAccessToken: accessToken
  })
  console.log('GraphQL Response:', response);
  // return customer
}