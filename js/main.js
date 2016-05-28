var secondPointer = 90;
var minutesPointer = 90;
var hoverPointer = 90;

setInterval(function () {
    secondPointer += 0.4;
    $("#secondPointer").rotate({
        angle: secondPointer,
        center: ["right", "center", "0"]
    });
}, 50);

setInterval(function () {
    minutesPointer += 0.0060000000;
    $("#minutesPointer").rotate({
        angle: minutesPointer,
        center: ["right", "center", "0"]
    });
}, 50);

setInterval(function () {
    hoverPointer += 0.00003600000000;
    $("#hoverPointer").rotate({
        angle: hoverPointer,
        center: ["right", "center", "0"]
    });
}, 50);