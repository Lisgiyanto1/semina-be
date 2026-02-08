import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function errHandler(
    err: ZodError,
    req: Request,
    res: Response,
    next: NextFunction) {
    if (err?.type === "VALIDATION_ERROR") {
        return res.status(400).json({
            success: false,
            message: "[VALIDATION ERROR]",
            errors: err.issues.map((e) => ({
                path: e.path,
                message: e.message
            }))
        })
    }

    return res.status(500).json({
        success: false,
        message: "[INTERNAL_SERVER_ERROR]",
        errors: err.message
    })
}