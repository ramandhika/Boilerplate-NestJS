import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { ForbiddenException } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) throw new UnauthorizedException('Token required');

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (err) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}

export const RoleCheck = (role: string) => {
    return (req, res, next) => {
        if (req.user?.role !== role) {
            throw new ForbiddenException('Access Denied');
        }
        next();
    };
};
