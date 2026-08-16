/**
 * Representative portfolio excerpt.
 * Generic styling demonstrates responsive composition without reproducing
 * CashierNow's production card design.
 */
type SummaryCardProps = {
  title: string
  value: string
  description: string
}

export function ResponsiveCardExample({
  title,
  value,
  description,
}: SummaryCardProps) {
  return (
    <article className="grid gap-3 rounded-xl border p-4 sm:p-6 md:grid-cols-[1fr_auto]">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
      <output className="self-center text-2xl font-bold" dir="ltr">
        {value}
      </output>
    </article>
  )
}
