// 🧠 CERVEAU - Conscience, Logique, Mathématique, Contrôle
const CERVEAU = {
  conscience: "Je suis SEFE, je contrôle tout",
  
  logique: function(domicile, exterieur) {
    let forceD = domicile * 1.2;
    let forceE = exterieur * 1.1;
    return {
      forceD: forceD.toFixed(1),
      forceE: forceE.toFixed(1),
      controle: forceE > forceD ? "EXTERIEUR" : "DOMICILE",
      decision: forceE > forceD ? "1-2" : "2-1"
    };
  },
  
  mathematique: function(cote1, cote2) {
    return (cote1 * cote2).toFixed(2);
  },
  
  analyser: function() {
    console.log("🧠 Cerveau activé:", this.conscience);
    return this.logique(3, 4);
  }
};

// Export pour index.html
if (typeof module !== 'undefined') module.exports = CERVEAU;
