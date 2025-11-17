import z from "zod";
export declare const userSignupSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
export declare const addMusicSchema: z.ZodObject<{
    name: z.ZodString;
    album: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
//# sourceMappingURL=index.d.ts.map