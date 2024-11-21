import { Response } from 'express';

export class ResponseHelper {
    success(response: Response, message: string, data: object | null = null) {
        return response.status(200).json({ data, message, status: 200 });
    }

    created(response: Response, message: string, data: object | null = null) {
        return response.status(201).json({ data, message, status: 201 });
    }

    badRequest(response: Response, message: string, data: object | null = null) {
        return response.status(400).json({ data, message, status: 400 });
    }

    unauthorized(response: Response, message: string, data: object | null = null) {
        return response.status(401).json({ data, message, status: 401 });
    }

    forbidden(response: Response, message: string, data: object | null = null) {
        return response.status(403).json({ data, message, status: 403 });
    }

    notFound(response: Response, message: string, data: object | null = null) {
        return response.status(404).json({ data, message, status: 404 });
    }

    conflict(response: Response, message: string, data: object | null = null) {
        return response.status(409).json({ data, message, status: 409 });
    }

    error(response: Response, message: string, data: any = null) {
        return response.status(500).json({ data, message, status: 500 });
    }
}
