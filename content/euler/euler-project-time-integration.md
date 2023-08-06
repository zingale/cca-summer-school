# Time Integration

We've been using a simple 2nd-order Runge-Kutta / midpoint method 
for the time integration.  Instead try something higher-order, for 
example:

* The [classic 4th order Runge-Kutta method](https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods#The_Runge%E2%80%93Kutta_method)

* A [total variation diminishing RK method](https://www.ams.org/journals/mcom/1998-67-221/S0025-5718-98-00913-2/S0025-5718-98-00913-2.pdf).  These are very popular with hydro.

Whichever method you choose, compare the solution you get to the 2nd order method.

Ideally, do the convergence test exercise first, and then see how the time-integration
method alone affects convergence.
