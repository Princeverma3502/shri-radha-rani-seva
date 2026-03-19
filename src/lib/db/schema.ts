import { pgTable, text, timestamp, boolean, integer, doublePrecision } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { randomUUID } from 'crypto';

export const events = pgTable('events', {
  id: text('id').primaryKey().$defaultFn(() => randomUUID()),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  location: text('location').notNull(),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  vachak: text('vachak').default('पूज्य श्री मृदुल कृष्ण शास्त्री जी').notNull(),
  description: text('description'),
  imageUrl: text('image_url'),
  isPublished: boolean('is_published').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const jajmaanBookings = pgTable('jajmaan_bookings', {
  id: text('id').primaryKey().$defaultFn(() => randomUUID()),
  fullName: text('full_name').notNull(),
  gotra: text('gotra'),
  phone: text('phone').notNull(),
  dayNumber: integer('day_number').notNull(),
  status: text('status').default('PENDING').notNull(), // PENDING, CONFIRMED, CANCELLED
  eventId: text('event_id').notNull().references(() => events.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const donations = pgTable('donations', {
  id: text('id').primaryKey().$defaultFn(() => randomUUID()),
  donorName: text('donor_name').notNull(),
  email: text('email'),
  phone: text('phone').notNull(),
  amount: doublePrecision('amount').notNull(),
  cause: text('cause').notNull(), // e.g., 'Bhandara', 'General', 'Temple Construction'
  paymentId: text('payment_id').unique(),
  razorpayOrderId: text('razorpay_order_id').unique(),
  razorpaySignature: text('razorpay_signature'),
  paymentStatus: text('payment_status').default('PENDING').notNull(), // PENDING, SUCCESS, FAILED
  panNumber: text('pan_number'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Adding Relations (Crucial for easy querying in your Admin Panel)
export const eventsRelations = relations(events, ({ many }) => ({
  bookings: many(jajmaanBookings),
}));

export const jajmaanBookingsRelations = relations(jajmaanBookings, ({ one }) => ({
  event: one(events, {
    fields: [jajmaanBookings.eventId],
    references: [events.id],
  }),
}));