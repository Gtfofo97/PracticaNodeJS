const empleados = [
    {
        id: 1,
        Nombre: 'Gustavo'
    },
    {
        id: 2,
        Nombre: 'Bryan'
    },
    {
        id: 3,
        Nombre: 'Erick'
    }
]
const salarios = [
    {
        id: 1,
        salario: 900
    },
    {
        id: 2,
        salario: 1100
    },
    {
        id: 3,
        salario: 1300
    }
]

const getEmpleado = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.Nombre
        if (empleado){
            resolve(empleado);
        } else{
            reject(`Empleado con id ${id} no existe`);
        }
    });
    return promesa;
}

const getSalario = () => {
    const empleado = empleados.find(e => e.id === id)?.Nombre

    if (empleado){
        cancelIdleCallback(null, empleado);
    } else{
        cancelIdleCallback(`Empleado con id ${id} no existe`);
    }
}

const id = 1;
getEmpleado(id)
.then(empleado => console.log(empleado));