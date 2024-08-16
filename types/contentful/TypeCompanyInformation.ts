import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCompanyInformationFields {
    companyName: EntryFields.Symbol;
    companyUrl?: EntryFields.Symbol;
    companyLogo?: Asset;
}

export type TypeCompanyInformation = Entry<TypeCompanyInformationFields>;
