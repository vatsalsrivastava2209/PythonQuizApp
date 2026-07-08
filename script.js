let i=0,sel={};let t=1800;
function render(){q.innerHTML=questions[i].q;opts.innerHTML='';questions[i].o.forEach((x,n)=>{opts.innerHTML+=`<div><label><input type=radio name=o ${sel[i]==n?'checked':''} onchange='sel[${i}]=${n}'> ${x}</label></div>`})}
function nextQ(){if(i<questions.length-1){i++;render()}else finish()}
function prevQ(){if(i>0){i--;render()}}
function finish(){let sc=0;questions.forEach((q,idx)=>{if(sel[idx]==q.a)sc++});result.innerHTML=`Score ${sc}/30`}
setInterval(()=>{t--;let m=Math.floor(t/60),s=t%60;timer.textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;if(t<=0)finish()},1000);
render();