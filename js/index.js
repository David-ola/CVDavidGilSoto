$(document).ready(()=>{
    
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