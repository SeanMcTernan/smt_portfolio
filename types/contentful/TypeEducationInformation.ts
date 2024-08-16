import type { Entry, EntryFields } from "contentful";

export interface TypeEducationInformationFields {
    name: EntryFields.Symbol;
    url?: EntryFields.Symbol;
    description?: EntryFields.Text;
}

export type TypeEducationInformation = Entry<TypeEducationInformationFields>;
