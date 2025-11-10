import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const friendMessages = pgTable('friend_messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  message: text('message').notNull(),
  approved: boolean('approved').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  approvedAt: timestamp('approved_at'),
});

export type FriendMessage = typeof friendMessages.$inferSelect;
export type NewFriendMessage = typeof friendMessages.$inferInsert;
