import $ from 'jquery';
import {Tabulator} from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';

// Mostrar texto con jQuery
$(document).ready(function () {
  $("#mensaje").text("✅ jQuery está funcionando con Vite");
});

// Datos de ejemplo
const data = [
  { id: 1, nombre: "Ana", edad: 21 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 2, nombre: "Luis", edad: 22 },
];

// Tabla con Tabulator
new Tabulator("#tabla", {
  data: data,
  layout: "fitColumns",
  columns: [
    { title: "ID", field: "id" },
    { title: "Nombre", field: "nombre" },
    { title: "Edad", field: "edad" },
  ]
});
