import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {

    const prisma = new PrismaClient();

    if (req.method === 'POST'){
        if (req.body.closed){
            const updateOrder = await prisma.order.update({
                where: {
                    id: parseInt(req.query.id)
                },
                data: {
                    fullfilled: true
                }  
            });
    
            res.status(200).json(updateOrder);
        } else {
            const updateOrder = await prisma.order.update({
                where: {
                    id: parseInt(req.query.id)
                },
                data: {
                    fullfilled: false
                }  
            });
    
            res.status(200).json(updateOrder);
        }
    }
}

export default handler;