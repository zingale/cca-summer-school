# Basic Driver

All of the numerical methods for advection and hydro follow the same
general form, so the basic driver to evolve for a time $T$ is:

* setup the grid

* set initial conditions

* evolve while $t < T$:

  * fill boundary conditions
  * compute the timestep
  * evolve for a single timestep
    * construct interface states
    * evaluate fluxes
    * do conservative update
  * t = t + dt
  * output

## Controlling the Timestep

Recall that for stability, explicit methods are limited such that the information cannot
move more than one zone per timestep---this is the [Courant-Friedrichs-Lewy condition](https://en.wikipedia.org/wiki/Courant%E2%80%93Friedrichs%E2%80%93Lewy_condition).  

For advection, we
can express this as:

$$\Delta t = C \frac{\Delta x}{|u|}$$

where $C \le 1$ is a dimensional number called the *Courant number*.

When writting an advection solver, the user will typically specify the number of zones, which
gives $\Delta x$, and the Courant number, and then we compute the timestep.

```{note}
It might be tempting to just set $C = 1$, but in practice we usually do something like $C = 0.8$.
The hydrodynamics equations are 
non-linear and stability analysis is done on the linear equations, so we need to allow ourselves
a little headroom.
```
