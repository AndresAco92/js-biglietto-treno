var nomeUtent = prompt('Inserire nome viaggiatore:');
document.getElementById('name') .innerHTML = 'Nome viaggiatore: ' + nomeUtent;

var kmUtente = prompt('Inserire quanti km si vuole percorrere: ');
document.getElementById('km') .innerHTML = 'Kilometri desiderati: ' + kmUtente + ' km';

var etaUtente = prompt('Inserire la età del viaggiatore: ');
document.getElementById('age') .innerHTML = 'Età del viaggiatore: ' + etaUtente + ' anni';

var prezzo = parseFloat(0.21 * kmUtente);
document.getElementById('cost') .innerHTML = 'Prezzo totale viaggio: ' + prezzo + '€';

var sconto = etaUtente;
if(etaUtente <= 18){
  document.getElementById('scount') .innerHTML = 'Sconto viaggio: 20%';
  var totale_sconto = parseFloat((prezzo * 20)/100);
  var totale = parseFloat(prezzo - totale_sconto).toFixed(2);
  document.getElementById('total') .innerHTML = 'Costo totale: ' + totale + '€';
}

if(etaUtente >=65 ){
  document.getElementById('scount') .innerHTML = 'Sconto viaggio: 40%';
  var totale_sconto = parseFloat((prezzo * 40)/100);
  var totale = parseFloat(prezzo - totale_sconto).toFixed(2);
  document.getElementById('total') .innerHTML = 'Costo totale: ' + totale + '€';
}


document.writeln('Grazie e buon viaggio!');
