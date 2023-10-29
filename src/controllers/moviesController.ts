import {Request, Response} from 'express';

import { MovieModel } from '../models/movie';

export async function createMovie(req: Request, res: Response) {

  try {
    const data = req['body'];
    const movie = await MovieModel.create(data)

    return res.status(201).json(movie)
  }
  catch (e: any){
    console.error(e)
  }

}

export async function getMovieById(req: Request, res: Response){

  try {
    
    const id = req['params']['id']

    const movie = await MovieModel.findById(id);

    if(!movie){
      return res.status(404).json({erro: "Filme não encontrado!"})
    }

    return res.status(200).json(movie)

  } 
  catch (e: any){
    console.error(e)
  }

}

export default {
  createMovie,
  getMovieById
}