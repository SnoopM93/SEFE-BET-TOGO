// 👀 YEUX - Analyse avec vraies données API
const YEUX = {
  // Base de données championnats
  championnats: {
    "BUNDESLIGA": { id: "BL1", pays: "Allemagne", logo: "⚽" },
    "LIGA2": { id: "SD", pays: "Espagne", logo: "🏆" },
    "PREMIER_LEAGUE": { id: "PL", pays: "Angleterre", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    "LIGUE1": { id: "FL1", pays: "France", logo: "🇫🇷" }
  },

  analyserMatch: function(matchAPI) {
    // matchAPI vient de l'API réelle
    return {
      id: matchAPI.id,
      championnat: matchAPI.competition,
      domicile: matchAPI.homeTeam,
      exterieur: matchAPI.awayTeam,
      statsDom: matchAPI.homeStats, // attaque, defense, forme
      statsExt: matchAPI.awayStats,
      xG: matchAPI.xG,
      confiance: this.calculerConfiance(matchAPI)
    };
  },

  calculerConfiance: function(match) {
    // Confiance basée sur données, pas random
    let conf = 50;
    if (match.xG > 2.5) conf += 20;
    if (match.formeDiff < 3) conf += 15;
    return Math.min(conf, 95);
  }
};
