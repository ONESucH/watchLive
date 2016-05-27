var angle = 0;
setInterval(function(){
    angle+=5;
    $('#secondPointer').rotate(angle);
    $(angle).css({
        'transform-origin' : 'right center 0',
        'background' : '#000'
    });
}, 50);