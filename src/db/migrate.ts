import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import * as schema from './schema';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: true
  }
});

const db = drizzle(pool, { schema });

async function main() {
  console.log('Migration started...');
  
  // UUID 확장 설치
  await pool.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  
  await migrate(db, {
    migrationsFolder: 'src/db/migrations',
    migrationsTable: 'drizzle_migrations'
  });
  console.log('Migration completed.');
  await pool.end();
}

main().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});