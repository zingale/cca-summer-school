Search.setIndex({"docnames": ["advection/advection-convergence", "advection/advection-driver", "advection/advection-exercises-characteristic-tracing", "advection/advection-exercises-limiter", "advection/advection-exercises-multid", "advection/advection-exercises-ppm", "advection/advection-finite-volumes", "advection/advection-first-order", "advection/advection-grid-class", "advection/advection-intro", "advection/advection-second-order", "advection/advection-test-problem", "advection/advection-time-update", "advection/burgers", "advection/burgers-methods", "advection/burgers-riemann", "euler/euler", "euler/euler-eigen", "euler/euler-project-convergence", "euler/euler-project-hll", "euler/euler-project-nonconservation", "euler/euler-project-spherical", "euler/euler-project-time-integration", "euler/euler-riemann", "euler/euler-riemann-sampling", "euler/euler-solver", "intro", "overview/using", "overview/why"], "filenames": ["advection/advection-convergence.ipynb", "advection/advection-driver.md", "advection/advection-exercises-characteristic-tracing.md", "advection/advection-exercises-limiter.md", "advection/advection-exercises-multid.md", "advection/advection-exercises-ppm.md", "advection/advection-finite-volumes.md", "advection/advection-first-order.ipynb", "advection/advection-grid-class.ipynb", "advection/advection-intro.md", "advection/advection-second-order.ipynb", "advection/advection-test-problem.md", "advection/advection-time-update.md", "advection/burgers.md", "advection/burgers-methods.md", "advection/burgers-riemann.md", "euler/euler.md", "euler/euler-eigen.ipynb", "euler/euler-project-convergence.md", "euler/euler-project-hll.md", "euler/euler-project-nonconservation.md", "euler/euler-project-spherical.md", "euler/euler-project-time-integration.md", "euler/euler-riemann.ipynb", "euler/euler-riemann-sampling.ipynb", "euler/euler-solver.ipynb", "intro.md", "overview/using.md", "overview/why.md"], "titles": ["Measuring Convergence", "Basic Driver", "Characteristic Tracing", "Different Limiters", "Two-dimensional Advection", "Piecewise Parabolic Reconstruction for Advection", "Finite-Volume Discretization", "Implementing First Order Advection", "A Grid Class and Ghost Cells", "Linear Advection", "Second-order Advection", "Advection Test Problem", "First-Order Accurate Time Update", "Burgers\u2019 Equation", "Solving Burger\u2019s equation", "Burgers\u2019 Riemann Problem", "Euler Equations", "Euler Equations Eigensystem", "Measuring Convergence of our Euler Solver", "HLL Riemann Solver", "Non-conservation?", "Sedov Explosion and Spherical Symmetry", "Time Integration", "Euler Riemann Problem", "Sampling the Riemann Solution", "Second-Order Euler Solver", "Coding Solvers for Fluids", "Using These Notes", "Why Write Your Own Hydro Code?"], "terms": {"In": [0, 4, 5, 6, 8, 9, 10, 13, 16, 21, 23, 24], "order": [0, 2, 5, 13, 17, 18, 22], "see": [0, 2, 6, 7, 8, 10, 13, 15, 16, 18, 22, 23], "whether": [0, 15, 23], "our": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 21, 23, 24, 25], "method": [0, 1, 2, 4, 5, 6, 7, 8, 10, 12, 13, 18, 19, 21, 22, 23, 24, 25, 26, 28], "ar": [0, 1, 2, 4, 5, 6, 7, 8, 10, 12, 13, 14, 16, 17, 21, 22, 23, 24, 25, 26, 27], "work": [0, 8, 10, 18, 23, 25, 28], "design": 0, "we": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28], "need": [0, 1, 4, 5, 7, 8, 10, 12, 14, 15, 16, 21, 23, 24, 25], "abl": [0, 16], "rate": [0, 2], "have": [0, 2, 6, 7, 8, 9, 10, 12, 13, 14, 18, 23, 24, 25, 27, 28], "n": [0, 2, 8, 12, 15, 17, 18, 23, 25], "point": [0, 6, 11, 13, 14, 21], "solut": [0, 5, 8, 9, 10, 11, 13, 16, 18, 19, 20, 21, 22, 25], "so": [0, 1, 5, 6, 7, 10, 11, 12, 13, 14, 16, 17, 18, 23, 24, 25, 27, 28], "defin": [0, 2, 3, 4, 6, 11, 16, 23, 24, 25], "metric": 0, "allow": [0, 1, 5, 8, 10, 16, 23, 27], "u": [0, 1, 2, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21, 23, 24, 25], "quantifi": 0, "error": [0, 2, 18], "ll": [0, 2, 3, 5, 6, 7, 10, 11, 13, 17, 18, 23, 24, 25, 26], "vector": 0, "norm": [0, 8, 10, 18], "l_2": [0, 18], "set": [0, 1, 5, 11, 12, 21, 25], "discret": [0, 2, 16, 20, 28], "data": [0, 2, 5, 6, 8, 10, 14, 25], "phi_i": 0, "phi": [0, 18], "_2": 0, "left": [0, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 18, 21, 23, 24, 25], "delta": [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 13, 14, 15, 16, 20, 25], "x": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 23, 25], "sum_": 0, "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28], "0": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 21, 23, 24, 25], "1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 21, 23, 24, 25], "2": [0, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 20, 21, 23, 24, 25, 27], "right": [0, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 18, 21, 23, 24, 25, 27], "can": [0, 1, 2, 4, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28], "an": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 13, 15, 16, 18, 21, 23, 25, 27, 28], "e_i": 0, "a_i": [0, 2, 3, 4, 5, 10, 25], "mathrm": [0, 3, 5, 10, 14, 15, 21, 24], "exact": [0, 18, 19, 20, 21, 23, 25], "x_i": [0, 6, 10], "all": [0, 1, 5, 7, 8, 15, 16, 18, 23, 24, 25, 28], "domain": [0, 6, 8, 10, 11, 13, 14, 15, 16], "comput": [0, 1, 2, 3, 4, 5, 7, 10, 14, 15, 18, 20, 23, 24, 25, 26, 27], "epsilon": 0, "e": [0, 8, 9, 10, 11, 16, 18, 19, 20, 21, 24, 25, 28], "further": 0, "problem": [0, 2, 3, 4, 5, 7, 13, 16, 18, 19, 20, 21, 24, 27], "after": [0, 25], "period": [0, 7, 8, 11, 18], "know": [0, 8, 12, 14, 18, 23, 24], "just": [0, 1, 2, 6, 7, 10, 11, 12, 13, 14, 16, 23, 24, 25], "initi": [0, 1, 8, 10, 13, 16, 21, 23, 25], "write": [0, 2, 4, 7, 10, 11, 15, 17, 23, 25, 26], "final": [0, 4, 14, 15, 16, 24], "It": [0, 1, 5, 7, 12, 13, 23, 24, 27], "onli": [0, 8, 14, 16, 23, 24, 28], "make": [0, 2, 8, 10, 17, 25, 28], "sens": 0, "discuss": [0, 15, 23, 24, 26], "condit": [0, 1, 8, 10, 13, 15, 21, 24, 25], "themselv": 0, "For": [0, 1, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 21, 23, 24, 25, 27], "top": [0, 13], "hat": [0, 23], "discontinu": [0, 10, 11, 13, 14, 16, 25], "increas": [0, 23], "resolut": [0, 18], "never": 0, "resolv": [0, 12], "step": [0, 5, 13, 14, 25], "good": [0, 18, 19, 21], "assess": [0, 18], "should": [0, 2, 11, 14, 28], "us": [0, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 15, 16, 18, 19, 20, 22, 23, 24, 25, 28], "smooth": [0, 10, 18], "look": [0, 2, 4, 6, 7, 9, 10, 13, 15, 16, 21, 23, 24, 25], "gaussian": [0, 4, 7, 10, 11], "solver": [0, 1, 2, 4, 11, 14, 20, 28], "avail": [0, 28], "modul": [0, 7, 10, 25], "advect": [0, 1, 2, 3, 6, 12, 13, 14, 15, 16, 18, 25, 26], "import": [0, 7, 8, 10, 17, 23, 24, 25], "And": 0, "here": [0, 2, 5, 6, 8, 10, 13, 16, 17, 18, 20, 21, 23, 24, 25, 26], "def": [0, 7, 8, 10, 23, 24, 25], "sine": [0, 14], "g": [0, 7, 8, 10, 17, 18, 21, 24, 25, 28], "5": [0, 5, 7, 8, 10, 21, 23, 24, 25], "np": [0, 7, 8, 10, 23, 24, 25], "sin": [0, 14], "pi": [0, 14, 21], "c": [0, 1, 2, 4, 7, 10, 12, 16, 17, 18, 23, 24, 25], "nx": [0, 7, 8, 10, 25], "128": [0, 7, 10, 18, 25], "init_cond": [0, 7, 10, 25], "fig": [0, 7, 8, 10, 23, 25], "plot": [0, 7, 8, 10, 18, 23, 25], "fvgrid": [0, 7, 8, 10, 14, 25], "class": [0, 5, 10, 14, 23, 24, 25], "ha": [0, 5, 7, 8, 9, 12, 18, 21, 23], "inspect": 0, "print": [0, 10, 23, 24], "getsourc": 0, "self": [0, 8, 23, 24, 25], "return": [0, 7, 8, 10, 17, 23, 24, 25], "quantiti": [0, 6, 8, 13, 16], "which": [0, 1, 5, 8, 10, 12, 13, 16, 17, 23, 24, 25, 27], "live": [0, 6, 8], "grid": [0, 1, 4, 5, 6, 7, 10, 18], "len": [0, 8, 17], "ng": [0, 7, 8, 10, 25], "none": [0, 7, 8, 10, 23, 24, 25], "sqrt": [0, 8, 16, 23, 24, 25], "dx": [0, 4, 6, 7, 8, 10, 13, 15, 25], "sum": [0, 6, 8], "ilo": [0, 7, 8, 10], "ihi": [0, 7, 8, 10], "let": [0, 3, 6, 7, 8, 10, 12, 14, 17, 23, 25, 27], "": [0, 3, 5, 6, 7, 8, 10, 12, 13, 15, 16, 17, 18, 21, 23, 24, 27], "try": [0, 5, 7, 21, 22], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28], "out": [0, 8, 9, 10, 14, 24, 25, 28], "32": [0, 10, 18], "64": [0, 10, 17, 18], "256": [0, 10, 18], "512": [0, 10, 18], "f": [0, 2, 4, 6, 8, 10, 12, 13, 15, 16, 17, 18, 19, 23, 24, 25], "3d": [0, 10], "ainit": [0, 7, 8, 10], "7": [0, 8], "4f": 0, "1396": 0, "0877": 0, "0506": 0, "0275": 0, "0144": 0, "As": [0, 5, 14, 15, 16, 17, 24, 25], "demonstr": 0, "first": [0, 2, 5, 6, 8, 9, 10, 11, 15, 17, 22, 23, 25], "doubl": 0, "number": [0, 1, 2, 7, 25], "cell": [0, 2, 4, 5, 10, 12, 13, 14, 16, 20, 21, 24, 25], "decreas": 0, "almost": [0, 27], "factor": [0, 18], "run": [0, 7, 14, 18, 20, 21, 27], "test": [0, 3, 4, 8, 10, 22, 25, 28], "numer": [1, 25], "hydro": [1, 22, 25], "follow": [1, 5, 9, 10, 15, 18, 24, 25], "same": [1, 4, 6, 8, 10, 13, 15, 16, 21, 23, 25], "gener": [1, 12, 23, 24], "form": [1, 4, 5, 6, 8, 9, 10, 13, 15, 25], "evolv": [1, 10, 14, 15, 23, 25], "time": [1, 2, 6, 7, 10, 11, 13, 14, 15, 19, 23, 24, 25, 27, 28], "t": [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 25, 27, 28], "setup": [1, 7, 10, 21, 25], "while": [1, 6, 7, 10, 23, 25, 28], "fill": [1, 4, 8, 10, 25], "boundari": [1, 4, 6, 7, 8, 11, 21, 25], "singl": [1, 14, 18], "construct": [1, 2, 5, 8, 10, 16, 25], "interfac": [1, 4, 5, 6, 7, 10, 12, 15, 21, 23, 24, 25], "state": [1, 5, 7, 8, 10, 12, 13, 15, 16, 24, 25], "evalu": [1, 2, 5, 12, 24], "flux": [1, 2, 4, 6, 7, 10, 12, 13, 15, 16, 20, 23, 24, 25], "do": [1, 2, 10, 12, 13, 14, 15, 16, 18, 20, 21, 22, 23, 24, 25, 28], "conserv": [1, 2, 4, 6, 7, 9, 10, 13, 15, 18, 21, 24], "updat": [1, 4, 6, 7, 10, 13, 16, 21], "dt": [1, 7, 10, 13, 15, 23, 25], "output": [1, 25], "recal": [1, 2], "stabil": 1, "explicit": [1, 2, 12], "limit": [1, 2, 4, 5, 25], "inform": [1, 5, 12, 13, 15, 16, 17, 23, 25], "cannot": [1, 16, 23, 24], "move": [1, 6, 11, 12, 14, 15, 21, 24, 25], "more": [1, 10, 15, 16, 19, 23, 25, 28], "than": [1, 10], "one": [1, 3, 4, 5, 6, 9, 10, 11, 12, 16, 24, 25], "zone": [1, 2, 5, 6, 7, 8, 10, 18, 21, 25], "per": [1, 2], "courant": 1, "friedrich": 1, "lewi": 1, "express": [1, 9, 12, 15, 16, 23, 24], "frac": [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25], "where": [1, 4, 5, 6, 7, 8, 10, 12, 13, 15, 16, 17, 23, 24, 25, 28], "le": [1, 11, 14, 21, 23], "dimension": [1, 25], "call": [1, 10, 12, 13, 16, 23, 24], "when": [1, 2, 3, 8, 10, 12, 15, 18, 23, 24], "writ": 1, "user": 1, "typic": [1, 6], "specifi": [1, 7, 21], "give": [1, 5, 10, 13, 16, 17, 21, 23, 25, 27, 28], "might": 1, "tempt": 1, "practic": [1, 19], "usual": [1, 2, 25, 28], "someth": [1, 10, 21, 22], "like": [1, 2, 4, 8, 10, 11, 13, 14, 16, 21, 25], "8": [1, 7, 8, 16, 25], "The": [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22, 23, 24, 25, 26, 27, 28], "hydrodynam": [1, 9, 10, 13, 21, 23, 26], "equat": [1, 2, 4, 6, 9, 10, 11, 12, 15, 19, 20, 21, 23, 24, 25, 26, 28], "non": [1, 5, 13, 24], "linear": [1, 4, 5, 6, 13, 16, 26], "analysi": 1, "done": [1, 2, 4, 12, 16, 23, 28], "ourselv": [1, 8], "littl": [1, 7], "headroom": 1, "finit": [2, 4, 8, 13, 16, 18, 25, 26], "volum": [2, 4, 8, 13, 16, 18, 21, 25, 26], "partial": [2, 4, 6, 8, 9, 10, 11, 12, 13, 16, 20, 21, 23, 25], "langl": [2, 4, 6, 10, 12, 13, 25], "rangle_i": [2, 6, 10, 12, 13, 25], "f_": [2, 6, 12, 13, 14, 18, 24, 25], "line": [2, 4, 5, 10, 13, 15, 18, 21, 23, 25, 28], "integr": [2, 5, 6, 10, 13, 15, 16, 23, 25], "now": [2, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 21, 23, 25], "take": [2, 7, 8, 10, 15, 17, 23, 24, 25, 27, 28], "differ": [2, 6, 8, 10, 12, 14, 18, 21, 23, 24, 25, 27], "approach": [2, 10, 13, 21, 25], "refer": [2, 8, 25], "drop": [2, 4, 10, 13], "cdot": [2, 3, 9, 10, 16, 17, 23], "rangl": [2, 4, 10, 12, 13], "what": [2, 6, 10, 11, 12, 15, 17, 18, 25, 28], "had": 2, "did": [2, 4, 10, 25], "accur": [2, 7, 10, 19], "case": [2, 3, 6, 10, 12, 14, 15, 18, 21, 23], "howev": 2, "could": 2, "find": [2, 3, 5, 12, 13, 16, 17, 21, 24, 25, 27], "midpoint": [2, 10, 22], "lefthand": 2, "side": [2, 3, 10, 12, 15, 23, 24, 25], "would": [2, 4, 10, 11, 14, 16, 18, 21, 24], "center": [2, 3, 5, 6, 8, 10, 20, 21, 23, 24, 25], "second": [2, 6, 9, 11, 13], "space": [2, 5, 10, 13, 14, 15, 28], "overal": 2, "_": [2, 4, 8, 12, 16, 17, 21, 23, 25], "a_": [2, 3, 4, 5, 8, 10, 12], "taylor": [2, 10], "expand": [2, 9], "correct": [2, 12, 13, 15, 25], "begin": [2, 3, 5, 9, 10, 11, 12, 14, 15, 16, 17, 21, 23, 24, 25], "eqnarrai": 2, "l": [2, 5, 10, 12, 15, 16, 17, 23, 24, 25], "_i": [2, 3, 10, 16], "mathcal": [2, 10, 12, 15, 23, 25], "o": [2, 10], "ldot": [2, 8], "r": [2, 5, 10, 12, 15, 16, 17, 21, 23, 24, 25], "end": [2, 3, 5, 8, 9, 10, 11, 12, 14, 15, 16, 17, 21, 23, 24, 25], "replac": [2, 23], "approxim": [2, 8, 19, 28], "spatial": 2, "deriv": [2, 6, 8, 11, 13, 26], "term": [2, 6, 9, 10, 16, 17, 20, 21, 25], "slope": [2, 3, 5, 25], "visual": [2, 10, 13, 23], "each": [2, 3, 5, 6, 7, 8, 10, 12, 14, 16, 17, 18, 21, 23, 24, 25, 27], "cfl": [2, 7, 25], "fraction": 2, "timestep": [2, 4, 7, 10, 14], "With": [2, 23], "definit": [2, 10, 16], "rewrit": [2, 10, 16], "account": 2, "over": [2, 6, 10, 13, 15, 16, 21, 23, 24], "solv": [2, 4, 7, 15, 19, 20, 21, 23, 25, 28], "riemann": [2, 4, 7, 13, 14, 16, 20], "onc": [2, 10, 14, 24, 28], "result": [2, 10, 13], "code": [2, 3, 4, 19, 20, 25], "up": [2, 4, 7, 8, 13, 20, 27, 28], "compar": [2, 3, 5, 18, 19, 21, 22, 25], "measur": 2, "converg": [2, 13, 15, 22], "minmod": [3, 10, 25], "veri": [3, 7, 22], "sever": 3, "A": [3, 10, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 28], "slightli": 3, "better": [3, 7, 10], "consid": [3, 5, 6, 8, 11, 14, 15, 16, 23, 24, 25], "central": 3, "along": [3, 13, 14, 15, 18], "monoton": [3, 10], "mc": 3, "start": [3, 11, 12, 15, 19, 27], "extrema": [3, 5, 10], "xi": [3, 5, 11], "arrai": [3, 5, 8, 10, 11, 12, 14, 15, 16, 17, 21, 23, 24, 25], "min": [3, 5, 23], "sign": [3, 5, 10, 21, 24], "mathit": [3, 10], "otherwis": [3, 5, 10, 15, 23], "modifi": [3, 10, 14, 23], "how": [3, 8, 10, 12, 18, 20, 22, 23, 24, 28], "well": [3, 5, 10, 20, 28], "doe": [3, 8, 16, 25], "d": [4, 16, 18, 21, 23, 24], "a_t": [4, 11], "a_x": [4, 11], "v": [4, 17, 25], "y": [4, 10, 17], "develop": [4, 25], "averag": [4, 10, 12, 18, 20, 25], "rangle_": [4, 6, 12], "j": [4, 16], "int_": [4, 6, 10, 15], "x_": [4, 6, 10], "y_": 4, "dy": 4, "techniqu": [4, 16], "creat": [4, 7, 10, 14, 23, 25, 27], "manag": 4, "ghost": [4, 5, 10, 14, 21, 25], "both": [4, 10, 23], "through": [4, 5, 6, 10, 15, 23, 24, 25, 28], "simpli": [4, 5, 11, 13, 14, 16, 23, 24, 28], "reconstruct": [4, 14], "coordin": [4, 5, 21], "direct": [4, 15, 24], "adapt": 4, "bit": [4, 17], "constant": [5, 7, 10, 12, 13, 16, 23, 24], "next": [5, 10, 25], "describ": [5, 16, 18, 23, 26], "origin": [5, 10, 21, 23], "ppm": 5, "ga": [5, 9, 16, 21, 23], "dynam": 5, "system": [5, 9, 16, 17, 23], "want": [5, 6, 10, 13, 14, 17, 21, 23, 25], "scheme": 5, "consider": 5, "simplifi": [5, 9, 17], "thing": [5, 10, 25], "paper": [5, 18, 19, 23], "exampl": [5, 6, 22, 23], "parabola": 5, "prevent": [5, 10], "overshoot": [5, 10], "dot": [5, 10, 17, 23], "figur": [5, 8, 10, 15, 23, 25, 28], "abov": [5, 6, 8, 10, 16, 18, 23], "unlimit": [5, 10], "solid": [5, 10, 23], "basic": [5, 7, 12, 16, 23, 26], "idea": [5, 10, 13, 23, 28], "given": [5, 13, 15, 16, 17, 24, 25], "cw": 5, "eq": [5, 24], "4": [5, 8, 18, 21, 23, 24, 25], "were": [5, 6, 16, 17], "xi_i": 5, "xi_": 5, "edg": [5, 8, 10], "also": [5, 7, 13, 16, 24, 28], "uniformli": 5, "6": [5, 8, 14, 25], "10": [5, 8, 10, 16, 17, 21, 23, 25, 28], "3": [5, 6, 7, 8, 10, 11, 14, 16, 17, 18, 21, 23, 24, 25], "coeffici": 5, "them": [5, 7, 12, 17, 23, 27, 28], "introduc": 5, "ani": [5, 6, 10, 11, 13, 27], "new": [5, 25], "uniform": [5, 13, 14], "guess": [5, 23], "valu": [5, 10, 12, 13, 14, 21, 23], "cc": [5, 14, 15, 21, 23], "mbox": [5, 11, 13, 14, 15, 23], "accord": [5, 23], "note": [5, 10, 20, 23, 24, 26], "you": [5, 10, 18, 19, 20, 21, 22, 23, 25, 27], "get": [5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 19, 22, 24, 25], "sod": [5, 20], "got": 5, "ultim": 6, "interest": 6, "law": [6, 15, 16, 18, 21, 23, 24], "respect": 6, "type": [6, 17, 28], "repres": [6, 10, 17, 18, 24], "specif": [6, 16], "two": [6, 10, 12, 14, 15, 18, 23], "physic": [6, 8, 10, 12, 15, 25, 28], "previous": [6, 13, 24], "talk": 6, "about": [6, 10, 12, 13, 15, 18, 23, 24, 28], "divid": [6, 10], "last": [6, 8], "don": [6, 8, 10, 18, 28], "think": [6, 10, 15], "instead": [6, 14, 20, 22, 23], "keep": [6, 23, 25], "track": [6, 13], "total": [6, 10, 16, 20, 22], "amount": 6, "its": [6, 12, 16, 17], "shade": 6, "region": [6, 11, 23, 24], "insid": [6, 8, 14, 24], "often": [6, 23, 28], "interchang": 6, "half": [6, 8], "integ": [6, 8, 17, 25], "indic": [6, 8, 12, 16, 25], "denot": [6, 8], "locat": [6, 24], "extend": [6, 8, 24], "from": [6, 10, 12, 13, 14, 15, 16, 17, 20, 21, 23, 24, 25, 28], "imagin": [6, 8], "function": [6, 7, 10, 11, 17, 23, 25], "wish": 6, "goe": [6, 10], "angl": 6, "bracket": 6, "index": [6, 8, 17, 25], "written": [6, 13], "ua": 6, "recogn": [6, 15], "via": [6, 16, 23, 27, 28], "diverg": [6, 13, 14, 15, 21], "theorem": [6, 10], "becaus": [6, 9, 28], "leav": 6, "enter": [6, 28], "adjac": 6, "gain": 6, "telescop": 6, "piec": [7, 25], "numpi": [7, 8, 10, 23, 24, 25], "matplotlib": [7, 8, 23, 24, 25], "pyplot": [7, 8, 23, 24, 25], "plt": [7, 8, 23, 24, 25], "conveni": 7, "alreadi": 7, "saw": [7, 13, 23], "fv_grid": [7, 10], "driver": 7, "input": 7, "veloc": [7, 11, 13, 14, 16, 21, 23, 24], "pass": [7, 23, 25], "suppli": 7, "num_period": [7, 10], "stop": 7, "t_period": [7, 10], "xmax": [7, 8, 10, 25], "xmin": [7, 8, 10, 25], "ab": [7, 10, 25], "tmax": [7, 10, 25], "store": [7, 8], "later": [7, 8, 12], "evolut": [7, 16, 20, 25], "loop": [7, 25], "fill_bc": [7, 8, 10, 25], "piecewis": [7, 23, 25], "aleft": 7, "scratch_arrai": [7, 8, 10, 25], "aright": 7, "upwind": [7, 10, 12, 13], "aint": [7, 8, 10], "provid": 7, "signatur": 7, "tophat": [7, 10], "logical_and": 7, "diffus": 7, "expect": [7, 12], "exp": 7, "40": [7, 11, 23], "still": [7, 13, 16], "shape": [7, 25], "approx": [8, 12, 13], "a_1": 8, "But": [8, 18, 21], "correspond": [8, 16, 17, 18, 21, 24, 25], "come": [8, 12, 13, 15, 23, 24], "plai": [8, 12, 15], "accomod": 8, "everywher": [8, 14, 21], "lo": [8, 14, 21, 25], "hi": [8, 25], "outsid": [8, 10, 24], "knowledg": 8, "hold": [8, 23, 24, 25], "includ": [8, 28], "implement": [8, 19, 21, 28], "__init__": [8, 23, 24, 25], "python": [8, 17], "zero": [8, 10, 17, 21, 25], "base": [8, 24, 25], "easi": [8, 11, 12], "real": [8, 16, 23, 28], "coord": [8, 25], "arang": [8, 25], "xl": 8, "xr": 8, "storag": 8, "__str__": [8, 23, 24], "__repr__": 8, "scratch": [8, 25], "dimens": [8, 9, 16, 25], "dtype": [8, 25], "float64": [8, 25], "atmp": [8, 10, 25], "ghostcel": 8, "rang": [8, 17, 23, 25], "ax": [8, 23, 25], "add_subplot": [8, 23, 25], "111": [8, 23], "label": [8, 12], "legend": 8, "access": [8, 25, 27], "valid": [8, 24], "rememb": [8, 10], "9": 8, "flexibl": 8, "argument": 8, "There": [8, 10, 12, 21, 27], "some": [8, 10, 11, 12, 13, 28], "other": [8, 24], "explor": [8, 10, 12, 17, 28], "sometim": [8, 10, 28], "ve": [8, 12, 22, 25], "been": [8, 12, 22, 25, 27], "subscript": 8, "adopt": 8, "common": [8, 16, 21], "convent": 8, "mean": [8, 10, 12, 13, 16, 21, 23, 28], "illustr": 8, "below": [8, 13, 18, 21], "astrophys": [9, 10, 23, 26], "mani": [9, 19, 23, 26, 28], "star": [9, 24, 25], "ism": 9, "galaxi": 9, "model": [9, 21], "fluid": [9, 13, 25], "align": [9, 16, 21, 23, 25], "rho": [9, 16, 17, 20, 21, 23, 24, 25], "nabla": 9, "bf": [9, 16, 17, 23, 25], "p": [9, 16, 17, 20, 21, 23, 24, 25], "These": [9, 14, 16, 17, 22, 23], "mass": [9, 23], "momentum": [9, 23], "energi": [9, 16, 20, 21], "If": [9, 10, 15, 16, 21, 23, 24, 27, 28], "diverag": 9, "nonlinear": [9, 10, 16], "admit": 9, "rich": 9, "divers": 9, "rarefact": [9, 13, 15, 16, 25], "shock": [9, 13, 16, 25], "turbul": 9, "inviscid": [9, 13], "burger": [9, 16, 25], "To": [10, 11, 13, 15, 21, 23, 24, 25], "handl": 10, "higher": [10, 14, 22], "fashion": [10, 28], "again": [10, 14, 28], "substitut": 10, "expans": [10, 16, 23], "insert": [10, 12], "odd": 10, "third": [10, 14], "befor": [10, 28], "front": 10, "worri": 10, "between": [10, 13, 14, 18, 23], "notat": 10, "easier": [10, 25], "forward": 10, "broad": 10, "wai": [10, 25, 27], "accuraci": [10, 13], "predict": 10, "procedur": [10, 23, 24], "characterist": [10, 13, 15, 23], "trace": [10, 13, 15], "high": [10, 18], "ignor": 10, "thei": [10, 16, 17, 23, 24, 28], "rung": [10, 22], "kutta": [10, 22], "focu": 10, "detail": [10, 26, 28], "my": [10, 26, 28], "assum": [10, 12, 23, 24], "variat": [10, 22], "easiest": 10, "vari": [10, 12, 13, 18], "linearli": 10, "grai": 10, "red": 10, "Then": [10, 21, 23, 25], "connect": [10, 14, 23, 24], "therefor": [10, 11, 15, 17], "addit": [10, 28], "complic": [10, 23], "turn": [10, 25], "continu": [10, 25], "2nd": [10, 18, 22, 25], "rh": 10, "y_i": 10, "flux_upd": 10, "gr": 10, "div": 10, "da": 10, "alwai": [10, 24, 25], "convect": 10, "flux_diff": 10, "go": [10, 14, 21, 28], "lot": [10, 16, 21, 23], "orbit": 10, "main": [10, 21], "advection_mol": 10, "rk": [10, 22, 25], "k1": [10, 25], "k2": [10, 25], "One": [10, 25], "notic": [10, 12, 15], "oscil": 10, "godunov": 10, "sai": 10, "convers": 10, "true": [10, 17, 25], "accomplish": 10, "mathemat": 10, "enforc": 10, "properti": [10, 14], "diminsh": 10, "simpl": [10, 14, 22, 23, 24, 25, 26, 28], "mathtt": 10, "b": [10, 17, 24], "most": [10, 23], "kei": 10, "check": 10, "That": [10, 19, 23], "minimum": 10, "maximum": 10, "those": [10, 19], "situat": [10, 13], "effect": [10, 16], "shown": [10, 18, 23], "complet": 10, "flatten": 10, "profil": [10, 11, 14], "preced": 10, "previou": [10, 25], "version": [10, 23, 27], "dl": [10, 25], "dr": [10, 25], "d1": [10, 25], "fab": [10, 25], "8f": 10, "07860716": 10, "03039718": 10, "01176779": 10, "00393815": 10, "00123781": 10, "reason": [10, 25], "due": 10, "act": 10, "job": 10, "help": [10, 28], "fix": 10, "rerun": 10, "requir": [11, 25, 27], "down": [11, 18, 23], "ut": [11, 13], "known": 11, "futur": [11, 13], "sinc": [11, 13, 14, 16, 23, 24], "preserv": 11, "back": [11, 13, 23], "exactli": [11, 19], "ge": [11, 14], "euler": [12, 19, 20, 26], "appear": [12, 13, 16, 17, 27], "old": 12, "analyt": [12, 21, 23, 24], "infer": 12, "actual": [12, 25, 28], "throughout": 12, "varieti": 12, "simplest": [12, 13], "degeneraci": 12, "combin": 12, "thu": 12, "far": [12, 23], "everyth": 12, "quad": 12, "wave": [13, 14, 16, 21, 23, 25], "serv": 13, "great": [13, 28], "stone": 13, "toward": [13, 21], "full": 13, "u_t": [13, 15], "u_x": 13, "except": [13, 23], "being": 13, "itself": [13, 28], "longer": 13, "_x": [13, 15, 16, 17, 23], "u_i": [13, 25], "essenti": [13, 25], "asid": 13, "natur": 13, "pile": 13, "lose": 13, "flow": [13, 15, 16, 23, 24], "rise": 13, "wa": 13, "unchang": [13, 23], "curv": [13, 23, 24], "show": [13, 15], "spacetim": 13, "diagram": [13, 15, 23], "bottom": 13, "backward": [13, 15], "parallel": 13, "chang": [13, 14, 23, 27], "element": 13, "lagrangian": 13, "du": [13, 23], "intersect": [13, 15, 23], "uniqu": [13, 23, 25], "lost": 13, "put": [13, 21, 28], "jump": [13, 14, 15, 16, 24], "speed": [13, 16, 17, 25], "found": [13, 17, 23, 24, 26], "rankin": [13, 15, 23, 24], "hugoniot": [13, 15, 23, 24], "possibl": [13, 15, 24], "posit": 14, "outflow": 14, "copi": 14, "u_": [14, 15, 20, 23, 24], "similar": [14, 24], "renam": 14, "biggest": 14, "recomput": 14, "place": [14, 19, 28], "wavelength": 14, "middl": [14, 16, 24], "righthalf": 14, "larger": 14, "spread": [14, 21, 24], "immedi": 14, "u_l": [14, 15, 16, 23, 24, 25], "u_r": [14, 15, 16, 23, 24, 25], "estim": 14, "differenc": 14, "determin": [15, 24], "complex": [15, 25, 28], "plane": 15, "came": 15, "rightward": [15, 25], "separ": [15, 23, 25], "dark": 15, "At": 15, "x_l": 15, "x_r": 15, "entir": 15, "upward": 15, "becom": [15, 23], "mix": 15, "clearli": 15, "normal": [15, 16, 17], "likewis": [15, 23], "interv": 15, "understand": [15, 16, 23, 26, 28], "rare": 15, "choos": [15, 22], "appropri": 15, "compress": [16, 23, 24, 26], "absenc": 16, "dissip": [16, 23, 24], "viscos": 16, "relat": [16, 17, 23], "intern": [16, 20], "close": 16, "gamma": [16, 17, 21, 23, 24, 25], "eo": [16, 23, 24, 25], "ideal": [16, 18, 22], "ratio": 16, "heat": 16, "c_p": 16, "c_v": 16, "_t": [16, 17, 23], "methodologi": 16, "long": 16, "primarili": 16, "altern": 16, "q": [16, 17, 23, 25], "gamma_1": [16, 23], "log": 16, "compactli": 16, "anoth": 16, "sound": [16, 17, 25], "hyperbol": 16, "eigenvalu": [16, 17, 23], "matrix": [16, 17], "lambda": [16, 17, 23, 24], "propag": [16, 17, 24], "eigenvector": [16, 23], "nu": [16, 17], "qquad": [16, 23], "ccc": [16, 17, 23], "2c": [16, 23], "delta_": [16, 17], "ij": 16, "squar": 16, "matric": 16, "group": 16, "togeth": [16, 28], "satisfi": [16, 17], "w": [16, 23], "diagon": 16, "lar": 16, "decoupl": 16, "without": 16, "interact": 16, "difficult": 16, "tell": [16, 24], "carri": [16, 23], "associ": 16, "awai": [16, 21, 23, 24], "across": [16, 23, 24], "densiti": [16, 21, 23], "contact": [16, 25], "either": [16, 23, 24, 28], "rho_l": [16, 23, 25], "p_l": [16, 23, 24, 25], "rho_r": [16, 25], "p_r": [16, 23, 24, 25], "interc": 17, "adiabat": 17, "symbol": 17, "sympi": 17, "init_sess": 17, "use_latex": 17, "mathjax": 17, "ipython": 17, "consol": 17, "12": 17, "14": 17, "ground": 17, "command": 17, "execut": 17, "z": 17, "k": [17, 23], "m": 17, "h": 17, "cl": 17, "init_print": 17, "document": 17, "http": 17, "doc": 17, "org": 17, "abc": 17, "displaystyl": 17, "dictionari": 17, "multipl": 17, "eigenv": 17, "nativ": 17, "eigenvect": 17, "tupl": 17, "unpack": 17, "lam": 17, "ev": 17, "rtmp": 17, "append": 17, "anywai": [17, 24], "entri": 17, "smallest": 17, "largest": [17, 25], "transpos": 17, "laml": 17, "ltmp": 17, "tradition": 17, "mu": 17, "p_": [17, 21, 23, 24], "studi": 18, "pick": [18, 23], "acoust": 18, "puls": 18, "local": [18, 27], "refin": 18, "section": 18, "bc": 18, "2n": 18, "coarsen": 18, "fine": 18, "coars": 18, "variabl": [18, 23, 24], "finer": 18, "c_j": 18, "counterpart": 18, "f_i": 18, "pair": 18, "propos": [18, 28], "popular": [19, 22, 25], "research": [19, 28], "hllc": 19, "toro": [19, 24], "summar": 19, "suppos": 20, "p_i": 20, "pressur": [20, 21, 23, 24], "agre": 20, "cartesian": 21, "symmetr": 21, "area": 21, "blast": 21, "watch": 21, "outward": 21, "add": [21, 24, 28], "reflect": 21, "interior": [21, 25], "distanc": 21, "switch": 21, "rho_": [21, 23, 24], "radiu": 21, "r_0": 21, "expl": 21, "ambient": 21, "e_": [21, 23], "formul": [21, 23], "sphere": 21, "spherical_sedov": 21, "txt": 21, "classic": 22, "4th": 22, "diminish": 22, "whichev": 22, "exercis": 22, "alon": 22, "affect": 22, "primit": [23, 24, 25], "pm": [23, 24, 25], "three": [23, 24], "l_": [23, 24], "r_": [23, 24], "reach": 23, "yet": 23, "unknown": 23, "goal": [23, 26], "much": 23, "matter": 23, "rest": 23, "notebook": [23, 25, 26, 27], "mind": 23, "environ": 23, "effici": 23, "algorithm": [23, 28], "gase": 23, "colella": 23, "glaz": 23, "castro": 23, "On": 23, "parabol": 23, "stellar": 23, "zingal": [23, 26, 27], "katz": 23, "frame": 23, "_l": 23, "e_l": 23, "algebra": [23, 25], "c_l": [23, 24], "similarli": 23, "c_r": [23, 24], "root": [23, 24], "entropi": [23, 24], "gradient": [23, 25], "link": 23, "product": 23, "dp": 23, "int": 23, "invari": [23, 24], "scipi": [23, 24], "optim": [23, 24], "object": [23, 24], "mm": 23, "constraint": [23, 25], "riemannproblem": [23, 24, 25], "left_stat": [23, 24], "right_stat": [23, 24], "ustar": [23, 24], "pstar": [23, 24], "u_hugoniot": [23, 24], "elif": [23, 24], "els": [23, 24, 25], "beta": [23, 24], "find_star_st": [23, 24, 25], "p_min": [23, 24], "001": [23, 24], "p_max": [23, 24], "1000": [23, 24], "brentq": [23, 24], "Their": 23, "plot_hugoniot": 23, "riemann_problem": 23, "500": 23, "linspac": 23, "num": 23, "u_left": 23, "zeros_lik": 23, "u_right": 23, "ish": 23, "ir": 23, "c0": [23, 25], "lw": 23, "scatter": [23, 25], "marker": [23, 25], "025": 23, "max": [23, 25], "text": [23, 27], "horizontalalign": 23, "color": [23, 25], "c1": [23, 25], "set_xlim": 23, "set_xlabel": 23, "fontsiz": 23, "larg": [23, 28], "set_ylabel": 23, "earlier": [23, 25], "125": [23, 24, 25], "rp": [23, 24, 25], "30313017805064685": [23, 24], "9274526200489498": [23, 24], "05568299200702868": 23, "expens": 23, "especi": 23, "particular": 23, "consum": 23, "1985": 23, "regardless": 23, "phase": 23, "fast": 24, "behind": 24, "structur": [24, 25, 26], "must": 24, "superson": 24, "s_0": 24, "subson": 24, "lead": 24, "part": 24, "head": 24, "trail": 24, "tail": 24, "abut": 24, "s_": 24, "c_": 24, "span": 24, "deal": 24, "shortli": 24, "catch": 24, "shock_solut": 24, "sgn": 24, "p_ratio": 24, "52": 24, "59": 24, "rhostar": 24, "50": 24, "57": 24, "gam_fac": 24, "rarefaction_solut": 24, "fan": 24, "isentrop": 24, "54": 24, "61": 24, "cstar": 24, "lambda_head": 24, "lambda_tail": 24, "53": 24, "60": 24, "56": 24, "63": 24, "sample_solut": [24, 25], "interface_st": 24, "4263194281784952": 24, "fastest": 25, "advanc": 25, "count": 25, "depend": 25, "stage": 25, "life": 25, "around": 25, "sure": 25, "fluidvar": 25, "contain": 25, "indici": 25, "compon": 25, "nvar": 25, "urho": 25, "umx": 25, "uener": 25, "qrho": 25, "qu": 25, "qp": 25, "var": 25, "nc": 25, "squeez": 25, "ndim": 25, "routin": 25, "transform": 25, "cons_to_prim": 25, "rhoe": 25, "samer": 25, "neighbor": 25, "interac": 25, "dq": 25, "q_l": 25, "q_r": 25, "_riemann": 25, "cons_flux": 25, "riemann_exact": 25, "re": 25, "righthand": 25, "pde": 25, "od": 25, "make_flux_diverg": 25, "sl": 25, "sr": 25, "q_int": 25, "travel": 25, "min_i": 25, "c_i": 25, "twice": 25, "mol_solv": 25, "perform": 25, "mol": 25, "foo": 25, "u_tmp": 25, "standard": [25, 27], "consist": 25, "leftward": 25, "your": [25, 27], "idx_l": 25, "idx_r": 25, "read": 25, "file": 25, "sod_exact": 25, "genfromtxt": 25, "skip_head": 25, "name": 25, "311": 25, "312": 25, "313": 25, "set_size_inch": 25, "double_rarefact": 25, "michael": 26, "collect": [26, 27], "core": [26, 28], "commun": 26, "simul": [26, 28], "latex": 26, "introduct": 26, "built": 27, "jupyt": 27, "book": 27, "markdown": 27, "page": 27, "cours": 27, "github": [27, 28], "cca": 27, "summer": 27, "school": [27, 28], "websit": 27, "automat": 27, "action": 27, "push": 27, "richer": 27, "style": 27, "myst": 27, "jupyterlab": 27, "extens": 27, "instal": 27, "pip": 27, "jupyterlab_myst": 27, "suggest": 27, "improv": [27, 28], "feel": 27, "free": 27, "issu": 27, "pull": 27, "request": 27, "repo": 27, "few": 27, "own": 27, "click": 27, "icon": 27, "upper": 27, "download": 27, "raw": 27, "directli": 27, "cloud": 27, "mybind": 27, "open": [27, 28], "project": 27, "ti": 27, "minut": 27, "hasn": 27, "recent": 27, "experi": [27, 28], "googl": 27, "colab": 27, "onlin": 27, "instantli": 27, "astro": 28, "freeli": 28, "hear": 28, "dure": 28, "advic": 28, "even": 28, "process": 28, "organ": 28, "demystifi": 28, "modern": 28, "magneto": 28, "radiat": 28, "relativist": 28, "thousand": 28, "best": 28, "small": 28, "won": 28, "overlook": 28, "author": 28, "truli": 28, "yourself": 28, "incredibli": 28, "choic": 28, "forc": 28, "decis": 28, "establish": 28, "contribut": 28, "codebas": 28, "supercomput": 28, "architectur": 28, "opaqu": 28, "clear": 28, "member": 28, "prepar": 28, "understood": 28, "testb": 28}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"measur": [0, 14, 18], "converg": [0, 10, 18], "exercis": [0, 10, 23], "basic": 1, "driver": [1, 14, 25], "control": 1, "timestep": [1, 25], "characterist": [2, 16], "trace": 2, "predict": 2, "interfac": [2, 8, 14], "state": [2, 14, 23], "final": 2, "updat": [2, 12, 25], "try": [2, 3, 4], "differ": 3, "limit": [3, 10], "two": 4, "dimension": 4, "advect": [4, 5, 7, 9, 10, 11], "piecewis": [5, 10], "parabol": 5, "reconstruct": [5, 10, 12, 25], "finit": 6, "volum": 6, "discret": [6, 10], "cell": [6, 8], "averag": 6, "implement": [7, 10, 23, 24], "first": [7, 12], "order": [7, 10, 12, 25], "initi": [7, 11], "condit": [7, 11, 14, 23], "A": 8, "grid": [8, 25], "class": 8, "ghost": 8, "valu": 8, "linear": [9, 10], "second": [10, 25], "tempor": 10, "slope": 10, "run": 10, "test": [11, 14], "problem": [11, 12, 14, 15, 23, 25], "tophat": 11, "smooth": 11, "accur": 12, "time": [12, 22], "riemann": [12, 15, 19, 23, 24, 25], "burger": [13, 14, 15], "equat": [13, 14, 16, 17], "nonlinear": 13, "behavior": 13, "solv": 14, "": [14, 25, 28], "boundari": 14, "flux": 14, "main": [14, 25], "steepen": 14, "shock": [14, 15, 23, 24], "rarefact": [14, 23, 24], "speed": [14, 15, 23, 24], "sampl": [15, 24], "solut": [15, 23, 24], "euler": [16, 17, 18, 23, 25], "conserv": [16, 20, 25], "form": [16, 17], "primit": [16, 17], "variabl": [16, 17, 25], "sod": [16, 25], "exampl": [16, 25], "eigensystem": 17, "right": 17, "eigenvector": 17, "0": 17, "th": 17, "1": 17, "st": 17, "2": 17, "nd": 17, "left": 17, "entropi": 17, "formul": 17, "our": [18, 28], "solver": [18, 19, 23, 25, 26], "hll": 19, "non": 20, "sedov": 21, "explos": 21, "spheric": 21, "symmetri": 21, "integr": 22, "find": 23, "star": 23, "jump": 23, "explor": 23, "approxim": 23, "wave": 24, "case": 24, "contact": 24, "discontinu": 24, "densiti": 24, "code": [26, 28], "fluid": 26, "cca": 26, "dynam": 26, "summer": 26, "school": 26, "2023": 26, "us": 27, "These": 27, "note": 27, "interact": 27, "usag": 27, "why": 28, "write": 28, "your": 28, "own": 28, "hydro": 28, "It": 28, "difficult": 28, "complet": 28, "document": 28, "paper": 28, "There": 28, "ar": 28, "lot": 28, "subtleti": 28, "strength": 28, "trade": 28, "off": 28, "need": 28, "made": 28, "along": 28, "wai": 28, "eventu": 28, "you": 28, "ll": 28, "want": 28, "new": 28, "featur": 28, "commun": 28, "continu": 28, "develop": 28}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Measuring Convergence": [[0, "measuring-convergence"]], "Exercise": [[0, null], [10, null], [23, null]], "Basic Driver": [[1, "basic-driver"]], "Controlling the Timestep": [[1, "controlling-the-timestep"]], "Characteristic Tracing": [[2, "characteristic-tracing"]], "Predicting the interface states": [[2, "predicting-the-interface-states"]], "Final update": [[2, "final-update"]], "Try it": [[2, "try-it"], [3, "try-it"], [4, "try-it"]], "Different Limiters": [[3, "different-limiters"]], "Two-dimensional Advection": [[4, "two-dimensional-advection"]], "Piecewise Parabolic Reconstruction for Advection": [[5, "piecewise-parabolic-reconstruction-for-advection"]], "Finite-Volume Discretization": [[6, "finite-volume-discretization"]], "Cell-averages": [[6, "cell-averages"]], "Implementing First Order Advection": [[7, "implementing-first-order-advection"]], "Initial conditions": [[7, "initial-conditions"]], "A Grid Class and Ghost Cells": [[8, "a-grid-class-and-ghost-cells"]], "Interface values": [[8, "interface-values"]], "Linear Advection": [[9, "linear-advection"]], "Second-order Advection": [[10, "second-order-advection"]], "Temporal discretization": [[10, "temporal-discretization"]], "Piecewise linear reconstruction": [[10, "piecewise-linear-reconstruction"]], "Implementation": [[10, "implementation"], [23, "implementation"], [24, "implementation"]], "Slope Limiters": [[10, "slope-limiters"]], "Running with limiting": [[10, "running-with-limiting"]], "Convergence": [[10, "convergence"]], "Advection Test Problem": [[11, "advection-test-problem"]], "Tophat Initial Conditions": [[11, "tophat-initial-conditions"]], "Smooth Initial Conditions": [[11, "smooth-initial-conditions"]], "First-Order Accurate Time Update": [[12, "first-order-accurate-time-update"]], "Reconstruction and the Riemann problem": [[12, "reconstruction-and-the-riemann-problem"]], "Burgers\u2019 Equation": [[13, "burgers-equation"]], "Nonlinear behavior": [[13, "nonlinear-behavior"]], "Solving Burger\u2019s equation": [[14, "solving-burger-s-equation"]], "Boundary conditions": [[14, "boundary-conditions"]], "Interface states and fluxes": [[14, "interface-states-and-fluxes"]], "Main driver": [[14, "main-driver"], [25, "main-driver"]], "Test problems": [[14, "test-problems"]], "Steepening into a shock": [[14, "steepening-into-a-shock"]], "Rarefaction": [[14, "rarefaction"], [24, "rarefaction"]], "Measuring the shock speed": [[14, "measuring-the-shock-speed"]], "Burgers\u2019 Riemann Problem": [[15, "burgers-riemann-problem"]], "Shock speed": [[15, "shock-speed"], [23, "shock-speed"]], "Sampling the solution": [[15, "sampling-the-solution"]], "Euler Equations": [[16, "euler-equations"]], "Conservative form": [[16, "conservative-form"]], "Primitive variable form": [[16, "primitive-variable-form"], [17, "primitive-variable-form"]], "Characteristic form": [[16, "characteristic-form"]], "Sod example": [[16, "sod-example"]], "Euler Equations Eigensystem": [[17, "euler-equations-eigensystem"]], "Right Eigenvectors": [[17, "right-eigenvectors"]], "0-th right eigenvector": [[17, "th-right-eigenvector"]], "1-st right eigenvector": [[17, "st-right-eigenvector"]], "2-nd right eigenvector": [[17, "nd-right-eigenvector"]], "Left Eigenvectors": [[17, "left-eigenvectors"]], "0-th left eigenvector": [[17, "th-left-eigenvector"]], "1-st left eigenvector": [[17, "st-left-eigenvector"]], "2-nd left eigenvector": [[17, "nd-left-eigenvector"]], "Entropy formulation": [[17, "entropy-formulation"]], "left eigenvectors": [[17, "id1"]], "Measuring Convergence of our Euler Solver": [[18, "measuring-convergence-of-our-euler-solver"]], "HLL Riemann Solver": [[19, "hll-riemann-solver"]], "Non-conservation?": [[20, "non-conservation"]], "Sedov Explosion and Spherical Symmetry": [[21, "sedov-explosion-and-spherical-symmetry"]], "Time Integration": [[22, "time-integration"]], "Euler Riemann Problem": [[23, "euler-riemann-problem"]], "Finding the star state": [[23, "finding-the-star-state"]], "Shock jump conditions": [[23, "shock-jump-conditions"]], "Rarefaction solution": [[23, "rarefaction-solution"]], "Exploring": [[23, "exploring"]], "Approximate Riemann solvers": [[23, "approximate-riemann-solvers"]], "Sampling the Riemann Solution": [[24, "sampling-the-riemann-solution"]], "Wave speeds": [[24, "wave-speeds"]], "Shock case": [[24, "shock-case"]], "Contact discontinuity": [[24, "contact-discontinuity"]], "Density": [[24, "density"]], "Sampling": [[24, "sampling"]], "Second-Order Euler Solver": [[25, "second-order-euler-solver"]], "Grid and variables": [[25, "grid-and-variables"]], "Reconstruction": [[25, "reconstruction"]], "Riemann problem and conservative update": [[25, "riemann-problem-and-conservative-update"]], "Timestep": [[25, "timestep"]], "Example: Sod\u2019s problem": [[25, "example-sod-s-problem"]], "Coding Solvers for Fluids": [[26, "coding-solvers-for-fluids"]], "CCA Fluid Dynamics Summer School 2023": [[26, "cca-fluid-dynamics-summer-school-2023"]], "Using These Notes": [[27, "using-these-notes"]], "Interactive Usage": [[27, "interactive-usage"]], "Why Write Your Own Hydro Code?": [[28, "why-write-your-own-hydro-code"]], "It\u2019s difficult to completely document a code in a paper": [[28, "it-s-difficult-to-completely-document-a-code-in-a-paper"]], "There are lots of subtleties": [[28, "there-are-lots-of-subtleties"]], "There are strengths / trade-offs that need to be made along the way": [[28, "there-are-strengths-trade-offs-that-need-to-be-made-along-the-way"]], "Eventually you\u2019ll want new features": [[28, "eventually-you-ll-want-new-features"]], "Our community continually needs new developers": [[28, "our-community-continually-needs-new-developers"]]}, "indexentries": {}})