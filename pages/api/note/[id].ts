import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	const cardId = req.query.id

	if (req.method === 'CREATE') {
		const card = await prisma.card.create({
			where: { id: Number(cardId) }
		})
		res.json(card)
	} else {
		console.log("Note could not be created");
	}

	if(req.method === 'DELETE') {
		const card = await prisma.card.delete({
			where: {id: Number(cardId)}
		})
		res.json(card)
	} else {
		console.log("Note could not be created");
	}
	if (req.method === 'UPDATE') {
		const card = await prisma.card.update({
			where: { id: Number(cardId) }
		})
		res.json(card)
	} else {
		console.log("Note could not be created");
	}
	if (req.method === 'GET') {
		const card = await prisma.card.findMany({
			where: { id: Number(cardId) }
		})
		res.json(card)
	} else {
		console.log("Note could not be created");
	}
}