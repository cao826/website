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

It works by estimating the fuction at some \\(t_0 + h \\) with a weighted average of samples \\(k_i\\) specified as such: 

* \\( k_1 = f(y^*(t_0) , t_0) \\)
