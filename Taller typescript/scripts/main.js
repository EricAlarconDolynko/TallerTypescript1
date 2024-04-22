import { series } from './data.js';
var seriesTable = document.getElementById('seriesTabla');
var promedioElemento = document.getElementById('promedio');
var seleccinoadoTable = document.getElementById('serieSeleccionada');
mostrarDatosSeries(series);
calcularPromedioTemporadas();
function mostrarDatosSeries(series) {
    var tablaHTML = "\n        <table>\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Nombre</th>\n                    <th>Canal</th>\n                    <th>Temporadas</th>\n                </tr>\n            </thead>\n            <tbody>\n    ";
    series.forEach(function (serie) {
        tablaHTML += "\n            <tr>\n                <td>".concat(serie.id, "</td>\n                <td><a href=\"#").concat(serie.title, "\" id=\"").concat(serie.title, "\">").concat(serie.title, "</a></td>\n                <td>").concat(serie.network, "</td>\n                <td>").concat(serie.seasons, "</td>\n            </tr>\n        ");
    });
    tablaHTML += "\n            </tbody>\n        </table>\n    ";
    seriesTable.innerHTML = tablaHTML;
    series.forEach(function (serie) {
        var titleElement = document.getElementById(serie.title);
        if (titleElement) {
            titleElement.addEventListener('click', function () {
                // Call the displayDinamico function with appropriate parameters
                displayDinamico(serie.title, serie.description, serie.website, serie.imageUrl);
            });
        }
    });
}
function calcularPromedioTemporadas() {
    var celdasTemporadas = document.querySelectorAll('#seriesTabla tbody tr td:nth-child(4)');
    console.log(celdasTemporadas);
    var totalTemporadas = 0;
    var cantidadSeries = 0;
    celdasTemporadas.forEach(function (celda) {
        var temporadas = parseInt(celda.textContent || '0');
        if (!isNaN(temporadas)) {
            totalTemporadas += temporadas;
            cantidadSeries++;
        }
    });
    console.log("Temporadas: " + totalTemporadas);
    console.log("Cantidad de series: " + cantidadSeries);
    console.log("Promedio: " + totalTemporadas / cantidadSeries);
    var promedio = cantidadSeries > 0 ? totalTemporadas / cantidadSeries : 0;
    promedioElemento.textContent = "Seasons average: ".concat(promedio);
}
function displayDinamico(nombre, description, website, url) {
    var cardHTML = "\n        <div class=\"card\">\n            <img src=\"".concat(url, "\" class=\"card-img-top\" alt=\"").concat(nombre, "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(nombre, "</h5>\n                <p class=\"card-text\">").concat(description, "</p>\n                <a href=\"").concat(website, "\" class=\"btn btn-primary\">").concat(website, "</a>\n            </div>\n        </div>\n    ");
    seleccinoadoTable.innerHTML = cardHTML;
}
