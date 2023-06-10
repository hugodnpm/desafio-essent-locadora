import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

type Data = {
  titulo: string
  ano: number
  imagem: string
  sinopse: string
  elenco: string
  categoria: string
  copia: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    if (req.query.titulo) {
      return getFilmById(req, res)
    }
    return getFilms(req, res)
  }

  if (req.method === 'POST') {
    return createFilm(req, res)
  }

  if (req.method === 'PUT') {
    return updateFilm(req, res)
  }

  if (req.method === 'DELETE') {
    return deleteFilm(req, res)
  }

  res.status(404).end()
}

async function getFilms(req: NextApiRequest, res: NextApiResponse) {
  try {
    const films = await prisma.film.findMany()
    res.status(200).json(films)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os Filme.' })
  }
}

export async function getFilmById(req: NextApiRequest, res: NextApiResponse) {
  const { titulo } = req.query

  try {
    const film = await prisma.film.findFirst({ where: { titulo } })
    res.status(200).json(film)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os cliente.' })
  }
}

async function createFilm(req: NextApiRequest, res: NextApiResponse) {
  const { titulo, ano, imagem, sinopse, elenco, categoria, copia } = req.body

  try {
    const film = await prisma.film.create({
      data: {
        titulo,
        ano,
        imagem,
        sinopse,
        elenco,
        categoria,
        copia
      }
    })

    res.status(201).json(film)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o Filme.' })
  }
}

async function updateFilm(req: NextApiRequest, res: NextApiResponse) {
  const { id, titulo, ano, imagem, sinopse, elenco, categoria, copia } =
    req.body

  try {
    const film = await prisma.film.update({
      where: { id },
      data: {
        titulo,
        ano,
        imagem,
        sinopse,
        elenco,
        categoria,
        copia
      }
    })

    res.status(200).json(film)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o Filme.' })
  }
}

async function deleteFilm(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query)
  const { id } = req.query

  try {
    await prisma.film.delete({ where: { id } })

    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o Filme.' })
  }
}
