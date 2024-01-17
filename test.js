for(var i = 0; i < 10; i+=3) {
    setTimeout(function() {
        console.log('inFunction',i);
    }, 1000);
    console.log(i);
}