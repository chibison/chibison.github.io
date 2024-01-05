let json={};
let iLugar=-1;
let iPok=-1;
let nombreArray="";

/*function cargar(){
  var datos = JSON.parse('json/oro.json');
  alert(datos[0].name);
}*/

function crearLugares(){
  json.lugares=[];
  json.lugares[iLugar]={};
  document.getElementById("divLugar").classList.remove("oculto");
  mostrarJson();

}

function crearArray(t){
  json.lugares[iLugar][t.getAttribute("data-tag")] = [];
  nombreArray=t.getAttribute("data-tag");
  document.getElementById("divPok").classList.remove("oculto");
  mostrarJson();
}

function crearHierba(t){
  json.lugares[iLugar][t.getAttribute("data-tag")] = [];
  nombreArray=t.getAttribute("data-tag");
  document.getElementById("divPok").classList.remove("oculto");
  document.getElementById("divHierba").classList.remove("oculto");
  mostrarJson();
}

function crearProbabilidad(t){
  if(json.lugares[iLugar][nombreArray][iPok]["probabilidad"]==undefined) {
    json.lugares[iLugar][nombreArray][iPok]["probabilidad"]={};
  }
  json.lugares[iLugar][nombreArray][iPok]["probabilidad"]["tipo"] = t.getAttribute("data-tag");
  mostrarJson();
}

function nuevoLugar(){
  iLugar++;
  if(json.lugares[iLugar]==undefined){
    json.lugares[iLugar]={};
  }
  document.getElementById("nombreLugar").value="";
  document.getElementById("nombreLugar").classList.remove("oculto");

  mostrarJson();
}

function nuevoPok(){
  document.getElementById("numeroPok").value="";
  document.getElementById("numeroPok").classList.remove("oculto");
  document.getElementById("nivelPok").value="";
  document.getElementById("nivelPok").classList.remove("oculto");
  document.getElementById("probPok").value="";
  document.getElementById("probPok").classList.remove("oculto");
    iPok++;
    mostrarJson();
}

function guardarJuego(t, v){
  json[t.getAttribute("data-tag")] = v;
  mostrarJson();
}

function guardarLugar(t, v){
  json.lugares[iLugar][t.getAttribute("data-tag")] = v;
  mostrarJson();
}

function guardarPok(t,v){
  if(json.lugares[iLugar][nombreArray][iPok]==undefined) {
    json.lugares[iLugar][nombreArray][iPok]={};
  }
  json.lugares[iLugar][nombreArray][iPok][t.getAttribute("data-tag")] = v;
  mostrarJson();
}

function guardarCania(t,v){
  if(json.lugares[iLugar][nombreArray][iPok]["probabilidad"]==undefined) {
    json.lugares[iLugar][nombreArray][iPok]["probabilidad"]={};
  }
  json.lugares[iLugar][nombreArray][iPok]["probabilidad"][t.getAttribute("data-tag")] = v;
  mostrarJson();

}

function nuevaProb(t, v){
  document.getElementById("probPok").classList.remove("oculto");
}

function nuevaProbCania(t,v){
  document.getElementById("probVieja").classList.remove("oculto");
  document.getElementById("probBuena").classList.remove("oculto");
  document.getElementById("probSuper").classList.remove("oculto");

  json.lugares[iLugar].pesca
}

function mostrarJson(){
  document.getElementById("textoJson").innerHTML = JSON.stringify(json);
}



/*function guaNomLug(){
  let lugar = {};
  lugar.nombre = document.getElementById("nombreLugar").value;
  //json.lugares.push(lugar);

  mostrarJson();
}*/
