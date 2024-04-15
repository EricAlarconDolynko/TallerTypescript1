import { series } from './data.js';
function generarTablaHTML(series) {
    var tablaHTML = "\n        <table>\n            <thead>\n                <tr>\n                    <th>idSerie</th>\n                    <th>Nombre</th>\n                    <th>Canal</th>\n                    <th>Temporadas</th>\n                    <th>Descripci\u00F3n</th>\n                    <th>Pagina Web</th>\n                    <th>Imagen</th>\n                </tr>\n            </thead>\n            <tbody>\n    ";
    series.forEach(function (serie) {
        tablaHTML += "\n            <tr>\n                <td>".concat(serie.id, "</td>\n                <td>").concat(serie.title, "</td>\n                <td>").concat(serie.network, "</td>\n                <td>").concat(serie.seasons, "</td>\n                <td>").concat(serie.description, "</td>\n                <td><a href=\"").concat(serie.website, "\" target=\"_blank\">").concat(serie.website, "</a></td>\n                <td><img src=\"").concat(serie.imageUrl, "\" alt=\"").concat(serie.title, "\" width=\"100\"></td>\n            </tr>\n        ");
    });
    tablaHTML += "\n            </tbody>\n        </table>\n    ";
    return tablaHTML;
}
var tablaHTML = generarTablaHTML(series);
var tablaSeriesDiv = document.getElementById('tablaSeries');
if (tablaSeriesDiv) {
    tablaSeriesDiv.innerHTML = tablaHTML;
}
else {
    console.error('No se encontró el elemento con id "tablaSeries"');
}
function calcularPromedioTemporadas() {
    var celdasTemporadas = document.querySelectorAll('#tablaSeries tbody tr td:nth-child(4)');
    var totalTemporadas = 0;
    var cantidadSeries = 0;
    celdasTemporadas.forEach(function (celda) {
        var temporadas = parseInt(celda.textContent || '0');
        if (!isNaN(temporadas)) {
            totalTemporadas += temporadas;
            cantidadSeries++;
        }
    });
    var promedio = cantidadSeries > 0 ? totalTemporadas / cantidadSeries : 0;
    return promedio;
}
var promedioTemporadas = calcularPromedioTemporadas();
var promedioElement = document.getElementById('promedio');
if (promedioElement) {
    promedioElement.textContent = "Season average: ".concat(promedioTemporadas);
}
else {
    console.error('No se encontró el elemento con id "promedio"');
}
