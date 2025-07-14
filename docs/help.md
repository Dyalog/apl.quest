---
layout: set
title: Help
---

<h1>Help</h1>
<ul>
<li><p>The problems are designed to be solved using short APL dfns or tacit functions. If you find yourself writing more than a couple of statements in your solution, you can probably find a better way to do it.</p></li>

<li><p>A dfn is one or more APL statements enclosed in braces <code class="APL">{}</code>. The left hand argument, if any, is represented in a dfn by <code class="APL">⍺</code>, while the right hand argument is represented by <code class="APL">⍵</code>. For example:</p>
<pre class="APL">      'Hello' {⍺,'-',⍵,'!'} 'world'
Hello-world!</pre><p>A dfn terminates on the first statement that is not an assignment. If that statement produces a value, the dfn returns that value as its result. The diamond symbol <code class="APL">⋄</code> separates APL statements. For example:
</p><pre class="APL">      'left' { ⍵ ⋄ ⍺ } 'right'
right</pre><p>For more information on dfns, use <a href="https://aplwiki.com/wiki/Dfn" target="_blank">the APL Wiki</a>.</p></li>

<li><p>A tacit function is an APL expression that does not explicitly mention its arguments. In the example below <code class="APL">(+⌿÷≢)</code> is a tacit function which computes the average of a vector (list) of numbers.</p><pre class="APL">      (+⌿÷≢) 1 2 3 4 5 6
3.5</pre>
<p>For more information on tacit functions, see <a href="https://aplwiki.com/wiki/Tacit_programming" target="_blank">the APL Wiki</a>.</p></li>

<li><p>Each problem has a description and one or more examples. Wherever you see <i><code class="APL">your_function</code></i> is where you should insert your solution (either a dfn or tacit function). Do not add comments to your solutions.</p></li>

<li><p>Your code must run in a default Dyalog environment using <code class="APL">(⎕ML ⎕IO)←1</code>. If you use other settings for <code class="APL">⎕ML</code> or <code class="APL">⎕IO</code>, they must be local. If you don't know what that means, don't worry, it won't matter to you.</p></li>

<li><p>Several of the problem descriptions will describe arguments that can be a scalar (a single element) or a vector (a list). This is largely pedantic, but in such cases your functions should produce correct results for both types of input.</p></li>

<li><p>The symbol <code class="APL">⍝</code> is the APL comment symbol. In some of the examples, we provide comments to give you more information about the problem.</p></li>

<li><p>Some of the problem test cases use "boxed display" to make the structure of the returned results clearer. Boxing is enabled by default on <a href="https://tryapl.org/?a=%u2373%A8%u23734&run" target="_blank">TryAPL</a> and can be enabled in your local APL Session with the <code class="APL">]Box</code> user command:</p>
<pre class="APL">      ⍳¨⍳4
 1  1 2  1 2 3  1 2 3 4 
      ]Box on
Was OFF
      ⍳¨⍳4
┌─┬───┬─────┬───────┐
│1│1 2│1 2 3│1 2 3 4│
└─┴───┴─────┴───────┘</pre></li>
</ul>
