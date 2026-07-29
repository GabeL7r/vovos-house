"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Modal } from "./ui/Modal";
import { Select } from "./ui/Select";
import { Stepper } from "./ui/Stepper";
import { ShareButtons } from "./ShareButtons";
import { gaEvent } from "@/lib/gtag";

const SHARE_TEXT = "I just joined the waitlist for Vovo's House — kid-ready family rentals. The more of us who sign up, the sooner it opens!";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_KIDS = 8;
const AGE_OPTIONS = Array.from({ length: 18 }, (_, age) => ({
  value: String(age),
  label: age === 0 ? "Under 1" : `${age} ${age === 1 ? "year" : "years"}`,
}));

type Step = "questions" | "success";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState<Step>("questions");

  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState<string | null>(null);
  const [numKids, setNumKids] = useState(0);
  const [kidAges, setKidAges] = useState<string[]>([]);
  const [agesError, setAgesError] = useState<string | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handleEmailSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setEmailError("Enter a valid email address.");
      return;
    }
    setEmailError(null);
    setStep("questions");
    setModalOpen(true);
  }

  function handleNumKidsChange(next: number) {
    setNumKids(next);
    setKidAges((prev) => {
      const copy = prev.slice(0, next);
      while (copy.length < next) copy.push("");
      return copy;
    });
  }

  function handleAgeChange(index: number, value: string) {
    setKidAges((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  }

  async function handleFinalSubmit() {
    if (!city.trim()) {
      setCityError("Tell us which city you'd like us to launch in.");
      return;
    }
    setCityError(null);

    if (kidAges.some((age) => age === "")) {
      setAgesError("Pick an age for each kid, or set the count to 0.");
      return;
    }
    setAgesError(null);

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          city: city.trim(),
          numKids,
          kidAges: kidAges.map(Number),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      gaEvent("sign_up", { method: "waitlist", city: city.trim(), num_kids: numKids });
      setStep("success");
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function closeModal() {
    setModalOpen(false);
    setStep("questions");
    setEmail("");
    setCity("");
    setCityError(null);
    setNumKids(0);
    setKidAges([]);
    setAgesError(null);
    setSubmitError(null);
  }

  return (
    <section id="waitlist-form" style={{ padding: "96px 48px", background: "var(--terracotta-100)", textAlign: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-4xl)", margin: "0 0 20px", color: "var(--text-primary)" }}>
          Be first through the door.
        </h2>
        <p
          style={{
            fontSize: "var(--text-lg)",
            color: "var(--text-secondary)",
            lineHeight: "var(--leading-normal)",
            margin: "0 0 36px",
            textWrap: "pretty",
          }}
        >
          We&apos;re opening to a small group of families first. Join the waitlist and you&apos;ll get early access
          before we open to everyone — plus a say in the homes and features we build.
        </p>
        <form
          onSubmit={handleEmailSubmit}
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            background: "var(--surface-raised)",
            padding: 16,
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div style={{ flex: "1 1 260px", minWidth: 220, textAlign: "left" }}>
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError ?? undefined}
              aria-label="Email address"
            />
          </div>
          <Button type="submit" variant="primary" size="md">
            Join the waitlist
          </Button>
        </form>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: "16px 0 0" }}>
          No spam. No charge. Just an early spot and the occasional update.
        </p>
      </div>

      <Modal
        open={modalOpen}
        onClose={closeModal}
        title={step === "success" ? "You're on the list. Welcome to the family." : "Just two quick things"}
        footer={
          step === "success" ? (
            <Button variant="primary" onClick={closeModal}>
              Done
            </Button>
          ) : (
            <Button variant="primary" onClick={handleFinalSubmit} loading={submitting}>
              Join the waitlist
            </Button>
          )
        }
      >
        {step === "success" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ margin: 0, fontSize: "var(--text-md)", color: "var(--text-secondary)", lineHeight: "var(--leading-normal)" }}>
              We&apos;ll be in touch as soon as homes open up near you. Thanks for helping us build this from day one.
            </p>
            <div
              style={{
                background: "var(--sage-100)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-4)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <p style={{ margin: 0, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text-primary)" }}>
                Know other parents who&apos;d want this? The more families who sign up, the faster we can open doors.
              </p>
              <ShareButtons url={typeof window !== "undefined" ? window.location.origin : ""} text={SHARE_TEXT} />
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 20, textAlign: "left" }}>
            <p style={{ margin: 0, fontSize: "var(--text-md)", color: "var(--text-secondary)", lineHeight: "var(--leading-normal)" }}>
              Help us pick where to launch and what to stock the homes with.
            </p>
            <Input
              label="Which city should we launch in?"
              placeholder="e.g. Austin, TX"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              error={cityError ?? undefined}
            />
            <Stepper label="How many kids?" value={numKids} min={0} max={MAX_KIDS} onChange={handleNumKidsChange} />
            {kidAges.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {kidAges.map((age, i) => (
                  <Select
                    key={i}
                    label={`Kid ${i + 1} age`}
                    value={age}
                    onChange={(e) => handleAgeChange(i, e.target.value)}
                    options={AGE_OPTIONS}
                  />
                ))}
                {agesError ? <span style={{ fontSize: "var(--text-xs)", color: "var(--color-danger)" }}>{agesError}</span> : null}
              </div>
            ) : null}
            {submitError ? <span style={{ fontSize: "var(--text-sm)", color: "var(--color-danger)" }}>{submitError}</span> : null}
          </div>
        )}
      </Modal>
    </section>
  );
}
