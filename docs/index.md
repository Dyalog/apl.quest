---
layout: set
title: Home
---

<script type="text/javascript">
    // Highlight home button on homepage
    document.getElementById("home").classList.add("active");
</script>

# APL Quest

<div align="right">
	<img src="{{ site.url }}{{ site.baseurl }}/img/logo.svg" style="width: 10vw;float: right;padding: 0 3em;">
</div>

This site automatically validates [APL](https://apl.wiki) solutions for practice problems sourced from [The APL Problem Solving Competition](https://www.dyalog.com/student-competition.htm#APLPSComp)'s phase 1.

Each problem starts with a task description; some also include a hint suggesting one or more APL primitives. These may be helpful in solving the problem, but you are under no obligation to use them. Clicking on a primitive in the hint opens the Dyalog documentation page for that primitive.

Each problem ends with some example cases. You can use these as a basis for implementing your solution.

Notice something wrong? [Report a bug](https://github.com/Dyalog/PracticeProblems/issues/new?assignees=&labels=&template=bug_report.md&title=).

Every problem has one or more solutions explained fully in [the APL Quest video series](https://www.youtube.com/playlist?list=PLYKQVqyrAEj9wDIUyLDGtDAFTKY38BUMN).

## Sample Problem: Counting Vowels

Write an APL function to count the number of vowels (A, E, I, O, U) in an array consisting of uppercase letters (A–Z).

💡 Hint: The membership function [`X∊Y`](http://help.dyalog.com/latest/#Language/Primitive%20Functions/Membership.htm) could be helpful for this problem.

Examples

```APL
      (your_function) 'COOLAPL'
3
      (your_function) ''          ⍝ empty argument
0
      (your_function) 'NVWLSHR'   ⍝ no vowels here
0
```

Below are three sample solutions. All three produce the correct answer, but the first twofunctions would be ranked higher by the competition judging committee. This is becausethe first two demonstrate better use of array-oriented programming.

```APL
      ({+/⍵∊'AEIOU'}) 'COOLAPL'   ⍝ good dfn
3
      (+/∊∘'AEIOU') 'COOLAPL'     ⍝ good tacit function
3
      {(+/⍵='A')+(+/⍵='E')+(+/⍵='I')+(+/⍵='O')+(+/⍵='U')} 'COOLAPL' ⍝ suboptimal dfn      
3
```

If you put each of the above three functions into the input field below and click Submit, you'll see that they only pass the basic test cases. This is because none of those functions handle arrays with 2 or more dimensions. The system will also give you an example of a multi-dimensional edge case that failed, so that you can attempt to improve your solution.

Try entering `{+/,⍵∊'AEIOU'}` which handles all test cases.

<script>
    testCases = {"P0_Sample_Problem": {"a": ["'COOLAPL'","''","'NVWLSHR'","{⍵[?⍨≢⍵]}'AEIOU',⎕A[?26⍴⍨9+?16]"],"b": ["2 3⍴'APLYES'","⎕A[?26⍴⍨1+?2⍴⍨1+?2]","''⍴⍨¯1+?⍨3"],"f": "{+/,⍵∊'AEIOU'}","p": "{⊃⍣(1=≢,⍵)⊢⍵}"}};
</script>

<div class="pdiv"><span class="urfn">your_function ← </span><input oninput='this.parentElement.querySelector("button").disabled = false' id="P0_Sample_Problem_Input"><button onclick="submitSolution('P0_Sample_Problem')">Test</button></div>
<div id="P0_Sample_Problem_Output" class="tioOutput"></div>
