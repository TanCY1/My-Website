document.getElementById("Click Me").onclick = function() 
{
    document.getElementById("Reveal").style.color= "gray"
    document.getElementById("Reveal").innerHTML = Math.floor(Math.random()*101)
}
