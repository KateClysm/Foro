import db from "../db";
import { Request, Response } from 'express';
import { ICommunity } from "../interfaces/ICommunity";
export const getCommunities = (req: Request, res: Response) => {
    
    const q = `SELECT c.*, id, name, link, logo FROM communities as c`;
    db.query(q, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (Array.isArray(data) && data.length > 0) {
            const communities: ICommunity[] = data as ICommunity[];
            return res.status(200).json({ data: communities, message: "Here are our recommended communities" });
        } 
        return res.status(404).json({ error: 'Communities not found' });
    });
};