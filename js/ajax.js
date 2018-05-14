$(document).ready(function(){

/*FUNCION PARA ENVIAR LA INFORMACION*/  

$("#formulario").on("submit", function guardarInformacion(event){
  event.preventDefault();

  let info = {
      nombre: event.target['nombre'].value,
      apellido: event.target['apellido'].value,
      sexo: event.target['sexo'].value,
      estadoCivil: event.target['estadoCivil'].value,
      dni: event.target['dni'].value,
      telefono: event.target['telefono'].value,
      pais: event.target['pais'].value,
      provincia: event.target['provincia'].value,
      ciudad: event.target['ciudad'].value,
      calle: event.target['calle'].value,
      objetivo: event.target['objetivo'].value,
      experienciaLaboral: [],
      lugarEstudio: event.target['casaDeEstudios'].value,
      nivelEstudio: event.target['nivelEstudio'].value,
      especialidadEstudio: event.target['especialidadEstudio'].value,
      desdeEstudio: event.target['desdeEstudio'].value,
      hastaEstudio: event.target['hastaEstudio'].value,
      nivelOral: event.target['oral'].value,
      nivelEscrito: event.target['escrito'].value
      };
console.log(info);
  for (let i = 0; i < contadorExperiencias; i++) {

    if (event.target['nombreEmpresa' + i] && event.target['puesto' + i]) {
      let expLab = {
          nombre: event.target['nombreEmpresa' + i].value,
          aniosExperiencia: event.target['aniosExperienciaEmpresa' + i].value,
          puesto: event.target['puesto' + i].value,
          nivel: event.target['nivelEmpresa' + i].value,
          pais: event.target['paisEmpresa' + i].value,
          desde: event.target['desdeEmpresa' + i].value,
          hasta: event.target['hastaEmpresa' + i].value,
          areaPuestoEmpresa: event.target['areaPuestoEmpresa' + i].value,
          descripcion: event.target['descripcionEmpresa' + i].value,
          personaACargo: event.target['personasACargoEmpresa' + i].value,
          personaDeReferencia: event.target['personaDeReferenciaEmpresa' + i].value,
      };
      info.experienciaLaboral.push(expLab);
    }
  }
  console.log(info);

    $.ajax({
       method: "POST",
       dataType: 'JSON',
       data: JSON.stringify(info),
       contentType: "application/json; charset=utf-8",
       url: "",//URL DEL SERVICIO
       success: function(resultData){
         $("#enviado").html("Datos enviados");
         console.log(resultData);
       },
       error:function(jqxml, status, errorThrown){
         console.log(errorThrown);
         $("#enviado").html("Error por favor intente mas tarde");
       }
    });
});

/*FUNCION PARA AGREGAR EXPERIENCIAS LABORALES*/
  let contadorExperiencias = 1;
$("#addExpLaboral").on("click", function agregarExperienciaLaboral(){
  event.preventDefault();

  let div =  $('<div id="divExperiencia'+ contadorExperiencias +'">'+'<div class="container" ><div class="row">'+
    '<div class="col-md-4 col-sm-4 col-xs-4 marginInputForm"><input type="text" class="formStyle" name="nombreEmpresa'+contadorExperiencias +'" placeholder="Nombre de la empresa" required></div>'+
    '<div class="col-md-4 col-sm-4 col-xs-4 marginInputForm"><input type="text" class="formStyle" name="aniosExperiencia'+contadorExperiencias +'" placeholder="Cantidad de años"  required></div>'+
    '<div class="col-md-3 col-sm-3 col-xs-3 marginInputForm"><input type="text" class="formStyle" name="puesto'+contadorExperiencias +'" placeholder="Puesto" required></div>'+
    '<div class="col-md-1  col-sm-1 col-xs-1 marginInputForm"><button class="delExpLaboral"><i class="glyphicon glyphicon-trash" data-contador="'+contadorExperiencias+'" aria-hidden="true"></i></button></div>'+
    '</div></div>'+
    '<div class="container"><div class="row">'+
    '<div class="col-md-3 col-sm-3 col-xs-3 marginInputForm"><input type="text" class="formStyle" name="nivelEmpresa'+contadorExperiencias +'" placeholder="Nivel" required></div>'+
    '<div class="col-md-3 col-sm-3 col-xs-3 marginInputForm"><input type="text" class="formStyle" name="paisEmpresa'+contadorExperiencias +'" placeholder="Pais"  required></div>'+
    '<div class="col-md-3 col-sm-3 col-xs-3 marginInputForm"><input type="text" class="formStyle" name="desde'+contadorExperiencias +'" placeholder="Desde" required></div>'+
    '<div class="col-md-3 col-sm-3 col-xs-3 marginInputForm"><input type="text" class="formStyle" name="hasta'+contadorExperiencias +'" placeholder="Hasta" required></div>'+
    '</div></div>'+
    '<div class="container"><div class="row">'+
    '<div class="col-md-3 col-sm-3 col-xs-3 marginInputForm"><input type="text" class="formStyle" name="areaPuestoEmpresa'+contadorExperiencias +'" placeholder="Area" required></div>'+
    '<div class="col-md-3 col-sm-3 col-xs-3 marginInputForm"><input type="text" class="formStyle" name="descripcionEmpresa'+contadorExperiencias +'" placeholder="Descripcion"  required></div>'+
    '<div class="col-md-3 col-sm-3 col-xs-3 marginInputForm"><input type="text" class="formStyle" name="personasACargoEmpresa'+contadorExperiencias +'" placeholder="Personas a cargo" required></div>'+
    '<div class="col-md-3 col-sm-3 col-xs-3 marginInputForm"><input type="text" class="formStyle" name="personaDeReferenciaEmpresa'+contadorExperiencias +'" placeholder="Persona de Referencia" required></div>'+
    '</div></div>'+
    '</div>'
    );
  $("#exp").append(div);
  contadorExperiencias++;
}); 

/*FUNCION PARA BORRAR EXPERIENCIAS LABORALES*/

$(document).on("click", ".delExpLaboral", function borrarExperienciaLaboral(event){
  event.preventDefault();
  console.dir(event);
  let nroExperiencia = event.target.dataset.contador; 
  $("#divExperiencia"+nroExperiencia).remove();
}); 

});