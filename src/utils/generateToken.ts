import jwt from 'jsonwebtoken'

export const generateToken = (userEmail: string): string => {
    return jwt.sign({email: userEmail}, String(process.env.JWT_SECRET), {
        expiresIn: 300
    })
}