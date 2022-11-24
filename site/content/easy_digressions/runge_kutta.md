---
title: "Implementing 4th Order Runge-Kutta Algorithm in Different Languages"
date: 2022-11-20T06:48:35-08:00
draft: true
---
<script src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.js"></script>
<script type="text/javascript"
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

\\(f e = mc^2 \\) is some inline latex

$$
e = mc^2
$$
is display math

$$
\begin{align}
 e &= mc^2 \\\
 &= e * m * m 
\end{align}
$$

## Introduction

I imagined a world where all I ever worked with was python. And it was so... boring. 
I also just thought it would be fun to try a whole bunch of programming languages so here we are

## The Runge-Kutta Method

Runge Kutta is a method for solving a problem: finding a solution to a first order differential equation of the form
$$
\frac{dy}{dt} = \dot{y} = f ( y , t ).
$$

It works by computing four different estimates for the slope, \\(\\{k_i\\}\\) where

$$
\\begin{align}
k_1 &= f(\hat{y}(t_0) , t_0) \\\
k_2 &= f\\left (\hat{y}(t_0) + \frac{k_1 h}{2} , t_o + \frac{h}{2} \\right)\\\
k_3 &= f\\left (\hat{y}(t_0) + \frac{k_2 h}{2} , t_o + \frac{h}{2} \\right)\\\
k_4 &= f\\left (\hat{y}(t_0) + k_3 h , t_o + h \\right)
\\end{align}
$$

which we use to approximate the solution at \\(t_0 + h \\) for some presumably small \\( h \\) as
$$
\hat{y} ( t_0 + h ) = \hat{y} (t_0) + h \\left (\frac{k_1 + 2k_2 + 2k_3 + k4}{6} \\right )
$$

Runge Kutta really served as a simple but not trivial algorithm to implement, just to get a flavor of how to compute in each of the languages. 
If you want more information about Runge-Kutta from a conceptual standpoint, consults x,y,z.

## Python version

I started with python becuase I know python the best. 
It also allowed me to think about just the design pattern instead of how to get the language to do what I need it to.

Here is the first design pattern I wrote. 
It should be pretty easy to convince yourself that it is not a very good design.
```python

for i in range(24):
    print(i)

```
<script src="https://gist.github.com/cao826/b8407ae2a4ec6f5776194b9bf1af7a8f.js"></script>
