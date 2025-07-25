---
title: "APL Quest: Sample Problem"
description: "This is a sample problem to show how to answer the problems"
image: "https://apl.quest/img/aplquest.png"
url: "https://apl.quest/info/sample"
---
# Sample Problem: Counting Vowels

This is a sample problem to show you how to answer the problems on this website.

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
