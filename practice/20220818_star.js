// console.log("Hello world");

// let star2 = "★\n".repeat(10);
// console.log(star2);

const num = 5;
let star1 = '';
for(let i=0; i<num; i++){
    star1 += "★"
    console.log(star1);
}

console.log(" ");


/*
* 1. 공백으로 시작하는 * 찍기
* 2. 공백은 n-1에서 하나씩 감소한다.
* 3. 별은 1개부터 n개까지 증가.
* 4. n회 반복
* */

for(let i=1; i<num; i++){
    let line = ' '.repeat(num-i) + "*".repeat(i);
    console.log(line);
}

console.log(" ");

for(let i=1; i<num; i++){
    let line = "";
    // 공백 감소
    for(let j=num; j>i; j--){
        line += " ";
    }
    // 별 증가
    for(let j=0; j<i; j++){
        line += "*"
    }

    console.log(line);
}


String.prototype.new_repeat = function(val, n){
    let string = ' ';
    for(let i = 0; i < n; i++){
        string += val;
    }
    return string
};

let n = 4;
for(let i=1; i <= n; i++){
    let s = new String();
    s = s.new_repeat("*", i);
    console.log(s);
}




// let star3 = '';
// for(let i=10; i>0; i--){
//     // for(let i=0; i<num; i++){
//     //     star3 += '1';
//     // }
//     star3 += '1';
//
//     console.log(star3);
// }