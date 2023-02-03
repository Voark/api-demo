// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    result: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { a, b } = req.body
    res.status(200).json({ result: parseInt(a) + parseInt(b) });
}
