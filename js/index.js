var a;
var b;
var c = 0;

function addNum(n) {
          let ecran = document.getElementById("display");
          if (n === 10) {
                    ecran.value = 0;
                    a = 0;
                    b = 0;
                    c = 0;
          }
          else {
                    if (ecran.value == 0) {
                              ecran.value = n;
                    }
                    else {
                              ecran.value += n;
                    }
          }
}

function mathAction(d) {
          let ecran = document.getElementById("display");
          a = ecran.value;
          ecran.value = 0;
          c = d;
}

function result() {
          let ecran = document.getElementById("display");
          b = ecran.value;
          if (c == 1) {
                    ecran.value = +a + +b;

          }
          if (c == 2) {
                    ecran.value = +a - +b;
          }
          if (c == 3) {
                    ecran.value = +a * +b;

          }
          if (c == 4) {
                    ecran.value = +a / +b;
          }
}
