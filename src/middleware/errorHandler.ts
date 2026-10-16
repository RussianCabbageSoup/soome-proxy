import type { NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiError.js";

export default function(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ApiError) {
        return res.status(err.code).json({ error: err.message });
    }

    if (process.env.NODE_ENV === 'development') {
        return res.status(500).json({ error: err.message });
    }

    return res.status(500).json({ error: 'Непредвиденная ошибка' });
}