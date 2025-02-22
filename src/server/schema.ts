import {
    pgTable,
    text,
    pgEnum,
  } from "drizzle-orm/pg-core"
  
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