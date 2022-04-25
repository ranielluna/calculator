function insert(num) {
  var numero = document.getElementById('resu').innerHTML;
  document.getElementById('resu').innerHTML = numero + num;
}

function clean() {
  document.getElementById('resu').innerHTML = "";
}

function back() {
 var resu = document.getElementById('resu').innerHTML;
 document.getElementById('resu').innerHTML = resu.substring(0, resu.length -1);
}

function calcular() {
   var resu = document.getElementById('resu').innerHTML;
   if(resu) {
     document.getElementById('resu').innerHTML = eval(resu);
   }
   else {
     document.getElementById('resu').innerHTML = "0"
   }
}