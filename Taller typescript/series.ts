export class Serie {
    id: number;
    title: string;
    network: string;
    seasons: number;
    description: string;
    website: string;
    imageUrl: string;

    constructor(id: number, title: string, network: string, seasons: number, description: string, website: string, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.network = network;
        this.seasons = seasons;
        this.description = description;
        this.website = website;
        this.imageUrl = imageUrl;
    }
}