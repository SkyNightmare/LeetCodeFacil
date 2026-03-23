---
title: "Is Subsequence: Verificando subsecuencias paso a paso"
description: "Explicamos cómo determinar si una cadena es subsecuencia de otra en C# con un algoritmo eficiente."
pubDate: "2025-06-13"
heroImage:
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwQF0WNqEnAtlEAYXWWAq4LaKkGWl1UFKkA&s"
  alt: "is subsequence explicacion"
tags: ["strings", "subsequence", "csharp", "algorithms"]
author: "Angel"
difficulty: "Easy"
---

# Is Subsequence, entendiendo el problema

Determinar si una cadena es una **subsecuencia** de otra es un problema clásico para practicar recorrido de cadenas. En este artículo veremos cómo resolverlo eficientemente con C#.

## ¿Qué se nos pide?

Se nos dan dos cadenas:

- `s`: la posible subsecuencia
- `t`: la cadena original

Debemos verificar si es posible obtener `s` eliminando algunos caracteres (o ninguno) de `t`, sin cambiar el orden de los caracteres.

### Ejemplo:

- **Input**: `s = "abc", t = "ahbgdc"`
- **Output**: `true`

Porque podemos eliminar las letras `'h'`, `'g'` y `'d'` de `t` para obtener `"abc"`.

- **Input**: `s = "axc", t = "ahbgdc"`
- **Output**: `false`

No hay forma de formar `"axc"` manteniendo el orden.

## Lógica detrás del algoritmo

La clave está en recorrer ambos strings **en orden**. Usaremos un puntero `i` para avanzar sobre `s`. Por cada carácter `c` en `t`, si coincide con el carácter actual de `s`, avanzamos el puntero `i`.

### ¿Por qué funciona?

Porque `s` debe aparecer en `t` **en el mismo orden**. Si encontramos todos los caracteres de `s` en `t` respetando ese orden, entonces `s` es una subsecuencia.

## Código inicial en C#:

```csharp
public class Solution {
    public bool IsSubsequence(string s, string t) {

    }
}
```

## Primer paso:

```csharp
public class Solution {
    public bool IsSubsequence(string s, string t) {
        int i = 0;
        foreach (char c in t) {

        }
    }
}
```

**int i = 0;**
<br> Creamos un índice i que va a recorrer la cadena s.

Empieza en 0, el primer carácter de s.

Se moverá solo si encontramos una coincidencia en **t**.

**foreach (char c in t)**
<br>Aquí comenzamos a recorrer cada carácter c en la cadena t, de izquierda a derecha.

Este bucle nos permite inspeccionar uno a uno todos los caracteres de t.

## Segundo Paso:

```csharp
public class Solution {
    public bool IsSubsequence(string s, string t) {
        int i = 0;
        foreach (char c in t) {
            if (i < s.Length && s[i] == c)
                i++;
        }
        return i == s.Length;
    }
}
```

**if (i < s.Length && s[i] == c)**
<br> Esto es el corazón del algoritmo.

- `i < s.Length`: verificamos que aún queden letras en s por verificar.

- `s[i] == c`: comprobamos si el carácter actual de t (c) es igual al carácter de s que estamos buscando (s[i]).

`i++;`
Avanzamos el índice i para buscar la siguiente letra de s.

`return i == s.Length;`

Cuando termina el bucle:

- Si **i == s.Length**, significa que encontramos todas las letras de s en orden dentro de t.

- Si no, entonces faltó alguna letra y devolvemos false.

## Conclusión:

Este algoritmo es eficiente, sencillo y bueno para comprender cómo recorrer dos strings en sincronía y tambien para resolver problemas de cadenas y patrones.
