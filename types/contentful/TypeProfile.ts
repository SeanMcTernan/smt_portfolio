import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeEducationCollectionFields } from "./TypeEducationCollection";
import type { TypeListedTechnologiesFields } from "./TypeListedTechnologies";
import type { TypeWorkExperienceFields } from "./TypeWorkExperience";

export interface TypeProfileFields {
    title: EntryFields.Symbol;
    about: EntryFields.Text;
    profilePicture?: Asset;
    workExperience: Entry<TypeWorkExperienceFields>[];
    preferredTechnologies?: Entry<TypeListedTechnologiesFields>[];
    education?: Entry<TypeEducationCollectionFields>[];
}

export type TypeProfile = Entry<TypeProfileFields>;
