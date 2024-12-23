import { pgTable, serial, text, timestamp, varchar, uuid } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: varchar('email', { length: 255 }).unique().notNull(),
  emailVerified: timestamp('email_verified', { mode: 'date' }),
  image: text('image')
})

export const loginLogs = pgTable('login_logs', {
  id: uuid('id').primaryKey().default(sql`uuid_generate_v4()`),
  userEmail: text('user_email').notNull(),
  ipAddress: text('ip_address').notNull(),
  userAgent: text('user_agent').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
})