import { series } from './data.js';
import { Serie } from './series.js';

let seriesTable : HTMLElement = document.getElementById('seriesTabla')!;
let promedioElemento : HTMLElement = document.getElementById('promedio')!;
let seleccinoadoTable : HTMLElement = document.getElementById('serieSeleccionada')!;

mostrarDatosSeries(series);
calcularPromedioTemporadas();


function mostrarDatosSeries(series: Serie[]): void {
    let tablaHTML = `
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Canal</th>
                    <th>Temporadas</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    series.forEach(serie => {
        tablaHTML += `
            <tr>
                <td>${serie.id}</td>
                <td><a href="#${serie.title}" id="${serie.title}">${serie.title}</a></td>
                <td>${serie.network}</td>
                <td>${serie.seasons}</td>
            </tr>
        `;
    });
    
    tablaHTML += `
            </tbody>
        </table>
    `;

    seriesTable.innerHTML = tablaHTML;  
    
    series.forEach(serie => {
        const titleElement = document.getElementById(serie.title);
        if (titleElement) {
            titleElement.addEventListener('click', () => {
                // Call the displayDinamico function with appropriate parameters
                displayDinamico(serie.title, serie.description, serie.website, serie.imageUrl);
            });
        }
    });

}

function calcularPromedioTemporadas(): void {
    const celdasTemporadas = document.querySelectorAll('#seriesTabla tbody tr td:nth-child(4)');
    console.log(celdasTemporadas);
    let totalTemporadas = 0;
    let cantidadSeries = 0;

    celdasTemporadas.forEach(celda => {
        const temporadas = parseInt(celda.textContent || '0');
        if (!isNaN(temporadas)) {
            totalTemporadas += temporadas;
            cantidadSeries++;
        }
    });
    console.log("Temporadas: "+ totalTemporadas);
    console.log("Cantidad de series: "+ cantidadSeries);
    console.log("Promedio: "+ totalTemporadas / cantidadSeries);

    const promedio = cantidadSeries > 0 ? totalTemporadas / cantidadSeries : 0;
    promedioElemento.textContent = `Seasons average: ${promedio}`;
}

function displayDinamico(nombre: string, description: string, website: string, url: string): void {
    let cardHTML = `
        <div class="card">
            <img src="${url}" class="card-img-top" alt="${nombre}">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${description}</p>
                <a href="${website}" class="btn btn-primary">${website}</a>
            </div>
        </div>
    `;
    seleccinoadoTable.innerHTML = cardHTML;
}
