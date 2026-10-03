export type Performer = {
  name: string
  bio: string
  dates: string[]
}

export type PerformerSchedule = {
  heading: string
  performers: Performer[]
}

function text(value: unknown, maxLength: number, required = true): string {
  if (typeof value !== "string" || value.trim().length > maxLength || (required && !value.trim())) {
    throw new Error("Please complete each name and date, and keep descriptions brief.")
  }
  return value.trim()
}

export function validateSchedule(value: unknown): PerformerSchedule {
  if (!value || typeof value !== "object" || !("heading" in value) || !("performers" in value)) {
    throw new Error("The performer schedule is invalid.")
  }
  if (!Array.isArray(value.performers) || value.performers.length > 30) {
    throw new Error("Please include no more than 30 performers.")
  }
  return {
    heading: text(value.heading, 120),
    performers: value.performers.map((performer: unknown) => {
      if (!performer || typeof performer !== "object" || !("name" in performer) || !("bio" in performer) || !("dates" in performer)) {
        throw new Error("Each performer needs a name, description, and dates.")
      }
      if (!Array.isArray(performer.dates) || performer.dates.length < 1 || performer.dates.length > 8) {
        throw new Error("Please include between one and eight dates for each performer.")
      }
      return {
        name: text(performer.name, 120),
        bio: text(performer.bio, 1000, false),
        dates: performer.dates.map((date: unknown) => text(date, 120))
      }
    })
  }
}
