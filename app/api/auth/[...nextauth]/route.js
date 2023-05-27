
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";
import CredentialsProvider from "next-auth/providers/credentials"



const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
     
    })
  ],
  callbacks:{

      async session({ session }) {
          const sessionUser = await User.findOne({email: session.user.email})
          session.user.id = sessionUser._id.toString()
          return session;
        },
        async signIn({ profile }) {
            try {
        await connectToDB()
        // check if the user already exists
        const userExists = await User.findOne({ email : profile.email});
        
        //if not, create a new user
        if(!userExists){
            await User.create({ 
                email: profile.email, 
                username: profile.name.replace(" ","").toLowerCase(),
                image: profile.picture})
            }
            
       return true     
    } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
    }
},
}
});
export { handler as GET, handler as POST };
