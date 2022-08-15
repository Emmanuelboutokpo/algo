 let note1 =parseFloat(prompt("Entrer votre note 1"))
 let note2 =parseFloat(prompt("Entrer votre note 2"))
 let note3 =parseFloat(prompt("Entrer votre note 3"))
 let coef1 =parseFloat(prompt("Entrer votre coef 1"))
 let coef2 =parseFloat(prompt("Entrer votre coef 2"))
 let coef3 =parseFloat(prompt("Entrer votre coef 3"))
 let moy, mention;

 if ((note1>0 && note1<=20) && (note2>0 && note2<=20)&&(note3>0 && note3<=20)) {
    moy=(note1*coef1+note2*coef2 + note3*coef3)/(coef1+coef2+coef3);
    if (moy<10) {
        mention ="Insuffisant"
    } else  if (moy>=10 && moy<12) {
        mention="Passable"
    }else if(moy>=12 && moy<14){
        mention="Assez-bien"
    }else if(moy>=14 && moy <16){
        mention="Bien"
    }else{
        mention ="Très-bien"
    }
 } else {
    alert("Veuillez entrer un nombre entre 0 et 20")
 }
 alert("Votre moyenne : " + moy + " Mention : " + mention)