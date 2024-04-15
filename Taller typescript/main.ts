import { series } from './data.js';
import { Serie } from './series.js';

function generarTablaHTML(series: Serie[]): string {
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
    
    return tablaHTML;
}

const tablaHTML = generarTablaHTML(series);
const tablaSeriesDiv = document.getElementById('tablaSeries');
if (tablaSeriesDiv) {
    tablaSeriesDiv.innerHTML = tablaHTML;
} else {
    console.error('No se encontró el elemento con id "tablaSeries"');
}

function calcularPromedioTemporadas(): number {
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
    
    return promedio;
}

const promedioTemporadas = calcularPromedioTemporadas();

const promedioElement = document.getElementById('promedio');
if (promedioElement) {
    promedioElement.textContent = `Season average: ${promedioTemporadas}`;
} else {
    console.error('No se encontró el elemento con id "promedio"');
}