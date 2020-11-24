import connect from '../../utils/database';

export default async (res, res) => {
    if(req.method === 'POST'){
        
        const { name, email, cellphone, teacher } = req.body;
        
        if (!name || !email || !cellphone || !teacher){
            res.status(400).json({message: 'Missing body parameter'})
            return
        }

        const { db } = await connect();
        
        const response = await db.collection('users').insertOne({
            name,
            email,
            cellphone,
            teacher,
        });
        res.status(200).json(response.ops[0])
    }else{
        res.status(400).json({error: 'Wrong request method'})
    }


}