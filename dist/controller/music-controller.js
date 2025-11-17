import { client } from "../prisma/index.js";
import { addMusicSchema, userSignupSchema } from "../type/index.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import multer from "multer";
import { uploadMp3ToS3 } from "../utils/awsClient.js";
import { string } from "zod";
import { promises as fs } from "fs";
export const addMusic = asyncHandler(async (req, res) => {
    const files = req.files;
    const { audio } = files;
    if (!audio) {
        throw new ApiError(400, "Audio file is required");
    }
    const audioFile = audio[0];
    const buffer = audioFile.buffer
        ? Buffer.from(audioFile.buffer)
        : audioFile.path
            ? Buffer.from(await fs.readFile(audioFile.path))
            : Buffer.alloc(0);
    const { url } = await uploadMp3ToS3(buffer, audioFile.filename, "amz-s3-myapp-music");
    if (url !== undefined) {
        await fs.unlink(audioFile.path);
    }
    const exist = await client.song.findFirst({
        where: {
            name: audioFile.filename.toLowerCase(),
        },
    });
    if (exist) {
        throw new ApiError(400, "Song already exist");
    }
    const song = await client.song.create({
        data: {
            name: audioFile.filename.trim().toLowerCase(),
            songPath: url,
            creator: req.userId,
        },
    });
    if (!song) {
        throw new ApiError(400, "Song not created");
    }
    res
        .json(new ApiResponse(201, song, "Song created successfully"));
});
export const getAllSongs = asyncHandler(async (req, res) => {
    const songs = await client.song.findMany({});
    if (!songs) {
        throw new ApiError(400, "Songs not found");
    }
    res
        .json(new ApiResponse(200, songs, "Songs fetched successfully"));
});
export const getSongById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const _id = Number(id);
    if (!id) {
        throw new ApiError(400, "Id is required");
    }
    const song = await client.song.findUnique({
        where: {
            id: _id,
        }
    });
    if (!song) {
        throw new ApiError(400, "Song not found");
    }
    res
        .json(new ApiResponse(200, song, "Song fetched successfully"));
});
export const deleteSong = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const _id = Number(id);
    if (!id) {
        throw new ApiError(400, "Id is required");
    }
    const song = await client.song.delete({
        where: {
            id: _id,
        },
    });
    if (!song) {
        throw new ApiError(400, "Song not found");
    }
    res
        .json(new ApiResponse(200, song, "Song deleted successfully"));
});
export const updateSong = asyncHandler(async (req, res) => {
    //   name      String 
    //   album     String?
    //   playistId
    const { id } = req.params;
    const _id = Number(id);
    const { name, album, playistId } = req.body;
    if (!id) {
        throw new ApiError(400, "Id is required");
    }
    const song = await client.song.update({
        where: {
            id: _id,
        },
        data: {
            name,
            album,
            playistId,
        },
    });
    if (!song) {
        throw new ApiError(400, "Song not found");
    }
    res
        .json(new ApiResponse(200, song, "Song updated successfully"));
});
//# sourceMappingURL=music-controller.js.map