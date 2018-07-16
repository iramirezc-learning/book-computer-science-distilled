# Computer Science Distilled

## Summary - Chapter 2: Complexity

> In almost every computation, a variety of arrangements for the processes is possible. It is essential to choose that arrangement which shall tend to minimize the time necessary for the calculation.
>
> -- _Ada Lovelace_

**:dart: Objectives:**

> * _Count and interpret time complexities_
> * _Express growth with Big-O notation_
> * _Discard exponential algorithms_
> * _Make sure you have enough computer memory_

__Running Time__

> $Time\ complexity = T(n) = running\ cost$
>
> **Problem:**
>
> _Imagine you have a deck of `100` cards. It takes $T(n^2)$ to sort all the cards. How much longer will it take if we double the size?_
>
> **Solution:**
>
> It will take `4` times longer:
>
> $$n = 100\ cards$$
> $$T(n) = n^2 = 100^2 = 10,000$$
> $$T(2n) = 2n^2 = (2 \times 100)^2 = 40,000$$
> $$\frac{T(2n)}{T(n)} = \frac{2n^2}{n^2} = \frac{40,000}{10,000} = 4$$

When an algorithm can have different values of $T(n)$ for the same value of $n$, we resort to cases:

> * Best case
> * Worst case
> * Average case

---

### Section 1: Counting Time

#### Selection Sort algorithm

```bash
function selection_sort (list)
  for current <- 1 ... list.length - 1
    smallest <- current
    for i <- current + 1 ... list.length
      if list[i] < list[smallest]
        smallest <- i
    list.swap_items(current, smallest)
```

> Code: [selection-sort.js](./algorithms/selection-sort.js)

#### Selection Sort time complexity

> Outer loop runs $n - 1$ times and runs $2$ operations:
>
> $$2(n - 1) = 2n - 2$$
>
> Inner loop runs $n - 1$ times, then $n - 2$, then $n - 3$ and so on...
>
> Formula:
>
> $$\sum_{i=1}^{n}i = \frac{n(n+1)}{2}$$
>
> Total inner loop:
>
> $$\sum_{i=1}^{n - 1}i = \frac{n-1(n-1+1)}{2} = \frac{n-1(n)}{2} = \frac{n^2-n}{2}$$
>
> Inner loop in the worst case does a comparison and one assignment (2 operations):
>
> $$2\times\frac{n^2-n}{2} = \frac{2n^2-2n}{2}=n^2-n$$
>
> Total cost:
>
> $$2n-2+n^2-n = n^2+n-2$$
>
> then, Selection Sort time complexity is:
>
> $$T(n) = n^2+n-2$$
>
> if $n=8$ numbers then:
>
> $$8^2+8-2 = 70$$
>
> if we double $n\times2$, then:
>
> $$16^2+16-2 = 270$$
>
> selection sort will be $\approx4$ times slower
>
> $$\frac{T(16)}{T(8)} = \frac{270}{70} = 3.857\ (times\ slower)$$
>
> if we double the size again:
>
> $$32^2+32-2 = 1054$$
>
> then:
>
> $$\frac{T(32)}{T(16)} = \frac{1054}{270} = 3.903\ (times\ slower)$$
>
> **Final thoughts:** we can say that sorting `2 million` of numbers will take `4 times` the time of sorting `1 million`. Everytime we double the size `time = time x 4`.

#### Dominant Term

> **Index Cards**
>
> _Yesterday, you knocked over one box of index cards. It took you 2 hours of Selection Sort to fix it. Today you spilled ten boxes. How much time will you need to arrange the cards back in?_

**Solution:**

> Selection sort run $T(n) = n^2 + n -2$
>
> The fastest growing term is $n^2$ so $T(n) \approx n^2$
>
> One box has $n$ cards, so:
>
> $$10\ boxes = \frac{T(10n)}{T(n)}\approx\frac{(10n)^2}{n^2}=\frac{100n^2}{n^2}=100\ (times\ slower)$$
>
> Sorting `1 box` takes `2 hours`, then
>
> sorting `10 boxes = 2 hours x 100 = 200 hours`

**Example:**

> $n = 1\ box = 1,000\ cards$
>
> $10 n = 10\ boxes = 10,000\ cards$
>
> $$\frac{T(10n)}{T(n)}=\frac{(10\times1,000)^2}{1,000^2}=\frac{100,000,000}{1,000,000}=100\ (times\ slower)$$

#### Growths

> * $n$ linear growth
> * $n^2$ cuadratic growth
> * $n^3$ cubic growth

---

### Section 2: The Big-O Notation

Time complexity analysis is important when designing systems that handle very large inputs.

#### Orders of growth

_More time from bottom to top_

> * $O(n!)$ factorial
> * $O(2^n)$ exponential
> * $O(n^2)$ quadratic or polynomial
> * $O(n\log_{2}n)$ logarithmic linear
> * $O(n)$ linear
> * $O(\log_{2}n)$ logarithmic
> * $O(1)$ constant

#### NP-complete problems

> * $O(n!)$ factorial
> * $O(2^n)$ exponential

#### Big-O Complexity

![Big-O Complexity](./img/big-o.png)

---

### Section 3: Exponentials

We say $O(2^n)$ algorithms are **exponential time**. We consider these algorithms as **NOT runnable**. Same happens for $O(n!)$ algorithms. Even they both are horrible options, they're needed to solve **NP-complete** problems.

---

### Section 4: Counting Memory

#### Space complexity

> is the measure of working storage an algorithms needs.

#### Selection Sort's space complexity

> $O(1)$ _no matter the input size, it requires the same amount of computer memory for working storage._

**:bulb: Tip:**

> Find the balance between time and space complexity.

---

### Section 5: Conclusion

#### Given different algorithms, do they have a significant difference in terms of operations required to run?

> Yes, it depends on their time and space complexity.

#### Multiplying the input size by a constant, what happens with the time an algorithm takes to run?

> Increases by its $T(n)$

#### Would an algorithm perform a reasonable number of operations once the size of the input grows?

> Considering the worst case scenario, an algorithm will always perform the same number of operations no matter the input size.

#### If an algorithm is too slow for running on an input of a given size, would optimizing the algorithm, or using a supercomputer help?

> Yes, both cases would help, but optimizing the algorithm should be the first option to achieve a better running time. Having a supercomputer won't help much and it will be limited anyways.

## References

### In the book:

* [Big-O Algorithm Complexity Cheat Sheet (Know Thy Complexities!) @ericdrowell](http://bigocheatsheet.com/)
* [The Art of Computer Programming, Vol. 1: Fundamental Algorithms, 3rd Edition: 9780201896831: Computer Science Books @ Amazon.com](https://www.amazon.com/dp/0201896834/)
* [P vs. NP and the Computational Complexity Zoo - YouTube](https://www.youtube.com/watch?v=YX40hbAHx3s)
