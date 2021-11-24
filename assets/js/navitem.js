$(function () { 
    var header = $(".onscrolldark"); 
    $(window).scroll(function () { 
        var scroll = $(window).scrollTop(); 

        if (scroll >= 100) { 
            header.removeClass('text-light2') 
                    .addClass("text-dark"); 
        } else { 
            header.removeClass("text-dark") 
                    .addClass('text-light2'); 
        } 
    }); 
}); 
