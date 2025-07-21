---
title: "APL Quest"
description: "APL practice problems with automatic validation, solutions and walk-throughs"
image: "https://apl.quest/img/aplquest.png"
url: "https://apl.quest/"
---

# APL Quest

This site allows you to exercise your [APL](https://apl.wiki) skills using the practice problems from the [APL Problem Solving Competition](https://www.dyalog.com/student-competition.htm#APLPSComp)'s phase 1.

Each problem starts with a task description and some also include a hint suggesting one or more APL primitives. These may be helpful in solving the problem, but you are under no obligation to use them. Clicking on a primitive in the hint opens the Dyalog documentation page for that primitive.

Each problem ends with some example cases. You can use these as a basis for implementing your solution.

Notice something wrong? [Report a bug](https://github.com/Dyalog/apl.quest/issues/new?assignees=&labels=&template=bug_report.md&title=).

Every problem has one or more solutions explained fully in the [APL Quest video series](https://www.youtube.com/playlist?list=PLYKQVqyrAEj9wDIUyLDGtDAFTKY38BUMN). You will find the relevant walk-through video at the bottom of each problem page, together with links to the chat transcript and solution code on GitHub.

## Help

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

## Sample Problem: Counting Vowels

Write an APL function to count the number of vowels (A, E, I, O, U) in an array consisting of uppercase letters (A–Z).

💡 Hint: The membership function [`X∊Y`](http://help.dyalog.com/latest/#Language/Primitive%20Functions/Membership.htm) could be helpful for this problem.

### Examples:

```APL
      (your_function) 'COOLAPL'
3
      (your_function) ''          ⍝ empty argument
0
      (your_function) 'NVWLSHR'   ⍝ no vowels here
0
```

Below are three sample solutions. All three produce the correct answer, but the first are better because they leverage array-oriented programming:

```APL
      ({+/⍵∊'AEIOU'}) 'COOLAPL'   ⍝ good dfn
3
      (+/∊∘'AEIOU') 'COOLAPL'     ⍝ good tacit function
3
      {(+/⍵='A')+(+/⍵='E')+(+/⍵='I')+(+/⍵='O')+(+/⍵='U')} 'COOLAPL' ⍝ suboptimal dfn      
3
```

If you put each of the above three functions into the input field below and click <kbd>&#x2714; Test</kbd>, you'll see that they only pass the basic test cases. This is because none of those functions handle arrays with 2 or more dimensions. The system will also give you an example of a multi-dimensional edge case that failed, so that you can attempt to improve your solution.

<div class="pdiv">
  <code>your_function ← </code><input id="p_Input" autocomplete="off" spellcheck="false" oninput="this.parentElement.querySelector`button`.disabled=false" onkeypress="subm(event)">
  <button onclick="alert$.next`Testing…`;submitSolution`p`" class="md-button md-button--primary">&#x2714; Test</button>
</div>
<blockquote id="p_Output"></blockquote>

Try entering `{+/,⍵∊'AEIOU'}` which handles all test cases.

<script>
    testCases = {"a": ["'COOLAPL'","''","'NVWLSHR'","{⍵[?⍨≢⍵]}'AEIOU',⎕A[?26⍴⍨9+?16]"],"b": ["2 3⍴'APLYES'","⎕A[?26⍴⍨1+?2⍴⍨1+?2]","''⍴⍨¯1+?⍨3"],"f": "{+/,⍵∊'AEIOU'}","p": "{⊃⍣(1=≢,⍵)⊢⍵}"}
</script>
