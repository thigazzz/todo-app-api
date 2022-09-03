import bcrypt from 'bcrypt'

export const generateHash = async (password: string, rounds: number): Promise<string> => {
    return await bcrypt.hash(password, 10)
}