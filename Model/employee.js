/*
    retorna uma instância de um novo funcionario
    params nome, cpf, office
*/
function employee(name, cpf, office){
    let employee = {
        name: name,
        cpf: cpf,
        office: office
    }

    function getEmployee(){
        const employeeObject = employee;
        return employeeObject;
    }

    function getName(){
        return employee.name;
    }
    function getCpf(){
        return employee.cpf;
    }
    function getOffice(){
        return employee.office;
    }

    function setName(name){
        employee.name = name;
    }
    function setCpf(cpf){
        employee.cpf = cpf;
    }
    function setOffice(office){
        employee.office = office;
    }

    return {getEmployee, getName, getOffice, getCpf, setCpf, setName, setOffice};
}

module.exports = employee;