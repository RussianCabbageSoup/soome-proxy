import type { Request, Response } from "express";

export default function(req: Request, res: Response) {
    return res.status(404).json({ message: `Route ${req.method} ${req.originalUrl} not found` });
}