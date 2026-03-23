---
title: "Middle of the Linked List: Encuentra el nodo del medio"
description: "Explicación en C# de cómo encontrar el nodo del medio en una lista enlazada utilizando dos LinkList."
pubDate: "2025-05-28"
heroImage:
  src: "https://i.ytimg.com/vi/_cl3O4FBZh8/maxresdefault.jpg"
  alt: "middle of the linked list explicacion"
tags: ["linked-list", "middle", "csharp", "algorithms"]
author: "Angel"
difficulty: "Easy"
---

# Middle of the Linked List, entendiendo el problema

Este ejercicio busca encontrar el nodo del medio en una lista enlazada. Es un buen ejemplo para trabajar con listas y aprender sobre el uso de punteros dobles, una técnica muy usada en entrevistas.

## ¿Qué se nos pide?

Se nos da una lista enlazada simple (singly linked list), y debemos retornar el nodo que está justo en el medio.
Si hay dos nodos en el medio (es decir, la longitud es par), se retorna el segundo nodo del medio.

- Ejemplo:

```
Input: 1 -> 2 -> 3 -> 4 -> 5
Output: Nodo con valor 3
```

## Técnica del "slow & fast pointer"

### Esta técnica se basa en dos LinkList:

Esta técnica se basa en dos punteros:

- Uno se mueve de uno en uno (middle)

- El otro se mueve de dos en dos (end)

Cuando el puntero rápido llega al final, el puntero lento estará justo en el medio.

### Código inicial en C#

```csharp
public class Solution {
    public ListNode MiddleNode(ListNode head) {

    }
}

```

### Primer paso:

Creamos dos punteros que inician en la cabeza(head) de la lista:

- **middle** se moverá lentamente (uno en uno).

- **end** se moverá rápido (dos en dos).

```csharp
public class Solution {
   public ListNode MiddleNode(ListNode head) {
       ListNode middle = head;
       ListNode end = head;
   }
}
```

### Segundo paso:

Creamos un bucle while que sigue mientras end y end.next no sean null. Esto evita errores cuando llegamos al final.

```csharp
public class Solution {
    public ListNode MiddleNode(ListNode head) {
        ListNode middle = head;
        ListNode end = head;

        while(end != null && end.next != null){

        }
    }
}
```

### Tercer paso:

Dentro del bucle:

- **middle** avanza 1 posición (middle = middle.next)

- **end** avanza 2 posiciones (end = end.next.next)

Cuando el bucle termine, middle estará en el nodo central.

```csharp
public class Solution {
    public ListNode MiddleNode(ListNode head) {
        ListNode middle = head;
        ListNode end = head;

        while(end != null && end.next != null){
            middle = middle.next;
            end = end.next.next;
        }

        return middle;
    }
}
```

### Conclusión:

Este es un problema muy práctico para entender cómo moverse dentro de una lista enlazada sin necesidad de recorrerla dos veces ni contar su longitud.
La técnica de dos punteros es clave en problemas de listas,
