"use client";

import React, { useState } from "react";
import styles from "../theme/book.module.css";

export default function BookPage() {
    const [step, setStep] = useState(1);
    const [selectedChips, setSelectedChips] = useState<string[]>([]);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const toggleChip = (label: string) => {
        setSelectedChips(prev =>
            prev.includes(label) ? prev.filter(c => c !== label) : [...prev, label]
        );
        if (step < 2) setStep(2);
    };

    const handleSlotSelect = (id: string) => {
        setSelectedSlot(id);
        if (step < 3) setStep(3);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowSuccess(true);
        }, 1500);
    };

    return (
        <div className={styles.bodyWrap}>

            {/* Success Overlay */}
            <div className={`${styles.successOverlay} ${showSuccess ? styles.successOverlayShow : ""}`}>
                <div className={styles.successCheck}>✓</div>
                <h2>You're on the<br />calendar.</h2>
                <p>We'll send a confirmation to your email within 15 minutes. Looking forward to talking about your project.</p>
                <div
                    className={styles.backLink}
                    onClick={() => setShowSuccess(false)}
                >
                    ← Back to form
                </div>
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

                    <form onSubmit={handleSubmit}>
                        {/* SECTION 1 — About you */}
                        <div className={styles.formSection}>
                            <div className={styles.sectionTitle}>// 01 · About you</div>
                            <div className={styles.fieldRow}>
                                <div className={styles.field}>
                                    <label>Full name</label>
                                    <input
                                        type="text"
                                        placeholder="Shubham Bharti"
                                        onFocus={() => step < 1 && setStep(1)}
                                        required
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label>Work email</label>
                                    <input
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
                                        type="text"
                                        placeholder="CloudLane Inc."
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label>Role</label>
                                    <input
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
                                    placeholder="Brief overview — what are you building, what's the challenge, what does success look like for you?"
                                    onFocus={() => step < 2 && setStep(2)}
                                ></textarea>
                            </div>

                            <div className={styles.field}>
                                <label>Budget range</label>
                                <select defaultValue="">
                                    <option>Select a range</option>
                                    <option>Under ₹50k</option>
                                    <option>₹50k – ₹2L</option>
                                    <option>₹2L – ₹10L</option>
                                    <option>₹10L+</option>
                                    <option>Let's discuss</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        {/* SECTION 3 — Time slot */}
                        <div className={styles.formSection}>
                            <div className={styles.sectionTitle}>// 03 · Pick a slot (IST)</div>
                            <div className={styles.slotGrid}>
                                {[
                                    { id: "s1", day: "MON", date: "Mar 17", time: "10:00 AM" },
                                    { id: "s2", day: "MON", date: "Mar 17", time: "3:00 PM" },
                                    { id: "s3", day: "TUE", date: "Mar 18", time: "11:00 AM" },
                                    { id: "s4", day: "WED", date: "Mar 19", time: "10:00 AM" },
                                    { id: "s5", day: "THU", date: "Mar 20", time: "4:00 PM" },
                                    { id: "s6", day: "FRI", date: "Mar 21", time: "2:00 PM" },
                                ].map((slot) => (
                                    <div
                                        key={slot.id}
                                        className={`${styles.slot} ${selectedSlot === slot.id ? styles.slotSelected : ""}`}
                                        onClick={() => handleSlotSelect(slot.id)}
                                    >
                                        <div className={styles.slotDay}>{slot.day}</div>
                                        <div className={styles.slotDate}>{slot.date}</div>
                                        <div className={styles.slotTime}>{slot.time}</div>
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
