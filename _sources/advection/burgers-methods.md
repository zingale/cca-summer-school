# Solving Burger's equation

We are now in a position to modify our advection solver to do Burgers' equation.

## Boundary conditions

For the problems we are going to consider, we want *outflow* boundary conditions.  These
have the property that the ghost cells simply copy the value just inside the domain, so
for the left boundary, we would do:

$$u_{\mathrm{lo}-1} = u_{\mathrm{lo}}$$
$$u_{\mathrm{lo}-2} = u_{\mathrm{lo}}$$

and similar for the right boundary.

This is the only change needed to the `FVGrid` class (along with renaming the
data array `u` instead of `a`).

## Interface states and fluxes

We get the interface state by reconstructing $u$ to each interface,
getting left and right states and then solve the Riemann problem. Once we have the interface state, $u_{i+1/2}$, we can compute the flux:

$$F_{i+1/2} = \frac{1}{2} u_{i+1/2}^2$$

and then the divergence of the fluxes:

$$-\frac{1}{\Delta x} (F_{i+1/2} - F_{i-1/2}) = -\frac{1}{\Delta x} \left ( \frac{1}{2} u_{i+1/2}^2 - \frac{1}{2} u_{i-1/2}^2 \right )$$

## Main driver

The biggest difference for our main driver between advection and Burgers' equation is
that we need to recompute the timestep each step, since $u$ changes in space and time.

## Test problems

We will do 2 different test problems: a shock and a rarefaction

### Steepening into a shock

Consider the profile:

$$u(x, t=0) = \left \{ \begin{array}{cc} 1 & \mbox{if } x < \frac{1}{3} \\
                                1 + \frac{1}{2} \sin\left (6\pi (x - \frac{1}{3}) \right ) & \mbox{if } \frac{1}{3} \le x < \frac{2}{3} \\
                                1 & \mbox{if } x \ge \frac{2}{3} \end{array} \right .
$$

This velocity is positive everywhere, but not uniform.
This places a single wavelength of a sine wave in the middle of third of our domain.  As time evolves, the higher velocity will steepen into a shock.

### Rarefaction

Now consider the profile:

$$u(x, t=0) = \left \{ \begin{array}{cc} 1 & \mbox{if } x < \frac{1}{2} \\
                                2 & \mbox{if } x \ge \frac{1}{2} \end{array} \right .
$$

This again is positive everywhere, but the velocity in the righthalf of the domain is larger, so it will spread out, creating a rarefaction to connect the left and right states.

## Measuring the shock speed

Finally, let's consider a simple shock:

$$u(x, t=0) = \left \{ \begin{array}{cc} 2 & \mbox{if } x < \frac{1}{2} \\
                                1 & \mbox{if } x \ge \frac{1}{2} \end{array} \right .
$$

This will immediate create a shock moving to the right.  We know
from the jump conditions that the shock speed should be:

$$S = \frac{1}{2} (u_l + u_r) = \frac{3}{2}$$

for this case.  

Run this problem for a time $T = 0.2$ and measure the shock speed
by estimating the position of the discontinuity at two points in time (like $t = 0.1$ and $t = 0.2$) and differencing.



