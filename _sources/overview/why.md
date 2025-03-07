# Why Write Your Own Hydro Code?

There are *a lot* of simulation codes developed by the astro community
that are freely available (and you are hearing about some during this
school).

So why should you write your own?

```{tip}
My advice is to write your own implementation of the type of solver
you'll be using for your research once, even if you don't use it
for your actual work.

The process of figuring out how to organize and write the code
will demystify a lot of what takes place in a modern simulation code.
```

## It's difficult to completely document a code in a paper

### There are lots of subtleties

Algorithms for (magneto-,radiation,relativistic-)hydro are complex
(often 10s of thousands of lines of code).  While we do our best to
document the algorithm in a paper, there are so many small
implementation details that won't be in the paper (either for space or
simply because they are overlooked by the authors).

This means that the only real documentation for a simulation code is
the code itself.

If you want to truly understand how an algorithm works, coding it up
yourself and implementing tests is incredibly useful.

### There are strengths / trade-offs that need to be made along the way

All algorithms make approximations: from the choice of equations
solved to the method of discretizing them in space and time, and to
the details of the additional physics included.

A great way to understand where these trade-offs enter is to force yourself
to have to make these decisions in your own code.

## Eventually you'll want new features

If you are using an established research code, eventually you'll want
to add new features and contribute to the codebase.  Again, these
codebases are large, and the complexity of modern supercomputer
architectures can sometimes make the core methods more opaque.

Having a clear understanding of how to implement your method in a
simple fashion on your own will help you understand the large research
codes that our community uses.

## Our community continually needs new developers

Research codes are continually improved and this is done by members of
the community, usually out in the open, e.g., via github.  Going
through the experience of putting together your own code prepares you
for the development that is needed for community codes.  It also gives
you a simple well-understood testbed to explore new ideas before
proposing them in a community code.

