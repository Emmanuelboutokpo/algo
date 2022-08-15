 let a =parseInt(prompt("Entrer votre a"));
 let b =parseInt(prompt("Entrer votre b"));
 let c =parseInt(prompt("Entrer votre c"));
 let discriminant, x1,x2, rep;
alert("L'équation est : "+ a+"x²+"+b+"x+"+c);
discriminant=b*b -4*(a*c);
if (discriminant>0) {
    x1=(-b+Math.sqrt(discriminant))/2*a;
    x2=(-b-Math.sqrt(discriminant))/2*a;
    rep= discriminant + " est positif alors l'équation admet deux solutions x1 et x2 respectivement " + x1+"et"+x2;
} else if (discriminant==0){
    x1=x2=-b/2*a;
    rep= discriminant + " est nul alors l'équation  admet une racine double x1=x2" +x1;
}else{
    rep= discriminant + " est strictement négatif, l'équation n'admet pas de solution réelle, mais admet deux solutions complexes"
}
alert(rep)