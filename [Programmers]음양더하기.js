function solution(absolutes, signs) {
    var answer = 123456789;
    let len = absolutes.length;
    let total = 0;
    for (let i = 0; i < len; i++) {
        if(signs[i] === true){
            total +=absolutes[i];
        }
        else{
            total -=absolutes[i];
        }
    }

    return total;
}

const abs = [4,7,12];
const signs = [true,false,true]
solution(abs,signs);

/*
* 다른 풀이
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
*
*
*/


