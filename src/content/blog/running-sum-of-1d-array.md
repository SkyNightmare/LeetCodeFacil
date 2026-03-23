---
title: "Running Sum of 1D Array: Explicando el leetcode 1480"
description: "Cómo entender fácilmente el concepto de Running Sum en C#, aprendiendo sobre arreglos paso a paso."
pubDate: "2025-05-24"
heroImage:
  src: "https://i.ytimg.com/vi/mrVelRxywiM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBCqIq9apjTMfORfaM6rCVIRTh1kA"
  alt: "Running sum explicacion"
tags: ["arrays", "sum", "csharp", "algorithms"]
author: "Angel"
difficulty: "Easy"
---

# Running Sum, entendiendo el siguiente paso

Este problema es perfecto para practicar manipulación de arreglos y entender cómo se pueden acumular valores a través de un loop. Se explicara cómo resolverlo paso a paso, con una técnica muy simple.

## ¿Qué es un Running Sum?

El **Running Sum** (o suma acumulativa) significa que cada elemento del arreglo será la suma de él mismo más todos los elementos anteriores.

<br> Ejemplo:<br>

- Input: `nums = [1, 2, 3, 4]`  
  Aquí comenzamos con un arreglo sencillo.

- Output: `[1, 3, 6, 10]`  
  El nuevo arreglo contiene:
  - `1` (el primero es igual),
  - `1 + 2 = 3`,
  - `1 + 2 + 3 = 6`,
  - `1 + 2 + 3 + 4 = 10`.

## Descripción del problema

Dado un arreglo de enteros, necesitamos transformar ese arreglo para que cada posición contenga la suma acumulativa desde el principio hasta ese punto.

## Codigo inicial en C#

```csharp
public class Solution {
    public int[] RunningSum(int[] nums) {

    }
}
```

Podemos notar que se nos da un arreglo tipo **int** llamado **nums**.

## Primer Paso:

Queremos recorrer el arreglo comenzando desde la posición 1. ¿Por qué no desde el 0? Porque la posición 0 ya es igual a su running sum, no necesita cambio.

```csharp
public class Solution {
    public int[] RunningSum(int[] nums) {
        for(int i = 1; i<nums.Length; i++){

        }

    }
}
```

## Segundo Paso:

Ahora, actualizamos cada posición sumando el valor que tiene el elemento anterior. Esto hace que se acumulen los valores.

```csharp
public class Solution {
    public int[] RunningSum(int[] nums) {
        for(int i = 1; i<nums.Length; i++){
            nums[i] += nums[i-1];
        }
        return nums;
    }
}
```

## Explicación línea por línea:

- `for(int i = 1; i<nums.Length; i++)` Empezamos desde el segundo elemento.

- ` nums[i] += nums[i-1];` Acumulamos el valor actual con el anterior.

- ` return nums;` Devolvemos el arreglo ya transformado.

## Conclusion

Running Sum es uno de los problemas más simples pero útiles para comenzar a trabajar con arreglos y loops en programación. Nos enseña cómo modificar un arreglo en tiempo real, cómo usar índices correctamente, y cómo aplicar lógica acumulativa paso a paso.
