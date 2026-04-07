import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Map camelCase form fields → snake_case GHL field names
    const ghlPayload = {
      first_name: data.firstName || "",
      last_name: data.lastName || "",
      email: data.email || "",
      phone: data.phone || "",
      address: data.address || "",
      bill: data.bill || "",
      homeowner: data.homeowner || "",
      roof_age: data.roofAge || "",
      credit_650_plus: data.credit || "",
      schedule_choice: data.schedule || "",
      source: "gosimpleflow.com",
      funnel: data.funnel || "main_quote",
      submitted_at: new Date().toISOString(),
    }

    const ghlWebhook = process.env.GHL_LEAD_WEBHOOK_URL
    if (ghlWebhook) {
      const res = await fetch(ghlWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ghlPayload),
      })
      if (!res.ok) {
        console.error("GHL webhook failed:", res.status, await res.text())
      }
    } else {
      console.log("GHL_LEAD_WEBHOOK_URL not set — lead logged only:", ghlPayload)
    }

    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error"
    console.error("Lead API error:", msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
