---
title: "How to solve the problems"
description: "Help for how to write answer for the practice problems"
image: "https://apl.quest/img/aplquest.png"
url: "https://apl.quest/info/help"
---
# How to solve the problems
The problems are designed to be solved using a short [dfn](https://aplwiki.com/wiki/Dfn) or [tacit
functions](https://aplwiki.com/wiki/Tacit_programming). If you find yourself writing more than a couple of
statements in your solution, you can probably find a better way to do
it.

Your code must run in a default Dyalog environment using
`(⎕ML ⎕IO)←1`. If you use other settings for `⎕ML` or
`⎕IO`, they must be local. If you don't know what that means,
don't worry, it won't matter to you.

## Boxed display

Some of the examples use "boxed display" to make the
structure of the returned results clearer. Boxing is always enabled on
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
