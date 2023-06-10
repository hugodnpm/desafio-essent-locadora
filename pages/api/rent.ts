import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

type Data = {
  id: string
  clientId: string
  filmId: string
  dataRetirada: Date
  dataDevolucao: Date
  horaDevolucao: string
  valor: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  /*if (req.method === 'GET') {
    if (req.query.cpf) {
      return getClientById(req, res)
    }
    return getClients(req, res)
  }*/

  if (req.method === 'POST') {
    return createRentFilm(req, res)
  }
  /*
  if (req.method === 'PUT') {
    return updateClient(req, res)
  }

  if (req.method === 'DELETE') {
    return deleteClient(req, res)
  }*/

  res.status(404).end()
}

async function getClients(req: NextApiRequest, res: NextApiResponse) {
  try {
    const clients = await prisma.client.findMany()
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

async function createRentFilm(req: NextApiRequest, res: NextApiResponse) {
  let { clientId, filmId, dataRetirada, dataDevolucao, horaDevolucao, valor } =
    req.body

  dataRetirada = new Date(dataRetirada)
  dataDevolucao = new Date(dataDevolucao)

  try {
    const film = await prisma.rentFilm.create({
      data: {
        clientId,
        filmId,
        dataRetirada,
        dataDevolucao,
        horaDevolucao,
        valor
      }
    })

    res.status(201).json(film)
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
