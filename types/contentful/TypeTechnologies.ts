import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeTechnologiesFields {
    technologyName: EntryFields.Symbol;
    technologyUrl?: EntryFields.Symbol;
    technologyLogo?: Asset;
}

export type TypeTechnologies = Entry<TypeTechnologiesFields>;
