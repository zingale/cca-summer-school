# Non-conservation?

Suppose instead of solving the total energy equation in the Euler
solver, you instead discretized the internal energy evolution
equation:

$$\frac{\partial (\rho e)}{\partial t} + \frac{\partial (\rho e u)}{\partial x} + p \frac{\partial u}{\partial x} = 0$$

You can compute the flux and the $p \partial u/\partial x$ term using the solution from the Riemann problem as:

$$p_i \frac{u_{i+1/2} - u_{i-1/2}}{\Delta x}$$

Note that the pressure here is the cell-center (average) pressure.

Code this up and run the Sod problem -- how well do you agree with the exact solution?
