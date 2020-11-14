//Time thats in the Jumbotron
var update = function(){
var currentDay = moment().format("dddd MMMM do, h:mm:ss a");
    $("#currentDay").text(currentDay);
}
//Checks every 1000 ms to reset seconds in time in Jumbotron
setInterval(update, 1000);

//When the user clicks the save button, it gets the value of the description and the attribute to save the time
$(".saveBtn").on("click", function() {
    var timeSaved = $(this).parent().attr("id");
    var textAgenda = $(this).siblings(".description").val();
    localStorage.setItem(timeSaved, textAgenda);
});

//Finds the current time with the moment.js library
var currentHour = moment().hour(); 
console.log(currentHour);

//Function to change the colors based on what time it is by comparing the description ID with the variable currentHour
$(".description").each(function(){
    var agendaHour = $(this).attr("id");
    if (currentHour == agendaHour){
        $(this).addClass("present");
    }
    else if (currentHour > agendaHour){
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});

//For loop to write the value of the class plus the number plus the description matched with the setItem()
for (let i=9; i <=17; i++){    
    $("#" + i + ".description").val(localStorage.getItem(i))
}