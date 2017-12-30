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


/*
Funcionalidad botones next/back,
tanto en Log In como en Sign Out
*/
$("#phone-back").click(function(){
  $("#mainfull").fadeIn(1000);
  });

$("#phone-back2").click(function(){
  $("#mainfull").fadeIn(1000);
  });

$(".phonee").keyup(function(){
    if($(this).val().length == 10){
      $("#phone-back").removeAttr("disabled");
    }else{
      $("#phone-back").attr("disabled", true);
    }
  });

/*
Activar botón NEXT, solo si se ingresaron 
10 dígitos(la siguiente función
asegura de que estos 10 digitos sean solo números)
*/
  $('#phonee').keyup(function(){
    if($(this).val().length > 9){
      $('#phone-next').removeAttr('disabled');
    } else {
      $('#phone-next').attr('disabled','disabled');
    }
  }).trigger('keyup');

});

/* 
Creaciòn de código aleatorio
*/
$("#phone-next").click(function(){
    var newCode = [];
    var phone = $("#phone").val();
    var number1 = Math.round(Math.random()*9);
    var number2 = Math.round(Math.random()*9);
    var number3 = Math.round(Math.random()*9);
    newCode.push("LAB-"+number1+number2+number3);
    alert("Tu código es "+newCode);
    $("#enter").html('<p id="#enter">Enter code sent to +56'+phone+'</p>');
    $(".second").hide();
    $(".third").fadeIn(3000);
  });
