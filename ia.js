// 🤖 IA - Le chef qui relie Cerveau + Yeux + Coeur
const IA = {
  pronostiquer: function(cerveauData, yeuxData) {
    // IA décide en fonction du cerveau et des yeux
    if (yeuxData.confiance > 80) {
      return {
        scoreExact: "1-2",
        plusDeButs: "+1,5",
        plusSub: "PLUS DE 1,5 BUTS",
        gg: "GG",
        ggSub: "OUI",
        confiance: yeuxData.confiance,
        final: `Victoire Extérieur ${cerveauData.decision}`
      };
    }
    return {
      scoreExact: "1-1",
      plusDeButs: "+1,5",
      gg: "GG",
      confiance: 75
    };
  },
  
  genererTickets: function() {
    let cerveauData = CERVEAU.analyser();
    let yeuxList = YEUX.analyserTous();
    
    return yeuxList.map(yeux => {
      return this.pronostiquer(cerveauData, yeux);
    });
  }
};

console.log("🤖 IA prête");
if (typeof module !== 'undefined') module.exports = IA;
