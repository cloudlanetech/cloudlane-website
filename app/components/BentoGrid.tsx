import styles from "../theme/bentoGrid.module.css";

export default function BentoGrid() {
    return (
        <section className={styles.bentoGrid}>
            <div className={styles.gridWrapper}>
                <div className={styles.grid}>

                    {/* C1: Claude Agents — tall left */}
                    <div className={`${styles.card} ${styles.c1}`}>
                        <div className={styles.agentOrb}></div>
                        <div className={styles.tag}>// claude · anthropic</div>
                        <h2>Build AI<br />agents that<br />actually work.</h2>
                        <p>Claude-powered agents with tool use, memory, and<br />multi-step reasoning. Ship in hours, not weeks.</p>
                        <div className={styles.pillBtn}>Explore Agents →</div>
                    </div>

                    {/* C2: FastAPI */}
                    <div className={`${styles.card} ${styles.c2}`}>
                        <div>
                            <div className={styles.sub}>REST · ASYNC · TYPE-SAFE</div>
                        </div>
                        <div className={styles.bigLabel}>Fast<br />API</div>
                        <div className={styles.iconRow}>
                            <div className={styles.speedBadge}>⚡ 0.3ms p99</div>
                            <div className={styles.speedBadge}>Python 3.12</div>
                        </div>
                    </div>

                    {/* C3: Docker */}
                    <div className={`${styles.card} ${styles.c3}`}>
                        <div className={styles.whaleIcon}>🐳</div>
                        <h3>Docker</h3>
                        <p>Containerize<br />everything. Ship<br />anywhere.</p>
                    </div>

                    {/* C4: AWS */}
                    <div className={`${styles.card} ${styles.c4}`}>
                        <div className={styles.awsTag}>AWS</div>
                        <h3>Cloud<br />Infrastructure<br />at scale</h3>
                        <div className={styles.services}>
                            <div className={styles.svcChip}>EC2</div>
                            <div className={styles.svcChip}>Lambda</div>
                            <div className={styles.svcChip}>S3</div>
                            <div className={styles.svcChip}>EKS</div>
                            <div className={styles.svcChip}>RDS</div>
                            <div className={styles.svcChip}>SQS</div>
                        </div>
                    </div>

                    {/* C5: OpenClaw / LLMs */}
                    <div className={`${styles.card} ${styles.c5}`}>
                        <div className={styles.editorialLabel}>open source models</div>
                        <h2>OpenClaw<br />& OSS LLMs</h2>
                        <div className={styles.modelRow}>
                            <div className={styles.modelChip}>llama-3</div>
                            <div className={styles.modelChip}>mistral</div>
                            <div className={styles.modelChip}>qwen</div>
                        </div>
                    </div>

                    {/* C6: Automation */}
                    <div className={`${styles.card} ${styles.c6}`}>
                        <div className={styles.gearRow}>
                            <div className={styles.gear}>⚙</div>
                            <div className={styles.gear}>⚙</div>
                        </div>
                        <h3>Workflow<br />Automation</h3>
                        <p>n8n · Zapier · Make<br />custom pipelines</p>
                    </div>

                    {/* C7: AI Agent Flow */}
                    <div className={`${styles.card} ${styles.c7}`}>
                        <div className={styles.flowNodes}>
                            <div className={styles.node} style={{ background: "rgba(0,229,255,0.15)", color: "#00e5ff" }}>🔍</div>
                            <div className={styles.nodeLine}></div>
                            <div className={styles.node} style={{ background: "rgba(26,68,255,0.15)", color: "#6b8cff" }}>🧠</div>
                            <div className={styles.nodeLine}></div>
                            <div className={styles.node} style={{ background: "rgba(200,241,53,0.15)", color: "#c8f135" }}>⚡</div>
                            <div className={styles.nodeLine}></div>
                            <div className={styles.node} style={{ background: "rgba(255,79,31,0.15)", color: "#ff4f1f" }}>📤</div>
                        </div>
                        <h3>Multi-agent<br />orchestration</h3>
                        <div className={styles.monoSmall}>perception → reason → act → respond</div>
                    </div>

                    {/* C8: Cloud Infra Blueprint */}
                    <div className={`${styles.card} ${styles.c8}`}>
                        <div className={styles.blueprintGrid}></div>
                        <div className={styles.monoTag}>// INFRASTRUCTURE</div>
                        <h2>Cloud<br />Native<br />by default</h2>
                        <p>Kubernetes · Terraform<br />Helm · ArgoCD · GitOps</p>
                    </div>

                    {/* C9: Web Design */}
                    <div className={`${styles.card} ${styles.c9}`}>
                        <div className={styles.serifTitle}>Aesthetic<br /><em>Web Design</em></div>
                        <div className={styles.paletteRow}>
                            <div className={styles.paletteDot} style={{ background: "#ff4f1f" }}></div>
                            <div className={styles.paletteDot} style={{ background: "#c8f135" }}></div>
                            <div className={styles.paletteDot} style={{ background: "#1a44ff" }}></div>
                            <div className={styles.paletteDot} style={{ background: "#ffe033" }}></div>
                            <div className={styles.paletteDot} style={{ background: "#00e5ff" }}></div>
                            <span style={{ fontSize: "0.65rem", color: "rgba(240,237,232,0.4)", fontFamily: "'DM Mono', monospace", marginLeft: "4px" }}>Framer · Figma</span>
                        </div>
                    </div>

                    {/* C10: Code Terminal */}
                    <div className={`${styles.card} ${styles.c10}`}>
                        <div className={styles.terminalBar}>
                            <div className={styles.tDot} style={{ background: "#ff5f57" }}></div>
                            <div className={styles.tDot} style={{ background: "#febc2e" }}></div>
                            <div className={styles.tDot} style={{ background: "#28c840" }}></div>
                            <span style={{ fontSize: "0.6rem", color: "rgba(240,237,232,0.2)", marginLeft: "6px" }}>agent.py</span>
                        </div>
                        <div className={styles.codeBlock}>
                            <span className={styles.kw}>from</span> anthropic <span className={styles.kw}>import</span> Anthropic<br />
                            <span className={styles.kw}>import</span> asyncio<br />
                            <br />
                            <span className={styles.kw}>class</span> <span className={styles.cls}>ClaudeAgent</span>:<br />
                            &nbsp;&nbsp;<span className={styles.kw}>def</span> <span className={styles.fn}>__init__</span>(self):<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;self.client = <span className={styles.fn}>Anthropic</span>()<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;self.tools = []<br />
                            <br />
                            &nbsp;&nbsp;<span className={styles.kw}>async def</span> <span className={styles.fn}>run</span>(self, task):<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.cmt}># invoke tool loop</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.kw}>return await</span> self.<span className={styles.fn}>_loop</span>(task)<br />
                        </div>
                        <h3>Python · Async · Agents</h3>
                    </div>

                    {/* C11: MCP Protocol */}
                    <div className={`${styles.card} ${styles.c11}`}>
                        <div className={styles.protoTag}>// protocol</div>
                        <h3>Model Context<br />Protocol</h3>
                        <div className={styles.hexTag}>MCP v1.0</div>
                    </div>

                    {/* C12: RAG vertical */}
                    <div className={`${styles.card} ${styles.c12}`}>
                        <h3>RAG & Embeddings</h3>
                        <p>Pinecone · Weaviate<br />pgvector · Chroma</p>
                    </div>

                    {/* C13: Prompt Engineering */}
                    <div className={`${styles.card} ${styles.c13}`}>
                        <div className={styles.index}>01 · FUNDAMENTALS</div>
                        <h2>Prompt<br />Engineering</h2>
                        <div className={styles.arrowCta}>
                            <div className={styles.arrowCircle}>→</div>
                            <span>Chain-of-thought · Few-shot · ReAct</span>
                        </div>
                    </div>

                    {/* C14: n8n Workflow */}
                    <div className={`${styles.card} ${styles.c14}`}>
                        <div className={styles.wfTitle}>n8n Workflows</div>
                        <div className={styles.wfChips}>
                            <div className={styles.wfChip}>Webhook</div>
                            <div className={styles.wfChip}>HTTP</div>
                            <div className={styles.wfChip}>OpenAI</div>
                            <div className={styles.wfChip}>Slack</div>
                            <div className={styles.wfChip}>Postgres</div>
                        </div>
                        <div className={styles.statusRow}>
                            <div className={styles.statusDot}></div>
                            7 workflows active
                        </div>
                    </div>

                    {/* C15: Vector DB */}
                    <div className={`${styles.card} ${styles.c15}`}>
                        <h3>Vector<br />Search</h3>
                        <p>pgvector<br />Pinecone<br />Qdrant</p>
                    </div>

                    {/* C16: Observability */}
                    <div className={`${styles.card} ${styles.c16}`}>
                        <div>
                            <div className={styles.sparkLines}>
                                <div className={styles.sparkBar} style={{ height: "20%" }}></div>
                                <div className={styles.sparkBar} style={{ height: "50%" }}></div>
                                <div className={styles.sparkBar} style={{ height: "35%" }}></div>
                                <div className={styles.sparkBar} style={{ height: "80%" }}></div>
                                <div className={styles.sparkBar} style={{ height: "60%" }}></div>
                                <div className={styles.sparkBar} style={{ height: "90%" }}></div>
                                <div className={styles.sparkBar} style={{ height: "45%" }}></div>
                                <div className={styles.sparkBar} style={{ height: "70%" }}></div>
                                <div className={styles.sparkBar} style={{ height: "100%" }}></div>
                                <div className={styles.sparkBar} style={{ height: "65%" }}></div>
                            </div>
                            <h3>LLM<br />Observability</h3>
                        </div>
                        <div className={styles.metric}><span>99.97%</span> uptime · LangSmith · Helicone</div>
                    </div>

                    {/* C17: Deploy wide */}
                    <div className={`${styles.card} ${styles.c17}`}>
                        <div className={styles.deployText}>
                            <h2>Ship to prod<br />in one push.</h2>
                            <p>CI/CD · GitHub Actions · Vercel · Railway<br />Zero-downtime deploys for AI apps</p>
                        </div>
                        <div className={styles.deployMeta}>
                            <div className={styles.deployBadge}>
                                <div className={styles.statusDot}></div>
                                main → production
                            </div>
                            <div className={styles.deployBadge} style={{ borderColor: "rgba(200,241,53,0.15)", background: "rgba(200,241,53,0.05)" }}>
                                ✓ Build passed · 2.4s
                            </div>
                        </div>
                    </div>

                    {/* C18: LangChain */}
                    <div className={`${styles.card} ${styles.c18}`}>
                        <div className={styles.chainLink}>
                            <div className={styles.chainNode}>📄</div>
                            <div className={styles.chainDash}></div>
                            <div className={styles.chainNode}>🔗</div>
                            <div className={styles.chainDash}></div>
                            <div className={styles.chainNode}>🧠</div>
                            <div className={styles.chainDash}></div>
                            <div className={styles.chainNode}>💬</div>
                        </div>
                        <h3>LangChain &<br />LlamaIndex</h3>
                        <p>Chains · Retrievers · Agents · Memory</p>
                    </div>

                    {/* C19: Brand editorial */}
                    <div className={`${styles.card} ${styles.c19}`}>
                        <div className={styles.brandTitle}>The modern<br />AI stack.</div>
                        <div className={styles.logoStack}>
                            <div className={styles.logoPill}>Claude</div>
                            <div className={styles.logoPill}>FastAPI</div>
                            <div className={styles.logoPill}>Docker</div>
                            <div className={styles.logoPill}>AWS</div>
                            <div className={styles.logoPill}>Postgres</div>
                            <div className={styles.logoPill}>Redis</div>
                            <div className={styles.logoPill}>Terraform</div>
                            <div className={styles.logoPill}>n8n</div>
                            <div className={styles.logoPill}>LangChain</div>
                        </div>
                        <div className={styles.brandSub}>// SHIP · SCALE · ITERATE</div>
                    </div>

                    {/* C20: CTA */}
                    <div className={`${styles.card} ${styles.c20}`}>
                        <h2>Infinite<br />scale.<br />Zero limits.</h2>
                        <p>From prototype to production-grade AI systems.</p>
                        <div className={styles.ctaWhite}>Start building →</div>
                    </div>

                </div>
            </div>

            {/* Premium Bottom Fade + Tech Stack */}
            <div className={styles.footerOverlay}>
                <div className={styles.bottomFade}></div>
                <div className={styles.techStackContent}>
                    <h4 className={styles.techStackHeading}>POWERED BY MODERN TECHNOLOGIES</h4>
                    <div className={styles.techIconsMarquee}>
                        <div className={styles.marqueeInner}>
                            {/* Individual tech items (duplicated for loop) */}
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className={styles.marqueeSet}>
                                    <div className={styles.techItem}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 19.77h20L12 2zm0 3.5l7.15 12.77H4.85L12 5.5z" /><path d="M11 10h2v5h-2z" /></svg>
                                        <span className={styles.techLabel}>Next.js</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2" /><path d="M12 7a15 15 0 0 0-4.9 2.9M12 17a15 15 0 0 1 4.9-2.9M7 12a15 15 0 0 0 2.9 4.9M17 12a15 15 0 0 1-2.9-4.9" /><path d="M7 12a15 15 0 0 1 2.9-4.9M17 12a15 15 0 0 0-2.9 4.9M12 7a15 15 0 0 1 4.9 2.9M12 17a15 15 0 0 0-4.9-2.9" /></svg>
                                        <span className={styles.techLabel}>React</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                        <span className={styles.techLabel}>AWS</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M22 6.5s-2.03-.5-4.5-.5c-2.47 0-4.5.5-4.5.5V11c0 1.5 1.5 3 4.5 3s4.5-1.5 4.5-3V6.5zM12 6.5s-2.03-.5-4.5-.5c-2.47 0-4.5.5-4.5.5V11c0 1.5 1.5 3 4.5 3s4.5-1.5 4.5-3V6.5z" /><path d="M22 13s-2.03-.5-4.5-.5c-2.47 0-4.5.5-4.5.5v2c0 1.5 1.5 3 4.5 3s4.5-1.5 4.5-3v-2zM12 13s-2.03-.5-4.5-.5c-2.47 0-4.5.5-4.5.5v2c0 1.5 1.5 3 4.5 3s4.5-1.5 4.5-3v-2z" /></svg>
                                        <span className={styles.techLabel}>Docker</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                        <span className={styles.techLabel}>FastAPI</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12h6" /><circle cx="7" cy="12" r="2" /><circle cx="17" cy="12" r="2" /><path d="M12 7v10" /><circle cx="12" cy="5" r="2" /><circle cx="12" cy="19" r="2" /></svg>
                                        <span className={styles.techLabel}>n8n</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m12 2-8 3v11l8 3 8-3V5l-8-3z" /><path d="m12 22 5-9-5-9-5 9 5 9z" /><path d="M12 7V2" /><path d="M12 22v-5" /><path d="m17 13 5 2" /><path d="m7 13-5 2" /><path d="m17 11 5-2" /><path d="m7 11-5-2" /></svg>
                                        <span className={styles.techLabel}>Kubernetes</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2s-4 1-4 4v2c0 3 3 3 3 6s-1 4-4 4" /><path d="M12 2s4 1 4 4v2c0 3-3 3-3 6s1 4 4 4" /></svg>
                                        <span className={styles.techLabel}>Python</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" /></svg>
                                        <span className={styles.techLabel}>Terraform</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 8v4l3 3" /></svg>
                                        <span className={styles.techLabel}>AI Agents</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
