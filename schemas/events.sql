CREATE TABLE event (
  event_name text not null,
  event_price real not null,
  event_desc text,
  event_date text not null, --possible change to unix epoch?
  event_begin text not null,
  event_end text not null,
  event_lat real,
  event lon real,
)
