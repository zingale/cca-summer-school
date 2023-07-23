# Basic Driver

All of the numerical methods for advection and hydro follow the same
general form, so the basic driver for our evolution is:

* setup the grid

* set initial conditions

* evolve while $t < T$ and $n < N$ :

  * fill boundary conditions
  * compute the timestep
  * evolve for a single timestep
    * construct interface states
    * do conservative update
  * t = t + dt
  * output
