$(document).ready(()=>{
    var nombre = prompt("Introduce tu nombre: ");
    $("nombre").text(nombre);
    $("#btnDatosPersonales").click(()=>{
        $("#datospersonales").show()
        $("#formacionacademica").hide();
        $("#experienciaprofesional").hide();
    $("#btnFormacionAcademica").click(()=>{
        $("#formacionacademica").show()
        $("#datospersonales").hide();
        $("#experienciaprofesional").hide();
    $("#btnExperienciaProfesional").click(()=>{
        $("#experienciaprofesional").show();
        $("#formacionacademica").hide()
        $("#datospersonales").hide();

    })
    })
    })

})