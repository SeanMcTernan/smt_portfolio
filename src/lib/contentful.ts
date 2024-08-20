import contentful from "contentful";

import type { Asset, EntryFieldTypes, EntrySkeletonType, EntryFields } from "contentful";


export interface TypeTechnologiesFields {
    technologyName: EntryFields.Symbol;
    technologyUrl?: EntryFields.Symbol;
    technologyLogo?: Asset;
}

export type TypeTechnologies = EntrySkeletonType<TypeTechnologiesFields>;


export interface TypeProjectDataFields {
    projectTitle: EntryFields.Symbol;
    projectOverview: EntryFields.Text;
    projectBreakdown: EntryFields.RichText;
    repoUrl?: EntryFields.Symbol;
    technologiesUsed?: EntrySkeletonType<TypeTechnologiesFields>[];
    slug: EntryFields.Symbol;
    projectImage: Asset;
    infoCardDescription: EntryFields.Symbol;
}

export type TypeProjectData = EntrySkeletonType<TypeProjectDataFields>;


export interface BlogPost {
    contentTypeId: "blogPost",
    field: {
        title: EntryFieldTypes.Text
        content: EntryFieldTypes.RichText,
        date: EntryFieldTypes.Date,
        description: EntryFieldTypes.Text,
        slug: EntryFieldTypes.Text
    }
}

interface TypeCTAFields {
    ctaText: EntryFieldTypes.Text;
    urlPath: EntryFieldTypes.Text;
}

export interface TypeHompageFields {
    contentTypeId: "homepage";
    fields: {
        title: EntryFieldTypes.Text;
        blurb: EntryFieldTypes.Text;
        cta: EntrySkeletonType<TypeCTAFields>[];
    };
}

export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.DEV
        ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
        : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});