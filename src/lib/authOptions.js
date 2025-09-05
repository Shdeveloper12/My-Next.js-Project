import dbConnect, { collectionNames } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
  CredentialsProvider({
   
    name: 'Credentials',
    credentials: {
      name: { label: "Name", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
      email: { label: "Email", type: "email", placeholder: "jsmith@example.com" }
    },
    async authorize(credentials, req) {
      try {
        const { name, email, password } = credentials;
        
        // Connect to database and find user
        const usersCollection = dbConnect(collectionNames.users);
        const user = await usersCollection.findOne({ email, name });

        // Check if user exists and password matches
        const isPasswordMatch = user && user.password === password;
        if (!user || !isPasswordMatch) {
          return null;
        }

        // Return user object with role
        return { 
          id: user._id.toString(), 
          name: user.name, 
          email: user.email, 
          role: user.role 
        };
      } catch (error) {
        console.error("Authentication error:", error);
        return null;
      }
    }
  })
],
callbacks : {
    async jwt({ token, user }) {
      
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role 
      }
      return token;
    },
    async session({ session, token }) {
      
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    }

}
}