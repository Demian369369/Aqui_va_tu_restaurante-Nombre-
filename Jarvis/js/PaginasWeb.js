function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
//Paginas
function showTask(taskId) {
    var taskDescriptions = {
        taskPro0: 'Pagina Web de $200 para menu de restaurante, incluye fondo, producto, precio etc. <a href="https://demian369369.github.io/JarvisFrontendProject/PaginasWeb/Prototipo0/" target="_blank">Ver más detalles</a>',
        taskPro1: 'Pagina Web de $300 Recomendada para menu de restaurante, incluye fondo, producto, precio, botones, idiomas etc. <a href="https://demian369369.github.io/JarvisFrontendProject/PaginasWeb/Prototipo1/" target="_blank">Ver más detalles</a>',
        taskPro2: 'Pagina Web de $400 para tiendas en linea, incluye fondo, producto, precio, botones, idiomas, otras paginas, mas informacion etc. <a href="https://demian369369.github.io/JarvisFrontendProject/PaginasWeb/Prototipo2/" target="_blank">Ver más detalles</a>',
        taskPro3: 'Pagina Web de $700 Recomendada para tiendas en linea, incluye fondo, producto, precio, botones, idiomas, otras paginas, moderna, catalogos, animaciones, mas informacion etc. <a href="https://demian369369.github.io/JarvisFrontendProject/PaginasWeb/Prototipo3/" target="_blank">Ver más detalles</a>',
        taskPro4: 'Pagina Web de $800 Recomendada para promociones y varias sucursales, incluye fondo, producto, precio, botones, idiomas, otras paginas, moderna, catalogos, animaciones,mas informacion, base de datos, comentarios de usuarios e informacion para llenar, promociones en tiempo real etc.  <a href="https://demian369369.github.io/JarvisFrontendProject/PaginasWeb/Prototipo4/" target="_blank">Ver más detalles</a>',
        taskPro5: 'Pagina Web de $900 Recomendada para tiendas en linea, promociones y varias sucursales, incluye fondo, productos, precio, botones, idiomas, otras paginas, moderna, catalogos, animaciones, mas informacion, base de datos, comentarios de usuarios e informacion para llenar, promociones en tiempo real, filtro de busqueda para usuarios, sistema logico de compras etc. <a href="https://demian369369.github.io/JarvisFrontendProject/PaginasWeb/Prototipo5/" target="_blank">Ver más detalles</a>',
        taskPro6: 'Pagina Web de $1000 E commerce, Recomendada para tiendas en linea, promociones y varias sucursales, incluye fondo, productos, precio, botones, idiomas, otras paginas, moderna, catalogos, animaciones, mas informacion, base de datos, comentarios de usuarios e informacion para llenar, promociones en tiempo real, filtro de busqueda para usuarios, sistema logico de compras etc.  <a href="https://demian369369.github.io/JarvisFrontendProject/PaginasWeb/Prototipo6/" target="_blank">Ver más detalles</a>',
        taskPro7: 'Pagina Web de $2000 Ideal para menu de restaurante, promociones y varias sucursales, incluye fondo, productos, precio, botones, idiomas, otras paginas, moderna, catalogos, animaciones, mas informacion, base de datos, comentarios de usuarios e informacion para llenar, promociones en tiempo real, filtro de busqueda para usuarios, sistema logico de compras, reserva de mesas, animaciones, React y personalizable etc.  <a href="https://demian369369.github.io/JarvisFrontendProject/PaginasWeb/Prototipo7/" target="_blank">Ver más detalles</a>',
        taskPro8: 'Pagina Web de $1200 Empresas, Pagina personalizable a tus necesidades. <a href="https://demian369369.github.io/JarvisFrontendProject/PaginasWeb/Prototipo8/" target="_blank">Ver más detalles</a>',
        taskPro9: 'Pagina Web de $500 para Curriculum, incluye fondo, Informacion, Otras paginas etc. <a href="https://demian369369.github.io/JarvisFrontendProject/PaginasWeb/Prototipo1/RESUME-Source_code/index.html" target="_blank">Ver más detalles</a>',
    };
    var description = taskDescriptions[taskId] || "No hay descripción para esta Pagina.";
    document.getElementById("description").innerHTML = description;
}
function showResource(resourceId) {
    var resourceDescriptions = {
        resourceMa1: "Descripción del Recurso Math 1",
        resourceMa2: "Descripción del Recurso Math 2",
        resourcePro1: "Descripción del Recurso Pro 1",
        resourcePro2: "Descripción del Recurso Pro 2",
        resourceIng1: "Descripción del Recurso Ing 1",
        resourceIng2: "Descripción del Recurso Ing 2",
        resourceEL1: "Descripción del Recurso EL 1",
        resourceEL2: "Descripción del Recurso EL 2",
        resourcePre1: "Descripción del Recurso Pre 1",
        resourcePre2: "Descripción del Recurso Pre 2",
        resourceFi1: "Descripción del Recurso Fi 1",
        resourceFi2: "Descripción del Recurso Fi 2",
    };
    var description = resourceDescriptions[resourceId] || "No hay descripción para esto.";
    document.getElementById("description").innerHTML = description;
}

