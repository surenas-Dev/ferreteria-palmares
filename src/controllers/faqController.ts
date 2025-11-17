import faqData from "@/data/faq.json";
import { FAQ } from "@/models/faq";

export function getFAQ(): FAQ[] {
    return faqData as FAQ[];
}
