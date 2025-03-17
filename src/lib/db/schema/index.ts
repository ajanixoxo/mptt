import { pgTable, uuid, text, timestamp, boolean, jsonb } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

// Define tables based on your existing Prisma schema
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const admins = pgTable("admins", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  role: text("role").notNull(), // "admin" or "super_admin"
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const events = pgTable("events", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  location: text("location"),
  eventDate: timestamp("event_date"),
  isOnline: boolean("is_online").default(false).notNull(),
  status: text("status").notNull(), // "active" or "closed"
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  createdById: uuid("created_by_id")
    .notNull()
    .references(() => admins.id),
})

export const registrations = pgTable("registrations", {
  id: uuid("id").primaryKey().defaultRandom(),
  eventId: uuid("event_id")
    .notNull()
    .references(() => events.id, { onDelete: "cascade" }),
  userName: text("user_name").notNull(),
  userEmail: text("user_email").notNull(),
  userPhone: text("user_phone"),
  additionalInfo: jsonb("additional_info"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

// Define relations
export const usersRelations = relations(users, ({ one }) => ({
  admin: one(admins, {
    fields: [users.id],
    references: [admins.userId],
  }),
}))

export const adminsRelations = relations(admins, ({ one, many }) => ({
  user: one(users, {
    fields: [admins.userId],
    references: [users.id],
  }),
  events: many(events),
}))

export const eventsRelations = relations(events, ({ one, many }) => ({
  createdBy: one(admins, {
    fields: [events.createdById],
    references: [admins.id],
  }),
  registrations: many(registrations),
}))

export const registrationsRelations = relations(registrations, ({ one }) => ({
  event: one(events, {
    fields: [registrations.eventId],
    references: [events.id],
  }),
}))

