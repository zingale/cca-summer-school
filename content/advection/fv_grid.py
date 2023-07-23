import numpy as np
import matplotlib.pyplot as plt

class FVGrid:

    def __init__(self, nx, ng=2, xmin=0.0, xmax=1.0):

        self.xmin = xmin
        self.xmax = xmax
        self.ng = ng
        self.nx = nx

        # python is zero-based.  Make easy integers to know where the
        # real data lives
        self.ilo = ng
        self.ihi = ng+nx-1

        # physical coords -- cell-centered, left and right edges
        self.dx = (xmax - xmin)/(nx)
        self.x = xmin + (np.arange(nx+2*ng)-ng+0.5)*self.dx
        self.xl = xmin + (np.arange(nx+2*ng)-ng)*self.dx
        self.xr = xmin + (np.arange(nx+2*ng)-ng+1.0)*self.dx

        # storage for the solution
        self.a = self.scratch_array()
        self.ainit = self.scratch_array()

    def __str__(self):
        return f"nx={self.nx}, ng={self.ng}, xmin={self.xmin}, xmax={self.xmax}"

    def __repr__(self):
        return f"FVGrid({self.nx}, ng={self.ng}, xmin={self.xmin}, xmax={self.xmax})"

    def scratch_array(self):
        """ return a scratch array dimensioned for our grid """
        return np.zeros((self.nx+2*self.ng), dtype=np.float64)

    def fill_BCs(self, atmp):
        """ fill all ghostcells with periodic boundary conditions """

        # left boundary
        for n in range(self.ng):
            atmp[self.ilo-1-n] = atmp[self.ihi-n]

        # right boundary
        for n in range(self.ng):
            atmp[self.ihi+1+n] = atmp[self.ilo+n]

    def norm(self, e):
        """ return the norm of quantity e which lives on the grid """
        if not len(e) == (2*self.ng + self.nx):
            return None

        return np.sqrt(self.dx*np.sum(e[self.ilo:self.ihi+1]**2))

    def plot(self):
        fig = plt.figure()
        ax = fig.add_subplot(111)

        ax.plot(self.x, self.ainit, label="initial conditions")
        ax.plot(self.x, self.a)
        ax.legend()
        return fig
