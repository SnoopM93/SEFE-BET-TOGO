// 🤖 IA + API - Plus de générateur aléatoire
const IA = {
  apiKey: "", 37df599c01774838a40ae6894cd9f363
  baseUrl: "https://api.football-data.org/v4/",

  // Calendrier hebdomadaire
  calendrier: {
    semaine: [],
    init: function() {
      let jours = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];
      let today = new Date();
      for (let i = 0; i < 7; i++) {
        let d = new Date(today);
        d.setDate(today.getDate() + i - today.getDay() + 1);
        this.semaine.push({
          jour: jours[i],
          date: d.toISOString().split('T')[0],
          display: d.toLocaleDateString('fr-FR', {day: '2-digit', month: 'short'})
        });
      }
    }
  },

  // Appel API réel
  fetchMatchs: async function(championnat, date) {
    // Pour l'instant données structurées, pas random
    // Remplace par vrai fetch quand tu as la clé
    /*
    const res = await fetch(`${this.baseUrl}competitions/${championnat}/matches?dateFrom=${date}&dateTo=${date}`, {
      headers: { "X-Auth-Token": this.apiKey }
    });
    return await res.json();
    */
    
    // Données réelles de ton screen pour test
    return [
      { id: 1, competition: "LIGA2", homeTeam: "RACING SANTANDER", awayTeam: "ESPANYOL", homeStats: {attaque: 75, defense: 60, forme: 70}, awayStats: {attaque: 80, defense: 65, forme: 78}, xG: 2.8 },
      { id: 2, competition: "BUNDESLIGA", homeTeam: "MAINZ 05", awayTeam: "WERDER BRÈME", homeStats: {attaque: 68, defense: 62, forme: 65}, awayStats: {attaque: 72, defense: 60, forme: 75}, xG: 2.6 }
    ];
  },

  // Décision finale
  decider: function(matchAnalyse) {
    let score = CERVEAU.predireScore(matchAnalyse.statsDom, matchAnalyse.statsExt);
    let plus = CERVEAU.predirePlusDeButs(matchAnalyse.statsDom.attaque/30, matchAnalyse.statsExt.attaque/30);
    let gg = CERVEAU.predireGG(1.2, 1.1);
    
    return {
      scoreExact: score,
      plusDeButs: plus.pick,
      plusSub: plus.sub,
      gg: gg.pick,
      ggSub: gg.sub,
      confiance: matchAnalyse.confiance
    };
  }
};

IA.calendrier.init();
