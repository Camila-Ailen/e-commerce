
//importamos Pocketbase
import PocketBase from 'pocketbase';

// Creamos una nueva instancia de Pocketbase

//local
// const pb = new PocketBase('http://127.0.0.1:8090');

//remoto
const pb = new PocketBase('https://proyectofina.pockethost.io');


//Esta funcion se ejecuta cuando se carga la pagina
export async function load() {

    //Obtener todos los productos
    const productos = structuredClone(await pb.collection('product').getFullList())

    //retornamos los productos a la vista
    return {
        productos
    };
};

//Estas los acciones a las que se puede acceder desde la vista
export const actions = {
    crear: async ({ request}) => {

        //obtener los datos del formulario
        const formData = await request.formData();

        //extrer los datos del formulario
        const name = formData.get('name');
        const price = formData.get('price');
        const description = formData.get('description');

        //crear el objeto de datos del producto
        const data = {
            "name": name,
            "price": price,
            "description": description
        };

        //crear el producto en la base de datos
        const nuevoProducto = await pb.collection('product').create(data);

    }
} 