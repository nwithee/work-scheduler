// Capture and set current day
var setDate = function (){
    //Get date and format
    var date = moment().format("dddd" + ", " + "MMMM Do" + ", " + "YYYY");
    
    //push date to page
    $("#currentDay").append(date);

}

//Set color of each timeblock
var colorSet = function (){
    //Capture current hour of the day
    var currentHour = moment().hour();
    console.log(currentHour)

    //Logic to loop through all blocks and set color
    $(".time-block").each(function (){
        //pull in the time for the block currently being assessed
        var time = $(this).attr("id");
        console.log(time);

        //loop through to determine whether the block is past, present, or future
        if (time === currentHour){
            $(this).addClass("present");
        }
        else if (time < currentHour){
            $(this).addClass("past");
        }
        else {
            $(this).addClass("future");
        }

    })

}

var saveEvent = function (){
    $(".saveBtn").on("click", function() {
        var event = $(".description").val();
        var time = $.parent().attr("id");

        console.log(event);
        console.log(time);

    })

}




colorSet();
setDate();
saveEvent();