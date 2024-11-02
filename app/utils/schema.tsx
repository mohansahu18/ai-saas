import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("ai_output", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aiResponse: text("aiResponse"),
  templateSlug: varchar("templateSlug").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
