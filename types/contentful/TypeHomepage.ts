import type { Entry, EntryFields } from "contentful";
import type { TypeCtaFields } from "./TypeCta";

export interface TypeHomepageFields {
    title: EntryFields.Symbol;
    blurb: EntryFields.Symbol;
    cta: Entry<TypeCtaFields>;
}

export type TypeHomepage = Entry<TypeHomepageFields>;
