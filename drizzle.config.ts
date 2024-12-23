import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  driver: 'pglite',
  dialect: 'postgresql',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL || '',
    ssl: true
  },
  verbose: true,
  strict: true
} satisfies Config;