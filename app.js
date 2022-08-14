let R1 = parseFloat(prompt("veuillez  entrer R1"));
let R2 = parseFloat(prompt("veuillez  entrer R2"));
let R3 = parseFloat(prompt("veuillez  entrer R3"));
let serie,parallele;
serie=R1+R2+R3;
parallele=(R1*R2*R3)/((R1*R2)+(R2*R3)+(R1*R3))
alert("La résistance série : " + serie + " Ohm" )
alert("La résistance parallele : " + parallele + " Ohm" )