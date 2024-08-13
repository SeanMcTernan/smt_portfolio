import contentful from "contentful";
import type { Asset, EntryFieldTypes, EntrySkeletonType, EntryFields } from "contentful";


interface TypeTechnologiesFields {
    technologyName: EntryFields.Symbol;
    technologyUrl?: EntryFields.Symbol;
    technologyLogo?: Asset;
}

type TypeTechnologies = EntrySkeletonType<TypeTechnologiesFields>;


export interface TypeProjectDataFields {
    projectTitle: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    cardImage: Asset;
    infoCardDescription: EntryFields.Symbol;
    projectBreakdown: EntryFields.RichText;
    repoUrl?: EntryFields.Symbol;
    technologiesUsed?: EntrySkeletonType<TypeTechnologiesFields>[];
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

// interface Technologies {
//     contentTypeId: "technologies",
//     fields: {
//         technologyName: EntryFieldTypes.Text;
//         technologyUrl: EntryFieldTypes.Text;
//         technologyLogo: EntryFieldTypes.AssetLink;
//     }
// }



// export interface ProjectData {
//     contentTypeId: "projectData",
//     fields: {
//         projectTitle: EntryFieldTypes.Text,
//         slug: EntryFieldTypes.Text,
//         infoCardDescription: EntryFieldTypes.Text,
//         projectBreakdown: EntryFieldTypes.RichText,
//         repoURL: EntryFieldTypes.Text,
//         technologiesUsed: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Technologies>>,
//         cardImage: Asset,
//     }
// }



export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.DEV
        ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
        : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});