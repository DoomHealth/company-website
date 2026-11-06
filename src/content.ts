export const COMPANY = "doomhealth"
export const SITE_URL = "https://doomhealth.com"
export const CONTACT_EMAIL = "hello@doomhealth.com"

export const nav = [
  { href: "#platform", label: "Platform" },
  { href: "#note", label: "The note" },
  { href: "#patients", label: "Patients" },
  { href: "#ehrs", label: "EHRs" },
]

export const signals = [
  { label: "Heart rate, sleep, activity", source: "Watch and wearable" },
  { label: "Glucose and home blood pressure", source: "CGM and cuff" },
  { label: "Mood, anxiety, the shape of the week", source: "Patient log" },
  { label: "Diet, exercise, calories", source: "Daily record" },
  { label: "Vaccines and medications taken", source: "Chart and app" },
]

export const chapters = [
  {
    id: "voice",
    n: "01",
    kicker: "Front office",
    title: "Voice agents",
    body: "The practice line gets answered. Patients schedule, reschedule, request a refill, or reach the right visit. What was said is written into the chart, and the front desk keeps its attention on the people in the room.",
    points: [
      "Scheduling and rescheduling",
      "Medication refill requests",
      "Routing and after-hours coverage",
      "Reminders and follow-up calls",
    ],
  },
  {
    id: "ambient",
    n: "02",
    kicker: "Documentation",
    title: "Ambient scribe and copilot",
    body: "Before the encounter, doomhealth pulls the chart — medications, conditions, labs, prior notes — and the year the patient has been living. During the visit it listens. Afterward the note cites both. The clinician reviews and signs.",
    points: [
      "Chart context plus wearable and home-device trends",
      "Mood, diet, activity, calories, and vaccines from the patient app",
      "A copilot that answers in plain language, every line cited",
      "Writeback into the EHR",
    ],
  },
  {
    id: "revenue",
    n: "03",
    kicker: "Back office",
    title: "Revenue cycle",
    body: "The signed note is where getting paid begins. doomhealth carries charge capture, coding context, and claim follow-through from that same encounter. Device data and review time are already in the note — the record remote patient monitoring needs.",
    points: [
      "Charge capture from the visit",
      "Coding context tied to the note",
      "Claim follow-through",
      "Device review documented for RPM",
    ],
  },
  {
    id: "care",
    n: "04",
    kicker: "Patient care",
    title: "The app between visits",
    body: "Patients request medications, order medical supplies, and keep a plain record of daily life: mood, anxiety, vaccines, diet, exercise, and calories. That bookkeeping is theirs. It is also what the clinician sees before prescribing.",
    points: [
      "Medication requests and medical supplies",
      "Mood, anxiety, and how the day went",
      "Vaccines, diet, exercise, and calories",
      "One year, shared with the practice",
    ],
  },
]

export const flow = ["Lived", "Booked", "Heard", "Signed", "Paid"]

export const brief = [
  {
    label: "Resting heart rate",
    value: "+12 bpm",
    span: "over 6 weeks",
    why: "since amlodipine",
    points: [62, 64, 63, 66, 68, 70, 71, 74],
  },
  {
    label: "Sleep",
    value: "−40 min",
    span: "a night",
    why: "since sertraline",
    points: [78, 76, 74, 70, 68, 64, 60, 58],
  },
  {
    label: "Fasting glucose",
    value: "Down",
    span: "since last visit",
    why: "CGM, 30 days",
    points: [88, 86, 84, 80, 78, 74, 72, 69],
  },
  {
    label: "Mood",
    value: "Heavier",
    span: "on weekdays",
    why: "patient log",
    points: [40, 55, 48, 62, 44, 70, 58, 46],
  },
]

export const roles = ["Clinician", "Practice", "Patient", "Other"]

export const interests = [
  "The whole platform",
  "Voice agents",
  "Ambient documentation",
  "Revenue cycle",
  "Patient app",
]
