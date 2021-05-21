---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Homepage
---

Will this work?`


The following is an excerpt from my Statistics homework:


We want to find
\\( \mathbb{P} \big (\sin ( X ) \in [0, \frac{1}{1000}]\big) \\)
, which we can re-write as
$$
\mathbb{P} \left ( 0 \leq \sin ( X ) \leq \frac{1}{1000} \right)
    =
\int_{0}^{\frac{1}{1000}} f_{\sin(X)}(\tau ) \, d\tau.
$$

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

[this will send you to a post]({%post_url 2021-05-18-welcome-to-jekyll %})
