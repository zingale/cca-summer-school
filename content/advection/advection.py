import numpy as np

from fv_grid import FVGrid


def tophat(g):
    """Tophat initial conditions"""
    g.a[:] = 0.0
    g.a[np.logical_and(g.x >= 1./3, g.x <= 2./3.)] = 1.0


def gaussian(g):
    """Gaussian initial conditions"""
    g.a[:] = np.exp(-40.0*(g.x - 0.5)**2)


def advection(nx, u, C, num_periods=1, init_cond=None):
    """first order finite-volume advection"""

    # create the grid
    g = FVGrid(nx, ng=1)

    # compute the stop time
    t_period = (g.xmax - g.xmin) / np.abs(u)
    tmax = num_periods * t_period

    # setup the initial conditions and store them for later
    # plotting
    init_cond(g)
    g.ainit[:] = g.a[:]

    # compute the timestep
    dt = C * g.dx / np.abs(u)

    # evolution loop
    t = 0.0
    while t < tmax:
        if t + dt > tmax:
            dt = tmax - t

        g.fill_BCs(g.a)

        # get the interface states -- just piecewise constant -- we need
        # an interface state on each boundary, so for nx zones there are
        # nx + 1 interface states

        aleft = g.scratch_array()
        aleft[g.ilo:g.ihi+2] = g.a[g.ilo-1:g.ihi+1]

        aright = g.scratch_array()
        aright[g.ilo:g.ihi+2] = g.a[g.ilo:g.ihi+2]

        # solve the Riemann problem -- just upwinding
        aint = np.where(u > 0, aleft, aright)

        # compute the fluxes
        flux = u * aint

        # conservative update
        g.a[g.ilo:g.ihi+1] += -dt/g.dx * (flux[g.ilo+1:g.ihi+2] - flux[g.ilo:g.ihi+1])

        t += dt

    return g
