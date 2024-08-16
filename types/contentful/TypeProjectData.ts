import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeTechnologiesFields } from "./TypeTechnologies";

export interface TypeProjectDataFields {
    projectTitle: EntryFields.Symbol;
    projectOverview: EntryFields.Text;
    projectBreakdown: EntryFields.RichText;
    projectImages?: Asset[];
    repoUrl?: EntryFields.Symbol;
    technologiesUsed?: Entry<TypeTechnologiesFields>[];
    slug: EntryFields.Symbol;
    cardImage: Asset;
    infoCardDescription: EntryFields.Symbol;
}

export type TypeProjectData = Entry<TypeProjectDataFields>;
