function columnas() {
    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[1].length; j++) {
            console.log(matriz[i][j]);
        }
    }
}

function filas(){
    for(i=0;i<matriz.length;i++){
        console.log(matriz[i]);
    }
}

function todo(){
    console.log(matriz);
}
todo(matriz)