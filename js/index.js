
$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'300px'},30)
   $("#home-content").animate({marginLeft :'300px'},30)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},30)
   $("#home-content").animate({marginLeft :'0px'},30)
})



$("#leftMenu a").click(function(){
    let sectionId= $(this).attr("href");
    let positionOfSection = $(sectionId).offset().top;
    $("html , body").animate({scrollTop:positionOfSection},500);
    
})




$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
});


var maxWords = 100;
$('textarea').keyup(function() {
    let wordsHeWrite = $(this).val().length;
    let WordsLeft = maxWords-wordsHeWrite;

    (WordsLeft<=0) ? $("#chars").text("you have zero characters") : $("#chars").text(WordsLeft+' Characyer Reamining');

});



