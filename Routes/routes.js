const express = require('express');
const employee = require('../Model/employee');
const execute = require('../Controllers/controllers')

const router = express.Router();

router.get('/', (req, res) => {
    res.send(execute.getAll());
});

router.post('/cadastrar', (req, res) => {
    this.employee = new employee();

    try{
        this.employee.setName(req.body.name);
        this.employee.setCpf(req.body.cpf);
        this.employee.setOffice(req.body.office);
    }catch(err){
        console.log(err);
        return res.status(400).send({error: "Solicitacao invalida"});
    }

    if(execute.register(this.employee.getEmployee()))
        return res.send({message: "Funcionario cadastrado com sucesso"});
    
    return res.status(500).send({error: "Falha ao cadastrar funcionario"});
})

router.put('/atualizar', (req, res) => {
    this.employee = new employee();

    try{
        this.employee.setName(req.body.name);
        this.employee.setCpf(req.body.cpf);
        this.employee.setOffice(req.body.office);
    }catch(err){
        return res.status(400).send({error: "Solicitacao invalida"});
    }

    if(execute.update(this.employee.getEmployee()))
        return res.send({message: "Funcionario atualizado com sucesso"});
    
    return res.status(500).send({error: "Falha ao atualizar funcionario"});
});

router.delete('/excluir', (req, res) => {
    if(execute.remove(req.body.cpf))
        return res.send({message: "funcionario excluido com sucesso"})
    
    return res.status(500).send({error: "falha ao excluir funcionario"});
});

module.exports = router;