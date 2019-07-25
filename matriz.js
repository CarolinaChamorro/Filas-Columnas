// imprime las columnas
function columnas() {
    for (let i = 0; i < matriz.length; i++) {
        for (let k = 0; k < matriz[i].length; k++) {
            console.log(matriz[i][k]);
        }
    }
}
// imprime las filas
function filas(){
    for(i=0;i<matriz.length;i++){
        console.log(matriz[i]);
    }
}
imprime toda la matriz
function todo(){
    console.log(matriz);
}
