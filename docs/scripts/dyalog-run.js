// Runs apl.quest submissions on TryAPL (https://tryapl.org) via its JSON API.
//
// The check is performed by a single self-contained APL expression whose output
// is the report. The reference solution (Ref), the normalised submission (Usr)
// and the optional post-processing (Post) are spliced in as literal top-level
// functions rather than being built with ⍎: TryAPL's sandbox denies ⎕C, ⎕UCS
// and similar inside functions created by ⍎, but allows them at top level.
//
// The harness (Ap, Bt, Args, Rep, TR) is ported from scripts/Test.apln. Test.Run
// there is a tradfn; TryAPL cannot ⎕FX/⎕FIX one, so TR is a dfn reimplementation
// emitting the same "<returnCode> <message>" protocol this file already parses.
// TR returns (report)(fail); when a submission errors, fail holds the failing
// arguments so we re-run that case untrapped and let TryAPL name the error
// (⎕EN/⎕DMX, which the original harness used, are unavailable in the sandbox).

$=s=>document.querySelector(s);

const HARNESS = "Ap←{2=≢⍵:⊃⍺⍺/⍵ ⋄ ⍺⍺⊃⍵} ⋄ Bt←{'`',⍵,'`'} ⋄ Args←{val←-≢⍵ ⋄ ∊val↑' as left argument and ' ' as right argument',⍨∘Bt∘⍺⍺¨⍵} ⋄ Rep←{P←'(',')',⍨⍕⋄ {P⍣(')('≢¯2↑1⌽⍵)⊢⍵}{s←⍵/⍨~≠\\''''=⍵ ⋄ p←s/⍨0=+\\-⌿'()'∘.=s ⋄ b←p/⍨0=+\\-⌿'[]'∘.=p ⋄ ∨/'⊂,⍴+-×/⍳'∊p:P ⍵ ⋄ ⍵}{⍵≡⍬:'⍬' ⋄ ⍵≡'':'''''' ⋄ ⍵≡⎕D:'⎕D' ⋄ ⍵≡⎕A:'⎕A' ⋄ ⍵≡⎕AV:'⎕AV' ⋄ scal←0∊rank←+/⍴s←⍴⍵ ⋄ char←>/(simple num)←∧\\~(10|⎕DR 1/⍵)∊¨6(0 2) ⋄ ⍺←0 ⋄ (rc ref)←2↑⍺ ⋄ or←scal∧1=≡R←⍵ ⋄ or∨9=⎕NC'R':ref{⍵⊣÷⍺}⍕⍵ ⋄ mod←(0<rank)∧(n=0)∨(5×char)<n←×/s ⋄ mod←mod∧as←char{0∊⍴⍵:1 ⋄ ⍵∧.≡1↑⍵}obj←,⍵ ⋄ obj←mod{16::⊂'[ref]' ⋄ 1(↑⍣⍺)⍵}obj ⋄ shape←mod{⍵≡,1:',' ⋄ (⍺∨1<⍴⍵)/'⍴',⍨⍕⍵}s ⋄ shape←shape,(encl←simple<as)⍴'⊂' ⋄ parens←rc∧simple≤(0<⍴shape)∨(rank=1)∧num∨∨/(4↑⎕AV)∊⍵ ⋄ (lp rp)←parens⍴¨'()' ⋄ Paren←{>/'⎕' 'ADÁN'∊¨⍨2↑⍵:P ⍵ ⋄ ⍵} ⋄ ~simple:rp,⍨lp,shape,encl{⍺⍲'('=1↑⍵:⍵ ⋄ 1↓¯1↓⍵}1↓⊃,/' ',¨Paren¨1 ref∘∇¨obj ⋄ ⎕PP←17 ⋄ numv←{⎕CT←⎕IO←0 ⋄ ∨/e←(0∊s),⍬≡⍴⍵:⍕e/'⍬',1↑⍵ ⋄ ⍕⍵} ⋄ obj←shape,num ⍺{1↑⍺:numv ⍵ ⋄ ⎕IO←0 ⋄ QU←{Q,((1+t=Q)/t←⍵),Q←''''} ⋄ Always←⎕A,⎕D,'abcdefghijklmnopqrstuvwxyz_.,:;%!\"/=\\-+''#$£¢^¿¡(){}[]§@`∣¶&' ⋄ Always,←'ÁÂÃÇÈÊËÌÍÎÏÐÒÓÔÕÙÚÛÝþãìðòõÀÄÅÆÉÑÖØÜßàáâäåæçèéêëíîïñùúûüóôöø' ⋄ Always,←'≤≥⌿⍀<>≠∨∧÷×?∊⍴~↑↓⍳○*⌈⌷¨⌊∇∆⍙⍨∘⊂⊃∩∪⊥⊤⌶|⍺⍵¯⍬⍱⍲⍒⍋⍉⌽⊖⍟⌹⍕⍎⍫⍪≡≢⍷⋄←→⍝⎕⍞⍣ ' ⋄ Always,←'⊢⊣',⎕UCS 8838 9016 9018 9056 9060 9080/⍨80=⎕DR'' ⋄ ∧/t←⍵∊Always:QU ⍵ ⋄ UCS←{1⌽')(⎕UCS ',⍕numv ⎕UCS ⍵} ⋄ minsize←3 ⋄ c∨←minsize>∊⍴¨c←ucs⊂⍨c←1,1↓ucs≠¯1⌽ucs←~t ⋄ (lp rp)←'()'/⍨¨(1↓⍺)∧1<+/c←1,1↓ucs≠¯1⌽ucs←∊c ⋄ rp,⍨lp,∊{⍺,',',⍵}/(c/ucs){⍺:UCS ⍵ ⋄ QU ⍵}¨c⊂⍵}obj ⋄ lp,obj,rp}⍵} ⋄ TR←{0::('¯315 Internal error')⍬ ⋄ defs expr←⍵ ⋄ ''≡expr~' ':('99 ')⍬ ⋄ proh←{×defs.⎕NC'x':defs.x∩expr ⋄ ''}0 ⋄ 0≠≢proh:('0 Solution uses ',(Bt proh),' which ',('is' 'are'⊃⍨2⌊≢proh),' prohibited for this problem')⍬ ⋄ as←{⍎¨⊆⍵}¨defs.a ⋄ bs←{×defs.⎕NC'b':{⍎¨⊆⍵}¨defs.b ⋄ ⍬}0 ⋄ chk←{0::¯1 ⋄ (Post ⍺)≡Post Usr Ap ⍵} ⋄ refA←{Ref Ap ⍵}¨as ⋄ refB←{Ref Ap ⍵}¨bs ⋄ cA←refA chk¨as ⋄ cB←refB chk¨bs ⋄ (∧/1=cA)∧(∧/1=cB):('2 Passed all basic and edge cases – good job!')⍬ ⋄ ∧/1=cA:{b←⍵⊃bs ⋄ ('1 Passed all basic tests – for extra points, consider cases like ',(Rep Args b),' which should give ',(Bt Rep Ref Ap b))⍬}(1≠cB)⍳1 ⋄ ∨/cA≤0:{a←⍵⊃as ⋄ (⍵⊃cA)=0:('0 Result should have been ',(Bt Rep Ref Ap a),' with ',Rep Args a)⍬ ⋄ ('¯1 Submission errored with ',Rep Args a)(⊂a)}(cA≤0)⍳1 ⋄ ('¯911 The test server''s response could not be parsed')⍬}";

// Normalise a submission the way Test.apln's Norm does: drop a trailing comment
// (outside strings), wrap a bare dfn body (containing ⍵) in {…}, parenthesise.
function norm(s){
  let code="",inStr=false;
  for(const c of s){
    if(c==="'"){inStr=!inStr;code+=c;}
    else if(c==="⍝"&&!inStr){break;}
    else{code+=c;}
  }
  let stripped=code,prev;
  do{prev=stripped;stripped=stripped.replace(/\{[^{}]*\}/g,"");}while(stripped!==prev);
  const wrap=stripped.includes("⍵");
  return "("+(wrap?"{":"")+code+(wrap?"}":"")+")";
}

// The submission is spliced literally, so an unbalanced () [] {} or ' would
// swallow the rest of the expression and yield a confusing error. Catch it up
// front and name it the way Dyalog does, e.g. "Unpaired parenthesis".
function imbalance(s){
  const NAME={"(":"parenthesis","[":"bracket","{":"brace"},
        OPEN={")":"(","]":"[","}":"{"},
        stack=[];
  let inStr=false;
  for(const c of s){
    if(inStr){if(c==="'"){inStr=false;}continue;}
    if(c==="'"){inStr=true;}
    else if(c==="⍝"){break;}
    else if(c==="("||c==="["||c==="{"){stack.push(c);}
    else if(c===")"||c==="]"||c==="}"){
      if(stack.pop()!==OPEN[c]){return "Unpaired "+NAME[OPEN[c]];}
    }
  }
  if(inStr){return "Unpaired quote";}
  if(stack.length){return "Unpaired "+NAME[stack[stack.length-1]];}
  return "";
}

const q=s=>s.split("'").join("''"); // escape ' for an APL character literal
// Turn `…` spans into <code> the way the report protocol expects.
const codeify=s=>s.replace(/`[^`]+`/g,x=>'<code class="language-APL">'+x.split("`")[1]+"</code>");

// Name the error from TryAPL's trailing error output. A line like
// "DOMAIN ERROR: Divide by zero" becomes "`DOMAIN ERROR` (Divide by zero)"; the
// class is a code span, the explanation stays plain. "RANK ERROR" (no detail)
// becomes just "`RANK ERROR`". Report lines have lower-case words before any
// colon, so they never match.
function errorName(lines){
  for(const line of lines){
    const i=line.indexOf(":");
    const cls=(i<0?line:line.slice(0,i)).trim();
    if(/^[A-Z][A-Z ]*[A-Z]$/.test(cls)){
      const detail=i<0?"":line.slice(i+1).trim();
      return "`"+cls+"`"+(detail?" ("+detail+")":"");
    }
  }
  return "";
}

async function run(expr,id){
  const out=$("#"+id+"_Output");
  let lines;
  try{
    const ctl=new AbortController();
    const timer=setTimeout(()=>ctl.abort(),20000);
    const resp=await fetch("https://tryapl.org/Exec",{
      method:"POST",
      headers:{"Content-Type":"application/json; charset=utf-8"},
      body:JSON.stringify(["",0,"",expr]),
      signal:ctl.signal
    });
    clearTimeout(timer);
    lines=(await resp.json())[3];
  }catch(e){
    out.innerHTML="<big>\u23F1\uFE0F</big> The test server did not respond \u2013 please try again";
    return;
  }
  render(lines,id);
}

function render(lines,id){
  const inp=$("#"+id+"_Input").value.trim();
  const code='<code class="language-APL">'+inp+"</code>";
  let report=lines[0]||"";
  const err=errorName(lines);
  // A well-formed report starts with the numeric return code then the message.
  if(!/^¯?[0-9]/.test(report)){
    $("#"+id+"_Output").innerHTML="<big>\uD83D\uDE2E</big> "+code+" caused "+(err?codeify(err):"an error");
    return;
  }
  // If the submission was let error, name it from TryAPL's trailing error lines.
  if(err){report=report.replace("errored","caused "+err);}
  let out=codeify(report).replace(/^¯?[0-9]+\s*/,"");
  out=out.replace(/^Submission/,"<big>\uD83D\uDE2E</big> "+code)
         .replace(/^Result should have been/,"<big>\u2639\uFE0F</big> "+code+" should have returned ")
         .replace(/^Passed all basic and edge/,"<big>\uD83D\uDE00</big> Passed all basic and edge")
         .replace(/^Passed/,"<big>\uD83D\uDE42</big> Passed");
  $("#"+id+"_Output").innerHTML=out;
}

function submitSolution(id){
  const inp=$("#"+id+"_Input");
  const code=inp.value;
  inp.parentElement.querySelector("button").disabled=true;
  if(!code.length){return;}
  const bad=imbalance(code);
  if(bad){render(["SYNTAX ERROR: "+bad],id);return;}
  const post=("p" in testCases)?"{0::⍵ ⋄ ("+testCases.p+") ⍵}":"⊢";
  const expr=HARNESS
    +" ⋄ Ref←("+testCases.f+")"
    +" ⋄ Usr←"+norm(code)
    +" ⋄ Post←("+post+")"
    +" ⋄ (rep fail)←TR(⎕JSON'"+q(JSON.stringify(testCases))+"')('"+q(code)+"')"
    +" ⋄ ⎕←rep"
    +" ⋄ _←{0≠≢fail:Usr Ap⊃fail ⋄ ''}⍬";
  run(expr,id);
}

subm=e=>e.keyCode==13?e.target.parentElement.querySelector`button`.click():0
