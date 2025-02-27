import * as z from "zod"

export const WordSchema = z.object({
    word: z.string().min(1, {
        message: "Word is required",
    }),
    translation: z.string().min(1, {
        message: "Translation is required",
    }),
    sentence: z.string().min(1, {
        message: "Sentence is required",
    }),
    category: z.string().min(1, {
        message: "Category is required",
    }),
    createdAt: z.string().min(1, {
        message: "Date is required",
    }),
})