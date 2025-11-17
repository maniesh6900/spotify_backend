import z from "zod";
export const userSignupSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string(),
});
export const addMusicSchema = z.object({
    name: z.string().min(3).max(20),
    album: z.string().min(3).max(20).optional(),
    // file: z.file().mime("audio/mpeg"),
});
//# sourceMappingURL=index.js.map