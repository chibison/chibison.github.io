const SVG_NS = 'http://www.w3.org/2000/svg';
var obtenidos;
var generacion;
var juego;
var ultimo;

function inicializar(){
  if(window.localStorage.getItem("obtenidos")){
    obtenidos = JSON.parse(window.localStorage.getItem("obtenidos"));
  }
  else {
    obtenidos = jsonObtenidos;
  }

  if(window.localStorage.getItem("localizaciones")){
    localizaciones = JSON.parse(window.localStorage.getItem("localizaciones"));
  }
  else {
    localizaciones = jsonLoc;
  }

  if(window.localStorage.getItem("trofeosObtenidos")){
    trofeosObtenidos = JSON.parse(window.localStorage.getItem("trofeosObtenidos"));
  }
  else {
    trofeosObtenidos = [];
  }

  cargarEstadisticas();

  if(window.localStorage.getItem("ultimo")){
    ultimo = window.localStorage.getItem("ultimo");
    /*TODO: Que no sea un switch*/
    //leerLugares(window.localStorage.getItem("ultimo"));
    switch(ultimo){
      case 'nacional': leerNacional(); break;
      case 'rojo': leerLugares(rojo); mostrarGeneracion(1); break;
      case 'azul': leerLugares(azul); mostrarGeneracion(1); break;
      case 'amarillo': leerLugares(amarillo); mostrarGeneracion(1); break;
      case 'oro': leerLugares(oro); mostrarGeneracion(2); break;
      case 'plata': leerLugares(plata); mostrarGeneracion(2); break;
      case 'cristal': leerLugares(cristal); mostrarGeneracion(2); break;
      case 'rubi': leerLugares(rubi); mostrarGeneracion(3); break;
      case 'zafiro': leerLugares(zafiro); mostrarGeneracion(3); break;
      case 'esmeralda': leerLugares(esmeralda); mostrarGeneracion(3); break;
      case 'rojofuego': leerLugares(rojofuego); mostrarGeneracion(3); break;
      case 'verdehoja': leerLugares(verdehoja); mostrarGeneracion(3); break;
      case 'diamante': leerLugares(diamante); mostrarGeneracion(4); break;
      case 'perla': leerLugares(perla); mostrarGeneracion(4); break;
      case 'platino': leerLugares(platino); mostrarGeneracion(4); break;
      case 'heartgold': leerLugares(heartgold); mostrarGeneracion(4); break;
      case 'soulsilver': leerLugares(soulsilver); mostrarGeneracion(5); break;
      case 'blanco': leerLugares(blanco); mostrarGeneracion(5); break;
      case 'negro': leerLugares(negro); mostrarGeneracion(5); break;
      case 'blanco2': leerLugares(blanco2); mostrarGeneracion(5); break;
      case 'negro2': leerLugares(negro2); mostrarGeneracion(5); break;
    }
  }
  document.getElementById("btnArriba").classList="boton "+(ultimo!==undefined ? ultimo : '');
}

function cargarEstadisticas(nombreJuego){
  if(nombreJuego===undefined){
    let juegos =  document.querySelectorAll("#juegosGen [juego]");
    for(let j of juegos){
      actualizarEstJuego(j);
    }
  }
  else{
    let j = document.querySelector("#juegosGen [juego="+nombreJuego+"]");
    actualizarEstJuego(j);
  }
}

function actualizarEstJuego(pJuego){
  if (obtenidos) {

    let arrayObtenidos = construirArrayObtenidos(pJuego);

    if(arrayObtenidos!=undefined){
      if(arrayObtenidos.length == pJuego.parentElement.getAttribute("ntotal")){
        pJuego.getElementsByTagName("IMG")[0].classList.add("completado");
      }
      else{
        pJuego.getElementsByTagName("IMG")[0].classList.remove("completado");
      }
      pJuego.getElementsByTagName("P")[0].innerText = arrayObtenidos.length + ' / '+ pJuego.parentElement.getAttribute("ntotal");
    }
  }
}

function mostrarGeneracion(gen){
  document.getElementById("juegosGen").classList.remove("oculto");

  let generaciones = document.getElementById("juegosGen").children;
  for(let i=0; i<generaciones.length; i++){
    if(gen == generaciones[i].getAttribute("gen")){
      generaciones[i].classList.remove("oculto");
    }
    else {
      generaciones[i].classList.add("oculto");
    }
  }
}

function calcularMaximos(juego){
  for(let i=0; i<pk.listado.length; i++){
    if(pk.listado[i].variedades){
      for(let j=0; j<pk.listado[i].variedades.length; j++) {
        procesarLugares(juego.lugares, i+1, j);
      }
    }
    else {
      procesarLugares(juego.lugares, i+1, '');
    }
  }
}

function procesarLugares(lugares, num_pok, num_variedad){
    let objetoContenedor = {
      hierba : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      caminando : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      surf : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      pesca : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      cabeza : {
         porcentaje: 0,
         lugar: '',
         tipo: '',
      },
      roca : {
         porcentaje: 0,
         lugar: '',
         tipo: '',
      },
      masiva : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      concurso : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      buceo : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      radar : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      miel: {
        porcentaje: 0,
        lugar: '',
        planta: '',
      },
      observatorio : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      cartucho : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      hierbaoscura : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      movimiento : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      surfsombra : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      pescasombra : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      polvo : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      sombra : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      charco : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      claro : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      },
      cambio : {
         porcentaje: 0,
         lugar: '',
         planta: '',
      }
    }

    for(let l of lugares){
      if (l.plantas){
        for(p of l.plantas){
          for(lista of Object.keys(p)){
            if(objetoContenedor[lista])
              calcularVariables(p[lista], l.nombre, p.nombre, num_pok, num_variedad, objetoContenedor[lista]);
          }
        }
      }
      else {
        for(lista of Object.keys(l)){
          if(objetoContenedor[lista])
            calcularVariables(l[lista], l.nombre,'', num_pok, num_variedad, objetoContenedor[lista]);
        }
      }
    }

    let arrayVariables= [];

    for(o of Object.keys(objetoContenedor)){
      arrayVariables.push(objetoContenedor[o].porcentaje);
    }

    for(o of Object.keys(objetoContenedor)){
      if ((objetoContenedor[o].porcentaje >0) && (objetoContenedor[o].porcentaje == Math.max(...arrayVariables))){
        dibujarMaximo(num_pok, num_variedad, o, objetoContenedor[o]);
      }
    }
}

function calcularVariables(listado, nom_lugar, nom_planta, num_pok, num_variedad, objeto) {
     for(let p of listado) {
         if(p.numero == num_pok && num_variedad==(p.variedad==undefined ? '' : p.variedad)){
            if((p.porcentaje) && (objeto.porcentaje < p.porcentaje)) {
              objeto.porcentaje = p.porcentaje;
              objeto.lugar = nom_lugar;
              objeto.planta = nom_planta;
            }
            if((p.probabilidad) && (p.probabilidad.tipo == 'hora') && (objeto.porcentaje < Math.max(
              p.probabilidad.maniana ? p.probabilidad.maniana.porcentaje : 0,
              p.probabilidad.dia ? p.probabilidad.dia.porcentaje : 0,
              p.probabilidad.noche ? p.probabilidad.noche.porcentaje : 0))){
              objeto.porcentaje = Math.max(p.probabilidad.maniana ? p.probabilidad.maniana.porcentaje : 0,
                                           p.probabilidad.dia ? p.probabilidad.dia.porcentaje : 0,
                                           p.probabilidad.noche ? p.probabilidad.noche.porcentaje : 0);
              objeto.lugar = nom_lugar;
              objeto.planta = nom_planta;
            }
            if((p.probabilidad) && (p.probabilidad.tipo == 'cania') && (objeto.porcentaje < Math.max(
              p.probabilidad.vieja ? p.probabilidad.vieja.porcentaje:0,
              p.probabilidad.buena ? p.probabilidad.buena.porcentaje:0,
              p.probabilidad.super ? p.probabilidad.super.porcentaje:0))){
              objeto.porcentaje = Math.max(p.probabilidad.vieja ? p.probabilidad.vieja.porcentaje:0,
                                           p.probabilidad.buena ? p.probabilidad.buena.porcentaje:0,
                                           p.probabilidad.super ? p.probabilidad.super.porcentaje:0);
              objeto.lugar = nom_lugar;
              objeto.planta = nom_planta;
            }
            if((p.probabilidad) && (p.probabilidad.tipo == 'arbol') && (objeto.porcentaje < Math.max(
              p.probabilidad.normal ? p.probabilidad.normal.porcentaje : 0,
              p.probabilidad.especial ? p.probabilidad.especial.porcentaje : 0))) {
              objeto.porcentaje = Math.max(p.probabilidad.normal ? p.probabilidad.normal.porcentaje : 0,
                                           p.probabilidad.especial ? p.probabilidad.especial.porcentaje : 0);
              objeto.lugar = nom_lugar;
              objeto.planta = nom_planta;
            }
            if((p.probabilidad) && (p.probabilidad.tipo == 'estacion') && (objeto.porcentaje < Math.max(
              p.probabilidad.primavera ? p.probabilidad.primavera.porcentaje : 0,
              p.probabilidad.verano ? p.probabilidad.verano.porcentaje : 0,
              p.probabilidad.otoño ? p.probabilidad.otoño.porcentaje : 0,
              p.probabilidad.invierno ? p.probabilidad.invierno.porcentaje : 0))){
              objeto.porcentaje = Math.max(p.probabilidad.primavera ? p.probabilidad.primavera.porcentaje : 0,
                                           p.probabilidad.verano ? p.probabilidad.verano.porcentaje : 0,
                                           p.probabilidad.otoño ? p.probabilidad.otoño.porcentaje : 0,
                                           p.probabilidad.invierno ? p.probabilidad.invierno.porcentaje : 0);
              objeto.lugar = nom_lugar;
              objeto.planta = nom_planta;
            }
          }
     }
  }

function dibujarMaximo(num_pok, num_variedad, tipo_obtencion, objeto){
  let listado = document.querySelectorAll('[num="'+num_pok+(num_variedad===''?'':('_'+num_variedad))+'"]');
  for(pok of listado){
    if(((objeto.lugar == pok.parentElement.parentElement.parentElement.getAttribute("lugar")) && (objeto.planta=='') && (tipo_obtencion==pok.parentElement.getAttribute("obtencion"))) ||
       ((objeto.planta == pok.parentElement.parentElement.parentElement.getAttribute("lugar")) && (objeto.lugar == pok.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("lugar"))) && (tipo_obtencion==pok.parentElement.getAttribute("obtencion"))){
         let imgEstrella = document.createElement("IMG");
         imgEstrella.src="img/otros/estrella.svg";
         imgEstrella.alt="estrella",
         imgEstrella.title ="Máxima probabilidad";
         imgEstrella.classList.add("estrella");
         pok.insertBefore(imgEstrella,pok.children[0]);
         break;
       }
  }
}

function leerNacional(){
  limpiarCuerpo();
  window.localStorage.setItem("ultimo","nacional");
  document.getElementById("cuerpo").classList='nacional';
  document.getElementById("busqueda").classList='nacional';
  document.getElementById("juegosGen").classList.add("oculto");
  document.getElementById("divBusqueda").classList.remove("oculto");
  document.getElementById("btnArriba").classList="boton nacional";
  document.getElementById("titulo").innerText='Pokédex Nacional';
  //document.getElementById("mapa").classList.add("oculto");
  juego='nacional';

  generacion=document.getElementById("juegosGen").children.length;

  for(let i=0; i<pk.listado.length; i++){
    if(pk.listado[i].hasOwnProperty("variedades")){
      for(let j=0; j<pk.listado[i].variedades.length; j++){
        dibujarPokNacional(document.getElementById("cuerpo"), pk.listado[i].variedades[j],i,j);
      }
    }
    else {
      dibujarPokNacional(document.getElementById("cuerpo"), pk.listado[i], i);
    }
  }
}

function dibujarPokNacional(div, p, numero, variedad){
    let divPok = document.createElement("DIV");
    let tipo = obtenerTipo(numero+1, variedad);
    divPok.classList="pok";
    divPok.style.background = devolverCSS(tipo);

    darBorde(divPok, p);

    let divDatos = document.createElement("DIV");
    divDatos.classList.add("datos");

    let numPok =  document.createElement("P");
    numPok.innerHTML = "<b>"+(numero+1)+"</b>";
    divDatos.append(numPok);

    dibujarImagen(divDatos, numero+1, variedad);

    let pPok = document.createElement("P");
    pPok.innerHTML ="<b>"+p.nombre+"</b>";
    divDatos.append(pPok);

    dibujarGeneracion(divDatos, numero+1, variedad);

    divPok.append(divDatos);

    dibujarObtencion(divPok, p, numero, variedad);

    div.append(divPok);
}

function dibujarObtencion(div, p, i){
  let divObt = document.createElement("DIV");
  divObt.classList="obtencion";

  let juegos =  document.querySelectorAll("#juegosGen [juego]");
  for(let j of juegos){
    /* La generación del juego mayor o igual que la del Pokémon*/
    /* OJO: En últmas generaciones no aparecen todos los pok*/
    if(j.parentElement.attributes.gen.value >= p.gen) {
      var imgThObt=document.createElement("IMG");
      imgThObt.src="img/portada/"+j.attributes.juego.value+".webp";
      imgThObt.alt=j.attributes.title.value;
      imgThObt.title=j.attributes.title.value;
      imgThObt.classList.add("portada");

      if(obtenidos[j.attributes.juego.value]!=undefined){
        if(!(obtenidos[j.attributes.juego.value].indexOf((i+1).toString())>-1)){
          imgThObt.classList.add("noObtenido");
        }
      }
      divObt.append(imgThObt);
    }
  }
  div.append(divObt);
}

function darBorde(div, p){
  if(p.sublegendario!==undefined){
    div.classList.add("sublegendario");
  }
  if(p.legendario!==undefined){
    div.classList.add("legendario");
  }
  if(p.singular!==undefined){
    div.classList.add("singular");
  }
}

function leerLugares(json){
  limpiarCuerpo();
  window.localStorage.setItem("ultimo",json.nombre);

  document.getElementById("divBusqueda").classList.remove("oculto");
  //document.getElementById("mapa").classList.remove("oculto");
  generacion=json.gen;
  juego = json.nombre;
  titulo = json.titulo;
  objeto=json;

  let portadas = document.querySelectorAll("[juego]");
  for(let p of portadas){
    if(p.getAttribute("juego")==juego){
      p.children[0].classList.remove('noObtenido');
    }
    else {
      p.children[0].classList.add('noObtenido');
    }
  }

  document.getElementById("titulo").innerText=titulo;
  document.getElementById("titulo").classList.add(juego);

  //document.getElementById("mapa").append(dibujarMapa());

  for(let i=0; i<json.lugares.length; i++){
    document.getElementById("cuerpo").append(dibujarLugar(json.lugares[i]));
  }

  calcularMaximos(json);

  document.getElementById("cuerpo").classList=json.nombre;
  document.getElementById("busqueda").classList=json.nombre;
  document.getElementById("titulo").classList=json.nombre;
  document.getElementById("btnArriba").classList="boton "+json.nombre;

  if(document.getElementsByClassName("marcador").length > 0){
    document.getElementsByClassName("marcador")[0].scrollIntoView();
  }
}

function dibujarMapa(){
  //let divMapa = document.createElement("DIV");
  //divMapa.classList.add('mapa');

  let imagenMapa = document.createElement("SVG");
  //imagenMapa.type="image/svg+xml";
  //imagenMapa.data = 'img/mapa/gen'+generacion+'.svg';
  //imagenMapa = mapa;
  //imagenMapa.style.width = "75%"


  return mapa;

}

function dibujarLugar(lugar){
  var divLugar = document.createElement("DIV");
  divLugar.classList = "lugar";
  divLugar.setAttribute("lugar",lugar.nombre);

  var h1Lugar = document.createElement("H1");
  h1Lugar.innerHTML = lugar.nombre;

  h1Lugar.onclick = function() {
    for (l of document.getElementById("cuerpo").getElementsByTagName("H1")){
      if(this!==l){
        l.classList.remove("marcador");
      }
      else{
        this.classList.toggle("marcador");
        if(!this.classList.contains("marcador")){
          localizaciones[juego] = "";
        }
        else {
          localizaciones[juego] = lugar.nombre;
        }
      }
    }
    window.localStorage.setItem("localizaciones",JSON.stringify(localizaciones));
  };

  if(localizaciones[juego] == lugar.nombre){
    h1Lugar.classList.add("marcador");
  }

  divLugar.append(h1Lugar);

  if(lugar.hasOwnProperty("lema")){
    let pLema = document.createElement("P");
    pLema.classList.add('lema');
    pLema.innerHTML = lugar.lema;
    divLugar.append(pLema);
  }

  var divContenedor = document.createElement("DIV");
  divContenedor.classList = "lugarCont";

  //divContenedor.style.backgroundImage = "url('img/lugares/"+lugar.nombre+".png')";

  if(lugar.hasOwnProperty("observaciones")){
    let pObser = document.createElement("P");
	  pObser.classList.add("observaciones");
    pObser.innerHTML ='<i>'+ lugar.observaciones+ '</i>';
    divContenedor.append(pObser);
  }

  for(tipo_obt of Object.keys(lugar)){
    if(tipo_obt!='nombre' && tipo_obt!='plantas' && tipo_obt!='observaciones' && tipo_obt!='lema' && tipo_obt!='coord')
      dibujarContenedor(divContenedor, lugar[tipo_obt], devolverTexto(tipo_obt), tipo_obt);
  }

  if(lugar.hasOwnProperty("plantas")){
      for(let i=0; i<lugar.plantas.length; i++){
          divContenedor.append(dibujarLugar(lugar.plantas[i]));
      }
  }

  divLugar.append(divContenedor);

  return divLugar;
}

function devolverTexto(tipo){
  switch(tipo){
    case 'inicial': return 'Pokémon inicial';
    case 'escoger': return 'Escoger entre';
    case 'hierba': return 'Hierba';
    case 'hierbaoscura': return 'Hierba oscura';
    case 'movimiento': return 'Hierba que se mueve';
    case 'caminando': return 'Caminando';
    case 'surf': return 'Surf';
    case 'surfsombra': return 'Surf en sombra de agua';
    case 'pesca': return 'Pesca';
    case 'pescasombra': return 'Pesca en sombra de agua';
    case 'comprar': return 'Comprar';
    case 'intercambio': return 'Intercambio';
    case 'regalo': return 'Regalo';
    case 'huevo': return 'Huevo';
    case 'casino': return 'Casino';
    case 'especial': return 'Especial';
    case 'evento': return 'Evento';
    case 'errante': return 'Pokémon errante';
    case 'cabeza': return 'Golpe cabeza';
    case 'concurso': return 'Concurso de bichos';
    case 'masiva': return 'Aparición masiva';
    case 'roca': return 'Golpe roca';
    case 'fosil': return 'Revivir fósil';
    case 'buceo': return 'Buceo';
    case 'radar': return 'Pokéradar';
    case 'cartucho': return 'Cartucho GBA';
    case 'sonidos': return 'Sonidos de Hoenn y Sinnoh';
    case 'observatorio': return 'Observatorio';
    case 'walker': return '';
    case 'nacional': return 'Tras obtener la Pokédex Nacional';
    case 'miel': return 'Miel';
    case 'polvo': return 'Nube de polvo';
    case 'sombre': return 'En sombra';
    case 'charco': return 'En los charcos';
    case 'claro': return 'En el claro oculto';
    case 'legendario': return 'Legendario';
    case 'cambio': return 'Cambia cada día';
    default: return undefined;
  }
}

function dibujarContenedor(divContenedor, listado, texto, tipo_obt){
  let h2Lugar = document.createElement("H2");
  if(texto !== undefined)
    h2Lugar.innerHTML =texto;

  let divLugar = document.createElement("DIV");
  divLugar.classList.add("divCont");
  divLugar.setAttribute("obtencion",tipo_obt);

  divLugar.append(h2Lugar);

  //ordenarListado(listado);
  for(let i=0; i<listado.length; i++){
    dibujarPok(divLugar, listado[i]);
    if(texto===undefined){
      if(evoluciona(listado[i].numero)){
        for(let j=0; j<pk.listado[listado[i].numero-1].evo.length; j++) {
          if(esGenMenor(pk.listado[listado[i].numero-1].evo[j].en))
            dibujarEvo(divLugar, pk.listado[listado[i].numero-1].evo[j], listado[i].variedad);
          if(evoluciona(pk.listado[listado[i].numero-1].evo[j].en))
            for(let k=0; k<pk.listado[pk.listado[listado[i].numero-1].evo[j].en-1].evo.length; k++)
              if(esGenMenor(pk.listado[pk.listado[listado[i].numero-1].evo[j].en-1].evo[k].en))
                dibujarEvo(divLugar, pk.listado[pk.listado[listado[i].numero-1].evo[j].en-1].evo[k], listado[i].variedad);
        }
      }
    }
  }

  divContenedor.append(divLugar);
}

function dibujarPok(div, pok){

  let divPok = document.createElement("DIV");
  let tipo = obtenerTipo(pok.numero, pok.variedad);

  divPok.classList="pok";
  divPok.style.background = devolverCSS(tipo);
  divPok.setAttribute("num",(pok.variedad!=undefined ? pok.numero+"_"+pok.variedad : pok.numero));

  darBorde(divPok, pk.listado[pok.numero-1]);

  if(obtenidos[juego].includes(pok.variedad!=undefined ? pok.numero+"_"+pok.variedad : pok.numero.toString())){
    divPok.classList.add("obtenido");
  }

  divPok.onclick = function(){
    guardar(this.getAttribute("num"));
    marcarObtenido(this.getAttribute("num"));
    comprobarTrofeos();
  };

  let divDatos = document.createElement("DIV");
  divDatos.classList.add("datos");

  if(pok.hasOwnProperty("pokedex")){
    let pPokedex = document.createElement("P");

    let imgPokedex = document.createElement("IMG");
    imgPokedex.src = 'img/otros/pokedex.png';
    imgPokedex.title = 'Necesita Pokédex Nacional'
    imgPokedex.alt = 'Necesita Pokédex Nacional'
    imgPokedex.classList.add('pokedex');

    divDatos.append(imgPokedex);
  }

  dibujarImagen(divDatos, pok.numero, pok.variedad);

  let pPok = document.createElement("P");
  pPok.innerHTML ="<b>"+(pok.variedad===undefined ? pk.listado[pok.numero-1].nombre : pk.listado[pok.numero-1].variedades[pok.variedad].nombre )+"</b>";
  divDatos.append(pPok);

  if(pok.hasOwnProperty("nivel")){
    let pNivel =document.createElement("P");
    pNivel.innerHTML = "Nvl. "+pok.nivel;
    divDatos.append(pNivel);
  }

  if(pok.hasOwnProperty("porcentaje")){
    divDatos.append(dibujarProbabilidad(pok.porcentaje,"#000"));
  }

  if(pok.hasOwnProperty("precio")){
    let pPrecio = document.createElement("P");
    pPrecio.innerHTML = pok.precio+"<img src='img/otros/pokecuarto.png' class='pokecuarto'>";
    divDatos.append(pPrecio);
  }

  if(pok.hasOwnProperty("fichas")){
    let pFichas = document.createElement("P");
    pFichas.innerHTML = pok.fichas+"<img src='img/otros/token.png' alt='Fichas' title='Fichas' class='ficha'>";
    divDatos.append(pFichas);
  }

  if(pok.hasOwnProperty("necesita")){
    let imgCable = document.createElement("IMG");
    imgCable.src="img/otros/cable.png";
    imgCable.alt="Cable link";
    imgCable.title="Cable link";
    imgCable.classList.add('cablelink');

    divDatos.append(imgCable);

    if (pok.necesita!=""){
      let pNecesita = document.createElement("P");
      let imgNecesita = document.createElement("IMG");
      imgNecesita.src="img/"+pk.listado[pok.necesita-1].nombre+"_icon.png";
      imgNecesita.alt=pk.listado[pok.necesita-1].nombre;
      imgNecesita.title=pk.listado[pok.necesita-1].nombre;

      pNecesita.innerHTML =pk.listado[pok.necesita-1].nombre;

      divDatos.append(imgNecesita);
      divDatos.append(pNecesita);
    }
  }

  if(pok.hasOwnProperty("imagen")){
    let imagenes = pok.imagen.split(' / ');
    for(i of imagenes){
      let img = document.createElement("IMG");
      img.src = 'img/otros/cartucho_'+i+'.png';
      img.alt = i;
      img.title = i;
      img.classList.add("portada")
      divDatos.append(img);
    }
  }

  if(pok.hasOwnProperty("probabilidad")){
    if(Array.isArray(pok.probabilidad)){
      let divContProb = document.createElement("DIV");
      divContProb.classList.add("probabilidad");
      for(let i =0; i< pok.probabilidad.length; i++){
        let divProbabilidad = document.createElement("DIV");
        procesarProbabilidad(pok.probabilidad[i], divProbabilidad);
        divContProb.append(divProbabilidad);
      }
      divDatos.append(divContProb);

    }
    else {
      procesarProbabilidad(pok.probabilidad, divDatos);
    }
  }

  if(pok.hasOwnProperty("region")){
    let pRegion = document.createElement("P");
    pRegion.innerHTML = pok.region;

    /*let imgRegion = document.createElement("IMG");
    imgRegion.src = 'img/otros/sonidos.png';
    imgRegion.title = 'Sonidos de Hoenn y Sinnoh'
    imgRegion.alt = 'Sonidos de Hoenn y Sinnoh'
    imgRegion.classList.add('sonidos');*/

    divDatos.append(pRegion);
    //divPok.append(imgRegion);

  }

  if(pok.hasOwnProperty("grupo")){
    let pGru = document.createElement("P");
    pGru.innerHTML = 'Grupo '+pok.grupo;
    divDatos.append(pGru);
  }

  if(pok.hasOwnProperty("pasos")){
    let pPasos = document.createElement("P");
    pPasos.innerHTML = pok.pasos+ (pok.pasos == 0 ? '' : ' ('+pok.pasos*0.75+')') + ' pasos';
    divDatos.append(pPasos);
  }

  if(pk.listado[pok.numero-1].hasOwnProperty("fosil")){
    let imgFosil= document.createElement("IMG");
    imgFosil.src = "img/fosiles/"+pk.listado[pok.numero-1].fosil+".png";
    imgFosil.alt = pk.listado[pok.numero-1].fosil;
    imgFosil.title = pk.listado[pok.numero-1].fosil;

    divDatos.append(imgFosil);
  }

  dibujarGeneracion(divDatos, pok.numero, pok.variedad);

  divPok.append(divDatos);

  if(pok.hasOwnProperty("observaciones")){
    let divObser = document.createElement("DIV");
    let pObser = document.createElement("P");
	pObser.classList.add("observaciones");
    pObser.innerHTML ='<i>'+ pok.observaciones +'</i>';
    divObser.append(pObser);
    divPok.append(divObser);
  }

  div.append(divPok);
}

function devolverCSS(tipo){
  if(!tipo.includes(' ')){
    return devolverColor(tipo);
  }
  else{
    return "linear-gradient(90deg,"+devolverColor(tipo.substring(0,tipo.indexOf(" ")))+","+devolverColor(tipo.substring((tipo.indexOf(" ")+1)))+")";
  }
}

function devolverColor(tipo){
  switch (tipo){
    case "acero": return "#B7B7CE";
    case "agua": return "#6390F0";
    case "bicho": return "#A6B91A";
    case "dragon": return "#6F35FC";
    case "electrico": return "#F7D02C";
    case "fantasma": return "#EE8130";
    case "fuego": return "#EE8130";
    case "hada": return "#D685AD";
    case "hielo": return "#96D9D6";
    case "lucha": return "#C22E28";
    case "normal": return "#A8A77A";
    case "planta": return "#7AC74C";
    case "psiquico": return "#F95587";
    case "roca": return "#B6A136";
    case "siniestro": return "#705746";
    case "tierra": return "#E2BF65";
    case "veneno": return "#A33EA1";
    case "volador": return "#A98FF3";
    default: return "";
  }
}

function dibujarEvo(div, evo, variedad){
  let divEvo = document.createElement("DIV");
  let tipo = obtenerTipo(evo.en, variedad);

  divEvo.classList="pok evo";
  divEvo.style.background = devolverCSS(tipo);
  divEvo.setAttribute("num",pk.listado[evo.en-1].variedades!==undefined ? evo.en+'_'+variedad : evo.en);

  dibujarImagen(divEvo, evo.en, variedad);

  let pEvo=document.createElement("P");
  if((variedad!==undefined) && (pk.listado[evo.en-1].variedades!==undefined)){
    pEvo.innerHTML="<b>"+pk.listado[evo.en-1].variedades[variedad].nombre+"</b>";
  }
  else {
    pEvo.innerHTML="<b>"+pk.listado[evo.en-1].nombre+"</b>";
  }
  divEvo.append(pEvo);

  let numComprobar;
  if((pk.listado[evo.en-1].variedades!==undefined) && (variedad!==undefined))
    numComprobar=evo.en+'_'+variedad;
  else
    numComprobar=evo.en

  if(obtenidos[juego].includes(numComprobar.toString())){
    divEvo.classList.add("obtenido");
  }

  divEvo.onclick = function(){
    guardar(this.getAttribute("num"));
    marcarObtenido(this.getAttribute("num"));
  };

  if(evo.hasOwnProperty("nivel")){
    let pNivel = document.createElement("P");
    pNivel.innerHTML = 'Nvl. '+evo.nivel;
    divEvo.append(pNivel);
  }

  if(evo.hasOwnProperty("sexo")){
    let pSexo = document.createElement("P");
    pSexo.innerHTML = evo.sexo;
    divEvo.append(pSexo);
  }

  if(evo.hasOwnProperty("piedra")){
    let imgPiedra = document.createElement("IMG");
    imgPiedra.src = "img/piedra/"+evo.piedra+".png";
    imgPiedra.alt = "Piedra "+evo.piedra;
    imgPiedra.title = "Piedra "+evo.piedra;

    divEvo.append(imgPiedra);
  }

  if(evo.hasOwnProperty("intercambio")){
    let imgInter = document.createElement("IMG");
    imgInter.src = "img/otros/cable.png";
    imgInter.alt = "Cable link";
    imgInter.title = "Cable link";
    imgInter.classList.add('cablelink');

    divEvo.append(imgInter);

    if(evo.intercambio!=""){
      let imgInterObj = document.createElement("IMG");
      imgInterObj.src = "img/objetos/"+evo.intercambio+".png";
      imgInterObj.alt = evo.intercambio;
      imgInterObj.title = evo.intercambio;
      divEvo.append(imgInterObj);
    }
  }

  if(evo.hasOwnProperty("amistad")){
    let imgAmi = document.createElement("IMG");
    imgAmi.src = "img/otros/amistad.png";
    imgAmi.alt= "Amistad";
    imgAmi.title="Amistad";

    divEvo.append(imgAmi);

    if(evo.amistad!=""){
      let imgTipoAmi = document.createElement("IMG");
      imgTipoAmi.src = "img/hora/"+evo.amistad+".png";
      imgTipoAmi.alt= evo.amistad;
      imgTipoAmi.title=evo.amistad;
      divEvo.append(imgTipoAmi);
    }
  }

  if(evo.hasOwnProperty("roca")){
    let imgRoca = document.createElement("IMG");
    imgRoca.src = "img/otros/roca "+evo.roca+".png";
    imgRoca.alt = evo.roca;
    imgRoca.title = evo.roca;

    let pRoca = document.createElement("P");
    pRoca = 'Subir nivel cerca de roca '+evo.roca;

    divEvo.append(imgRoca);
    divEvo.append(pRoca);
  }

  if(evo.hasOwnProperty("stat")){
    let pStat = document.createElement("P");
    pStat.innerHTML ="Estadística "+evo.stat;
    divEvo.append(pStat);
  }

  if(evo.hasOwnProperty("movimiento")){
    let pMov = document.createElement("P");
    pMov.innerHTML ="Conocer "+evo.movimiento;
    divEvo.append(pMov);
  }

  if(evo.hasOwnProperty("equipo")){
    let pEquipo = document.createElement("P");
    pEquipo.innerHTML ="Con "+pk.listado[evo.equipo-1].nombre+" en el equipo.";
    divEvo.append(pEquipo);
  }

  if(evo.hasOwnProperty("objeto")){
    let imgObjeto = document.createElement("IMG");
    imgObjeto.src = "img/objetos/"+evo.objeto+".png";
    imgObjeto.alt = evo.objeto;
    imgObjeto.title = evo.objeto;

    divEvo.append(imgObjeto);
  }

  if(evo.hasOwnProperty("hora")){
    let imgHora = document.createElement("IMG");
    imgHora.src = "img/hora/"+evo.hora+".png";
    imgHora.alt = evo.hora;
    imgHora.title = evo.hora;

    divEvo.append(imgHora);

  }

  if(evo.hasOwnProperty("localizacion")){
    let pLoc = document.createElement("P");
    pLoc.innerHTML =evo.localizacion;
    divEvo.append(pLoc);
  }

  if(evo.hasOwnProperty("observaciones")){
    let pObser = document.createElement("P");
    pObser.classList.add("observaciones");
    pObser.innerHTML ='<i>'+ evo.observaciones+ '</i>';
    divEvo.append(pObser);
  }

  dibujarGeneracion(divEvo, evo.en, variedad);

  div.append(divEvo);
}

function dibujarImagen(div, numero, variedad){
  let imgPok = document.createElement("IMG");

  if(pk.listado[numero-1].variedades===undefined) {
    imgPok.src="img/"+pk.listado[numero-1].nombre+ "_icon.png";;
    imgPok.alt=pk.listado[numero-1].nombre;
    imgPok.title=pk.listado[numero-1].nombre;
    div.append(imgPok);
  }
  else {
    try{
      imgPok.src="img/"+(variedad===undefined ? pk.listado[numero-1].nombre : pk.listado[numero-1].variedades[variedad].nombre.replace('?','QM')) + "_icon.png";
      imgPok.alt=(variedad===undefined ? pk.listado[numero-1].nombre : pk.listado[numero-1].variedades[variedad].nombre);
      imgPok.title=(variedad===undefined ? pk.listado[numero-1].nombre : pk.listado[numero-1].variedades[variedad].nombre);
      div.append(imgPok);
    }
    catch(e){
      console.log(numero);
    }
  }

  let tipoPrincipal =pk.listado[numero-1].tipo;
  if(pk.listado[numero-1].formas){
    for(let i=0; i<pk.listado[numero-1].formas.length; i++){
      let tipoForma = pk.listado[numero-1].formas[i].tipo;
      if(tipoPrincipal != tipoForma) {
        let divCont = document.createElement("DIV");
        divCont.classList = "forma "+pk.listado[numero-1].formas[i].tipo;

        let imgPok = document.createElement("IMG");
        imgPok.src="img/"+(pk.listado[numero-1].formas[i].nombre)+"_icon.png";
        imgPok.alt=pk.listado[numero-1].formas[i].nombre;
        imgPok.title=pk.listado[numero-1].formas[i].nombre;

        divCont.append(imgPok);
        div.append(divCont);
      }
      else{
        let imgPok = document.createElement("IMG");
        imgPok.src="img/"+(pk.listado[numero-1].formas[i].nombre)+"_icon.png";
        imgPok.alt=pk.listado[numero-1].formas[i].nombre;
        imgPok.title=pk.listado[numero-1].formas[i].nombre;

        div.append(imgPok);
      }
    }
  }
}

function dibujarGeneracion(div, numero, variedad){
  let imgGen = document.createElement("IMG");
  if (pk.listado[numero-1].variedades===undefined){
    variedad=undefined;
  }
  try{
    imgGen.src = "img/gen/gen"+(variedad===undefined ? pk.listado[numero-1].gen : pk.listado[numero-1].variedades[variedad].gen)+".png";
    imgGen.alt = "Generación "+(variedad===undefined ? pk.listado[numero-1].gen : pk.listado[numero-1].variedades[variedad].gen);
    imgGen.title = "Generación "+(variedad===undefined ? pk.listado[numero-1].gen : pk.listado[numero-1].variedades[variedad].gen);
    div.append(imgGen);
  }
  catch(e){
    console.log(numero+' '+variedad);
  }
}

function dibujarCania(tipo, probabilidad, div){
  let divElemento = document.createElement("DIV");

  let imgCania = document.createElement("IMG");
  imgCania.src = "img/cania/"+tipo+".png";
  imgCania.alt=(tipo=='super'?'Supercaña':"Caña "+tipo);
  imgCania.title=(tipo=='super'?'Supercaña':"Caña "+tipo);

  let pCania = document.createElement("P");
  pCania.innerHTML = "Nvl. "+probabilidad.nivel;

  divElemento.append(imgCania);
  divElemento.append(pCania);

  if(probabilidad.hasOwnProperty("porcentaje") && (probabilidad.porcentaje>0)){
    divElemento.append(dibujarProbabilidad(probabilidad.porcentaje,"#000"));
  }
  else {
    if(probabilidad.maniana > 0) {
      let imgHora = document.createElement("IMG");
      imgHora.src = "img/hora/Mañana.png";
      imgHora.alt = "Mañana";
      imgHora.title = "Mañana";
      divElemento.append(imgHora);
      divElemento.append(dibujarProbabilidad(probabilidad.maniana,"#000"));
    }
    if(probabilidad.dia > 0) {
      let imgHora = document.createElement("IMG");
      imgHora.src = "img/hora/Día.png";
      imgHora.alt = "Día";
      imgHora.title = "Día";
      divElemento.append(imgHora);
      divElemento.append(dibujarProbabilidad(probabilidad.dia,"#000"));
    }
    if(probabilidad.noche > 0) {
      let imgHora = document.createElement("IMG");
      imgHora.src = "img/hora/Noche.png";
      imgHora.alt = "Noche";
      imgHora.title = "Noche";
      divElemento.append(imgHora);
      divElemento.append(dibujarProbabilidad(probabilidad.noche,"#000"));
    }
  }

  if(probabilidad.hasOwnProperty("observaciones")){
    let pObs = document.createElement("P");
	pObs.classList.add("observaciones");
    pObs.innerHTML ='<i>'+ probabilidad.observaciones +'</i>';
    divElemento.append(pObs);
  }

  div.append(divElemento);
}

function dibujarHora(tipo, probabilidad, div){
  let divElemento = document.createElement("DIV");

  if(probabilidad.nivel!==undefined) {
    let pNivel = document.createElement("P");
    pNivel.innerHTML = "Nvl. "+probabilidad.nivel;
    divElemento.append(pNivel);
  }

  if(probabilidad.hasOwnProperty("porcentaje"))
    divElemento.append(dibujarProbabilidad(probabilidad.porcentaje,"#000"));

  let imgHora = document.createElement("IMG");
  imgHora.src = "img/hora/"+tipo+".png";
  imgHora.alt = tipo;
  imgHora.title = tipo;

  divElemento.append(imgHora);

  if(probabilidad.hasOwnProperty("observaciones")){
    let pObs = document.createElement("P");
	pObs.classList.add("observaciones");
    pObs.innerHTML = '<i>'+ probabilidad.observaciones +'</i>';
    divElemento.append(pObs);
  }

  div.append(divElemento);
}

function dibujarArbol(tipo, probabilidad, div, grupo){
  let divElemento = document.createElement("DIV");

  if(grupo!==undefined) {
    let pGrupo = document.createElement("P");
    pGrupo.innerHTML = "Grupo "+grupo;
    divElemento.append(pGrupo);
  }

  if(probabilidad.hasOwnProperty("nivel")) {
    let pNivel = document.createElement("P");
    pNivel.innerHTML = "Nvl. "+probabilidad.nivel;
    divElemento.append(pNivel);
  }

  let imgArbol = document.createElement("IMG");
  imgArbol.src = "img/otros/arbol_"+tipo+".png";
  imgArbol.alt = tipo;
  imgArbol.title = tipo;

  if(probabilidad.hasOwnProperty("porcentaje")){
    divElemento.append(dibujarProbabilidad(probabilidad.porcentaje,"#000"));
  }
  divElemento.append(imgArbol);


  div.append(divElemento);
}

function dibujarEstacion(tipo, probabilidad, div){
  let divElemento = document.createElement("DIV");

  let pNivel = document.createElement("P");
  pNivel.innerHTML = "Nvl. "+probabilidad.nivel;

  divElemento.append(pNivel);

  let img = document.createElement("IMG");
  img.src = "img/otros/est_"+tipo+".png";
  img.alt = tipo;
  img.title = tipo;

  divElemento.append(img);

  if(probabilidad.hasOwnProperty("porcentaje"))
    divElemento.append(dibujarProbabilidad(probabilidad.porcentaje,"#000"));

  if(probabilidad.hasOwnProperty("observaciones")){
    let pObs = document.createElement("P");
	pObs.classList.add("observaciones");
    pObs.innerHTML = '<i>'+ probabilidad.observaciones +'</i>';
    divElemento.append(pObs);
  }

  div.append(divElemento);

}

function dibujarProbabilidad(num, c){
  let svgProb = document.createElementNS(SVG_NS,'svg')
  let pathSvg = document.createElementNS(SVG_NS,'path');
  let textSvg = document.createElementNS(SVG_NS,'text');
  svgProb.setAttributeNS(null, 'viewBox','0 0 36 36');
  pathSvg.setAttributeNS(null, 'd','M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831');
  pathSvg.setAttributeNS(null, 'fill','none');
  pathSvg.setAttributeNS(null, 'stroke-width','3');
  pathSvg.setAttributeNS(null, 'stroke-dasharray', num+',100');
  textSvg.setAttributeNS(null, 'x','7');
  textSvg.setAttributeNS(null, 'y','20.35');
  textSvg.setAttributeNS(null, 'font-size','12');
  textSvg.innerHTML = num+'%';

  svgProb.append(pathSvg);
  svgProb.append(textSvg);
  return svgProb;
}

function procesarProbabilidad(probabilidad, divPok){
  if(probabilidad.hasOwnProperty("tipo")){
    if(probabilidad.tipo == 'hora') {
      let div = document.createElement("DIV");
      div.classList.add("hora");

      if(probabilidad.hasOwnProperty("maniana")){
        dibujarHora("Mañana", probabilidad.maniana, div);
      }
      if(probabilidad.hasOwnProperty("dia")){
        dibujarHora("Día", probabilidad.dia, div);
      }
      if(probabilidad.hasOwnProperty("noche")){
        dibujarHora("Noche", probabilidad.noche, div);
      }
      if(probabilidad.hasOwnProperty("todo")){
        dibujarHora("Todo", probabilidad.todo, div);
      }
      divPok.append(div);
    }

    if(probabilidad.tipo == "arbol") {
      let div = document.createElement("DIV");
      div.classList.add("arbol")

      if(probabilidad.hasOwnProperty("normal")){
        dibujarArbol("Normal", probabilidad.normal, div, undefined);
      }
      if(probabilidad.hasOwnProperty("especial")){
        dibujarArbol("Especial", probabilidad.especial, div, undefined);
      }

      if(probabilidad.hasOwnProperty("grupos")){
        for(let i= 0; i<probabilidad.grupos.length; i++){
          if(probabilidad.grupos[i].hasOwnProperty("normal")){
            dibujarArbol("Normal", probabilidad.grupos[i].normal, div, probabilidad.grupos[i].tipo);
          }
          if(probabilidad.grupos[i].hasOwnProperty("especial")){
            dibujarArbol("Especial", probabilidad.grupos[i].especial, div, probabilidad.grupos[i].tipo);
          }
        }
      }
      divPok.append(div);
    }

    if(probabilidad.tipo == "cania"){
      let div = document.createElement("DIV");
      div.classList.add("cania");

      if(probabilidad.hasOwnProperty("vieja")){
        dibujarCania("vieja", probabilidad.vieja, div);
      }
      if(probabilidad.hasOwnProperty("buena")){
        dibujarCania("buena", probabilidad.buena, div);
      }
      if(probabilidad.hasOwnProperty("super")){
        dibujarCania("super", probabilidad.super, div);
      }

      divPok.append(div);
    }

    if(probabilidad.tipo == "estacion"){
      let div = document.createElement("DIV");
      div.classList.add("estacion");

      if(probabilidad.hasOwnProperty("primavera")){
        dibujarEstacion("primavera", probabilidad.primavera, div);
      }
      if(probabilidad.hasOwnProperty("verano")){
        dibujarEstacion("verano", probabilidad.verano, div);
      }
      if(probabilidad.hasOwnProperty("otoño")){
        dibujarEstacion("otoño", probabilidad.otoño, div);
      }
      if(probabilidad.hasOwnProperty("invierno")){
        dibujarEstacion("invierno", probabilidad.invierno, div);
      }

      divPok.append(div);
    }
  }

  if(probabilidad.hasOwnProperty("nivel")){
    let pNivel =document.createElement("P");
    pNivel.innerHTML = "Nvl. "+probabilidad.nivel;
    divPok.append(pNivel);
  }

  if(probabilidad.hasOwnProperty("porcentaje")){
    divPok.append(dibujarProbabilidad(probabilidad.porcentaje,"#000"));
  }

  if(probabilidad.hasOwnProperty("observaciones")){
    let pObser = document.createElement("P");
	pObser.classList.add("observaciones");
    pObser.innerHTML = '<i>'+probabilidad.observaciones+'</i>';
    divPok.append(pObser);
  }
}

function ocultarNoCoincidentes(texto){
  if(juego!='nacional'){
    let lugarEncontrado = false;

    let lugares = document.getElementById("cuerpo").children;
    for(let i=0; i<lugares.length; i++){
      if(!lugares[i].children[0].innerText.toLowerCase().includes(texto.toLowerCase())){
        lugares[i].classList.add("oculto");
        let obtencion = lugares[i].getElementsByClassName('divCont');
        for(let j=0; j<obtencion.length; j++){
          obtencion[j].classList.add("oculto");
        }
        let lugaresHijo = lugares[i].getElementsByClassName('lugar');
        for(let j=0; j<lugaresHijo.length; j++){
          lugaresHijo[j].classList.add("oculto");
        }
      }
      else {
        lugares[i].classList.remove("oculto");
        desocultarHijos(lugares[i]);
        lugarEncontrado = true;
      }
    }

    if(!lugarEncontrado){
      let pok = document.getElementsByClassName("pok");
      for(let i=0; i<pok.length; i++){
        if(pok[i].getElementsByTagName("P")[0].innerText.toLowerCase().includes(texto.toLowerCase())){
          pok[i].classList.remove("oculto");
          desocultarPadre(pok[i]);
        }
        else {
          pok[i].classList.add("oculto");
        }
      }
    }
  }

  else{
    let nombre="";
    let numero="";

    for (let i=0; i<document.getElementById("cuerpo").getElementsByClassName("datos").length; i++){
      numero = document.getElementById("cuerpo").getElementsByClassName("datos")[i].getElementsByTagName("P")[0].innerText;
      nombre = document.getElementById("cuerpo").getElementsByClassName("datos")[i].getElementsByTagName("P")[1].innerText.toLowerCase();

      if(nombre.includes(texto)||numero.includes(texto))
        cuerpo.childNodes[i].classList.remove("oculto");
      else
        cuerpo.childNodes[i].classList.add("oculto");
    }
  }
}

/**** OPERATIVA *****/
function guardar(numero){
  if(!obtenidos[juego].includes(numero)){
    obtenidos[juego].push(numero);
  }
  else{
    for(let i=0; i<obtenidos[juego].length; i++){
      if(obtenidos[juego][i]==numero){
        obtenidos[juego].splice(i,1);
      }
    }
  }
  window.localStorage.setItem("obtenidos",JSON.stringify(obtenidos));
}

function ordenarListado(listado){
  listado.sort(function(a,b){
    //if((a.numero) && (b.numero))
      return a.numero-b.numero;
    /*else
      if((a.fichas) && (b.fichas))
        return b.fichas-a.fichas;
      if((a.probabilidad) && (b.probabilidad))
        if((a.probabilidad.porcentaje) && (b.probabilidad.porcentaje))
          return b.probabilidad.porcentaje-a.probabilidad.porcentaje;
        else
          if((a.probabilidad.vieja) && (b.probabilidad.vieja))
            return b.probabilidad.vieja.porcentaje-a.probabilidad.vieja.porcentaje;
          else
            if ((a.probabilidad.maniana) && (b.probabilidad.maniana))
              return b.probabilidad.maniana.porcentaje-a.probabilidad.maniana.porcentaje;*/
  });
}

function borrar(){
  if(juego!='nacional') {
    if(confirm("¿Quieres borrar los datos de "+juego+"?")==true){
      obtenidos[juego]=[];
      window.localStorage.setItem("obtenidos",JSON.stringify(obtenidos));
      window.location.reload();
    }
  }
  else {
    if(confirm("Si aceptas se borrarán todos los datos guardados.")==true){
        window.localStorage.clear();
        window.location.reload();
    }
  }
}

function marcarObtenido(numero){
  elementos = document.querySelectorAll('[num="'+numero+'"]');
  for(e of elementos){
    e.classList.toggle("obtenido");
  }
  cargarEstadisticas(juego);
}

function limpiarCuerpo(){
  document.getElementById("busqueda").value = "";
  let nodo = document.getElementById("cuerpo");
  while(nodo.firstChild){
    nodo.removeChild(nodo.lastChild);
  }
  /*nodo = document.getElementById("mapa");
  while(nodo.firstChild){
    nodo.removeChild(nodo.lastChild);
  }*/
  document.getElementById("titulo").classList.remove(juego);
}

function esGenMenor(numero){
  if (pk.listado[numero-1].gen <= generacion)
    return true;
  else
    return false;
}

function obtenerTipo(numero, variedad) {
  let tipo;

  if(pk.listado[numero-1].hasOwnProperty("variedades")){
    if(variedad===undefined){
      variedad = 0;
    }
    if (Object.prototype.toString.call(pk.listado[numero-1].variedades[variedad].tipo)==="[object String]"){
      tipo =pk.listado[numero-1].variedades[variedad].tipo;
    }
    else{
      for(var i=0; i<pk.listado[numero-1].variedades[variedad].tipo.length; i++){
        if(pk.listado[numero-1].variedades[variedad].tipo[i].gen<=generacion)
          tipo =pk.listado[numero-1].variedades[variedad].tipo[i].tipo;
        }
    }
  }
  else {
    if (Object.prototype.toString.call(pk.listado[numero-1].tipo)==="[object String]") {
      tipo =pk.listado[numero-1].tipo;
    }
    else{
      for(var i=0; i<pk.listado[numero-1].tipo.length; i++){
        if(pk.listado[numero-1].tipo[i].gen<=generacion)
          tipo =pk.listado[numero-1].tipo[i].tipo;
        }
      }
  }
  return tipo;
}

function evoluciona(numero){
  if(pk.listado[numero-1].hasOwnProperty("evo"))
    return true;
  else
    return false;
}

function desocultarPadre(div){
  if(div.parentElement.id!='cuerpo') {
    div.parentElement.classList.remove("oculto");
    desocultarPadre(div.parentElement);
  }
}

function desocultarHijos(div){
  if(div.hasChildNodes()){
    div.classList.remove("oculto");
    var elementos = div.children;
    for(let e of elementos){
      desocultarHijos(e);
    }
  }
}

function construirArrayObtenidos(pJuego){
  let arrayObtenidos = [];

  if(obtenidos[pJuego.getAttribute("juego")]!=undefined){
    for(let i=0; i < obtenidos[pJuego.getAttribute("juego")].length; i++){
      if(obtenidos[pJuego.getAttribute("juego")][i].includes('_')){
        if(!arrayObtenidos.includes(obtenidos[pJuego.getAttribute("juego")][i].substring(0, obtenidos[pJuego.getAttribute("juego")][i].indexOf('_')))){
          arrayObtenidos.push(obtenidos[pJuego.getAttribute("juego")][i].substring(0, obtenidos[pJuego.getAttribute("juego")][i].indexOf('_')));
        }
      }
      else {
        arrayObtenidos.push(obtenidos[pJuego.getAttribute("juego")][i]);
      }
    }
    return arrayObtenidos;
  }
}

function comprobarTrofeos(){
  if (obtenidos) {
    let divJuego = document.querySelector("#juegosGen [juego="+juego+"]");
    let arrayObtenidos = construirArrayObtenidos(divJuego);
    let nJuegos =0;
    let offset = 200;

    if(arrayObtenidos.length == divJuego.parentElement.getAttribute("ntotal")){
      trofeos.listado.forEach((t) =>{
        if(t.nombre.toLowerCase() == ("gen"+generacion) && !trofeosObtenidos.includes(t.nombre.toLowerCase())){
          crearTrofeo(t, nJuegos*offset);
          nJuegos++;
          trofeosObtenidos.push(t.nombre.toLowerCase());
        }
        if(t.nombre.toLowerCase() == juego && !trofeosObtenidos.includes(t.nombre.toLowerCase())){
          crearTrofeo(t, nJuegos*offset);
          nJuegos++;
          trofeosObtenidos.push(t.nombre.toLowerCase());
        }
      });
      window.localStorage.setItem("trofeosObtenidos", JSON.stringify(trofeosObtenidos));
    }
  }
}

function crearTrofeo(trofeo, offset){
    let divTrofeo = document.createElement("DIV");
    divTrofeo.classList.add("trofeo");
    divTrofeo.style.bottom = (offset+10)+"px";

    let imgTrofeo = document.createElement("IMG");
    imgTrofeo.src=trofeo.img;
    imgTrofeo.alt=trofeo.desc,
    imgTrofeo.title =trofeo.nombre;

    let hTrofeo = document.createElement("H3");
    hTrofeo.innerText = trofeo.nombre;

    let pTrofeo = document.createElement("P");
    pTrofeo.innerText = trofeo.desc;

    divTrofeo.append(imgTrofeo);
    divTrofeo.append(hTrofeo);
    divTrofeo.append(pTrofeo);

    divTrofeo.ocultar = function(){
      this.style.display = "none";
    };

    document.body.append(divTrofeo);

    setTimeout(() => {divTrofeo.ocultar();}, 5600);

}

function cargarTrofeos(){
  let nodo = document.getElementById("cuerpo");
  while(nodo.firstChild){
    nodo.removeChild(nodo.lastChild);
  }
  document.getElementById("divBusqueda").style.display = 'none';
  nodo.classList = "trofeos";

  document.getElementById("titulo").innerText='Trofeos';
  document.getElementById("titulo").classList = "trofeos";

  trofeos.listado.forEach((t, i) => {
    if(trofeosObtenidos.includes(t.nombre.toLowerCase())){
      let divTrofeo = document.createElement("DIV");
      divTrofeo.classList.add("trofeoEstatico");

      let imgTrofeo = document.createElement("IMG");
      imgTrofeo.src=t.img;
      imgTrofeo.alt=t.desc,
      imgTrofeo.title =t.nombre;

      let hTrofeo = document.createElement("H3");
      hTrofeo.innerText = t.nombre;

      let pTrofeo = document.createElement("P");
      pTrofeo.innerText = t.desc;

      divTrofeo.append(imgTrofeo);
      divTrofeo.append(hTrofeo);
      divTrofeo.append(pTrofeo);

      document.getElementById("cuerpo").append(divTrofeo);
    }
  });
}

function limpiarBusqueda(){
  document.getElementById("busqueda").value = '';
  ocultarNoCoincidentes('');
}

function revisar(){
  for(let i=1; i<obtenidos[juego].length; i++){
    if(!obtenidos[juego].includes(i.toString()))
      console.log(i+' '+pk.listado[i-1].nombre+' '+obtenidos[juego].includes(i.toString()));
  }
}

function irArriba(){
  document.documentElement.scrollTop = 0;
}

window.onscroll = function(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnArriba").style.display = "block";
  }
  else {
    document.getElementById("btnArriba").style.display = "none";
  }
}
