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

    //Logic to loop through all blocks and set color
    $(".time-block").each(function (){
        //pull in the time for the block currently being assessed
        var time = $(this).attr("id");

        //loop through to determine whether the block is past, present, or future
        if (time == currentHour){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else if (time < currentHour){
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

    })
    
}

//Save values from timeblock on save button click
var saveEvent = function (){
    $(".saveBtn").on("click", function() {
        //get value of content from sibling div
        var message = $(this).siblings(".description").val();
        //get value of time from parent div
        var time = $(this).parent().attr("id");

        console.log(message);
        console.log(time);

        localStorage.setItem(time, message);
    })

    //loop to display stored values
    for (var i = 8; i <18; i++ ) {
        var number = i;
        $("#" + number + " .description").val(localStorage.getItem(number));
    }

    //$("#8 .description").val(localStorage.getItem("8"));
}

colorSet();
setDate();
saveEvent();