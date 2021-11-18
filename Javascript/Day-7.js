function main() {
    var n = parseInt(readLine());
    var arr = readLine().split(' ');
    var arr = arr.map(Number);
    var printOut = '';
    for (var i = arr.length -1; i >= 0; i--){
        printOut = printOut + String(arr[i]) + ' ';
    }
    printOut = printOut.slice(0, printOut.length -1);
    console.log(printOut);

}
