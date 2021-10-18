---
layout: post
title: Content Coming Soon(ish)
---

## Website Re-designed
I recently wrapped up a redesign of the site. 
The previous site had no responsiveness, and it also had some design choices I wanted to change. 
The effort is now going to be on posting some data visualization stuff, probably related to healthcare IT, data science applications to healthcare, etc. 

The following is an excerpt from my Statistics homework:
We want to find
<span id="mathjax-inlinemath-example">
\\( \mathbb{P} \big (\sin ( X ) \in [0, \frac{1}{1000}]\big) \\)
, which we can re-write as
\\(
\mathbb{P} \left ( 0 \leq \sin ( X ) \leq \frac{1}{1000} \right)
    =
\int_{0}^{\frac{1}{1000}} f_{\sin(X)}(\tau ) \, d\tau.
\\)
</span>
<div id="mathjax-displaymath-example">
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
</div>
