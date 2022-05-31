//270 personas, mayores de 18 y menores de 40,solicita cuanto menores de 21, cuantas mayores
//de 21 y cuantas personas en total

let totalPersonas: number[] = new Array(270);
let indice: number;
// let personas : number;
let menores: number = 0;
let mayores: number = 0;

//presento la función random para que ingrese los valores aleatorios  que luego seran definidos los minimos y los maximos
function personasRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
for (indice = 0; indice < 270; indice++) {
  totalPersonas[indice] = personasRandom(19, 40);
  if (totalPersonas[indice] >= 18 && totalPersonas[indice] <= 21) {
    menores++;
  } else if (totalPersonas[indice] > 21 && totalPersonas[indice] <= 40) {
    mayores++;
  }
}
console.log("El numero de personas menores de 21 es " + menores);
console.log("El numero de personas mayores de 21 es " + mayores);
console.log("El numero total de personas es", menores + mayores);
