import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
    providers: [
  CredentialsProvider({
   
    name: 'Credentials',
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
      email: { label: "Email", type: "email", placeholder: "jsmith@example.com" }
    },
    async authorize(credentials, req) {

    const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }

      // If no error and we have user data, return it
      if (user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
    }
  })
]
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }