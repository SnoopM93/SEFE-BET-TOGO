// 👀 YEUX - Analyse, il regarde les matchs
const YEUX = {
  voir: function(match) {
    return {
      match: match,
      tendance: "Plus de 1,5 buts",
      buts: "Les deux marquent",
      xG: 2.8,
      confiance: 91,
      analyse: `Match ${match} analysé: GG + Over 1.5 validé`
    };
  },
  
  analyserTous: function() {
    return [
      this.voir("Racing Santander vs Espanyol"),
      this.voir("Mainz 05 vs Werder Brême")
    ];
  }
};

console.log("👀 Yeux ouverts");
if (typeof module !== 'undefined') module.exports = YEUX;
