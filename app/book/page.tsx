"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../theme/book.module.css";

export default function BookPage() {
    const [step, setStep] = useState(1);
    const [selectedChips, setSelectedChips] = useState<string[]>([]);
    const [selectedSlot, setSelectedSlot] = useState<{ id: string; text: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Add form ref to trigger native HTML form reset
    const formRef = React.useRef<HTMLFormElement>(null);

    const toggleChip = (label: string) => {
        setSelectedChips(prev =>
            prev.includes(label) ? prev.filter(c => c !== label) : [...prev, label]
        );
        if (step < 2) setStep(2);
    };

    const handleSlotSelect = (id: string, text: string) => {
        setSelectedSlot({ id, text });
        if (step < 3) setStep(3);
    };

    // Generate upcoming dates starting from tomorrow
    const generateSlots = () => {
        const slots = [];
        const today = new Date();

        for (let i = 1; i <= 5; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);

            // Format Day (e.g., MON) and Date (e.g., Mar 17)
            const dayStr = nextDate.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
            const dateStr = nextDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

            slots.push({ id: `s${i}`, day: dayStr, date: dateStr, isDiscuss: false });
        }

        slots.push({ id: 's6', day: 'ANY', date: "Let's discuss", isDiscuss: true });
        return slots;
    };

    const slotsData = generateSlots();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const payload = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            company: formData.get("company") as string,
            role: formData.get("role") as string,
            services: selectedChips,
            projectDetails: formData.get("projectDetails") as string,
            budget: formData.get("budget") as string,
            slot: selectedSlot ? selectedSlot.text : null,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setShowSuccess(true);
                // Reset form completely
                formRef.current?.reset();
                setSelectedChips([]);
                setSelectedSlot(null);
                setStep(1);
            } else {
                const data = await response.json();
                console.error("Failed to submit:", data.error);
                alert("Failed to send the request. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className={styles.bodyWrap}>

            {/* Success Overlay */}
            <div className={`${styles.successOverlay} ${showSuccess ? styles.successOverlayShow : ""}`}>
                <div className={styles.successCheck}>✓</div>
                <h2>You're on the<br />calendar.</h2>
                <p>We'll send a confirmation to your email within 15 minutes. Looking forward to talking about your project.</p>
                <Link
                    href="/"
                    className={styles.backLink}
                >
                    ← Back to Home
                </Link>
            </div>


            <div className={styles.page}>
                {/* ── LEFT PANEL ── */}
                <div className={styles.left}>
                    <div className={styles.leftTop}>
                        <div className={styles.eyebrow}>
                            <span className={styles.eyebrowLine}></span> Book an Intro Call
                        </div>
                        <h1 className={styles.headline}>
                            Let's build<br />something<br /><em>remarkable.</em>
                        </h1>
                        <p className={styles.subtitle}>
                            30 minutes. No pitch decks. Just a real conversation about your cloud infrastructure, AI stack, and where you want to go.
                        </p>

                        <div className={styles.perks}>
                            {[
                                { icon: "⚡", title: "Same-week response", desc: "We confirm within 2 hours and schedule within 48 hrs" },
                                { icon: "🏗️", title: "Technical first conversation", desc: "Talk directly with engineers, not account managers" },
                                { icon: "🧠", title: "Free architecture review", desc: "We'll audit your current stack and map a path forward" },
                                { icon: "🔒", title: "NDA on request", desc: "Share your project details with full confidentiality" },
                            ].map((perk, i) => (
                                <div
                                    key={i}
                                    className={styles.perk}
                                >
                                    <div className={styles.perkIcon}>{perk.icon}</div>
                                    <div className={styles.perkText}>
                                        <h4>{perk.title}</h4>
                                        <p>{perk.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.leftBottom}>
                        <div className={styles.trustRow}>
                            <div className={styles.avatarStack}>
                                <div className={styles.avatar}>SB</div>
                                <div className={styles.avatar}>AK</div>
                                <div className={styles.avatar}>RD</div>
                                <div className={styles.avatar}>+</div>
                            </div>
                            <div className={styles.trustText}>
                                <strong>50+ partners trust CloudLane</strong><br />
                                Cloud · AI · Automation · SaaS
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT PANEL ── */}
                <div className={styles.right}>
                    {/* step indicator */}
                    <div className={styles.steps}>
                        <div className={`${styles.step} ${step >= 1 ? styles.stepActive : ""}`}>
                            <div className={styles.stepNum}>1</div>
                            <span>About you</span>
                        </div>
                        <div className={styles.stepLine}></div>
                        <div className={`${styles.step} ${step >= 2 ? styles.stepActive : ""}`}>
                            <div className={styles.stepNum}>2</div>
                            <span>Your project</span>
                        </div>
                        <div className={styles.stepLine}></div>
                        <div className={`${styles.step} ${step >= 3 ? styles.stepActive : ""}`}>
                            <div className={styles.stepNum}>3</div>
                            <span>Pick a slot</span>
                        </div>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        {/* SECTION 1 — About you */}
                        <div className={styles.formSection}>
                            <div className={styles.sectionTitle}>// 01 · About you</div>
                            <div className={styles.fieldRow}>
                                <div className={styles.field}>
                                    <label>Full name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Shubham Bharti"
                                        onFocus={() => step < 1 && setStep(1)}
                                        required
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label>Work email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="shubham@cloudlane.in"
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.fieldRow}>
                                <div className={styles.field}>
                                    <label>Company / Startup</label>
                                    <input
                                        name="company"
                                        type="text"
                                        placeholder="CloudLane Inc."
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label>Role</label>
                                    <input
                                        name="role"
                                        type="text"
                                        placeholder="CTO / Founder / Engineer"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        {/* SECTION 2 — Services */}
                        <div className={styles.formSection}>
                            <div className={styles.sectionTitle}>// 02 · What do you need?</div>
                            <div className={styles.chipSelect}>
                                {[
                                    "☁️ Cloud Infra (AWS)", "🤖 AI Agents", "⚡ Automation",
                                    "🐳 DevOps / Docker", "📊 Data Pipelines", "🌐 SaaS Build",
                                    "🔍 Audit / Review", "✦ Other"
                                ].map((chip, i) => (
                                    <div
                                        key={i}
                                        className={`${styles.chipOpt} ${selectedChips.includes(chip) ? styles.chipOptSelected : ""}`}
                                        onClick={() => toggleChip(chip)}
                                    >
                                        {chip}
                                    </div>
                                ))}
                            </div>

                            <div className={styles.field} style={{ marginTop: "4px" }}>
                                <label>Tell us about your project</label>
                                <textarea
                                    name="projectDetails"
                                    placeholder="Brief overview — what are you building, what's the challenge, what does success look like for you?"
                                    onFocus={() => step < 2 && setStep(2)}
                                ></textarea>
                            </div>

                            <div className={styles.field}>
                                <label>Budget range</label>
                                <select name="budget" defaultValue="">
                                    <option value="">Select a range</option>
                                    <option value="Under $5k">Under $5k</option>
                                    <option value="$5k – $10k">$5k – $10k</option>
                                    <option value="$10k – $15k">$10k – $15k</option>
                                    <option value="$15k+">$15k+</option>
                                    <option value="Let's discuss">Let's discuss</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        {/* SECTION 3 — Time slot */}
                        <div className={styles.formSection}>
                            <div className={styles.sectionTitle}>// 03 · Pick a date</div>
                            <div className={styles.slotGrid}>
                                {slotsData.map((slot) => (
                                    <div
                                        key={slot.id}
                                        className={`${styles.slot} ${selectedSlot?.id === slot.id ? styles.slotSelected : ""}`}
                                        onClick={() => handleSlotSelect(slot.id, slot.isDiscuss ? slot.date : `${slot.day}, ${slot.date}`)}
                                        style={slot.isDiscuss ? { display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}}
                                    >
                                        {!slot.isDiscuss ? (
                                            <>
                                                <div className={styles.slotDay} style={{ marginBottom: "8px" }}>{slot.day}</div>
                                                <div className={styles.slotDate}>{slot.date}</div>
                                            </>
                                        ) : (
                                            <div className={styles.slotDate} style={{ fontSize: "16px" }}>{slot.date}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        {/* submit */}
                        <div className={styles.formSection}>
                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={loading}
                            >
                                {loading ? "Booking..." : "Book my intro call"}
                                <div className={styles.submitArrow}>→</div>
                            </button>
                            <p className={styles.privacyNote}>
                                No spam. No sales calls. Just a real conversation.<br />
                                By submitting you agree to our <a href="#">Privacy Policy</a>.
                            </p>
                        </div>
                    </form>

                    {/* contact chips */}
                    <div className={styles.contactStrip}>
                        <a
                            href="mailto:shubham@cloudlane.in"
                            className={styles.contactChip}
                        >
                            <span className={styles.ci}>✉</span>
                            <div className={styles.ct}>
                                <span className={styles.ctLabel}>EMAIL</span>
                                <span className={styles.ctVal}>shubham@cloudlane.in</span>
                            </div>
                        </a>
                        <a
                            href="tel:+917775954978"
                            className={styles.contactChip}
                        >
                            <span className={styles.ci}>☎</span>
                            <div className={styles.ct}>
                                <span className={styles.ctLabel}>PHONE</span>
                                <span className={styles.ctVal}>+91 7775954978</span>
                            </div>
                        </a>
                        <div
                            className={styles.contactChip}
                        >
                            <span className={styles.ci}>📍</span>
                            <div className={styles.ct}>
                                <span className={styles.ctLabel}>LOCATION</span>
                                <span className={styles.ctVal}>Pune, Maharashtra</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
