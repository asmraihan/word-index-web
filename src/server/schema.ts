import {
  pgTable,
  text,
  pgEnum,
} from "drizzle-orm/pg-core"
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const RoleEnum = pgEnum("role", [
  "Manager",
  "Admin",
]);

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  firstName: text("firstName"),
  lastName: text("lastName"),
  location: text("location"),
  email: text("email").notNull(),
  image: text("image").default("no-image"),
  password: text("password"),
  role: RoleEnum("role").notNull().default("Manager"),
})


export const words = pgTable("word", {
  id: text("id")
    .$defaultFn(() => crypto.randomUUID()),
  word: text("word").notNull(),
  translation: text("translation").notNull(),
  sentence: text("sentence").notNull(),
  category: text("category").notNull(),
  createdAt: text("createdAt").notNull().default("now()"),
  updatedAt: text("updatedAt").notNull().default("now()"),
});


// export const WordSchema = createSelectSchema(words);
// export type wordsType = z.infer<typeof WordSchema>;