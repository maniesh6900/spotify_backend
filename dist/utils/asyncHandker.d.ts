import type { NextFunction, Request, Response } from "express";
declare const asyncHandler: (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => (req: Request, res: Response, next: NextFunction) => void;
export { asyncHandler };
//# sourceMappingURL=asyncHandker.d.ts.map