// INICIO

// 1. Configuración inicial
// ✅   - Crear archivo HTML con un contenedor principal (div id="container").
// ✅   - Linkear CSS y JS correctamente.             
// ✅   - Asegurarse de que el CSS tenga margin:0 y box-sizing:border-box.

// 2. Crear cuadrícula inicial (16x16)
// estado inicial: hover negro
let randomMode = false;

function createGrid(gridSize) {
    //  - Definir tamaño fijo del contenedor (ej: 960px).
    const container = document.querySelector("#container");
    container.innerHTML = "";
    const cellSize = 960 / gridSize;
    //    - Usar bucles anidados:
    //filas
    for (let fila = 0; fila < gridSize; fila++) {
        //columnas:
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = cellSize + "px";
            cell.style.height = cellSize + "px";
            //hover > depende del modo
            cell.addEventListener("mouseover", () => {
                if (randomMode) {
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                } else {
                    cell.style.backgroundColor = "black"; // o el color que quieras
                }
            });
            container.appendChild(cell);
        }
    }
}
//boton para alternar colores
const toggleButton = document.querySelector("#toggleColors");
toggleButton.addEventListener("click", () => {
    randomMode = !randomMode;
    toggleButton.textContent = randomMode
        ? "Desactivar colores aleatorios"
        : "Activar colores aleatorios";
});
//boton para resetear cuadricula
const newGridButton = document.querySelector("#newGrid");
newGridButton.addEventListener("click", () => {
    let gridSize = prompt("Ingresa el tamaño de la grilla(maximo 100)");
    gridSize = parseInt(gridSize);

    if (gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert("Numero invalido. debe ser entre 1 y 100");
    }
});
//iniciar 
createGrid(16)

// 3. Hover effect
//    - Detectar evento "mouseover" en cada celda.
//    - Cambiar color de fondo de la celda al pasar el mouse.

// 4. Botón para nueva cuadrícula
//    - Crear botón en HTML.
//    - Al hacer clic:
//        - Mostrar prompt o leer input del usuario (máx. 100).
//        - Guardar valor en variable gridSize.
//        - Borrar cuadrícula existente.
//        - Generar nueva cuadrícula con gridSize x gridSize celdas.
//        - Ajustar tamaño de cada celda para que el total siga siendo 960px.

// 5. Validaciones y debugging
//    - Revisar consola por errores.
//    - Usar console.log en puntos clave para verificar ejecución.
//    - Revisar panel de elementos para confirmar que las celdas existen.

// 6. Extra credit (opcional)
//    - Al pasar el mouse:
//        - Generar color RGB aleatorio y aplicarlo a la celda.
//        - O aplicar un efecto de oscurecimiento progresivo (cada hover aumenta opacidad hasta llegar a negro).

// FIN