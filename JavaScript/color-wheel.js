function randomColor(){
    let letters= '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.getElementById('color-change-btn').addEventListener('click', function(){
    document.getElementById('body').style.background = randomColor();
});


