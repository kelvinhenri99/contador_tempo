var YY = 2020;
var MM = 11;
var DD = 27;
var HH = 00;
var MI = 00;
var SS = 00;

function atualizaContador() {
  var hoje = new Date();
  var futuro = new Date(YY,MM-1,DD,HH,MI,SS);

  var ss = parseInt((futuro - hoje) / 1000);
  var mm = parseInt(ss / 60);
  var hh = parseInt(mm / 60);
  var dd = parseInt(hh / 24);

  ss = ss - (mm * 60);
  mm = mm - (hh * 60);
  hh = hh - (dd * 24);


var faltam = '';
  faltam += (dd && dd > 1) ?+dd+"TEXTO LIVRE dias |  " : (dd==1 ? "1 dia, " : "");
  faltam += (toString(hh).length) ? hh+" horas | " : "";
  faltam += (toString(mm).length) ? mm+" minuntos | " : "";
  faltam += ss+" segundos";
faltam += "TEXTO LIVRE";

  if (dd+hh+mm+ss > 0) {
    document.getElementById('contador').innerHTML = faltam;
    setTimeout(atualizaContador,1000);
  } else {
    document.getElementById('contador').innerHTML = 'TEXTO LIVRE';
    setTimeout(atualizaContador,1000);
  }
}