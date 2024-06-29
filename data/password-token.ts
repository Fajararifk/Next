import { db } from "@/lib/db";

export const getPasswrodResetTokenByToken = async (token:string) => {
    try {
        const passworResetToken = await db.passwordResetToken.findUnique({
            where: {token}
        })

        return passworResetToken
    } catch (error) {
        return null
    }
}


export const getPasswrodResetTokenByEmail = async (email:string) => {
    try {
        const passworResetToken = await db.passwordResetToken.findFirst({
            where: { email}
        })

        return passworResetToken
    } catch (error) {
        return null
    }
}