import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'

import {v4 as uuid4} from 'uuid'



/**
 * GOOGLE_ID=854406897784-1uj39oaes73vgnudshhpiq1usuph1rgb.apps.googleusercontent.com
GOOGLE_SECRET=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
 */



export default NextAuth({
    providers: [
        // Google Provider
        GoogleProvider({
            clientId: "854406897784-1uj39oaes73vgnudshhpiq1usuph1rgb.apps.googleusercontent.com",
            clientSecret: "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",
            
        })
        
    ],

    secret : "XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=",
 
    callbacks: {

        async signIn(data) {
            console.log("Account",data.user)
            return true
          },
    
        session: async ({ session, token, user }) => {
            if (session?.user) {
                session.user._id = uuid4();
            }
            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
    },

})