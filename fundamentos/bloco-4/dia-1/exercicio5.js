let a = 0;
let b = 60;
let c = 80;

if (a <= 0 || b <= 0 || c <= 0) {
    console.log('404');
} else if (a + b + c == 180) {
    console.log('true');
} else {
    console.log('false');
}
