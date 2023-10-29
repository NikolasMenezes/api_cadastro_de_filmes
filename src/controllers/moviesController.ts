import { Request, Response } from 'express';

import { MovieModel } from '../models/movie';

export async function createMovie(req: Request, res: Response) {

  try {
    const data = req['body'];
    const movie = await MovieModel.create(data)

    return res.status(201).json(movie)
  }
  catch (e: any) {
    console.error(e)
    return res.status(500).json({ erro: e })
  }

}

export async function getMovieById(req: Request, res: Response) {

  try {

    const id = req['params']['id']

    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ erro: "Filme não encontrado!" })
    }

    return res.status(200).json(movie)

  }
  catch (e: any) {
    console.error(e)
    return res.status(500).json({ erro: e })
  }

}

export async function getMovies(req: Request, res: Response) {

  try {
    const movies = await MovieModel.find({}).all('stars', []);
    if (!movies) {
      return res.status(404).json({ 'erro': 'Nenhum filme encontrado!' })
    }

    return res.status(200).json(movies)
  }
  catch (e: any) {
    console.error(e)
    return res.status(500).json({ erro: e })
  }
}

export async function updateMovies(req: Request, res: Response) {

  try {
    const id = req['params']['id']
    const data = req['body']

    const movie = MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ erro: "o Filme não existe!" })
    }

    await MovieModel.updateOne({ _id: id }, data)

    return res.status(200).json({ msg: "Filme atualizado com sucesso!" })

  }
  catch (e) {
    console.error(e)
    return res.status(500).json({ erro: e })
  }

}

export async function deleteMovies(req: Request, res: Response) {

  try {
    const id = req['params']['id']

    const movie = MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ erro: "o Filme não existe!" })
    }

    MovieModel.deleteOne(movie)

    return res.status(200).json({ msg: "Filme deletado com sucesso!" })

  }
  catch (e) {
    console.error(e)
    return res.status(500).json({ erro: e })
  }

}