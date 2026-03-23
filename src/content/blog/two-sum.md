---
title: "Two Sum: Explicacion simple del primer leetcode"
description: "Se explica Two Sum de una manera sencilla en C# para tener el concepto de lo que se necesita para entenderlo."
pubDate: "2025-05-22"
heroImage:
  src: "https://i.ytimg.com/vi/69RXb8yeDRw/maxresdefault.jpg"
  alt: "Two sum explicacion"
tags: ["arrays", "two-sum", "csharp", "algorithms"]
author: "Angel"
difficulty: "Easy"
featured: true
---

# Two Sum, entendiendo el problema

Consiste en encontrar dos números dentro de un arreglo que sumen un valor objetivo específico. En este blog mostraremos la manera brute force para encontrarlo. Nos enfocaremos en lo sencillo.

## El Brute Force como tecnica

Existen muchas variantes para resolver esto, abundaremos en Brute Force que es una tecnica sencilla, que hace?:

- Recorre todos los pares posibles del arreglo con dos bucles anidados.
- Para cada par (i, j) verifica si la suma es igual al objetivo.
- No usa ninguna estructura adicional para optimizar la búsqueda.

Complejidad: O(n²) por el doble ciclo.

## Descripcion de Two Sum

Te proveen un arreglo de numeros enteros (int) llamado <b>nums</b> y un <b>int</b> llamado target. Target tendra un numero, ese numero es el que debemos buscar en los indices del arreglo.
Se informa que cada entrada tendra una solucion y no puedes usar el mismo elemento dos veces.
<br> Ejemplo:<br>

- Input: nums = [2,7,11,15], target = 9 <br>
  Aqui se nos indica el arreglo con sus valores. Ese numero 9 es el que buscaremos sumando los indices del arreglo.

- Output: [0,1] <br>
  De output nos mostrara cuales son esos dos valores
  Usando este ejemplo 2+7 es 9. Seria el indice 0,1

### Codigo inicial en C#

```csharp
public class Solution {
    public int[] TwoSum(int[] nums, int target) {

    }
}
```

Vemos que tenemos TwoSum que contiene el arreglo y el int target con esto en cuenta podemos seguir para el primer step:

### Primer paso:

Recorremos el arreglo usando un <b>for</b>. De esta mientras que <b>i</b> sea menor a <b>nums.Length;</b> le sumaras 1 a la i por cada iteracion.

```csharp
public class Solution {
    public int[] TwoSum(int[] nums, int target) {

        for(int i = 0; i<nums.Length; i++) {

        }
    }
}
```

### Segundo Paso:

Como necesitamos dos indices que se sumen para verificar si es el numero que tiene target. Hacemos otro <b>for</b> para recorrer el proximo indice en el arreglo. Esto se logra sumandole <b>+1</b> al segundo <b>for</b>.

```csharp
public class Solution {
    public int[] TwoSum(int[] nums, int target) {

        for(int i = 0; i<nums.Length; i++) {
          for(int j = i+1; j<nums.Length; j++){

          }

        }
    }
}
```

### Tercer Paso:

Finalmente ya con ambos <b>for</b> listos, creamos el condicional que nos retornara los indices en caso de ser sumados y ser igual a <b>target</b>. <br>
<code>return new int[] {i,j}; </code> esto nos guardara un nuevo arreglo tipo int con los dos indices. <br>
En caso de no conseguir ninguno, fuera de todos los for: <code> return nums; </code> mostrara el arreglo.

```csharp
public class Solution {
    public int[] TwoSum(int[] nums, int target) {

        for(int i = 0; i<nums.Length; i++) {
            for(int j = i+1; j<nums.Length; j++){
                if(target == nums[i] + nums[j]) {
                    return new int[] {i,j};
                }
            }
        }
        return nums;
    }
}
```

## Conclusion

Es un problema altamente conocido en el mundo de la programacion. Sirve para tener una buena base de cosas como iterar con los for para moverse entre los indices.
