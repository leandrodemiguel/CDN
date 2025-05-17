// <script>
// Rocordar sacar el comentario de los tags de <script> cuando pasemos este contenido al Moodle.

// Función para que el JS corra una vez que cargó toda la página
window.addEventListener('load', function() {


// ------------------------------------------------------------------------------------ //


// Selecciona todos los elementos h3
const h3Elements = document.querySelectorAll('h3');

// Selecciona todos los elementos que tienen la clase "studentbookingmessage"
const messageElements = document.querySelectorAll('.studentbookingmessage');


// ------------------------------------------------------------------------------------ //


// iteramos por todos los elementos h3 para buscar si está el que dice "Espacios disponibles"
let targetElement1 = null;
h3Elements.forEach(element => {
    if (element.textContent.includes('Espacios disponibles')) {
        targetElement1 = element;
    }
});

// Si está imprimimos este mensaje en la consola
/*

if (targetElement1) {
    console.log('Elemento encontrado:', targetElement1);

} else {
    console.log('Elemento no encontrado');
}

*/

// iteramos por todos los elementos h3 para buscar si está el que dice "Próximos espacios"
let targetElement2 = null;
h3Elements.forEach(element => {
    if (element.textContent.includes('Próximos espacios')) {
        targetElement2 = element;
    }
});

// Si está imprimimos este mensaje en la consola

/*

if (targetElement2) {
    console.log('Elemento encontrado:', targetElement2);
} else {
    console.log('Elemento no encontrado');
}

*/


// ------------------------------------------------------------------------------------ //


// iteramos por todos los elementos que contienen la clase "studentbookingmessage"
// para buscar si está el que dice "Puede reservar una cita más."
let targetElement3 = null;
messageElements.forEach(element => {
    if (element.textContent.includes('Puede reservar una cita más.')) {
        targetElement3 = element;
    }
});

// Como tenemos que cambiar el texto y nada más, podemos hacerlo ahora:

if (targetElement3) {
    console.log('Elemento encontrado:', targetElement3);
    targetElement3.textContent = "Puede realizar una sola reserva.";
} else {
    console.log('Elemento no encontrado');
}

// iteramos por todos los elementos que contienen la clase "studentbookingmessage"
// para buscar si está el que dice "La siguiente tabla muestra todos las espacios disponibles para una cita."
let targetElement4 = null;
messageElements.forEach(element => {
    if (element.textContent.includes('La siguiente tabla muestra todos las espacios disponibles para una cita.')) {
        targetElement4 = element;
    }
});

// Como tenemos que cambiar el texto y nada más, podemos hacerlo ahora:

if (targetElement4) {
    console.log('Elemento encontrado:', targetElement4);
    targetElement4.textContent = 'La siguiente tabla muestra todos los turnos disponibles. Realizá tu elección haciendo clic en el botón "Reservar espacio".';
} else {
    console.log('Elemento no encontrado');
}

// iteramos por todos los elementos que contienen la clase "studentbookingmessage"
// para buscar si está el que dice "Ya no puede reservar más citas." (está en la segunda página)
let targetElement5 = null;
messageElements.forEach(element => {
    if (element.textContent.includes('Ya no puede reservar más citas.')) {
        targetElement5 = element;
    }
});

// Como tenemos que borrar el elemento y nada más, podemos hacerlo ahora:

if (targetElement5) {
    console.log('Elemento encontrado:', targetElement5);
    targetElement5.remove();
} else {
    console.log('Elemento no encontrado');
}



// ------------------------------------------------------------------------------------ //



// Eliminamos las partes de las tablas que no queremos que se vean.

// Inicializamos la variable que va a tener los elementos a eliminar

let elementToRemove = null;

// Volamos todos los headers y celdas de la tabla de la página 1

if (targetElement1) {

    // Primero sacamos el drawer y el botón de estás páginas para "facilitar" la navegación
    // Este código corre con delay de 100 milisegundos
    setTimeout(function() {
        var buttonTramos = document.querySelector('.btn.nav-link.float-sm-left.mr-1.btn-light.bg-gray');
        var drawerTramos = document.getElementById('nav-drawer')
        
        // Verifica si el botón fue encontrado
        if (buttonTramos) {
            console.log('Botón encontrado:', buttonTramos);
        } else {
            console.log('Botón no encontrado');
        }
        
        // Función para cerrar el drawer si está abierto
        var isExpanded = buttonTramos.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            // Cerrar el drawer
            buttonTramos.click()
            drawerTramos.style.display = 'none';
            buttonTramos.style.display = 'none';
            buttonTramos.setAttribute('aria-expanded', 'false');
        } else {
            // Si no está expandido ocultamos el botón, porque a veces eso queda de resabio.
            buttonTramos.style.display = 'none';
            console.log('La acción no se realizó');
        }
        
        }, 100); // Espera 100 milisegundos antes de correr
    


    // --------------------------------------------- //



    // Sacamos los headers
    elementToRemove = document.querySelector('th.header.c4');
    if (elementToRemove) {
        console.log('Elemento encontrado:', elementToRemove);
        elementToRemove.remove();
    } else {
        console.log('Elemento no encontrado');
    };

    elementToRemove = document.querySelector('th.header.c5');
    if (elementToRemove) {
        console.log('Elemento encontrado:', elementToRemove);
        elementToRemove.remove();
    } else {
        console.log('Elemento no encontrado');
    };


    // Ahora sacamos las celdas
    elementToRemove = document.querySelectorAll('td.cell.c4'); // usamos querySelectorAll y un bucle porque debemos eliminar TODAS las celdas de esa columna y todas tienen el mismo selector.
    if (elementToRemove) {
    elementToRemove.forEach(element => {
        console.log('Elemento encontrado:', element);
        element.remove()});
    } else {
        console.log('Elemento no encontrado');
    };

    elementToRemove = document.querySelectorAll('td.cell.c5');
    if (elementToRemove) {
    elementToRemove.forEach(element => {
        console.log('Elemento encontrado:', element);
        element.remove()});
    } else {
        console.log('Elemento no encontrado');
    };

    // Ahora sacamos las imágenes (que actúan de botones) que permiten ver a la gente que eligió cada charla
    elementToRemove = document.querySelectorAll('.studentlist-togglebutton'); // usamos querySelectorAll y un bucle porque debemos eliminar TODAS las imágenes de esa columna y todas tienen el mismo selector.
    if (elementToRemove) {
    elementToRemove.forEach(element => {
        console.log('Elemento encontrado:', element);
        element.remove()});
    } else {
        console.log('Elemento no encontrado');
    };

};

// ------------------------------------------------------------------------------------ //

// Volamos todos los headers y celdas de la tabla de la página 2
// Acá no necesitamos bucles porque hay que volar tres columnas cada una con un solo header y una sola celda.

if (targetElement2) {

    // Primero sacamos el drawer y el botón de estás páginas para "facilitar" la navegación
    // Este código corre con delay de 100 milisegundos
    setTimeout(function() {
        var buttonTramos = document.querySelector('.btn.nav-link.float-sm-left.mr-1.btn-light.bg-gray');
        var drawerTramos = document.getElementById('nav-drawer')
        
        // Verifica si el botón fue encontrado
        if (buttonTramos) {
            console.log('Botón encontrado:', buttonTramos);
        } else {
            console.log('Botón no encontrado');
        }
        
        // Función para cerrar el drawer si está abierto
        var isExpanded = buttonTramos.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            // Cerrar el drawer
            buttonTramos.click()
            drawerTramos.style.display = 'none';
            buttonTramos.style.display = 'none';
            buttonTramos.setAttribute('aria-expanded', 'false');
        } else {
            // Si no está expandido ocultamos el botón, porque a veces eso queda de resabio.
            buttonTramos.style.display = 'none';
            console.log('La acción no se realizó');
        }
        
        }, 100); // Espera 100 milisegundos antes de correr



    // --------------------------------------------- //



    elementToRemove = document.querySelector('th.header.c1');
    if (elementToRemove) {
        console.log('Elemento encontrado:', elementToRemove);
        elementToRemove.remove();
    } else {
        console.log('Elemento no encontrado');
    };

    elementToRemove = document.querySelector('th.header.c3');
    if (elementToRemove) {
        console.log('Elemento encontrado:', elementToRemove);
        elementToRemove.remove();
    } else {
        console.log('Elemento no encontrado');
    };
    
    elementToRemove = document.querySelector('th.header.c4');
    if (elementToRemove) {
        console.log('Elemento encontrado:', elementToRemove);
        elementToRemove.remove();
    } else {
        console.log('Elemento no encontrado');
    };

    elementToRemove = document.querySelector('td.cell.c1');
    if (elementToRemove) {
        console.log('Elemento encontrado:', elementToRemove);
        elementToRemove.remove();
    } else {
        console.log('Elemento no encontrado');
    };

    elementToRemove = document.querySelector('td.cell.c3');
    if (elementToRemove) {
        console.log('Elemento encontrado:', elementToRemove);
        elementToRemove.remove();
    } else {
        console.log('Elemento no encontrado');
    };
    
    elementToRemove = document.querySelector('td.cell.c4');
    if (elementToRemove) {
        console.log('Elemento encontrado:', elementToRemove);
        elementToRemove.remove();
    } else {
        console.log('Elemento no encontrado');
    };
    
};

});

// </script>