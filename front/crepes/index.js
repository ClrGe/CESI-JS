let button = document.getElementById("generate");
            let farine  =   63,
                oeuf    =   1,
                lait    =   0.2,
                sucre   =   0.5,
                beurre  =   13;

            function addCode() {

                const   ing1Div = document.getElementById('ingredient01'),
                        ing2Div = document.getElementById('ingredient02'),
                        ing3Div = document.getElementById('ingredient03'),
                        ing4Div = document.getElementById('ingredient04'),
                        ing5Div = document.getElementById('ingredient05'),
                        ing6Div = document.getElementById('ingredient06');

                ing1Div.innerText = "Il faut " + farine + " g de farine";
                ing2Div.innerText = "Il faut " + oeuf + " oeuf(s)";
                ing3Div.innerText = "Il faut " + lait + " L de lait";
                ing4Div.innerText = "Il faut " + sucre + " c.a.s de sucre";
                ing5Div.innerText = "Il faut " + beurre + " g de beurre";
                ing6Div.innerText = "";

                console.log("Vous faîtes des crêpes pour " + nbGuests + " personnes");
                console.log("Il faut " + farine + " g de farine");
                console.log("Il faut " + oeuf + " oeufs");
                console.log("Il faut " + lait.toFixed(2) + " L de lait ");
                console.log("Il faut " + sucre + " g de sucre");
                console.log("Il faut " + beurre + " g de beurre");
                    
                return "Next";
            }
            button.addEventListener("click", function (e) {
                let nbGuests = document.getElementById("nbGuests").value;
                if (nbGuests <= 0) {
                    alert("Il faut renseigner un nombre valide")
                } else {
                    farine  =   63,
                    oeuf    =   1,
                    lait    =   0.2,
                    sucre   =   0.5,
                    beurre  =   13;
                    let newValue = parseInt(nbGuests.value);
                    nbGuests.value = newValue;

                    farine  *=  nbGuests;
                    oeuf    *=  nbGuests;
                    lait    *=  nbGuests;
                    sucre   *=  nbGuests;
                    beurre  *=  nbGuests;

                    addCode();

                    return "Bon appétit";
                }
            });
            console.log(button, nbGuests.value);

            let  lotOeuf    =   12,
                 achatOeuf  =   Math.ceil(oeuf / lotOeuf);
                 
            console.log(achatOeuf + " pack de " + lotOeuf + " oeufs");