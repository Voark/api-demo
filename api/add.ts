import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
    const { a, b } = req.body;
    res.status(200).json({ result: parseInt(a) + parseInt(b) });
}
