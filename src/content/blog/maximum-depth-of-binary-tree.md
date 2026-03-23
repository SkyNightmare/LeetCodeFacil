---
title: "Maximum Depth of Binary Tree: Explorando la profundidad máxima en C#"
description: "Descubre cómo calcular la profundidad máxima de un binary tree utilizando recursión en C#."
pubDate: "2025-07-05"
heroImage:
  src: "https://i.ytimg.com/vi/p-eMCRpvbIY/maxresdefault.jpg"
  alt: "diagrama de un árbol binario"
tags: ["binary tree", "recursion", "csharp", "algorithms"]
author: "Angel"
difficulty: "Easy"
---

# Qué tan profundo es el binary tree? Entendiendo el problema

Este problema es ideal para aprender recursión y en esta ocasion lo resolveremos de dicha manera.

## Que nos piden?

Nos dan la raíz de un binary tree y queremos saber cuántos niveles tiene en total.  
Es decir, desde la raíz hasta la hoja más profunda, ¿cuántos nodes hay?

### Ejemplo visual:

![Árbol binario de ejemplo](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

La profundidad máxima aquí es `3`, porque el camino más largo desde la raíz(root) (`3`) hasta una hoja recorre tres nodos: `3 → 20 → 7`.

## Enfoque para solucionarlo: recursión

La solución consiste en recorrer el binary tree de manera recursiva.  
Para cada nodo:

1. Calculamos la profundidad máxima del subárbol izquierdo(root.left).
2. Calculamos la profundidad máxima del subárbol derecho(root.right).
3. Sumamos 1 por el nodo actual.

### Caso base

Si el nodo es `null`, retornamos `0`. Esto significa que llegamos al final de una rama.

## Implementación en C#

```csharp
public class Solution
{
    public int MaxDepth(TreeNode root)
    {

    }
}
```

Este es nuestro codigo inicial, el cual comenzaremos haciendo el caso base antes mencionado.

## Primer paso:

```csharp
public class Solution
{
    public int MaxDepth(TreeNode root)
    {
        if (root == null)
        {
            return 0;
        }

    }
}
```

**if (root == null)** <br>
Si nuestro root es null significa que hemos alcanzado una hoja. La profundidad aquí es 0.

## Segundo paso:

```csharp
public class Solution
{
    public int MaxDepth(TreeNode root)
    {
        if (root == null)
        {
            return 0;
        }

        var leftMaxDepth = MaxDepth(root.left);
        var rightMaxDepth = MaxDepth(root.right);

        return Math.Max(leftMaxDepth, rightMaxDepth) + 1;
    }
}
```

Creamos dos **var** que buscaran calcular cuan profundo es ese subarbol.

**var leftMaxDepth = MaxDepth(root.left);**
Aquí llamamos recursivamente a la misma función, pero pasándole el subárbol izquierdo del node actual. Esta línea se encarga de calcular cuán profundo es ese subárbol.

**Ejemplo:** si `root.left` apunta al nodo **9** y **9** no tiene hijos, esta llamada devolverá **1**.

Funcionando de manera similar para **var rightMaxDepth = MaxDepth(root.right);** <br>
<br>
Esta línea calcula la profundidad máxima del subárbol derecho. Va a seguir llamándose recursivamente hasta llegar a las hojas, y desde ahí empezará a sumar hacia arriba.

**Math.Max(leftMaxDepth, rightMaxDepth) + 1**
Escogemos la rama más profunda y le sumamos 1 por el node actual.

## ¿Por qué funciona?

Este algoritmo recorre el binary tree en postorden (primero los hijos, luego el node actual).
Esto asegura que la profundidad se calcula correctamente desde las hojas hacia la raíz.

Cada llamada devuelve la profundidad del subárbol correspondiente y al final la raíz suma 1 al mayor resultado de sus hijos.

## Conclusion:

Es un buen ejercicio para la recursión en estructuras de datos como los binary tree.
Tambien nos enseña a resolver un problema dividiéndolo en partes más simples y luego combinando sus soluciones, una estrategia esencial en algoritmos recursivos.
