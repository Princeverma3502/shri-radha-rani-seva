CREATE TABLE "donations" (
	"id" text PRIMARY KEY NOT NULL,
	"donor_name" text NOT NULL,
	"email" text,
	"phone" text NOT NULL,
	"amount" double precision NOT NULL,
	"cause" text NOT NULL,
	"payment_id" text,
	"razorpay_order_id" text,
	"razorpay_signature" text,
	"payment_status" text DEFAULT 'PENDING' NOT NULL,
	"pan_number" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "donations_payment_id_unique" UNIQUE("payment_id"),
	CONSTRAINT "donations_razorpay_order_id_unique" UNIQUE("razorpay_order_id")
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"location" text NOT NULL,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp NOT NULL,
	"vachak" text DEFAULT 'पूज्य श्री मृदुल कृष्ण शास्त्री जी' NOT NULL,
	"description" text,
	"image_url" text,
	"is_published" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "events_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "jajmaan_bookings" (
	"id" text PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"gotra" text,
	"phone" text NOT NULL,
	"day_number" integer NOT NULL,
	"status" text DEFAULT 'PENDING' NOT NULL,
	"event_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "jajmaan_bookings" ADD CONSTRAINT "jajmaan_bookings_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;