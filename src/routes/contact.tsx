import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { saveConsultation } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Mail, MapPin, Phone, Loader2 } from "lucide-react";

const serviceOptions = [
  "Entra ID (Identity & Access)",
  "Intune (Endpoint Management)",
  "Microsoft Defender (Security)",
  "Microsoft Purview (DLP & Compliance)",
  "Azure & Sentinel (Cloud Security / SIEM)",
  "M365 Operations (Admin & Support)",
  "Not sure — help me decide",
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Iqra365 Cloud Solutions" },
      { name: "description", content: "Book a free 30-minute consultation. We'll assess your Microsoft tenant's security posture and outline a clear roadmap." },
      { property: "og:title", content: "Contact Iqra365 Cloud Solutions" },
      { property: "og:description", content: "Free 30-minute Microsoft security consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
  server: {
    handlers: {
      POST: async ({ request }) => {
        const data = await request.json() as { name: string; email: string; phone: string; company: string; service: string; message: string };
        await saveConsultation(data);
        return Response.json({ success: true });
      },
    },
  },
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const setField = useCallback((field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
  }, []);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.company.trim()) e.company = "Required";
    if (!form.message.trim() || form.message.length < 10) e.message = "Please provide a few details about your needs";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setSent(true);
    } catch {
      try {
        const consultations = JSON.parse(localStorage.getItem("iqra365_consultations") || "[]");
        consultations.push({ ...form, createdAt: new Date().toISOString() });
        localStorage.setItem("iqra365_consultations", JSON.stringify(consultations));
        setSent(true);
      } catch {
        setErrors({ ...errors, _form: "Something went wrong. Please try again or email us directly at Info@iqra365cloudsolutions.com" });
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="pt-36 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-6 md:gap-10">
          <div className="animate-fade-in lg:col-span-2">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Free 30-minute <span className="text-gradient-brand">security consultation</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              No sales pitch. We'll review your Microsoft tenant, identify security gaps, and give you a clear action plan.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 glass rounded-xl p-4">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-sm">Email</div>
                  <div className="text-sm text-muted-foreground">Info@iqra365cloudsolutions.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3 glass rounded-xl p-4">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-sm">Phone</div>
                  <div className="text-sm text-muted-foreground">Available on request</div>
                </div>
              </div>
              <div className="flex items-start gap-3 glass rounded-xl p-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-sm">Service areas</div>
                  <div className="text-sm text-muted-foreground">Serving clients worldwide</div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 glass rounded-xl">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Arabic support available:</span> Our co-founder Musheer Hashmi is fluent in Arabic. Clients can engage in Arabic for requirements, delivery, and ongoing support.
              </p>
              <p className="text-xs text-muted-foreground mt-2" dir="rtl">الدعم متاح باللغة العربية للعملاء حول العالم</p>
            </div>
          </div>

          <div className="animate-fade-in animate-delay-100 lg:col-span-3">
            <div className="glass rounded-3xl p-8 shadow-elegant">
              {sent ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="h-16 w-16 mx-auto text-green-brand mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thanks, {form.name.split(" ")[0]}!</h3>
                  <p className="text-muted-foreground">We've received your enquiry and will reply within one business day to schedule your free 30-minute consultation.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full name *</Label>
                      <Input ref={nameRef} id="name" value={form.name} onChange={setField("name")} className="mt-1.5" />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" autoComplete="email" value={form.email} onChange={setField("email")} className="mt-1.5" />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={setField("phone")} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input id="company" autoComplete="organization" value={form.company} onChange={setField("company")} className="mt-1.5" />
                      {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
                    </div>
                  </div>
                  <div>
                    <Label>Service interested in</Label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Tell us about your needs *</Label>
                    <Textarea id="message" rows={5} value={form.message} onChange={setField("message")} className="mt-1.5" placeholder="What's your current Microsoft environment like? What challenges are you facing? Any specific compliance requirements (ISO 27001, GDPR, SOC 2)? " />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>
                  {errors._form && <p className="text-xs text-destructive text-center">{errors._form}</p>}
                  <Button type="submit" size="lg" disabled={submitting} className="w-full bg-gradient-orange text-white border-0 shadow-glow-orange">
                    {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : "Book Free Consultation"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
