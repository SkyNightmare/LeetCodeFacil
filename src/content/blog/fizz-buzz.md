---
title: "Fizz Buzz: Explicación simple del clásico de LeetCode"
description: "Se explica Fizz Buzz de una manera sencilla en C# para que los principiantes entiendan cómo resolverlo paso a paso."
pubDate: "2025-05-26"
heroImage:
  src: "https://i.ytimg.com/vi/FeMlW0UuWzw/maxresdefault.jpg"
  alt: "FizzBuzz explicacion"
tags: ["loops", "fizzbuzz", "csharp", "algorithms"]
author: "Angel"
difficulty: "Easy"
featured: true
---

## Fizz Buzz, entendiendo el problema

FizzBuzz es uno de los problemas más comunes para empezar en la programación. Ayuda a practicar condicionales e iteraciones, y es excelente para entender la lógica básica.

## Que nos pide hacer?

Dado un número entero **n**, genera una lista desde 1 hasta **n** (1-indexed), pero con estas reglas:

- Si el número es divisible por **3**, se pone "Fizz".

- Si es divisible por **5**, se pone "Buzz".

- Si es divisible por **ambos**, se pone "FizzBuzz".

- En cualquier otro caso, se pone el número como string.

### Ejemplo:

- Input: n = 5
- Output: ["1","2","Fizz","4","Buzz"]

## Descripcion del algoritmo a usar

- Crear un **<List>** vacía donde vamos a guardar los valores.

- Recorrer desde 1 hasta n, recordar que el problema nos indica (1-indexed) que esto significa que el for comienza en i = 1; y la comparacion sera **<=**.

- En cada número, usar if, else if y else para decidir qué agregar a la lista.

## Codigo Inicial:

```csharp
public class Solution {
    public IList<string> FizzBuzz(int n) {

    }
}
```

Tenemos la función FizzBuzz que recibe un entero n y devuelve una lista de strings. Ahora paso a paso:

## Primer Paso:

```csharp
public class Solution {
    public IList<string> FizzBuzz(int n) {

        List<string> answer = new List<string>();
    }
}
```

Creamos una lista vacía de tipo string llamada answer.

## Segundo Paso:

```csharp
public class Solution {
    public IList<string> FizzBuzz(int n) {

        List<string> answer = new List<string>();

        for(int i = 1; i <= n; i++) {

        }
    }
}
```

## Tercer Paso:

```csharp
public class Solution {
    public IList<string> FizzBuzz(int n) {

        List<string> answer = new List<string>();

        for(int i = 1; i <= n; i++) {
            if(i % 3 == 0 && i % 5 == 0) {
                answer.Add("FizzBuzz");
            }
            else if(i % 3 == 0) {
                answer.Add("Fizz");
            }
            else if(i % 5 == 0) {
                answer.Add("Buzz");
            }
            else {
                answer.Add(i.ToString());
            }
        }

        return answer;
    }
}
```

### Dentro del bucle, usamos condicionales:

- Si i es divisible entre 3 y 5, agregamos "FizzBuzz".

- Si solo es divisible entre 3, agregamos "Fizz".

- Si solo es divisible entre 5, agregamos "Buzz".

- De lo contrario, agregamos el número convertido a string.

## Conclusión:

FizzBuzz parece sencillo, pero es una excelente forma de demostrar que entiendes cómo funcionan los bucles y las condiciones. Además, te prepara para resolver problemas más complejos donde se combinan reglas lógicas.
