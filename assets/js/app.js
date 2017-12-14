$(document).ready(function() {
/**
 * Función de la vista splash inicial
 *
 */
$().ready(function() {
  $('.mainfull').hide();
  $(".splash").fadeIn(500).fadeOut(5000, show);

  function show() {
    $('.mainfull').show();
  }
});


/**
 * Función activando btn Signup
 *
 */
$('#signUp').click(function() {
  $('#form').show();
  $('#mainfull').hide();
})

/**
 * Función para ir a la sección anterior
 */
$('#volver').click(function() {
  $('#mainfull').show();
  $('#form').hide();
});
/**
 * Función activando btn Login
 *
 */
$('#logIn').click(function() {
  $('#formLog').show();
  $('#mainfull').hide();
})
/**
 * Función para ir a la sección anterior
 */
$('#volver2').click(function() {
  $('#mainfull').show();
  $('#formLog').hide();
});

/*  //Almacenamos los valores
  nombre=$('#nombre').val();
  
   //Comprobamos la longitud de caracteres
  if (nombre.length<6){
    return true;
  }
  else {
    alert('Maximo 5 caracteres');
    return false;
    
  }

}

var max_chars = 25;

    $('#max').html(max_chars);

    $('#comment').keyup(function() {
        var chars = $(this).val().length;
        var diff = max_chars - chars;
        $('#contador').html(diff);   
    });*/


});

