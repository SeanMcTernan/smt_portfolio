import type { Entry, EntryFields } from "contentful";
import type { TypeEducationInformationFields } from "./TypeEducationInformation";

export interface TypeEducationCollectionFields {
    title: EntryFields.Symbol;
    collection: Entry<TypeEducationInformationFields>[];
}

export type TypeEducationCollection = Entry<TypeEducationCollectionFields>;
