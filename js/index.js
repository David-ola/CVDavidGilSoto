$(document).ready(()=>{
    var nombre = prompt("Que version de Cv te gusta");
    $("nombre").text(nombre);
    $("#btnDatosPersonales").click(()=>{
        $("#datospersonales").show()
        $("#formacionacademica").hide();
        $("#experienciaprofesional").hide();

    })

})