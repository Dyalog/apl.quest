---
title: "Sample Problem"
description: "Sample problem showing how to use the site"
image: "https://apl.quest/img/aplquest.png"
url: "https://apl.quest/info/sample"
---
# Sample Problem: Counting Vowels

> This is a walk-through sample problem showing how to use the site.

> Each problem has a description and one or more examples. Wherever you
see `(your_function)` is where you should insert your solution
(either a dfn or tacit function). The problem description for this sample problem is:

Write an APL function to count the number of vowels (A, E, I, O, U) in an array consisting of uppercase letters (A–Z).

> Some task descriptions include a hint suggesting one or more APL primitives:


💡 Hint: The membership function [`X∊Y`](http://help.dyalog.com/latest/#Language/Primitive%20Functions/Membership.htm) could be helpful for this problem.

> These may be helpful in solving the problem, but you don’t have to use them. Clicking on a primitive in the hint opens its documentation page.

> Each problem ends with some example cases:

### Examples:

> The symbol `⍝` is the APL comment symbol. In some of the
examples, we provide comments to give you more information about the
problem:

```APL
      (your_function) 'COOLAPL'
3
      (your_function) ''          ⍝ empty argument
0
      (your_function) 'NVWLSHR'   ⍝ no vowels here
0
```

<blockquote>
<p>You can use these as a basis for implementing your solution.</p>

<p>Some of the examples use "boxed display" to make the structure of the returned results clearer. Boxing is always enabled <a href=https://tryapl.org/?a=%u2373%A8%u23734&run>on TryAPL</a> and can be enabled in your local APL Session with the <code>]Box</code> user command:</p>

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

<p>Your code must run in a default Dyalog environment using <code>(⎕ML ⎕IO)←1</code>. If you use other settings for <code>⎕ML</code> or <code>⎕IO</code>, they must be local. If you don't know what that means, don't worry, it won't matter to you.</p>

Here are a dfn and a tacit solution:

```
      {+/⍵∊'AEIOU'} 'COOLAPL'   ⍝ dfn
3
      (+/∊∘'AEIOU') 'COOLAPL'     ⍝ tacit function
3
```

<p>If you enter one of the above functions into the input field below and click <kbd>&#x2714; Test</kbd>, you'll see that they only pass the basic test cases. This is because they don’t handle arrays with 2 or more dimensions. The system will also give you an example of a multi-dimensional edge case that failed, so that you can attempt to improve your solution.</p>
</blockquote>

<div class="pdiv">
  <code>your_function ← </code><input id="p_Input" autocomplete="off" spellcheck="false" oninput="this.parentElement.querySelector`button`.disabled=false" onkeypress="subm(event)">
  <button onclick="alert$.next`Testing…`;submitSolution`p`" class="md-button md-button--primary">&#x2714; Test</button>
</div>
<p id="p_Output"></p>

> Try entering `{+/,⍵∊'AEIOU'}` which handles all test cases.

<script>
    testCases = {"a": ["'COOLAPL'","''","'NVWLSHR'","{⍵[?⍨≢⍵]}'AEIOU',⎕A[?26⍴⍨9+?16]"],"b": ["2 3⍴'APLYES'","⎕A[?26⍴⍨1+?2⍴⍨1+?2]","''⍴⍨¯1+?⍨3"],"f": "{+/,⍵∊'AEIOU'}","p": "{⊃⍣(1=≢,⍵)⊢⍵}"}
</script>
