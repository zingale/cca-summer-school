# Advection Test Problem

Consider the advection equation:

$$a_t + u a_x = 0$$

This requires initial conditions, $a(x, t=0)$, and a boundary condition.  The solution to this is easy to write down:

$$a(x, t) = a(x - ut)$$

any initial profile $a(\xi)$ is simply advected to the right (for $u > 0$) at a velocity $u$.


```{tip}
To test our solver, we would like a problem with a known solution at any future point in time.  For advection, this is easy, since the advection equation preserves any initial function and just moves it to the right (for $u > 0$) at a velocity $u$.  

Therefore, we can use periodic boundary conditions on a domain $[0, 1]$ and advect for a time $1/u$, one period, and we should get back exactly what we started with.
```

## Tophat Initial Conditions

Our first set of initial conditions is a tophat:

$$
a(x, t=0) = \left \{ \begin{array}{ll} 0 & \mbox{if~} x < 1/3 \\
                                       1 & \mbox{if~} 1/3 \le x \ 2/3 \\
                                       0 & \mbox{if~} x \ge 2/3
                                       \end{array} \right .
$$

This is discontinuous, so the derivative $\partial a/\partial x$ is not defined a some regions.  

## Smooth Initial Conditions

Our second set of initial conditions is a Gaussian

$$a(x, t=0) = e^{-10 (x - 1/2)^2}$$

