

$(document).ready(function () {// tells engine to load 1)html & 2)css first.
    //display current day & time.
    var classNameP = $('.present')
    currentTime = 9;

     $('.container-lg').append ('<div class="row time-block"> '+
     '<div class="col-2 col-md-1 hour text-center py-3"></div> ' +
     '<textarea class="col-8 col-md-10 description" rows="3"> </textarea> '+
     '<button class="btn saveBtn col-2 col-md-1" aria-label="save"> '+
       '<i class="fas fa-save" aria-hidden="true"></i> '+
        '</button> '+
        '</div>');

       
        console.log($('div'));

     $('.time-block').addClass('present');
     $('.hour').text(9) ;

     $('container-lg').each(function (){
        
        for (i=0; i < 12; i++){

        if (i > currentTime){
            $('.container-lg').append ('<div class="row time-block"> '+
     '<div class="col-2 col-md-1 hour text-center py-3"></div> ' +
     '<textarea class="col-8 col-md-10 description" rows="3"> </textarea> '+
     '<button class="btn saveBtn col-2 col-md-1" aria-label="save"> '+
       '<i class="fas fa-save" aria-hidden="true"></i> '+
        '</button> '+
        '</div>');
        
            $('.time-block').addClass('present');
            $('.hour').text(i) ;

        }


 }
});







})

