# Sedov Explosion and Spherical Symmetry

We solved the equations of hydrodynamics in 1-d Cartesian coordinates.
If we want to model something that is spherically symmetric, we can do
1-d spherical coordinates.

In 1-d spherical coordinates, the equations of hydrodynamics are:

$$
\begin{align*}
\frac{\partial \rho}{\partial t} + \frac{1}{r^2} \frac{\partial (r^2 \rho u)}{\partial r} &= 0 \\
\frac{\partial (\rho u)}{\partial t} + \frac{1}{r^2} \frac{\partial (r^2 \rho u^2)}{\partial r} + \frac{\partial p}{\partial r} &= 0 \\
\frac{\partial (\rho E)}{\partial t} + \frac{1}{r^2} \frac{\partial }{\partial r} \left [ r^2 (\rho E + p) u \right ] &= 0
\end{align*}
$$

The main difference is that the divergence has area and volume terms now.

A good problem to try with this is the Sedov blast wave explosion.  In
this problem, you put a lot of energy into a point at the center (the
origin of our spherical coordinates) and watch a spherical blast wave
move outward.  There is an analytic solution for a gamma-law gas that
can be compared to.

To solve this with the method-of-lines approach, we would need to:

1. Add the $r$ terms to the conservative update.

2. Implement reflecting boundary conditions at the origin of coordinates.

   Reflecting boundary conditions mean that each zone in the ghost
   cells has the same value as the corresponding zone in the interior
   (e.g., same distance away from the boundary).  But for the
   velocity, we switch the sign, such that the velocity moving toward
   the interface will go to zero.

   This would look like:

   $$\begin{align*}
      \rho_{\mathrm{lo}-1} &= \rho_{\mathrm{lo}} \\
      \rho_{\mathrm{lo}-2} &= \rho_{\mathrm{lo+1}} \\
   \end{align*}$$

   $$\begin{align*}
      (\rho u)_{\mathrm{lo}-1} &= -(\rho u)_{\mathrm{lo}} \\
      (\rho u)_{\mathrm{lo}-2} &= -(\rho u)_{\mathrm{lo+1}} \\
   \end{align*}$$

   $$\begin{align*}
      (\rho E)_{\mathrm{lo}-1} &= (\rho E)_{\mathrm{lo}} \\
      (\rho E)_{\mathrm{lo}-2} &= (\rho E)_{\mathrm{lo+1}} \\
   \end{align*}$$


3. Setup the Sedov problem (I give a common implementation of the initial conditions below)
   and run and compare to the exact solution.

   For the initial conditions, it is common to specify an initial radius of the explosion, $r_0$.  Then
   initialize the pressure as:

   $$p = \left \{ \begin{array}{cc} p_\mathrm{expl} & r \le r_0 \\
                                    p_\mathrm{ambient} & r > r_0 \end{array} \right . $$

   with

   $$p_\mathrm{ambient} = 10^{-5}$$

   and

   $$p_\mathrm{expl} = (\gamma -1) \frac{E_\mathrm{Sedov}}{(4/3) \pi r_0^3}$$

   and $E_\mathrm{Sedov} = 1$ is the initial explosion energy.  This
   formulation finds the pressure corresponding to spreading that
   energy over a sphere of radius $r_0$.

   The initial velocity is set to 0.0.

   The density everywhere is 1.0.

   Here's the analytic solution for a case with $\gamma = 1.4$:
   {download}`spherical_sedov.txt`
