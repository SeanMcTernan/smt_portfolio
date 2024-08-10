import contentful from "contentful";
import type { EntryFieldTypes } from "contentful";

export interface BlogPost {
    contentTypeId: "blogPost",
    fields: {
        title: EntryFieldTypes.Text
        content: EntryFieldTypes.RichText,
        date: EntryFieldTypes.Date,
        description: EntryFieldTypes.Text,
        slug: EntryFieldTypes.Text
    }
}


export interface ProjectData {
    contentTypeId: "projectData",
    fields: {
        projectTitle: EntryFieldTypes.Text
        slug: EntryFieldTypes.Text; // the slug of the project
        infoCardDescription: EntryFieldTypes.Text; // Description for the info card
        projectBreakdown: EntryFieldTypes.RichText; // Detailed breakdown of the project
        repoURL: EntryFieldTypes.Text; // URL to the project's repository
        technologiesUsed: EntryFieldTypes.Array<EntryFieldTypes.Symbol>; // List of technologies used in the project
        cardImage: EntryFieldTypes.AssetLink;
    }
}

export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.DEV
        ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
        : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});