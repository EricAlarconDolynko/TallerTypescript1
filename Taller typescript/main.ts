import { series } from './data.js';
import { Serie } from './series.js';

let seriesTable : HTMLElement = document.getElementById('seriesTabla')!;
//let promedioElemento : HTMLElement = document.getElementById('promedio')!;

function tablaDinamica(series: Serie[]):void{
    
    for (let serie of series){
        let rowElement = `
        <div class = "row">
            <div class = "col">${serie.id}</div>
            <div class = "col">${serie.title}</div>
            <div class = "col">${serie.network}</div>
            <div class = "col">${serie.seasons}</div>
            <div class = "col">${serie.description}</div>
            <div class = "col">${serie.website}</div>
            <div class = "col"><img src = "${serie.imageUrl}" alt = "${serie.title}"></div>
        </div>
        `
    }
}

function mostrarDatosSeries(series: Serie[]): void {
    let tablaHTML = `
        <table>
            <thead>
                <tr>
                    <th>idSerie</th>
                    <th>Nombre</th>
                    <th>Canal</th>
                    <th>Temporadas</th>
                    <th>Descripción</th>
                    <th>Pagina Web</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    series.forEach(serie => {
        tablaHTML += `
            <tr>
                <td>${serie.id}</td>
                <td>${serie.title}</td>
                <td>${serie.network}</td>
                <td>${serie.seasons}</td>
                <td>${serie.description}</td>
                <td><a href="${serie.website}" target="_blank">${serie.website}</a></td>
                <td><img src="${serie.imageUrl}" alt="${serie.title}" width="100"></td>
            </tr>
        `;
    });
    
    tablaHTML += `
            </tbody>
        </table>
    `;

    seriesTable.innerHTML = tablaHTML;    
}

function calcularPromedioTemporadas(): void {
    const celdasTemporadas = document.querySelectorAll('#tablaSeries tbody tr td:nth-child(4)');
    
    let totalTemporadas = 0;
    let cantidadSeries = 0;

    celdasTemporadas.forEach(celda => {
        const temporadas = parseInt(celda.textContent || '0');
        if (!isNaN(temporadas)) {
            totalTemporadas += temporadas;
            cantidadSeries++;
        }
    });

    const promedio = cantidadSeries > 0 ? totalTemporadas / cantidadSeries : 0;
    //promedioElemento.textContent = `Season average: ${promedio}`;
}

