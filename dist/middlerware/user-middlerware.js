import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { client } from "../prisma/index.js";
export const userMiddlerware = async (req, _, next) => {
    const token = req.cookies?.token;
    if (!token) {
        throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // @ts-ignore
    if (decodedToken.id) {
        // @ts-ignore
        req.userId = decodedToken.id;
        next();
    }
    else {
        throw new ApiError(400, "You are not logged in");
    }
};
//# sourceMappingURL=user-middlerware.js.map