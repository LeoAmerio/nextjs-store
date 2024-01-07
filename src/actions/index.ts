"use server"
import { createUserMutation } from 'app/graphql/mutations/createUserMutation';
import { GraphQLClientSingleton } from 'app/graphql/index';
import { redirect } from 'next/navigation';
import { createAccessToken } from 'app/utils/auth/createAccessToken';

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject["password_confirmation"]
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    input: {
      ...formDataObject,
      phone: '+54' + formDataObject.phone,
    }
  }

  const { customerCreate } = await graphqlClient.request<CreateUserResponse>(createUserMutation, variables);

  const { customerUserErrors, customer } = customerCreate;
  if (customer?.firstName){
    await createAccessToken(formDataObject.email as string, formDataObject.password as string)
    redirect('/store')
  }
  console.log(customer);
  console.log(customerUserErrors);
  
}

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accessToken = await createAccessToken(formDataObject.email as string, formDataObject.password as string)
  if (accessToken)
    redirect('/store')
}
