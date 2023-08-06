# Different Limiters

The minmod limiter is very severe.  Let's try a different slope limiter.  

A slightly better
limiter considers a central difference along with each of the one-sided differences when
finding the slope&mdash;this is the *monotonized-center limiter* (or MC limiter):

We start by defining the test for extrema:

$$\xi = (a_{i+1} - a_i) \cdot (a_i - a_{i-1})$$

and then compute the slope as:

$$
\left . \Delta a\right |_i =
 \left \{
\begin{array}{ll}
\min \left \{ \frac{1}{2}| a_{i+1} - a_{i-1} |,
              2 | a_{i+1} - a_i |,
              2 | a_{i} - a_{i-1} |
      \right \}  \mathrm{sign}(a_{i+1} - a_{i-1}) &  \xi > 0 \\
0 & \mathit{otherwise}
\end{array}\right .
$$

```{admonition} Exercise
Modify the advection code to use this limiter and compare how well it does on our test problems to the minmod case.
```
