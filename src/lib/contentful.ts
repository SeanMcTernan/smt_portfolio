import contentful from "contentful";

import type { Asset, EntryFieldTypes, EntrySkeletonType, EntryFields } from "contentful";


export interface TypeTechnologiesFields {
    contentTypeId: "technologies";
    fields: {
        technologyName: EntryFields.Symbol;
        technologyUrl?: EntryFields.Symbol;
        technologyLogo?: Asset;
    }
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

//Homepage Types

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

//Work Experience Types

export interface TypeProfileFields {
    contentTypeId: "profile";
    fields: {
        title: EntryFields.Symbol;
        about: EntryFields.Text;
        profilePicture?: Asset;
        workExperience: EntrySkeletonType<TypeWorkExperienceFields>[];
        preferredTechnologies?: EntrySkeletonType<TypeListedTechnologiesFields>[];
        education?: EntrySkeletonType<TypeEducationCollectionFields>[];
    };
}


export interface TypeWorkExperienceFields {
    fields:
    {
        title?: EntryFields.Symbol;
        companyName?: EntryFields.Symbol;
        companyLogo?: Asset;
        companyUrl?: EntryFields.Symbol;
        startDate: EntryFields.Date;
        endDate?: EntryFields.Date;
        description: EntryFields.Text;
    }
}

export interface TypeListedTechnologiesFields {
    contentTypeId: "listedTechnologies";
    fields: {
        collectionName?: EntryFields.Symbol;
        listedTechnologies: EntrySkeletonType<TypeTechnologiesFields>[];
    }
}

export interface TypeEducationInformationFields {
    fields: {
        name: EntryFields.Symbol;
        url?: EntryFields.Symbol;
        description?: EntryFields.Text;
    }
}


export interface TypeEducationCollectionFields {
    contentTypeId: "educationCollection";
    fields: {
        title: EntryFields.Symbol;
        collection: EntrySkeletonType<TypeEducationInformationFields>[];
    }
}


export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.DEV
        ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
        : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});