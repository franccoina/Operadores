//Tipos de datos

let var1 = 21
let var2 = "21"
let var3 = "Hola"
let var4 = true
let var5 = null
let var6 = undefined
let var7 = [1,2,3]
let var8 = {1:'Ana',2:'Xavi'}
let var9 = function () {
    console.log("Hola mundo")}

console.group("Tipos de variables")
console.log("var 1: ", var1, "es,", typeof var1)
console.log("var 2: ", var2, "es,", typeof var2)
console.log("var 3: ", var3, "es,", typeof var3)
console.log("var 4: ", var4, "es,", typeof var4)
console.log("var 5: ", var5, "es,", typeof var5)
console.log("var 6: ", var6, "es,", typeof var6)
console.log("var 7: ", var7, "es,", typeof var7)
console.log("var 8: ", var8, "es,", typeof var8)
console.log("var 9: ", var9, "es,", typeof var9)
console.groupEnd()
console.log("")

//Operadores aritméticos

let num1 = 6
let num2 = 3

let sum = num1 + num2
let resta = num1 - num2
let multiplicacion = num1 * num2

let division = num1 / num2
let potencia = num1 ** num2
let mod = num1 % num2
//Operacion Abreviada: num1(operador)=num2

console.group("Operadores aritméticos")
console.warn(num1,num2)
console.log("suma: ", sum)
console.log("resta: ", resta)
console.log("multiplicación: ", multiplicacion)
console.log("división: ", division)
console.log("potencia: ", potencia)
console.log("módulo: ", mod)
console.groupEnd()
console.log("")

//Operadores incremento y decremento

let numParaIncremento = 5
let numParaDecremento = 5

console.group("Operadores incremento y decremento")
console.log("inicio incremento: ", numParaIncremento)
console.log("inicio decremento: ", numParaDecremento)
console.log("")

numParaIncremento++     //6
numParaIncremento++     //7
numParaIncremento+=5    //12

numParaDecremento--     //4
numParaDecremento--     //3
numParaDecremento-=5    //-2

console.log("fin incremento: ", numParaIncremento)
console.log("fin decremento: ", numParaDecremento)
console.groupEnd()
console.log("")

//Operadores comparación

let respuesta = false || true

console.group("Operadores comparación")
console.log("IGUALDAD: ")
console.log(4 == 4)     //true
console.log(4 == "4")   //true
console.log(4 === 4)    //true
console.log(4 === "4")  //false
console.log("")

console.log("DIFERENCIA: ")
console.log(4 != 4)     //false
console.log(4 != "4")   //false
console.log(4 !== 4)    //false
console.log(4 !== "4")  //true
console.log("")

console.log("CUANTITATIVO: ")
console.log(4 <= 5)     //true
console.log(4 >= 5)     //false
console.log(4 < 5)      //true
console.log(4 > 5)      //false
console.groupEnd()
console.log("")

//Operadores lógicos

let si = true
let no = false

console.group("Operadores lógicos")
console.log(si && no)   //false
console.log(si || no)   //true
console.log(! si)       //false
console.log("")
console.groupEnd()
console.log("")