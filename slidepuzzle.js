function getRandomIntInclusive() {
    var maximo = 9;
    var i, arr = new Array;
    for (i = 0; i < 8; i++) {
        arr[i] = i + 1;
    }
    arr[8]= '';
    var p, n, tmp;
     for (p = arr.length; p;) {
        n = Math.random() * p-- | 0;    
        tmp = arr[n];
        arr[n] = arr[p];
        arr[p] = tmp;
    }
    
    for(let x = 1;  x < 10 ; x++){
        document.getElementById('c1l'+[x]).innerHTML = arr[x-1];
    }
    console.log(arr);
}