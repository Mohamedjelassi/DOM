var i = 0
var total = 0
var price = 0;

function buttonClickaddItem1() {
    i++;
    document.getElementById('inc1').value = i;
    document.getElementById('total').value = 300 * i1 + 500 * i + 150 * i2;
    document.getElementById('total1').value = 500 * i;
}

function buttonClickSousitem1() {
    i--;
    document.getElementById('inc1').value = i;
    document.getElementById('total').value = 300 * i1 + 500 * i + 150 * i2;
    document.getElementById('total1').value = 500 * i;
}



var i1 = 0
var total = 0


function buttonClickaddItem2() {
    i1++;
    document.getElementById('inc2').value = i1;
    document.getElementById('total').value = 300 * i1 + 500 * i + 150 * i2;
    document.getElementById('total2').value = 300 * i1;
}

function buttonClickSousitem2() {
    i1--;
    document.getElementById('inc2').value = i1;
    document.getElementById('total').value = 300 * i1 + 500 * i + 150 * i2;
    document.getElementById('total2').value = 300 * i1;
}


var i2 = 0
var total = 0


function buttonClickaddItem3() {
    i2++;
    document.getElementById('inc3').value = i2;
    document.getElementById('total').value = 300 * i1 + 500 * i + 150 * i2;
    document.getElementById('total3').value = 150 * i2;


}

function buttonClickSousitem3() {
    i2--;
    document.getElementById('inc3').value = i2;
    document.getElementById('total').value = 300 * i1 + 500 * i + 150 * i2;
    document.getElementById('total3').value = 150 * i2;

}

function rmvFunction() {
    var myobj = document.getElementById('item1');
    myobj.remove();
    i = 0;
    document.getElementById('total').value = 300 * i1 + 500 * i + 150 * i2;


}

function revFunction() {
    var myobj = document.getElementById('item2');
    myobj.remove();
    i1 = 0;
    document.getElementById('total').value = 300 * i1 + 500 * i + 150 * i2;
}

function revFunction3() {
    var myobj = document.getElementById('item3');
    myobj.remove();
    i2 = 0;
    i = 0;
    document.getElementById('total').value = 300 * i1 + 500 * i + 150 * i2;
}