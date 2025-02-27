"use server";

import { LoginSchema } from "@/types/login-schema";
import { actionClient } from "@/lib/safe-action";
import bcrypt from "bcrypt";
import { db } from "../db";
import { eq } from "drizzle-orm";
import { users,words } from "../schema";
import { signIn } from "../auth";
import { redirect } from "next/navigation";
import { WordSchema } from '@/types/word-schema'

export const AddWord = actionClient
  .schema(WordSchema)
  .action(
    async ({ parsedInput: { word, translation,sentence, category, createdAt } }) => {
      const existingWord = await db.query.words.findFirst({
        where: eq(words.word, word),
      });

      if (existingWord) {
        return { error: "Word already exists" };
    }

    await db.insert(words).values({
        word: word,
        translation: translation,
        sentence: sentence,
        category: category,
        createdAt: createdAt,
        updatedAt: createdAt
    });

    return { success: "Word added successfully" }
    }

  );

 //get words api that supports pagination and search

export const GetWords = actionClient
  .action(
    async ({ parsedInput: { page, limit, search } }) => {
      const words = await db.query.words.findMany({
        where: search ? { word: { contains: search } } : {},
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      });

      return { data: words }
    }
  );
  