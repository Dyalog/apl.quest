
$=s=>document.querySelector(s);
let res 
function run(expr, id) {
	let socket = new WebSocket("wss://dyalog.run/api/v0/ws/execute");
	socket.onopen = () => socket.send(MessagePack.encode({
    language: "dyalog_apl",
    code: expr,
    timeout: 15,
	}));

	socket.onmessage = async event => {
		let response = await MessagePack.decodeAsync(event.data.stream());
		res = new TextDecoder().decode(response.stdout)
    let status = res.search()
    let rx = /^¯?[0-9]+/   // Extract initial number as correctness state return code
    let rc = +rx.exec(res)[0].replace("¯","-")  // Numeric Return Code
    let out = res.replace(/`[^`]+`/g,x=>'<code>'+x.split('`')[1]+'</code>').replace(/^(¯|[0-9])+\s+/,"");    
    let code = "<code>"+$("#"+id+"_Input").value.trim() +"</code>" 
    out = out.replace(/^Submission/, "<big>😮</big> " + code)
             .replace(/^Result should have been/, "<big>☹️</big> " + code + " should have returned ")
             .replace(/^Passed all basic and edge/, "<big>😀</big> Passed all basic and edge")
             .replace(/^Passed/, "<big>🙂</big> Passed")
    $("#"+id+"_Output").innerHTML = out
	}
}

async function submitSolution(id) {  
  let inp = $("#" + id + "_Input")
  let code = inp.value;
  inp.parentElement.querySelector("button").disabled = true;
  if (code.length) {
    let problem = {"P0": testCases};
    var expr = tns + "\n" + importTestNS + "\n" + "p← ⎕JSON'" + JSON.stringify(problem).split("'").join("''") + "'\n" + "⎕←(p Test.Run)1'" + code.split("'").join("''") +  "'";

    run(expr, id);
  }
}

subm=e=>e.keyCode==13?e.target.parentElement.querySelector`button`.click():0