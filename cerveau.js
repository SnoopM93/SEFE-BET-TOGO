const CERVEAU = {
  conscience: "SEFE BET GRATUIT - Jamais de paiement",
  mathematique: (fDom,fExt,xgD,xgE,bless) => {
    let sD = (fDom*0.4)+(xgD*0.4)-(bless.dom*0.2);
    let sE = (fExt*0.4)+(xgE*0.4)-(bless.ext*0.2);
    return {sD,sE,confiance:Math.round(70+Math.abs(sD-sE)*10)};
  }
};
