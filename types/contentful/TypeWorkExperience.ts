import type { Entry, EntryFields } from "contentful";
import type { TypeCompanyInformationFields } from "./TypeCompanyInformation";

export interface TypeWorkExperienceFields {
    title?: EntryFields.Symbol;
    companyName?: EntryFields.Symbol;
    startDate: EntryFields.Date;
    endDate?: EntryFields.Date;
    description: EntryFields.Text;
    companyInformation: Entry<TypeCompanyInformationFields>;
}

export type TypeWorkExperience = Entry<TypeWorkExperienceFields>;
