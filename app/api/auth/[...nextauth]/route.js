import User from '@/models/user'
import connectdb from '@/util/mongodb';
import NextAuth from 'next-auth'
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
              const { username, password } = credentials;
      
              try {
                await connectdb();
                const user = await User.findOne({ username });
      
                if (!user) {
                  return null;
                }
      
                const passwordsMatch = await bcrypt.compare(password, user.password);
      
                if (!passwordsMatch) {
                  return null;
                }
      
                return {user: res.data};
              } catch (error) {
                console.log("Error: ", error);
              }
            },
          }),
        ],
        session: {
          strategy: "jwt",
        },
        // callbacks: {
        //     async session({ session, token }) {
        //         if (token.role === 'admin') {
        //             session.user.role = 'admin'
        //             return session
        //         }
        //         session.user.username = token?.userid
        //         session.additional_details = token.additional_details || false
    
        //         return session
        //     },
        //     async jwt({ token, user}) {
        //         if (user?.actype === 'admin') {
        //             token.role = 'admin'
        //             return token
        //         }
    
        //         return token
        //     },
        // },
        secret: process.env.NEXTAUTH_SECRET,
        pages: {
          signIn: "/",
        },
      };