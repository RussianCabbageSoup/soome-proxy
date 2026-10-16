import axios from "axios";
import type { NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiError.js";

class ProxyController {
    async connect(req: Request, res: Response, next: NextFunction) {
        try {
            const { targetUrl } = req.query;
            if (!targetUrl) return next(ApiError.badRequest('targetUrl is not defined'));

            const { data } = await axios.get(String(targetUrl));

            return res.json(data);
        } catch (error) {
            next(error);
        }
    }
}

export default new ProxyController();