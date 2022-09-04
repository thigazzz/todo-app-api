import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export const authenticateToken = (request: Request, response: Response, next: NextFunction) => {
    const authToken = request.headers['authorization']

    if (!authToken) return response.status(400).json({error: 'Token not provided'})

    const parts = authToken.split(' ')

    if (parts.length !== 2) return response.status(400).json({erro: 'Token mal-formated'})

    const [schema, token] = parts

    if (!/^Bearer$/i.test(schema)) return response.status(401).json({error: 'Token Mal-Formated'})

    jwt.verify(token, String(process.env.JWT_SECRET), (error, decoded) => {
        if (error) return response.status(400).json({error: 'Token invalid'})

        request.user = (<any>decoded)

        next()
    })

}