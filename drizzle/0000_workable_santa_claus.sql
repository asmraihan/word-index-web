CREATE TYPE "public"."role" AS ENUM('Manager', 'Admin');--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"firstName" text,
	"lastName" text,
	"location" text,
	"email" text NOT NULL,
	"image" text DEFAULT 'no-image',
	"password" text,
	"role" "role" DEFAULT 'Manager' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "word" (
	"id" text,
	"word" text NOT NULL,
	"translation" text NOT NULL,
	"sentence" text NOT NULL,
	"category" text NOT NULL,
	"createdAt" text DEFAULT 'now()' NOT NULL,
	"updatedAt" text DEFAULT 'now()' NOT NULL
);
