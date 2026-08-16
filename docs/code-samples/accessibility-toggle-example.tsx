"use client"

/** Representative, simplified accessibility pattern. */
type AccessibleToggleProps = {
  checked: boolean
  onChange: (next: boolean) => void
  label: string
}

export function AccessibleToggle({
  checked,
  onChange,
  label,
}: AccessibleToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="rounded-full border px-4 py-2 focus-visible:outline-2"
    >
      <span aria-hidden="true">{checked ? "●" : "○"}</span>
      <span className="sr-only">{checked ? "مفعّل" : "غير مفعّل"}</span>
    </button>
  )
}
