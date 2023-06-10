import type { NextApiRequest, NextApiResponse } from 'next'
import * as bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import prisma from 'lib/prisma'

type Data = {
  data: string
}

const authenticateUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const email = req.query.email as string
  const password = req.query.password as string

  const userAdmin = await prisma.user.findUnique({
    where: {
      email
    }
  })
  if (!userAdmin) {
    const passwordAdmin = await bcrypt.hash('123456', 10)
    await prisma.user.create({
      data: {
        name: 'admin',
        email: 'admin@admin.com',
        password: passwordAdmin
      }
    })

    return res
      .status(200)
      .json({ data: 'Primeiro Usuário Criado com Sucesso, entre novamente' })
  }
  const passwordMatch = await bcrypt.compare(password, userAdmin.password)
  if (!passwordMatch) {
    return res.status(200).json({ data: 'Email/Senha não estão corretas' })
  }

  const token = sign({ userId: userAdmin.id }, process.env.JWT_SECRET || '', {
    expiresIn: '3h'
  })

  return res.status(200).json({ data: token })
}

export default authenticateUser
