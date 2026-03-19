ALTER TABLE "jajmaan_bookings" DROP CONSTRAINT "jajmaan_bookings_event_id_events_id_fk";
--> statement-breakpoint
ALTER TABLE "jajmaan_bookings" ADD CONSTRAINT "jajmaan_bookings_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;