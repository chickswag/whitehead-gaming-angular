function testForm(){
    var message = "";
    var request = new XMLHttpRequest();
    var url = "/";
    document.getElementById("results").innerHTML ="";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.status === 200) {

            message = document.getElementById("results").innerHTML = "<div class='bg-primary p-2 border-dark'>Success</div>";
        }
        else
            {
                message = document.getElementById("results").innerHTML = "<div class='bg-danger p-2 border-dark'>Error occurred</div>"
            }
            return message;

    }
    var input1 =  document.getElementById("input-1").value;
    var input2 = document.getElementById("input-2").value;
    var input3 = document.getElementById("input-3").value;
    if(input1.trim() && input2.trim() && input3.trim()){
        var data = JSON.stringify(
            {
                "input1": input1,
                "input2": input2,
                "input3": input3
            });
        request.send(data);
    }
    else{
        document.getElementById("results").innerHTML ="<div class='bg-warning p-2 border-dark'>Invalid form, please check your input</div>"
    }



}