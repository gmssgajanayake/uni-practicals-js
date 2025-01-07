document.getElementById("incrementBtn").addEventListener("click",()=>{
      console.log(document.getElementById("number").textContent=new Date().toLocaleTimeString([], { timeStyle: "medium" }))
});
