/**
 * Representative portfolio excerpt.
 * The destination is intentionally supplied by the private application;
 * this sample contains no production contact number.
 */
type Purchase = {
  plan: "Classic" | "Premium"
  periodLabel: string
  originalPrice: number
  currentPrice: number
}

export function createPurchaseMessage(purchase: Purchase): string {
  return [
    "مرحبًا 👋",
    "",
    `أرغب في شراء CashierNow ${purchase.plan}`,
    "",
    `مدة الاشتراك: ${purchase.periodLabel}`,
    `السعر قبل الخصم: ${purchase.originalPrice} جنيه مصري`,
    `السعر بعد الخصم: ${purchase.currentPrice} جنيه مصري`,
    "",
    "أرجو إرسال تفاصيل الدفع والتفعيل.",
  ].join("\n")
}

export function createWhatsAppUrl(destination: string, purchase: Purchase): string {
  const message = createPurchaseMessage(purchase)

  // Encode the complete Unicode message exactly once at the URL boundary.
  return `https://wa.me/${destination}?text=${encodeURIComponent(message)}`
}
