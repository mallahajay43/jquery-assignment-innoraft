/** 
 * @dev 
 * assignment 1 -> basic jquery events
 * assignment 2 -> jquery animation function and event functions
 * assignment 3 -> form input using jquery functions. 
*/

/* assignment 1 code  */

$("#btn-1").click(function(){
    console.log("clicked")
    if($(".box").is(":hidden")){
        $(".box").show();
        $(".p-word").text("hide");
    }
    else{
        $(".box").hide();
        $(".p-word").text("show");
    }
} )

/* assignment 2 code  */

$(".slide-btn").click(function(){
    console.log("clicked");
    if($(".content").hasClass("float")){
        $(".slider").animate({height:"20%"});
        $(".content").removeClass("float");
    }
    else{
        $(".content").addClass("float");
        $(".slider").animate({height:"100%"});
    }
})

/* assignment 3 code  */

$("#form-1").submit(function (event){
    event.preventDefault();
    if( !$("input[name=firstName]").val() || !$("input[name=lastName]").val()){
        alert("please fill all the fields");
    }
})

/* assignment 4 code  */

$("#header").click(function(){
    $(this).css("background-color", "red");
})

$("#sidebar").click(function(){
    $(this).text("Leftbar");
})

$("#extraContent").click(function(){
    $("#mainContent").fadeOut();
})

$("#footer").click(()=>{
    $(".popUp").css("display", "flex");
})

$("#cross").click(()=>{
    $(".popUp").css("display", "none");
})