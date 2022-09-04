import jwt from 'jsonwebtoken'

export const generateToken = (id: string): string => {
    return jwt.sign({id: id}, String(process.env.JWT_SECRET), {
        expiresIn: 300
    })
}