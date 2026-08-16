/**
 * Representative portfolio excerpt.
 * Demonstrates the single-source pricing concept without production UI code.
 */
type PlanPrice = Readonly<{
  original: number
  current: number
}>

type PeriodPrice = Readonly<{
  label: string
  classic: PlanPrice
  premium: PlanPrice
}>

export const pricing: Readonly<Record<string, PeriodPrice>> = {
  monthly: {
    label: "شهري",
    classic: { original: 500, current: 300 },
    premium: { original: 700, current: 500 },
  },
  threeMonths: {
    label: "٣ شهور",
    classic: { original: 1200, current: 900 },
    premium: { original: 2000, current: 1500 },
  },
  lifetime: {
    label: "مدى الحياة",
    classic: { original: 3000, current: 1500 },
    premium: { original: 5000, current: 3000 },
  },
} as const
