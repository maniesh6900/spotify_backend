import { client } from "../prisma/index.js";
import { userSignupSchema } from "../type/index.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const UserSignup = asyncHandler(async (req, res)=> {
    const parsedData = userSignupSchema.safeParse(req.body);
    if(!parsedData.success) {
        throw new ApiError(400, "Invalid data");
    }

    const userExist = await client.user.findFirst({
        where: {
            username: parsedData.data.username,
        },
    });
    if(userExist) {
        throw new ApiError(400, "User already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(parsedData.data.password, salt);

    const user = await client.user.create({
        data: {
            username: parsedData.data.username,
            password: hashPassword,
        },
    });
    if(!user) {
        throw new ApiError(500, "Something went wrong while creating user");
    }

    const token = jwt.sign({
        id: user.id,
    },
        process.env.ACCESS_TOKEN_SECRET as string,
    );
   
    return res
    .cookie("token", token, {
        httpOnly: true,
        secure: true,
    })
    .json(new ApiResponse(200, user, "User created successfully"));
});

export const UserLogin = asyncHandler(async (req, res)=> {
    const parsedData = userSignupSchema.safeParse(req.body);
    if(!parsedData.success) {
        throw new ApiError(400, "Invalid data");
    }   

    const user = await client.user.findFirst({
        where: {
            username: parsedData.data.username,
        },
    });
    if(!user) {
        throw new ApiError(404, "User not found");
    }
    
    const isPasswordValid = await bcrypt.compare(parsedData.data.password, user.password);
    if(!isPasswordValid) {
        throw new ApiError(401, "Invalid password");
    }
    const token = jwt.sign({
        id: user.id,
    },
        process.env.ACCESS_TOKEN_SECRET as string,
    );
    return res
    .cookie("token", token, {
        httpOnly: true,
        secure: true,
    })
    .json(new ApiResponse(200, user, "User logged in successfully"));
})

export const UserLogout = asyncHandler(async (req : any, res)=> {
    const {userId} = req;
    
    const user = await client.user.findFirst({
        where: {
            id: userId,
        },
    });
    if(!user) {
        throw new ApiError(404, "User not found");
    }
    
    return res
    .cookie("token", null)
    .json(new ApiResponse(200, user, "User logged out successfully"));
});