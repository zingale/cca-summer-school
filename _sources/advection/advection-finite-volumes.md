# Finite-Volume Discretization

Ultimately we are interested in conservation laws, so we want a method
that respects conservation.  We'll look at this with advection first.

Here we see 3 different types of grids:

![discretization types](grids.png)

The first 2 are *finite-difference* grids&mdash;the data is
represented at a specific point in the domain.  The two differ in that
the second case is a cell-centered finite-difference grid.  In this
case, there is not a point on the physical boundaries, while with the
first example (what we were using previously), there is a data point
on each boundary.  For the cell-centered case, we typically talk about
dividing the data into cells or zones and the data living at the
center of the zone.

The last example is a *finite-volume* grid.  Here, we don't think of
the data living at a specific point, but instead we keep track of the
total amount of a quantity (or its average) in a volume.  This is
represented above as the shaded region inside our zone.

```{tip}
We often use the terms _zone_, _cell_, and _volume_ interchangeably.
```

```{note}
We use half-integer indices to denote the location of the boundaries of
a volume, so:

$$x_{i-1/2} = x_i - \frac{\Delta x}{2}$$

and the volume represented by $i$ extends from $[x_{i-1/2}, x_{i+1/2}]$.
```

## Cell-averages

Imagine we have a function $f(x)$ that we wish to represent on our grid, using a finite-volume discretization.

![finite-volume grid](fv_grid.png)

We can define the average of $f(x)$ in a zone that goes from
$x_{i-1/2}$ to $x_{i+1/2}$ as:

$$\langle f\rangle_i = \frac{1}{\Delta x} \int_{x_{i-1/2}}^{x_{i+1/2}}f(x) dx$$

We use the angle brackets to indicate that this is an average, and use
an integer index, $i$, to indicate that this data lives in zone $i$.

Now consider our linear advection equation,

$$\frac{\partial a}{\partial t} = -u\frac{\partial a}{\partial x}$$

written in conservative form:

$$\frac{\partial a}{\partial t} = -\frac{\partial F(a)}{\partial x}$$

where $F(a) = ua$ is the flux.

Let's average (integrate) this equation over a zone (from $[x_{i-1/2},
x_{i+1/2}]$):

$$\frac{1}{\Delta x} \int_{x_{i-1/2}}^{x_{i+1/2}} \frac{\partial a}{\partial t} dx =
   -\frac{1}{\Delta x} \int_{x_{i-1/2}}^{x_{i+1/2}} \frac{\partial F}{\partial x} dx$$

we can recognize the left is the time-derivative of the average of $a$
and the right, via the divergence theorem is just the flux different
through the boundary of the zone:

$$\frac{\partial}{\partial t} \langle a\rangle_i = -\frac{1}{\Delta x}
   \left [ F_{i+1/2} - F_{i-1/2} \right ]$$

Here, $F_{i-1/2}$ indicates the flux moving through the interface at location $x_{i-1/2}$.

```{note}
Finite-volume method are conservative because the flux leaving one volume enters
the adjacent zone.

For example, in the updates for zones $i-1$ and $i$, we have:

$$\frac{\partial}{\partial t} \langle a\rangle_{i-1} = -\frac{1}{\Delta x}
   \left [ F_{i-1/2} - F_{i-3/2} \right ]$$

$$\frac{\partial}{\partial t} \langle a\rangle_i = -\frac{1}{\Delta x}
   \left [ F_{i+1/2} - F_{i-1/2} \right ]$$

So any amount of $\langle a\rangle_{i-1}$ that leaves zone $i-1$ through the right interface is gained
by $\langle a\rangle_i$ by that same flux entering through its left interface.  This is an
example of a [telescoping sum](https://en.wikipedia.org/wiki/Telescoping_series).
```

