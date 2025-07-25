---
title: "APL Quest: Help"
description: "Help for how to write answer for the practice problems"
image: "https://apl.quest/img/aplquest.png"
url: "https://apl.quest/info/help"
---
# Help

The problems are designed to be solved using short APL dfns or tacit
functions. If you find yourself writing more than a couple of
statements in your solution, you can probably find a better way to do
it.

A dfn is one or more APL statements enclosed in braces `{}`. The
left hand argument, if any, is represented in a dfn by `⍺`,
while the right hand argument is represented by `⍵`. For
example:

``` APL
      'Hello' {⍺,'-',⍵,'!'} 'world'
Hello-world!
```

A dfn terminates on the first statement that is not an assignment. If
that statement produces a value, the dfn returns that value as its
result. The diamond symbol `⋄` separates APL statements. For
example:

``` APL
      'left' { ⍵ ⋄ ⍺ } 'right'
right
```

For more information on dfns, use [the APL
Wiki](https://aplwiki.com/wiki/Dfn).

A tacit function is an APL expression that does not explicitly mention
its arguments. In the example below `(+⌿÷≢)` is a tacit function
which computes the average of a vector (list) of numbers.

``` APL
      (+⌿÷≢) 1 2 3 4 5 6
3.5
```

For more information on tacit functions, see [the APL
Wiki](https://aplwiki.com/wiki/Tacit_programming).

Each problem has a description and one or more examples. Wherever you
see `your_function` is where you should insert your solution
(either a dfn or tacit function).

Your code must run in a default Dyalog environment using
`(⎕ML ⎕IO)←1`. If you use other settings for `⎕ML` or
`⎕IO`, they must be local. If you don't know what that means,
don't worry, it won't matter to you.

Several of the problem descriptions will describe arguments that can
be a scalar (a single element) or a vector (a list). This is largely
pedantic, but in such cases your functions should produce correct
results for both types of input.

The symbol `⍝` is the APL comment symbol. In some of the
examples, we provide comments to give you more information about the
problem.

Some of the problem test cases use "boxed display" to make the
structure of the returned results clearer. Boxing is enabled by
default on
[TryAPL](https://tryapl.org/?a=%u2373%A8%u23734&run)
and can be enabled in your local APL Session with the `]Box`
user command:

``` APL
      ⍳¨⍳4
 1  1 2  1 2 3  1 2 3 4 
      ]Box on
Was OFF
      ⍳¨⍳4
┌─┬───┬─────┬───────┐
│1│1 2│1 2 3│1 2 3 4│
└─┴───┴─────┴───────┘
```
