import { defineConfig } from "drizzle-kit";
export default defineConfig({
  //   out: "./drizzle",
  schema: "./app/utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-content_owner:1M2PRUHriznp@ep-bold-rain-a5p41agi.us-east-2.aws.neon.tech/ai-content?sslmode=require",
  },
});
