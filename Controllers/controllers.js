const path = require('path');
const fs = require('fs');
let employeesData = require('../Employees Data/employeesData.json');
const { builtinModules } = require('module');

/*
    busca todos os funcionario cadastrados
*/
function getAll(){
    return employeesData.employees;
}

/*
    registra um novo funcionario
    params employee
*/
function register(employee){
    employeesData.employees.push(employee);

    fs.writeFile(path.join(__dirname, '../Employees Data/employeesData.json'), JSON.stringify(employeesData, null, 4), err => {
        if(err) throw err;
    })

    return true;
}

/*
    exclui o cadastro de um funcionario
    params cpf
*/
function remove(cpf){
    employeesData.employees = employeesData.employees.filter(item => String(item.cpf) !== String(cpf));
    fs.writeFile(path.join(__dirname, '../Employees Data/employeesData.json'), JSON.stringify(employeesData, null, 4), err => {
        if(err) throw err;
    })

    return true;
}

/*
    atualiza o cadastro de um funcionario
    params employee
*/
function update(employee){
    remove(employee.cpf);
    register(employee);

    return true;
}

module.exports = {getAll, register, update, remove};