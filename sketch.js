const width    = 800;
const height   = 800;
const box_size = 16;
const level    = 30;
var   divisor  = 2;

function factrial(n) {
    let ret = 1;
    for (let i = 2; i <= n; i++) {
        ret *= i;
    }
    return ret;
}

function combination(n, r) {
    if (r == 0 || r == n) {
        return 1;
    }
    if (r > n - r) {
        r = n - r;
    }
    ret = 1;
    for (let i = 1; i <= r; i++) {
        ret *= (n - i + 1);
    }
    return ret / factrial(r);
}

function setup() {
    createCanvas(width, height);
    noLoop();
}

function draw() {
    let x0 = width / 2 - box_size / 2;
    let y0 = box_size;
    for (let y = 0; y <= level; y++) {
        for (let x = 0; x <= y; x++) {
            let c = combination(y, x);
            let r = 152, g = 192, b = 152;
            if (c % divisor == 0) {
                fill(255 - r, 255 - g, 255 - b);
            }
            else {
                fill(r, g, b);
            }
            rect(x0 - (y * box_size / 2) + x * box_size, y0 + y * box_size, box_size, box_size);
        }
    }
}

var radioGroup = document.getElementById("radioGroup");
radioGroup.addEventListener('change', (event) => {
    let ele = radioGroup.childNodes;
    let d;
    for (let i = 0; i < ele.length; i++){
	if(ele[i].checked) {
	    d = ele[i].value;
	    break;
	}
    }
    divisor = parseInt(d, 10);
    draw();
});
