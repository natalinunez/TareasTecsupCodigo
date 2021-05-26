//2.1
let areaTriangulo=0;
let base=4, altura=3;
areaTriangulo=(base*altura)/2;
//console.log(`El área del triangulo es: ${areaTriangulo}`);
document.write(`Ejercicio 2.1--El área del triangulo con altura ${altura} y base ${base} es: ${areaTriangulo} <br>`)

//2.2
const TipoCambio=3.8;
const SolesPeruano=100;
let ImporteEnDolares;

ImporteEnDolares=SolesPeruano/TipoCambio;
//console.log(`Los ${SolesPeruano} soles equivalen a: ${ImporteEnDolares} dólares`);
document.write(`Ejercicio 2.2--Los ${SolesPeruano} soles equivalen a: ${ImporteEnDolares} dólares <br>`)

//2.3
const nombre='Andres';
const AnioNacimiento=1985;
let fecha=new Date();
let AnioActual=fecha.getFullYear();
let edad=AnioActual-AnioNacimiento;

console.log(`El candidato ${nombre} tiene: ${edad} años`);
document.write(`Ejercicio 2.3--El candidato ${nombre} que nacio en el anio ${AnioNacimiento} tiene: ${edad} años  <br>`);

//2.4
let nroHoras=5, costoPoHora=3
let cobro;
cobro=nroHoras*costoPoHora;
document.write(`Ejercicio 2.4--El cobro del vehículo que se quedo ${nroHoras} en el estacionamiento es ${cobro}  <br>`);

//2.5
//document.write(`${}`);
let costoMetroCuadrado=15,cantidadMetroCuadrado=5
let presupuesto=costoMetroCuadrado*cantidadMetroCuadrado;
document.write(`Ejercicio 2.5--El costo para pintar una área de  ${cantidadMetroCuadrado} metro cuadrados es: ${presupuesto}  <br> `);

//2.6
let cateto_1=4, cateto_2=3;
let hipotenusa=0;
hipotenusa=Math.sqrt(Math.pow(cateto_1,2)+Math.pow(cateto_2,2));
document.write(`Ejercicio 2.6--El triángulo con catetos ${cateto_1} y ${cateto_2} tiene una hipotenusa de ${hipotenusa}  <br> `);

//2.7
let kmRecorrido=5, costoXKm=10;
let costo=kmRecorrido*costoXKm;
document.write(`Ejercicio 2.7--El costo del boleto con un recorrido de ${kmRecorrido} km con costo por km de  ${costoXKm} será de ${costo}  <br> `);

//2.8
let distanciaRecorrida=192, velocidad=96;
let tiempo=distanciaRecorrida/velocidad;
document.write(`Ejercicio 2.8--Una persona en bicicleta manejando a una velocidad ${velocidad} Km/h y con una distancia ${distanciaRecorrida}, se demorará en llegar ${hipotenusa} horas  <br> `);

//2.9
let tiempoLlamada=20, costoXminuto=3;
let costoLlamad=tiempoLlamada*costoXminuto;
document.write(`Ejercicio 2.9--El costo de realizar una llamada que dura ${tiempoLlamada} minutos será de ${costoLlamad} soles <br> `);

//2.10
let cantidadCubico=150, costoxCubico=8;
let CostoConsumoAgua=cantidadCubico*costoxCubico;
document.write(`Ejercicio 2.10--El pago por consumir ${cantidadCubico} metros cubicos de agua es de ${CostoConsumoAgua} <br> `);

//2.11
let cantidadKW=130, costoxKW=10;
let CostoConsumoLuz=cantidadKW*costoxKW;
document.write(`Ejercicio 2.11--El pago por consumir ${cantidadKW} Kilowatts es de ${CostoConsumoLuz} <br> `);

//2.12
let costoArticulo=50, descuento=0.2, IVA=0.15;
let Descuento=costoArticulo*0.2, costoIVA=costoArticulo*0.15;
let precioDescuento=costoArticulo*0.8;
let precioFinal=costoArticulo-descuento+costoIVA;
document.write(`Ejercicio 2.12--El precio con descuento de un articulo con un costo ${costoArticulo} soles es de ${precioDescuento} soles. Su precio final con el IVA es de ${precioFinal} <br> `);

//2.13
let sueldo=7000;
let ahorroSemanal=sueldo*0.15;
let ahorroMensual=4*ahorroSemanal;
let ahorroAnual=12*ahorroMensual;
document.write(`Ejercicio 2.13--Una persona con un sueldo de ${sueldo} soles mensual ahorrará en un año ${ahorroAnual} soles. <br> `);

//2.14
let nroDias=3,costoHotelDia=20,costoComidaDia=25;
const otrosGastosDia=100;
let MontoChque=costoHotelDia*nroDias+costoComidaDia*nroDias+otrosGastosDia*nroDias;
document.write(`Ejercicio 2.14--El cheque a emitir por el costo de los ${nroDias} días de estancia será de ${MontoChque} soles. <br> `);

//2.15


//2.19
let ladoCuadrado=5;
let AreaCuadrado=Math.pow(ladoCuadrado,2);
document.write(`Ejercicio 2.19--El área de un cuadrado cuyos lados miden ${ladoCuadrado}, tendrá un área de ${AreaCuadrado} metros cuadrado. <br> `);

//2.20
let nota_1=14,nota_2=15, nota_3=20;
const pondeNota_1=0.25,pondeNota_2=0.25,pondeNota_3=0.5;
let promedio=0;
promedio=(nota_1*pondeNota_1+nota_2*pondeNota_2+nota_3*pondeNota_3)/3;
document.write(`Ejercicio 2.20--Las notas ${nota_1}, ${nota_2} y ${nota_3} tienen un promedio de : ${promedio} . <br> `);

//2.21
let edadd=2;
let meses=0, semanas=0, dias=0, horas=0;
meses=12*edadd;
semanas=52*edadd;
dias=366*edadd;
horas=8784*edadd;
document.write(`Ejercicio 2.21--Una persona con ${edadd} años de edad, tiene un equivalente de ${meses} meses, ${semanas} semanas, ${dias} días y ${horas} horas <br>`)


//2.22
//Es el mismo ejerccio que el 2.9

//2.23
let DiasEnHotel=5, costoPorDia=35;
let costoHotel;
costoHotel=DiasEnHotel*costoHotelDia;
document.write(`Ejercicio 2.23--Por una estancia de ${DiasEnHotel} días con costo por día de ${costoPorDia}, el hotel cobrará un monto de ${costoHotel} soles <br> `);
