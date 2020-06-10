const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');


module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*'); 

        return res.json(ongs);
    },
    async create (req, res) {
        const { name, email, whatsapp, city, uf } = req.body;
        
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return res.json({ id });
    },
    async show(req, res){
        const { id } = req.params;

        const ong = await connection('ongs').select('*').where('id', id);

        return res.json(ong);
    },
    async update(req, res){
        const { id } = req.params;
        const { name, email, whatsapp, city, uf } = req.body;
        const ong_id = req.headers.authorization;

        const ong = await connection('ongs').select('*').where('id', id);
        
        if(ong.id =! ong_id){
            return res.status(401).json({error: 'Operation not permitted.'});
        }

        await connection('ongs')
            .where('id', id)
            .update({
                name,
                email,
                whatsapp,
                city,
                uf
            });
            
        const updatedOng = await connection('ongs').select('*').where('id', id);

        return res.json(updatedOng);
    },
    async destroy(req, res){
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if(incident.ong_id =! ong_id){
            return res.status(401).json({error: 'Operation not permitted.'});
        }

        await connection('incidents').where('id', id).delete();
        return res.status(204).send();
    },
    
};