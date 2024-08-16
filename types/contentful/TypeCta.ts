import type { Entry, EntryFields } from "contentful";

export interface TypeCtaFields {
    ctaText: EntryFields.Symbol;
    urlPath: EntryFields.Symbol;
}

export type TypeCta = Entry<TypeCtaFields>;
