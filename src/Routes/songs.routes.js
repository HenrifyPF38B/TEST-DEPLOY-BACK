import { Router } from "express";
import getSongsHandler from "../Handlers/Songs/getSongsHandler.js";
import getSongsByIdHandler from "../Handlers/Songs/getSongsByIdHandler.js";
import postSongsHandler from "../Handlers/Songs/postSongsHandler.js";
import putSongsHandler from "../Handlers/Songs/putSongsHandler.js";
import deleteSongsHandler from "../Handlers/Songs/deleteSongsHandler.js";
import { getSongsToDb } from "../Util/initFetch.js";

export const songsRouter = Router()

songsRouter.get('/', getSongsHandler)
songsRouter.get('/:id',getSongsByIdHandler)
songsRouter.post('/', postSongsHandler)
songsRouter.put('/:id', putSongsHandler)
songsRouter.delete('/:id', deleteSongsHandler)
//Para cargar datos de la Api 
songsRouter.get("/db/fetch", getSongsToDb);