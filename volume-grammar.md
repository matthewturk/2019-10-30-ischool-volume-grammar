<!-- .slide: class="titleslide" -->

# a grammar of volumetric analysis

<div style="height: 6.0em;"></div>

## Matthew Turk & Sam Walkow

<p style="text-align: right;" data-markdown=true><tt>mjturk@illinois.edu</tt> & <tt>swalkow2@illinois.edu</tt></p>

---

<!-- .slide: data-background-image="images/clouds.jpg"
             data-background-size="cover" data-background-repeat="none" -->

---

<!-- .slide: data-background-image="https://upload.wikimedia.org/wikipedia/commons/b/bd/Kelvin_Helmholz_wave_clouds.jpg"
             data-background-size="cover" data-background-repeat="none" class="full" -->

<div class="multiCol">
<div class="col" data-markdown=true>
</div>
<div class="col fragment fade-in" style="opacity:0.7;background-color: white;" data-markdown=true>
$$\begin{aligned}{\partial \rho  \over \partial t}+\nabla \cdot (\rho \mathbf{v}) &= 0\\
{\frac {\partial \mathbf {v} }{\partial t}}+\mathbf {v} \cdot \nabla \mathbf {v} +{\frac {\nabla p}{\rho }}&=\mathbf {g}\\
{\partial e \over \partial t}+\mathbf {v} \cdot \nabla e+{\frac {p}{\rho }}\nabla \cdot \mathbf {v} &=0\end{aligned}$$
</div>
</div>

<!--<p class="mediumtext centered"><a href="https://commons.wikimedia.org/wiki/File:Kelvin_Helmholz_wave_clouds.jpg">Brocken Inaglory [CC BY-SA 4.0], via Wikimedia Commons</a></p> -->

---

<div class="multiCol">
<div class="col">
<div class="fig-container" data-style="height: 600px;" data-file="figures/kh_example.html" data-markdown=true>
</div>
</div>
<div class="col" data-markdown=true>
$$\begin{aligned}{\partial \rho  \over \partial t}+\nabla \cdot (\rho \mathbf{v}) &= 0\\
{\frac {\partial \mathbf {v} }{\partial t}}+\mathbf {v} \cdot \nabla \mathbf {v} +{\frac {\nabla p}{\rho }}&=\mathbf {g}\\
{\partial e \over \partial t}+\mathbf {v} \cdot \nabla e+{\frac {p}{\rho }}\nabla \cdot \mathbf {v} &=0\end{aligned}$$
</div>
</div>

---

# Vocabulary of Data Analysis

* Registration
* Transformation
* Selection
* Reduction

---

<div class="multiCol">
<div class="col">

# Registration

<p class="fragment">Data is laid out on <b>disk</b> in some manner that may or may not correspond to the spatial organization or physical meaning of what it represents.</p>

<p class="fragment">This data can be laid out in a data structure in <b>memory</b> that represents its logical ordering, with axes and dimensions.</p>

<p class="fragment">Finally, we can register one or multiple datasets in a consistent <b>spatial</b> representation so that we can query fields at specific locations and define $f(\mathbf{x})$.</p>

</div>

<div class="col">
<div class="fig-container" data-file="figures/volume_layout.html" data-preload data-style="height: 600px;">
</div>
</div>
</div>

---

<div class="multiCol">
<div class="col">

# Registration

<p class="fragment">Given a functional form, discretely sampled data can also be registered for analysis, regardless of its layout on disk.</p>

<div class="fragment" data-markdown=true>
<p>This data may carry with it attributes regarding the density of samples, its neighbors, and fundamental quantities, which can be input into a sampling function over a location.</p>

$$A({\boldsymbol {r}})=\int A\left({\boldsymbol {r^{\prime }}}\right)W(|{\boldsymbol {r}}-{\boldsymbol {r^{\prime }}}|,h)\mathrm {d} V\left({\boldsymbol {r^{\prime }}}\right)}$$
</div>

</div>

<div class="col">
<div class="fig-container" data-file="figures/particle_layout.html" data-preload data-style="height: 600px;">
</div>
</div>
</div>


---

<div class="multiCol">
<div class="col">
<div class="fig-container" data-file="figures/galaxy_transformations.html" data-preload data-style="height: 768px;">
</div>
</div>
<div class="col" data-markdown=true>

# Transformations

<p class="fragment">"Primitive" variables: $\rho, \mathbf{v}, e, ...$ can be combined in many different ways to produce fields that exist <i>in potentia</i>.</p>
<p class="fragment">Registration enables combinations at fixed spatial locations.</p>
<p class="fragment">For example, we can apply the arithmetic manipulation:
$$|v| = \sqrt{v_x^2 + v_y^2}$$
</p>
</div>
</div>

---

<div class="multiCol">
<div class="col" data-markdown=true>

# Selection

<p>Points can be filtered based on their connectivity, spatial organization, or criteria from one or more field values.</p>
</div>
<div class="col">
<div class="fig-container" data-file="figures/kh_operations.html" data-preload data-style="height: 768px;">
</div>
</div>
</div>

---

# Reductions

We can apply reductions along axes, paths and non-trivial manifolds.

<div class="fig-container" data-file="figures/kh_path.html" data-preload data-style="height: 600px;">
</div>

---

# Composability

<div class="fig-container" data-file="figures/cosmology.html" data-preload data-style="height: 768px;">

---

(Ok, time for Sam to take over!)

---

# Imagine: a house

 * A house has multiple levels, multiple rooms, and lots of walls.
 * Houses are designed for one person or family, with their needs.
 * People add on to that house, with different foundations, architectural styles and tastes.
 * What belongs where?  Which room is which?
 * Maintenance becomes ... challenging.

---

# Imagine: a house

Our house is `yt`, and the people who built it were astronomers.

* yt is a house with many levels, rooms, and a lot of walls
* New additions rely on different foundations
* It's unclear what belongs where, in what room
* It's difficult to maintain
* Other natural science domains have to navigate

---

# Software Renovation

We want to create a flexible, context-aware platform for natural science inquiry.

<span class="fragment"><i class="fas fa-globe-africa fa-5x"></i></span>
<span class="fragment"><i class="fas fa-bolt fa-5x"></i></span>
<span class="fragment"><i class="fas fa-brain fa-5x"></i></span>
<span class="fragment"><i class="fas fa-water fa-5x"></i></span>
<span class="fragment"><i class="fas fa-star fa-5x"></i></span>

---

 * To create a flexible, context aware platform for nature science domains:
   * Oceanography
   * Neuroimaging
   * Geophysics
   * Astronomy
   * Weather
 * Grammar and Vocabulary
   * Defining and grouping yt operations by function
   * Describing relationships and rules of those operations

---

## Software Renovation

* Our house functions a specific way, and can only be navigated a certain way

*Have our house, but with a blue dot moving from one end of the house to other, in a zig zag fashion (I hope that made sense)*

---

## Software Renovation

* Developing an ontology-like layer onto yt

*Image layer: have out yt house, but with a blue line going along the floor. Or, have the foundation/floor as bar, and several ‘houses’ over top. These could also be the icons:*

---

## Software Renovation

* Defining yt objects (building blocks/foundation), relationships between objects, and rules for those objects and relationships specific to a physical science domain

*Maybe we should use a domain example here? So from the image in the last slide just have one house being ‘built’*

---

## Software Renovation

* An organized, mature mental model can now be expanded on and applied to other domains

*Use the multi-house image, but with people or happy faces adding to domain specific homes and adding new domains*

---

# yt Grammar - a toolbox, instead of a tool

* Tools guide our process of inquiry, and can narrow our vision
* Start thinking function first, as opposed to tool first
* A variety of operations for scientists to fit to their mental model and research problems
* Shape our tools through domain knowledge


   * Maybe we can reverse the tendency - instead of distilling domain knowledge into a tool, we can leverage domain knowledge to add to and improve yt as a tool box with variety
