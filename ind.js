let currentvalue= ' ';
document.getElementById('display').value = currentvalue;

document.addEventListener("keydown", function(event) {

    if (event.key >= "0" && event.key <= "9") {
        currentvalue += event.key;
    }

    if (event.key === "+") {
        currentvalue += "+";
    }

    if (event.key === "-") {
        currentvalue += "-";
    }

    if (event.key === "*") {
        currentvalue += "*";
    }

    if (event.key === "/") {
        currentvalue += "/";
    }

    if (event.key === "Enter") {
        currentvalue = eval(currentvalue);
    }

    document.getElementById("display").value = currentvalue;
});
