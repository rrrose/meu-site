//TEXTAREA
 $('#textarea1').val();
 $('#textarea1').trigger('autoresize');




//MENU COLAPSADO

 $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );  

// SCROLL SUAVE
       
$(document).ready(function(){
  
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top -50
      }, 700, function(){
           
        window.location.hash = hash;
      });
    } 
  });
});

// FIM DO SCROLL