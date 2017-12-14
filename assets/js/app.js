$(document).ready(function(){

/*
*Loader 
*/
 $('.loader').delay(3000).fadeOut("slow");

/*
*Paso de screen splash a contenido
*/
setTimeout(function(){
    $('.loader').show();
    }, 2000);


/**
 * Función pasando a ste screen
 *
 */
$('#signUp').click(function() {
  $('#form').show();
  $('#inicial').hide();
})

/**
 * Función para ir a la sección anterior
 */

});

