<script>
    export let data;
</script>

<main>
    <h1>Productos</h1>
    <p>Estos son los productos</p>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Creado</th>
            </tr>
        </thead>
        <tbody>
            {#each data.productos as producto}
                <tr>
                    <td>{producto.name}</td>
                    <td>{producto.price}</td>
                    <td>{producto.description}</td>
                    <td>{new (Date(producto.created).toLocaleDateString)}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</main>

<!-- formulario para crear un producto -->
<form method="POST" action="?/crear" >
    <label for="name">Nombre</label>
    <input type="text" id="name" name="name" >
    <label for="price">Precio</label>
    <input type="number" id="price" name="price" >
    <label for="description">Descripción</label>
    <textarea id="description" name="description" ></textarea>
    <button type="submit">Crear producto</button>
</form>