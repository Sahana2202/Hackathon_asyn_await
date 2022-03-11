async function foo(){
    let cc=document.getElementById("main").value;
    console.log(cc);
    let res= await fetch(`https://api.nationalize.io/?name=${cc}`);
    let res1=await res.json();
    console.log(res1.country.length);
    len=res1.country.length;
    for( let i=0;i<len-1;i++){
        let division=document.createElement("div");
        division.innerHTML=`Country:  ${res1.country[i].country_id}   Probability:${res1.country[i].probability}`;
        document.body.append(division);  
    }
}