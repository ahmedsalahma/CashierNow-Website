/**
 * Representative portfolio excerpt.
 * Simplified and sanitized; not the production component.
 */
export function RtlLayoutExample() {
  return (
    <section dir="rtl" lang="ar" aria-labelledby="sample-title">
      <h2 id="sample-title">ملخص الاشتراك</h2>

      <div className="flex items-center justify-between gap-4">
        <span>الباقة المختارة</span>
        {/* Product names and numerals remain intentionally LTR. */}
        <strong dir="ltr">Premium · 500 EGP</strong>
      </div>
    </section>
  )
}
