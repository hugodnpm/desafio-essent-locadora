import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

type Data = {
  id: string
  name: string
  cpf: string
  endereco: string
  atorFavorito: string
  diretorfavorito: string
  categoriaFavorito: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    if (req.query.cpf) {
      return getClientById(req, res)
    }
    return getClients(req, res)
  }

  if (req.method === 'POST') {
    return createClient(req, res)
  }

  if (req.method === 'PUT') {
    return updateClient(req, res)
  }

  if (req.method === 'DELETE') {
    return deleteClient(req, res)
  }

  res.status(404).end()
}

async function getClients(req: NextApiRequest, res: NextApiResponse) {
  try {
    const clients = await prisma.client.findMany()
    console.log('aqui', clients)
    res.status(200).json(clients)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os clientes.' })
  }
}

export async function getClientById(req: NextApiRequest, res: NextApiResponse) {
  let { cpf } = req.query
  if (Array.isArray(cpf)) {
    cpf = cpf[0] // Pega o primeiro elemento do array
  }
  try {
    const client = await prisma.client.findUnique({ where: { cpf } })
    res.status(200).json(client)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os cliente.' })
  }
}

async function createClient(req: NextApiRequest, res: NextApiResponse) {
  const {
    name,
    email,
    cpf,
    endereco,
    atorFavorito,
    diretorfavorito,
    categoriaFavorito
  } = req.body

  try {
    const client = await prisma.client.create({
      data: {
        name,
        email,
        cpf,
        endereco,
        atorFavorito,
        diretorfavorito,
        categoriaFavorito
      }
    })

    res.status(201).json(client)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o cliente.' })
  }
}

async function updateClient(req: NextApiRequest, res: NextApiResponse) {
  const {
    id,
    name,
    email,
    cpf,
    endereco,
    atorFavorito,
    diretorfavorito,
    categoriaFavorito
  } = req.body

  try {
    const client = await prisma.client.update({
      where: { id },
      data: {
        name,
        email,
        cpf,
        endereco,
        atorFavorito,
        diretorfavorito,
        categoriaFavorito
      }
    })

    res.status(200).json(client)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o cliente.' })
  }
}

async function deleteClient(req: NextApiRequest, res: NextApiResponse) {
  let { id } = req.query
  if (Array.isArray(id)) {
    id = id[0] // Pega o primeiro elemento do array
  }
  try {
    await prisma.client.delete({ where: { id } })

    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o cliente.' })
  }
}
