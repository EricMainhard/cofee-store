import { Prisma, PrismaClient } from '@prisma/client';

const handler = async (req, res) => {
    const prisma = new PrismaClient();

    if (req.method === "GET"){
        try{
            const orders = await prisma.order.findMany({});
            res.status(200).json(orders);
        } catch(err){
            res.status(500).json(err);
        }
    } else if (req.method === "POST"){
        try{
            const order = await prisma.order.create({
                data: {
                    name: req.body.name,
                    date: req.body.date,
                    total: req.body.total,
                    order: req.body.order
                } 
            });
            res.status(200).json( order );
        } catch(err){
            res.status(500).json(err);
        }
    }


}

export default handler;