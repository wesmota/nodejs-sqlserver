import { Request,Response} from 'express';
import {getRepository} from 'typeorm';
import {Formulario} from '../entity/formulario';

export const listarFormulario = async(req:Request,res:Response):Promise<Response>=>{
    const results = await getRepository(Formulario).find();
    return res.json(results);
};

export const obterFormulario = async(req:Request,res:Response):Promise<Response> =>{
    
    const id = req.params.id;
    
    const form = await getRepository(Formulario).findOne(id);
    if (!form) {
        res.status(400);
        res.send('Form not found');
    }
    return res.json(form);

};

export const criarFormulario =  async(req:Request,res:Response):Promise<Response>=>{
    console.log("criar formulario");
    console.log(req.body);
    const novoForm = getRepository(Formulario).create(req.body);
    console.log(novoForm);
    const results = await getRepository(Formulario).save(novoForm);
    console.log("Guardado",req.body);
    return res.json(results);
};
/*export const createUser = async(req:Request,res:Response):Promise<Response>=>{
     const newUser = getRepository(user).create(req.body);
     const results = await getRepository(user).save(newUser);
     console.log("Guardado",req.body);
     return res.json(results);
};
export const getUser = async(req:Request,res:Response):Promise<Response>=>{
    const results = await getRepository(user).findOne(req.params.id);
    return res.json(results);
};
export const updateUser = async(req:Request,res:Response):Promise<Response>=>{
    const usuario = await getRepository(user).findOne(req.params.id);
    if (usuario){
        getRepository(user).merge(usuario,req.body);
       const results =  await getRepository(user).save(usuario);
       return res.json(results);
    }
    return res.status(404).json({msg: "Not user found"});
};
export const deleteUser = async(req:Request,res:Response):Promise<Response>=>{
    const results = await getRepository(user).delete(req.params.id);
    return res.json(results);
};*/