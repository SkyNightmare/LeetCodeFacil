---
title: "Reverse Linked List: Invirtiendo una lista enlazada paso a paso"
description: "Se explica cómo invertir una lista enlazada en C# utilizando Linked List."
pubDate: "2025-05-31"
heroImage:
  src: "https://i.ytimg.com/vi/9eZF9h_MPHk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCdR7BMrcuwEgAr3rNVsYGKxm-9YQ"
  alt: "reverse linked list explicacion"
tags: ["linked-list", "reverse", "csharp", "algorithms"]
author: "Angel"
difficulty: "Easy"
featured: true
---

# Reverse Linked List, entendiendo el problema

Invertir una lista enlazada es uno de los ejercicios más importantes para dominar estructuras dinámicas. En este artículo explicaremos cómo hacerlo de forma iterativa con C#.

## ¿Qué se nos pide?

Se nos da la **cabeza** de un Linked List (head) y debemos invertir la dirección de todos los nodos, de forma que el último nodo se convierta en el nuevo inicio.

### Ejemplo:

- **Input**: `1 -> 2 -> 3 -> 4 -> 5`
- **Output**: `5 -> 4 -> 3 -> 2 -> 1 `

Esto significa que debemos cambiar los punteros **.next** de cada nodo para que apunten hacia el anterior.

## Lógica detrás del algoritmo

Utilizaremos tres **Linked List**:

- **curr**: el nodo actual que estamos procesando.

- **prev**: el nodo anterior (inicia en null).

- **next**: para guardar el próximo nodo y no perder la conexión.

La idea es ir moviendo cada nodo y redirigir su _.next_ hacia el nodo anterior.

## Código inicial en C#:

```csharp
public class Solution {
    public ListNode ReverseList(ListNode head) {

    }
}
```

## Primer paso:

Creamos tres Linked List:

**curr** comienza desde **head**.

**prev** es null porque al final el último nodo apuntará a null.

**next** se usará dentro del bucle para guardar el siguiente nodo.

```csharp
public class Solution {
    public ListNode ReverseList(ListNode head) {

        ListNode curr = head;
        ListNode prev = null;
        ListNode next = null;
    }
}
```

## Segundo paso:

Creamos un while que se ejecuta mientras curr no sea null. Dentro del bucle, hacemos lo siguiente en orden:

1. Guardamos el siguiente nodo en next.

2. Cambiamos curr.next para que apunte al nodo anterior (prev).

3. Avanzamos prev al nodo actual.

4. Avanzamos curr al siguiente nodo (next).

```csharp
public class Solution {
    public ListNode ReverseList(ListNode head) {

        ListNode curr = head;
        ListNode prev = null;
        ListNode next = null;

        while( curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}
```

### ¿Por qué return prev?

Cuando el bucle termina, curr ya es null, y prev está en el último nodo procesado, que ahora es la nueva cabeza de la lista invertida.

## Conclusión

Este problema es una excelente forma de entender cómo manipular estructuras dinámicas con Linked List. Al realizar este problema tendras mas idea de como es que funciona todo lo relacionado a Linked List.
