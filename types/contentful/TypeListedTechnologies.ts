import type { Entry, EntryFields } from "contentful";
import type { TypeTechnologiesFields } from "./TypeTechnologies";

export interface TypeListedTechnologiesFields {
    collectionName?: EntryFields.Symbol;
    listedTechnologies: Entry<TypeTechnologiesFields>[];
}

export type TypeListedTechnologies = Entry<TypeListedTechnologiesFields>;
