import axios, { AxiosResponse } from "axios";
import { CategoriesResult } from "../interfaces/categories";
import { PlayerResult } from "../interfaces/players";
import { TournamentResult } from "../interfaces/tournaments";

class TemCSAPI {

    url: string = "https://api.temcs.gg/api/v001/showcase/temtem";
    options: object = {};
    constructor(options?: object) {
        if (options) {
            this.options = options;
        }
    }

    async getCategories(limit: boolean = true): Promise<CategoriesResult[]> {
        try {
            const response = await axios.get<CategoriesResult[]>(`${this.url}/landing/categories?nolimit=${limit}`, this.options);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getTournaments(limit: boolean = true): Promise<TournamentResult[]> {
        try {
            const response = await axios.get<TournamentResult[]>(`${this.url}/landings?nolimit=${limit}`, this.options);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getTournamentWithSlug(slug: "emea" | "pcfc" | "amer", allData: boolean = true): Promise<TournamentResult> {
        console.log(`Querying ${slug} tournaments...`)
        try {
            const response = await axios.get<TournamentResult>(`${this.url}/landing/${slug}?allData=${allData}`, this.options);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getTournamentWithId(id: string): Promise<PlayerResult> {
        try {
            const response = await axios.get<PlayerResult>(`${this.url}/tournament/${id}`, this.options);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export { TemCSAPI };
