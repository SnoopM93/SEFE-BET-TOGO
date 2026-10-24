// ia.js - Moteur central qui orchestre tout
const IA = {
  moteur: "SEFE-BET-IA-v1",
  
  decider: (cerveauData, yeuxData) => {
    // L'IA prend la décision finale
    let prono = CERVEAU.logique({xG_total: 3.7, forme: 4});
    let valide = CERVEAU.controle({cote: 1.85});
    
    return {
      prono_final: prono,
      confiance: cerveauData.confiance,
      analyse_yeux: yeuxData.tendance,
      valide: valide,
      message: `🤖 IA: ${prono} - ${cerveauData.confiance}% - Yeux voient ${yeuxData.tendance}`
    };
  }
};
