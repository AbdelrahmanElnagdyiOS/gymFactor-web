/**
 * Single source of truth for the FAQ. The homepage renders these directly and
 * also emits them as FAQPage structured data, so questions are phrased the way
 * people actually search ("free workout logging app", "track workouts offline").
 * Keep answers plain-text so they can be reused verbatim in JSON-LD.
 */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Is GymFactor a free workout logging app?",
    a: "Yes. Logging workouts, building a training program, last-session memory, progress charts, widgets, and the Apple Watch app are all free. GymFactor Pro is an optional subscription that adds AI plate scan and future Pro features, sold through the App Store.",
  },
  {
    q: "What's the best way to log a workout at the gym?",
    a: "Open GymFactor at the rack and today's session is already there — each exercise shows the weight, reps, and sets you did last time. Tap to log each set as you go, rest with the built-in timer, and finish. Your workout log builds itself with no typing from scratch and no spreadsheets.",
  },
  {
    q: "Does GymFactor build a workout program for me?",
    a: "Yes. Answer about fourteen quick questions — goal, experience, days per week, available equipment — and GymFactor picks a training split (Upper/Lower, Push/Pull/Legs, Full Body, or its own choice) and builds the routine. You can swap, add, or remove any exercise afterwards.",
  },
  {
    q: "How does GymFactor help with progressive overload?",
    a: "Every exercise carries your last working set forward and suggests the next target, so you always know whether to add weight, add reps, or repeat. A strength score and per-exercise trend charts show whether your lifts are actually moving up over weeks and months.",
  },
  {
    q: "Can I track workouts offline, with no account?",
    a: "Yes. GymFactor works as a guest on your device with no sign-up. All logging, programs, last-session memory, and progress work fully offline — you can open it in a basement gym with no signal. Network is only used for optional features like AI plate scan, iCloud sync, and purchases.",
  },
  {
    q: "Can I log sets from an Apple Watch?",
    a: "Yes. Start a workout on Apple Watch, log every set from your wrist, and see live heart rate and active energy. When you end the session, GymFactor writes a strength-training workout to Apple Health automatically.",
  },
  {
    q: "How is GymFactor different from other workout trackers?",
    a: "There's no social feed, no ads, and no account. It's a focused gym logger: today's workout, last-session weights, a rest timer, and progress you can read. Your training history stays on your devices and syncs privately through your own iCloud account if you choose.",
  },
  {
    q: "What does the AI plate scan do with my photos?",
    a: "A photo you take of your plates or dumbbells is sent to a processing service to estimate the weight and is not stored in your workout database. You always confirm the weight before it is logged. See the Privacy Policy for details.",
  },
  {
    q: "Is my Apple Health data safe?",
    a: "Health access is optional and only reads what you allow — weight, height, date of birth, and sex, plus heart rate and energy on Apple Watch. It is never used for advertising and never sold.",
  },
  {
    q: "Which devices does GymFactor support?",
    a: "iPhone and Apple Watch. The app is iOS-only today; an Android version is in development.",
  },
];
