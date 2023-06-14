// pages/api/cards.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a card
export default async function createCard(req: NextApiRequest, res: NextApiResponse) {
    const { title, content } = req.body;

    try {
        const card = await prisma.card.create({
            data: {
                title,
                content,
            },
        });

        res.status(201).json(card);
    } catch (error) {
        res.status(500).json({ error: 'Unable to create the card' });
    }
}

// Read all cards
export async function getCards(req: NextApiRequest, res: NextApiResponse) {
    try {
        const cards = await prisma.card.findMany();

        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch the cards' });
    }
}

// Update a card
export async function updateCard(req: NextApiRequest, res: NextApiResponse) {
    const { id, title, content } = req.body;

    try {
        const updatedCard = await prisma.card.update({
            where: { id: Number(id) },
            data: {
                title,
                content,
            },
        });

        res.status(200).json(updatedCard);
    } catch (error) {
        res.status(500).json({ error: 'Unable to update the card' });
    }
}

// Delete a card
export async function deleteCard(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;

    try {
        const deletedCard = await prisma.card.delete({
            where: { id: Number(id) },
        });

        res.status(200).json(deletedCard);
    } catch (error) {
        res.status(500).json({ error: 'Unable to delete the card' });
    }
}
