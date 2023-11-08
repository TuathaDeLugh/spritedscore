import User from '@/models/user'
import connectdb from '@/util/mongodb';
import NextAuth from 'next-auth'
import bcrypt from "bcryptjs";
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
        CredentialsProvider({
            name: "credentials",      
            async authorize(credentials) {
              const { email, password } = credentials;
      
              try {
                await connectdb();
                const user = await User.findOne({ email });
                if (!user) {
                  return null;
                }
                const passwordsMatch = await bcrypt.compare(password, user.password);
      
                if (!passwordsMatch) {
                  return null;
                }
                return user;
              } catch (error) {
                console.log("Error: ", error);
              }
            },
          }),
        ],
        session: {
          strategy: "jwt",
        },
        callbacks: {
            async session({ session, token }) {
              session.user.username = token.username
              session.user.avatar = token.avatar
              session.user.role = token.role
              session.additional_details = token.additional_details || false
    
                return session
            },
            async jwt({ token, user}) {
                if (user){
                  token.username = user.username
                  token.avatar = user.avatar
                  token.role = user.role
                }
                
    
                return token
            },
        },


        secret: process.env.NEXTAUTH_SECRET,
        pages: {
          signIn: "/",
        },
      };
      const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };