---
layout: "post"
title: "Math Dummy Post 1"
date: 2020-1-4
categories: ["mathematics", "probability theory"]
permalink: "/math-test-1"
---

## Disclaimer: This is a dummy post

The following is an excerpt from my Statistics homework:


We want to find
\\( \mathbb{P} \big (\sin ( X ) \in [0, \frac{1}{1000}]\big) \\)
, which we can re-write as

$$
\mathbb{P} \left ( 0 \leq \sin ( X ) \leq \frac{1}{1000} \right)
    =
\int_{0}^{\frac{1}{1000}} f_{\sin(X)}(\tau ) \, d\tau.
$$

So it will suffice to find the pdf of our new random variable and perform the integration above. Denote $ \sin ( X ) = Y $ and note that on the set
\\( [0, \frac{1}{1000}] \\),
\\( \sin \\)
is a strictly monotone function. We can then apply the non-linear change of variables formula presented in lecture to get that

$$
\begin{align*}
    f_{Y} ( \tau )
        &=
    \frac{e^{\arcsin(\tau)}}{|\cos( \arcsin(\tau) ) |}\\
        &=
    \frac{e^{\arcsin(\tau)}}
    {\sqrt{\cos^2 ( \arcsin(\tau) ) }} \\
        &=
    \frac{e^{\arcsin(\tau)}}
    {\sqrt{ 1 - \sin^2 ( \arcsin(\tau) ) }}\\
        &=
    \frac{e^{\arcsin(\tau)}}
    {\sqrt{1 - \tau^2}}.
\end{align*}
$$

This is good because

$$
\frac{d}{d \tau } ( \arcsin(\tau) )
=
\frac{1}{\sqrt{1 - \tau^2}}
$$

and we can use u-substitution (aka change of variables) to integrate:

$$
\begin{align*}
    \int_{0}^{\frac{1}{1000}} \frac{e^{\arcsin(\tau)}}
    {\sqrt{1 - \tau^2}} \, d \tau
        &=
    \int_{0}^{\frac{1}{1000}} e^{-u} \, du \\
        &=
    -e^{-\arcsin(x)} |_{\tau = 0}^{\tau=.001}\\
        &=
    1 - e^{-\arcsin(\tau ) }\\
        &\approx 0.0009995003331251665
\end{align*}
$$
