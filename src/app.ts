"use strict";

import { RegistroParticipante, Seed, UniquePlayers } from "./interfaces/players";
import { TemCSAPI } from "./utils/api";
const api = new TemCSAPI();
const allPlayers:UniquePlayers[] = [];
(async () => {
    const result = await api.getTournamentWithSlug("emea");
    if (!result.returnData.tournaments) return;
    console.log(`Found ${result.returnData.tournaments.length} tournaments`);
    const tournamentIds = result.returnData.tournaments.map(t => t.slug);
    const tournamentResults = await Promise.all(tournamentIds.map(id => api.getTournamentWithId(id)));

    for (const r of tournamentResults) {
        const { registroParticipantes, seeds } = r.returnData.torneo;

        const players = registroParticipantes.map(ele => {
            const ele2 = seeds.find(e => e.participantId === ele.participantId);
            return { teamId: ele.roster, participant: { id: ele.participantId, name: ele2 ? ele2.participant : "Unknown" } };
        });

        // add only unique players
        players.forEach(player => allPlayers.push(player));
    }

    // get unique players
    const uniquePlayers = [...new Set(allPlayers.map(player => JSON.stringify(player)))].map(str => JSON.parse(str));
    console.log(`Found ${uniquePlayers.length} unique players`);    
    console.table(uniquePlayers)
})();