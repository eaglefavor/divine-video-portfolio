import React, { useState, useEffect, useRef, useId } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, ArrowRight, Play, Plus, Minus, X, Menu, Check, Copy, Download, Aperture, Sparkles, AudioLines, Layers, Clapperboard, Mail, MessageCircle, Film, Music, Smartphone, Wand2, Video, Box } from 'lucide-react';
import '@fontsource-variable/manrope';
import '@fontsource-variable/dm-sans';
import '@fontsource/instrument-serif/400-italic.css';
import './styles.css';

const CONTACT_EMAIL = 'debeludivine@gmail.com';
const CONTACT_PHONE = '+2347016159288';
const WHATSAPP_URL = 'https://wa.me/2347016159288';
const EMAIL_URL = 'mailto:debeludivine@gmail.com';

const projects = [
  { id: 'open-road', title: 'The open road', type: 'Editing', tag: 'STORY & COLOR', image: '/images/desert-drive.webp', number: '01', description: 'A visual direction for a cinematic travel film. Warm, sun-faded tones, considered pacing, and a sense of possibility in every frame.', process: ['Build a story around the journey, not just the destination.', 'Shape the rhythm with intentional cuts and atmospheric sound.', 'Bring the desert to life with a warm, film-inspired grade.'], tools: 'DaVinci Resolve · Premiere Pro' },
  { id: 'otherworld', title: 'Beyond the ordinary', type: 'VFX', tag: 'COMPOSITING & VFX', image: '/images/otherworld.webp', number: '02', description: 'An otherworldly visual direction exploring scale, atmosphere, and the meeting point of practical storytelling and impossible worlds.', process: ['Develop a strong silhouette and an atmospheric visual language.', 'Explore procedural environments and effects in Houdini.', 'Integrate light, texture, and compositing into a cohesive frame.'], tools: 'SideFX Houdini · DaVinci Resolve' },
  { id: 'in-motion', title: 'Made to move', type: 'AI', tag: 'CREATIVE DIRECTION', image: '/images/in-motion.webp', number: '03', description: 'A fashion-inspired visual direction built around bold color and expressive movement. A study in mood, texture, and visual rhythm.', process: ['Define a distinctive mood, palette, and creative direction.', 'Explore dynamic video and bespoke sound ideas.', 'Refine the final story through hands-on editing and sound design.'], tools: 'DaVinci Resolve · Premiere Pro' },
];

const services = [
  { name: 'Video editing & color', detail: 'From a collection of clips to a story worth watching. Thoughtful pacing, seamless transitions, color correction, and a cinematic finishing touch for films, branded content, and social media.', tags: 'DAVINCI RESOLVE / PREMIERE PRO / CAPCUT', icon: Clapperboard },
  { name: 'Compositing & visual effects', detail: 'When the idea goes beyond what a camera can capture. Procedural effects, atmospheric worlds, and compositing that supports the story — powered by SideFX Houdini.', tags: 'SIDEFX HOUDINI / COMPOSITING / VFX', icon: Layers },
  { name: 'AI-powered production', detail: 'A bigger creative playground. I explore modern video generation and original sound ideas, then bring the pieces together with an editor’s eye.', tags: 'VIDEO GENERATION / SOUND DESIGN / CREATIVE DIRECTION', icon: Sparkles },
  { name: 'Sound & storytelling', detail: 'Because a great edit is felt as much as it is seen. Dialogue, musical rhythm, sound design, and atmosphere come together to give every sequence its emotional shape.', tags: 'SOUND DESIGN / MUSIC EXPLORATION / NARRATIVE', icon: AudioLines },
];

const toolWorkflows = [
  {
    id: 'resolve',
    name: 'DaVinci Resolve',
    short: 'Resolve',
    category: 'Editing & Color Finishing',
    tag: 'THE FINISHING STUDIO',
    icon: Aperture,
    image: '/images/workflow-resolve.jpg',
    color: '#ed4e31',
    summary: 'My main home for serious work. I cut, grade, mix and deliver here when the story needs to feel cinematic and precise.',
    steps: [
      { n: '01', title: 'Project Setup & Media Management', detail: 'Create project with DaVinci YRGB Color Managed. Build bins: 01_FOOTAGE, 02_AUDIO, 03_GRAPHICS. Generate proxies (H.264 half-res) for smooth playback. Set timeline resolution, framerate, and backup to Blackmagic Cloud.' },
      { n: '02', title: 'Selects & Rough Assembly', detail: 'Watch everything. Mark selects with keywords and smart bins. Lay down story spine — beginning, middle, end. Don’t trim yet, just find the emotional backbone.' },
      { n: '03', title: 'Fine Cut — The Rhythm Edit', detail: 'Ripple, Roll, Slip, Slide. Work in Trim Edit Mode. J-cuts and L-cuts for natural dialogue flow. Every cut should have a reason: emotion, information, or rhythm.' },
      { n: '04', title: 'Sound Edit in Fairlight', detail: 'Clean dialogue with Voice Isolation and De-Hummer. Layer ambience, Foley, SFX. Mix dialogue at -12 LUFS, duck music -20dB under dialogue. Add EQ and light compression.' },
      { n: '05', title: 'Primary Color Correction', detail: 'Use Scopes: Waveform for exposure, Parade for white balance, Vectorscope for skin. Balance shot to be technically correct before creative look. Match all shots in scene with stills.' },
      { n: '06', title: 'Secondary & Look Development', detail: 'Power Windows, Qualifiers, Magic Mask for skin isolation. Build film emulation or custom LUT. Add subtle halation, grain (35mm 200T), vignette. Keep skin tones on skin tone line.' },
      { n: '07', title: 'Fusion VFX & Titles', detail: 'Track and stabilize shots, remove objects, add titles in Fusion. Use planar tracker, delta keyer for green screen. Keep effects invisible — they should serve story, not show off.' },
      { n: '08', title: 'Master & Delivery', detail: 'Render master: ProRes 422 HQ or DNxHR HQX. Web: H.264 4K + 1080p, 20mbps. Vertical 9:16 and square 1:1 for social. Include data burn-in for review, clean for final.' },
    ],
    proTip: 'I grade in a dark room with a calibrated monitor. Take a 10-min break every 45 mins — eyes lie when tired.',
    bestFor: 'Short films, music videos, branded content, anything color-critical',
    time: '2-5 days for 3-min piece'
  },
  {
    id: 'premiere',
    name: 'Premiere Pro',
    short: 'Premiere',
    category: 'Fast Editorial & Client Work',
    tag: 'THE ROUGH CUT ENGINE',
    icon: Film,
    image: '/images/workflow-premiere.jpg',
    color: '#5a5cf0',
    summary: 'When speed and collaboration matter. Great for client review cycles, team projects, and quick turnarounds.',
    steps: [
      { n: '01', title: 'Ingest & Proxy Workflow', detail: 'Use Media Browser to ingest. Create proxies via Media Encoder (ProRes Low Res). Set up Productions panel for multi-project workflows. Auto-sync audio with timecode.' },
      { n: '02', title: 'Logging & Selects Sequence', detail: 'Watch footage at 1.5x speed. Mark selects with markers (M) and labels. Build select sequence by topic or emotion. Use transcription for dialogue search.' },
      { n: '03', title: 'Assembly Edit', detail: 'Drag selects to main timeline. Build radio edit first — story with just dialogue. Then add b-roll to cover cuts. Keep timeline organized with color labels.' },
      { n: '04', title: 'Rough Cut with Flow', detail: 'Add J/L cuts, speed ramps (Time Remapping), and morph cuts for interviews. Use Essential Sound panel: Dialogue > Balanced, Music > Duck against dialogue.' },
      { n: '05', title: 'Graphics & Essential Graphics', detail: 'Build titles in Essential Graphics. Use Mogrt templates for consistency. Animate with keyframes — easy ease, 12-frame moves. Keep lower thirds under 7 words.' },
      { n: '06', title: 'Lumetri Color', detail: 'Basic Correction for exposure, Creative for LUT, Curves for contrast, Color Wheels for skin. Use Lumetri Scopes. Copy-paste Lumetri across similar shots.' },
      { n: '07', title: 'Audio Mix & Cleanup', detail: 'Use DeNoise, DeReverb, Essential Sound. Mix dialogue, music, SFX on separate buses. Keep dialogue around -12dB, master peak at -3dB.' },
      { n: '08', title: 'Export & Team Handoff', detail: 'Export via Media Encoder queue: Master ProRes, H.264 for review with Frame.io integration. Package project with Project Manager for archive.' },
    ],
    proTip: 'Use Productions — not single project files — for anything over 10 mins. It saves crashes and makes collaboration sane.',
    bestFor: 'Client revisions, YouTube content, interviews, fast turnarounds',
    time: '1-3 days for 5-min piece'
  },
  {
    id: 'houdini',
    name: 'SideFX Houdini',
    short: 'Houdini',
    category: 'Procedural VFX & Worlds',
    tag: 'THE IMPOSSIBLE BUILDER',
    icon: Box,
    image: '/images/workflow-houdini.jpg',
    color: '#ff6a2b',
    summary: 'Where I build what cameras can’t capture. Procedural, node-based, built to change — perfect for worlds, destruction, and magic.',
    steps: [
      { n: '01', title: 'Concept & Reference', detail: 'Gather references: real-world physics, film stills, concept art. Sketch silhouette and scale. Decide what is practical vs. CG. Block out scene with simple primitives.' },
      { n: '02', title: 'Procedural Modeling (SOPs)', detail: 'Build with nodes, not polygons. Use VEX and attributes to control detail. Keep everything procedural — if client says change building height, I change one slider, not remodel.' },
      { n: '03', title: 'Simulation Setup', detail: 'Choose solver: POPs for particles, FLIP for water, Pyro for smoke/fire, Vellum for cloth/hair, RBD for destruction. Cache low-res first, iterate, then high-res sim overnight.' },
      { n: '04', title: 'Lookdev & Shading', detail: 'Build materials in MaterialX / Karma. Use PBR workflow: base color, roughness, normal. Add procedural wear with curvature and ambient occlusion. Test under HDRI lighting.' },
      { n: '05', title: 'Lighting & Rendering (Karma)', detail: 'Light with dome + key + fill. Use Karma XPU for speed. Render AOVs: diffuse, specular, volume, crypto mattes, Z-depth. Always render EXR 16-bit with ACEScg.' },
      { n: '06', title: 'Compositing & Integration', detail: 'Comp in Nuke or Fusion: merge CG over plate, match grain, add lens distortion, chromatic aberration. Use crypto mattes to tweak specific objects without re-render.' },
      { n: '07', title: 'Optimization & Delivery', detail: 'Reduce geo with polyreduce, proxy high-res caches. Deliver VDB for volumes, USD for pipeline. Keep node graph clean and labeled for future changes.' },
    ],
    proTip: 'Never sim at final res first. Low-res, fast, ugly sims to get motion right, then crank it up. Houdini rewards patience.',
    bestFor: 'Fantasy worlds, magical effects, destruction, abstract visuals',
    time: '3-10 days depending on complexity'
  },
  {
    id: 'capcut',
    name: 'CapCut',
    short: 'CapCut',
    category: 'Social & Quick Content',
    tag: 'THE SPEED EDITOR',
    icon: Smartphone,
    image: '/images/workflow-capcut.jpg',
    color: '#00d8ff',
    summary: 'For content that needs to ship today. Mobile-first, trend-aware, built for TikTok, Reels, and Shorts that stop thumbs.',
    steps: [
      { n: '01', title: 'Import & Auto-Beat', detail: 'Import phone footage. Use Auto Beat detection to mark drops. Trim dead air with auto-reframe for 9:16. Set project to 1080x1920, 30fps.' },
      { n: '02', title: 'Auto Captions & Text Styles', detail: 'Generate auto captions, then style: bold, kinetic, word-by-word pop. Keep captions in safe zone (middle 70%). Use templates that match brand font.' },
      { n: '03', title: 'Trending Effects & Transitions', detail: 'Add velocity ramps, camera shake, flash transitions on beat. Use 3D Zoom, Auto Velocity. Don’t overdo — 2-3 effects per video max, or it feels cheap.' },
      { n: '04', title: 'Sound Library & Voiceover', detail: 'Search trending sounds or add voiceover with text-to-speech. Use noise reduction, auto-duck music under voice. Add SFX: whoosh, pop, camera shutter for emphasis.' },
      { n: '05', title: 'Keyframe Animation', detail: 'Animate scale/position for Ken Burns, stickers, text. Use graph editor for smooth ease. Add auto tracking for text that follows subject.' },
      { n: '06', title: 'Export for Platforms', detail: 'Export 1080p, 15-20mbps, H.264. Add watermark if needed. Direct publish to TikTok with auto hashtags. Save template for series consistency.' },
    ],
    proTip: 'Hook in first 1.5 seconds or you lose them. Start with action or question, not logo.',
    bestFor: 'TikTok, Reels, YouTube Shorts, quick promos',
    time: '30 mins - 3 hours'
  },
  {
    id: 'gemini',
    name: 'Gemini Omni / Veo',
    short: 'Gemini',
    category: 'AI Video Generation',
    tag: 'THE IDEA AMPLIFIER',
    icon: Wand2,
    image: '/images/workflow-gemini.jpg',
    color: '#8b5cf6',
    summary: 'I use it as a concept engine, not a replacement. Generate starting points, explore looks, then take over in Resolve to make it human.',
    steps: [
      { n: '01', title: 'Creative Direction First', detail: 'Write 1-sentence core idea + mood board. Define: subject, action, camera move, lighting, lens, film stock. Bad prompt = bad video. Specificity wins.' },
      { n: '02', title: 'Prompt Engineering', detail: 'Structure: [Shot type] of [Subject] [Action] in [Location], [Lighting], [Camera movement], [Style]. Example: Close-up of orange sports car drifting on desert road, golden hour, 35mm anamorphic, handheld, Kodak 2383.' },
      { n: '03', title: 'Generation & Variation', detail: 'Generate 3-4 variations per prompt. Test camera moves: dolly, orbit, handheld. Keep seed consistent for same character. Iterate prompt based on what model misunderstands.' },
      { n: '04', title: 'Curation & Selection', detail: 'Pick only 10% of generations. Look for: stable motion, coherent hands/faces, usable 2-3 second chunk. Discard rest — don’t try to fix bad AI, generate better.' },
      { n: '05', title: 'Enhancement & Cleanup', detail: 'Upscale with Topaz Video AI, stabilize, remove flicker. Fix faces with GFPGAN if needed. Add film grain to hide AI artifacts and unify texture.' },
      { n: '06', title: 'Editorial Integration', detail: 'Cut AI clips into real timeline in Resolve. Add real sound design, real music, real color grade. The edit makes AI feel human — pacing, sound, and story do 80% of work.' },
    ],
    proTip: 'Never deliver raw AI. Always cut, grade, and sound design it like real footage. AI is a brush, not the painter.',
    bestFor: 'Concept visuals, mood films, impossible shots, pitch decks',
    time: '2-6 hours for concept exploration'
  },
  {
    id: 'lyria',
    name: 'Lyria & Suno',
    short: 'Lyria',
    category: 'AI Music & Sound',
    tag: 'THE SOUND EXPLORER',
    icon: Music,
    image: '/images/workflow-lyria.jpg',
    color: '#10b981',
    summary: 'For when you need original music but can’t afford composer yet, or need to explore mood before hiring. I generate ideas, then shape them to picture.',
    steps: [
      { n: '01', title: 'Brief & Emotional Arc', detail: 'Map video timeline to emotion: 0-10s tension, 10-30s build, 30-45s release. Define genre, BPM, key, instruments. Reference tracks: 2-3 songs that feel right.' },
      { n: '02', title: 'Prompt Crafting', detail: 'Prompt format: [Genre] at [BPM] BPM in [Key], [Mood], featuring [Instruments], [Structure]. Example: Cinematic ambient at 78 BPM in D minor, melancholic hopeful, featuring felt piano, warm pads, subtle strings, build to crescendo at 0:40.' },
      { n: '03', title: 'Generation & Stem Exploration', detail: 'Generate 5-6 versions. In Lyria/Suno, request stems if available: drums, bass, melody, pads. Listen for motif that can become theme. Keep versions with clean stems.' },
      { n: '04', title: 'Arrangement to Picture', detail: 'Import to DAW or Resolve Fairlight. Cut music to hit picture: add hits on cuts, swell under emotional moments. Use time-stretch to make chorus hit climax frame.' },
      { n: '05', title: 'Layering & Sound Design', detail: 'Layer real textures over AI: vinyl crackle, room tone, real Foley. Add sidechain compression so music breathes with dialogue. Mix music -24 LUFS under dialogue, -16 LUFS when alone.' },
      { n: '06', title: 'Final Mix & Rights Check', detail: 'Check for AI artifacts: weird cymbal, muddy low end — EQ fix. Ensure track is cleared for client use. Keep project file with prompts for re-generation if client wants change.' },
    ],
    proTip: 'AI music is 70% there. The last 30% — arrangement to picture and layering real textures — is what makes it feel human.',
    bestFor: 'Temp music, mood exploration, social content, low-budget originals',
    time: '1-3 hours for custom track'
  },
];

function Modal({ children, onClose, title }) {
  const ref = useRef(null);
  const id = useId();
  useEffect(() => {
    const previous = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current?.querySelector('button')?.focus();
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const focusable = ref.current.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]');
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', onKey); previous?.focus(); };
  }, [onClose]);
  return <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}><div className="modal wide" role="dialog" aria-modal="true" aria-labelledby={id} ref={ref}><div className="modal-heading"><span id={id}>{title}</span><button className="icon-button" aria-label="Close dialog" onClick={onClose}><X size={22}/></button></div>{children}</div></div>;
}

function BriefForm() {
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [brief, setBrief] = useState('');
  const [copyError, setCopyError] = useState(false);
  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setBrief(`PROJECT BRIEF FOR DIVINE\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\nTimeline: ${data.get('timeline')}\n\nThe idea:\n${data.get('idea')}\n`);
    setReady(true);
  }
  function download() {
    const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain' }));
    const a = document.createElement('a'); a.href = url; a.download = 'project-brief-for-divine.txt'; a.click(); URL.revokeObjectURL(url);
  }
  async function copy() {
    try { await navigator.clipboard.writeText(brief); setCopied(true); setCopyError(false); } catch { setCopyError(true); }
  }
  return ready ? <div className="brief-result">
    <div className="success-icon"><Check/></div>
    <h2>A good story starts here.</h2>
    <p>Your brief is ready. Save it and share it with Divine via email or WhatsApp. Nothing has been sent or stored.</p>
    <pre>{brief}</pre>
    <div className="button-row">
      <button className="button dark" onClick={download}>Download brief <Download size={17}/></button>
      <button className="button outline" onClick={copy}>{copied ? 'Copied!' : 'Copy brief'} <Copy size={16}/></button>
    </div>
    {copyError && <p role="alert">Clipboard access is unavailable. Please download your brief instead.</p>}
    <div className="brief-contact">
      <p>Share your brief:</p>
      <div className="brief-contact-links">
        <a href={EMAIL_URL} className="button dark"><Mail size={16}/> {CONTACT_EMAIL}</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="button outline"><MessageCircle size={16}/> WhatsApp {CONTACT_PHONE}</a>
      </div>
    </div>
    <button className="text-button" onClick={() => setReady(false)}>Create another brief <ArrowRight size={15}/></button>
  </div> : <form className="brief-form" onSubmit={submit}>
    <div className="eyebrow red">LET’S MAKE SOMETHING GREAT</div>
    <h2>Tell me about your idea.</h2>
    <p>Turn your idea into a clear project brief. Download it, keep it, and share it when you’re ready.</p>
    <div className="form-grid">
      <label>Your name<input name="name" placeholder="How should I call you?" required maxLength={100}/></label>
      <label>Email address<input name="email" type="email" placeholder="you@example.com" required maxLength={150}/></label>
      <label>What do you need?<select name="service"><option>Video editing & color</option><option>Compositing & VFX</option><option>AI-powered production</option><option>A little of everything</option></select></label>
      <label>Your timeline<select name="timeline"><option>Let’s discuss</option><option>Within 2 weeks</option><option>This month</option><option>1–3 months</option></select></label>
    </div>
    <label>The big idea<textarea name="idea" rows={4} required maxLength={4000} placeholder="The story, the audience, the feeling. Tell me what you have in mind…"/></label>
    <button className="button dark" type="submit">Create my brief <ArrowUpRight size={18}/></button>
    <div className="brief-direct-contact">
      <p>Prefer to reach out directly?</p>
      <div className="brief-contact-links">
        <a href={EMAIL_URL}><Mail size={14}/> {CONTACT_EMAIL}</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle size={14}/> {CONTACT_PHONE}</a>
      </div>
    </div>
    <p className="form-note">Your information stays in your browser. This brief is for you to download and share via your preferred channel.</p>
  </form>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All work');
  const [activeService, setActiveService] = useState(0);
  const [modal, setModal] = useState(null);
  const [workflowDetail, setWorkflowDetail] = useState(null);
  const [activeWorkflowTab, setActiveWorkflowTab] = useState('all');
  const closeModal = React.useCallback(() => setModal(null), []);
  const visibleProjects = filter === 'All work' ? projects : projects.filter(p => p.type === filter);
  const filteredWorkflows = activeWorkflowTab === 'all' ? toolWorkflows : toolWorkflows.filter(t => t.id === activeWorkflowTab);

  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="site-header wrap"><a className="logo" href="#home" aria-label="Divine home">divine<span>®</span></a><nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">{[['Work', 'work'], ['Expertise', 'expertise'], ['Workflow', 'workflow'], ['About', 'about']].map(([text, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{text}</a>)}<a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={16}/></a></nav><button className="mobile-menu icon-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></header>
    <main id="main-content">
      <section className="hero wrap" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> VIDEO EDITOR & VISUAL STORYTELLER</div><h1>Good footage.<br/>Great stories.<br/><span>A little <i>Divine.</i></span><svg className="title-spark" viewBox="0 0 70 70" aria-hidden="true"><path d="M35 2v66M2 35h66M12 12l46 46M12 58l46-46"/></svg></h1><p>I turn ideas into visuals that make you feel something.<br className="desktop-break"/> Editing, VFX, and a little AI magic — all in service<br className="desktop-break"/> of a story worth telling.</p><div className="hero-actions"><a className="button dark" href="#work">Explore my work <ArrowUpRight size={18}/></a><button className="process-link" onClick={() => setModal('process')}><span className="play-circle"><Play size={12} fill="currentColor"/></span> Behind the process</button></div>
        <div className="hero-direct-contact">
          <a href={EMAIL_URL} className="hero-contact-link"><Mail size={13}/> {CONTACT_EMAIL}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hero-contact-link"><MessageCircle size={13}/> {CONTACT_PHONE}</a>
        </div>
        <div className="hero-location"><span className="small-star">✳</span> BASED IN AWKA, NIGERIA <span className="location-divider"/> CREATING EVERYWHERE</div></div>
        <div className="hero-visual"><img src="/images/desert-drive.webp" alt="Cinematic concept of an orange sports car on a winding desert road" fetchPriority="high"/><div className="visual-top"><span><i/> THE ART OF THE EDIT</span><Aperture size={21}/></div><div className="frame-corner top-left"/><div className="frame-corner bottom-right"/><div className="visual-bottom"><div><span className="eyebrow">EVERY FRAME, INTENTIONAL.</span><p>Not just seen.<br/><em>Felt.</em></p></div><button aria-label="Explore The open road concept" className="visual-arrow" onClick={() => setModal(projects[0])}><ArrowUpRight size={24}/></button></div></div>
      </section>
      <section className="toolkit wrap" aria-label="Creative software"><span className="toolkit-label">THE TOOLS CHANGE.<br/><strong>THE VISION DOESN’T.</strong></span><div className="tool-brand resolve"><Aperture/><span>DaVinci Resolve</span></div><div className="tool-brand premiere"><span className="app-icon">Pr</span><span>Premiere Pro</span></div><div className="tool-brand houdini"><span className="houdini-mark">◉</span><span>Houdini</span></div><div className="tool-brand capcut"><span className="capcut-mark">⋈</span><span>CapCut</span></div><div className="tool-brand ai-brand"><Sparkles/><span>AI, in the mix.</span></div></section>
      <section className="work-section wrap section-space" id="work"><div className="section-topline"><span className="eyebrow"><span className="red small-plus">+</span> THE CREATIVE RANGE</span><span className="section-index">01 / SELECTED WORKS</span></div><div className="section-heading"><h2>Different worlds.<br/>Same <span className="serif">attention to detail.</span></h2><p>From the first cut to the final feeling.<br/>A look at the worlds I love to create.</p></div><div className="work-controls"><div className="filters" aria-label="Filter creative directions">{['All work', 'Editing', 'VFX', 'AI'].map(item => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? 'active' : ''}>{item}{item === 'All work' && <span>03</span>}</button>)}</div><span className="concept-note">Selected works · More coming soon</span></div><div className={`project-grid ${visibleProjects.length === 1 ? 'filtered' : ''}`}>{visibleProjects.map(p => <button className="project-card" key={p.id} onClick={() => setModal(p)}><div className="project-image"><img src={p.image} alt={p.title === 'The open road' ? 'Golden desert road with an orange car' : p.type === 'VFX' ? 'Glowing celestial ring above dark water' : 'Fashion portrait with sculptural orange fabric'} loading="lazy"/><span className="project-number">{p.number} /</span><span className="project-open"><ArrowUpRight size={21}/></span><span className="concept-badge">FEATURED</span></div><div className="project-info"><div><span className="eyebrow">{p.tag}</span><h3>{p.title}</h3></div><ArrowUpRight size={20}/></div></button>)}</div><div className="work-footnote"><span>Exploring creative directions and visual storytelling — from concept to final cut.</span><span>A STORY-FIRST APPROACH <ArrowDown size={13}/></span></div></section>
      
      <section className="expertise-section" id="expertise"><div className="wrap expertise-layout"><div className="expertise-intro"><div className="eyebrow"><span className="red small-plus">+</span> WHAT I BRING TO THE TIMELINE</div><h2>One creative.<br/><span className="serif">Many possibilities.</span></h2><p>The right tool for the right story. I move between traditional editing, complex effects, and emerging tools to bring your vision to life.</p><a className="text-link" href="#workflow">See detailed workflow <ArrowUpRight size={18}/></a><div className="timeline-art" aria-hidden="true"><div className="timeline-head"><span>SEQUENCE 01</span><span>00:00:03:00</span></div><div className="timeline-track"><span>V3</span><i/><i/></div><div className="timeline-track"><span>V2</span><i/><i/><i/></div><div className="timeline-track"><span>A1</span><div className="waveform">▂▅▃▇▄▂▆▇▂▄▅▇▄▂▆▂▄▇▅▃▆▅▂▃▆▇▄▅</div></div><div className="playhead"/></div></div><div className="services">{services.map((s, i) => <div className={`service ${activeService === i ? 'expanded' : ''}`} key={s.name}><button onClick={() => setActiveService(activeService === i ? null : i)} aria-expanded={activeService === i} aria-controls={`service-${i}`}><span className="service-number">0{i + 1}</span><span>{s.name}</span>{activeService === i ? <Minus size={19}/> : <Plus size={19}/>}</button><div id={`service-${i}`} className="service-content" hidden={activeService !== i}><p>{s.detail}</p><div className="service-tags">{s.tags}</div></div></div>)}</div></div></section>

      <section className="workflow-section wrap section-space" id="workflow">
        <div className="section-topline"><span className="eyebrow"><span className="red small-plus">+</span> THE TOOLKIT, DECONSTRUCTED</span><span className="section-index">02 / HOW I ACTUALLY WORK</span></div>
        <div className="section-heading"><h2>Every tool has its moment.<br/>Here’s <span className="serif">exactly how I use it.</span></h2><p>Not just what software I know — but the step-by-step process I follow from first click to final export. Real workflow, with real photos of the process.</p></div>
        
        <div className="workflow-tabs">
          <button className={activeWorkflowTab === 'all' ? 'active' : ''} onClick={() => setActiveWorkflowTab('all')}>All Tools</button>
          {toolWorkflows.map(t => <button key={t.id} className={activeWorkflowTab === t.id ? 'active' : ''} onClick={() => setActiveWorkflowTab(t.id)}>{t.short}</button>)}
        </div>

        <div className="workflow-grid">
          {filteredWorkflows.map(tool => {
            const Icon = tool.icon;
            return (
              <button key={tool.id} className="workflow-card" onClick={() => setWorkflowDetail(tool)}>
                <div className="workflow-card-image">
                  <img src={tool.image} alt={`${tool.name} workflow`} loading="lazy"/>
                  <div className="workflow-card-overlay">
                    <span className="workflow-card-tag">{tool.tag}</span>
                    <span className="workflow-card-open"><ArrowUpRight size={18}/></span>
                  </div>
                  <div className="workflow-card-icon"><Icon size={18}/></div>
                </div>
                <div className="workflow-card-info">
                  <div className="workflow-card-header">
                    <h3>{tool.name}</h3>
                    <span>{tool.category}</span>
                  </div>
                  <p>{tool.summary}</p>
                  <div className="workflow-card-meta">
                    <span><strong>{tool.steps.length}</strong> STEPS</span>
                    <span>{tool.time}</span>
                  </div>
                  <div className="workflow-card-steps-preview">
                    {tool.steps.slice(0,3).map(s => <span key={s.n}>{s.n} {s.title}</span>)}
                    <span className="more-steps">+{tool.steps.length - 3} more →</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <div className="workflow-bottom-note">
          <div><strong>Want me to walk you through your project?</strong><p>Every project uses a mix of these. I pick the right tool for the right moment — not the other way around.</p></div>
          <a href="#contact" className="button dark">Start a brief <ArrowUpRight size={16}/></a>
        </div>
      </section>

      <section className="about-section wrap section-space" id="about"><div className="about-portrait"><div className="portrait-top"><span>THE PERSON BEHIND THE PIXELS</span><ArrowUpRight size={19}/></div><div className="portrait-monogram" aria-hidden="true">d<span>.</span><svg viewBox="0 0 70 70"><path d="M35 2v66M2 35h66M12 12l46 46M12 58l46-46"/></svg></div><div className="portrait-bottom"><span>DIVINE CHUKWUDEBELU<br/>UGOCHUKWU</span><span className="portrait-pending">Portrait coming soon</span></div></div><div className="about-copy"><div className="eyebrow"><span className="red small-plus">+</span> A LITTLE ABOUT ME</div><h2>An editor’s eye.<br/>A storyteller’s <span className="serif">heart.</span></h2><p>I’m Divine Chukwudebelu Ugochukwu — a video editor, visual explorer, and Theatre Arts student at UNIZIK in Awka, Nigeria.</p><p>For about three years, I’ve been turning footage into stories. My background in theatre shapes the way I edit: with an instinct for rhythm, emotion, and the moments that matter.</p><p>Whether I’m building an effect in Houdini, finding the perfect cut in Resolve, or experimenting with new tools, the goal is always the same: make something that stays with you.</p><div className="about-contact">
        <a href={EMAIL_URL} className="about-contact-link"><Mail size={14}/> {CONTACT_EMAIL}</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="about-contact-link"><MessageCircle size={14}/> WhatsApp: {CONTACT_PHONE}</a>
      </div><div className="about-stats"><div><strong><span>~</span>3</strong><span>YEARS OF EXPLORING</span></div><div><strong>∞</strong><span>WAYS TO TELL A STORY</span></div><div><span className="stat-location">AWKA, NG <ArrowUpRight size={15}/></span><span>ROOTED HERE. THINKING BIG.</span></div></div></div></section>
      <section className="contact-section wrap" id="contact"><div className="contact-panel"><div className="contact-top"><span className="eyebrow"><span className="status-dot"/> OPEN TO CREATIVE COLLABORATIONS</span><span>YOUR NEXT CHAPTER STARTS HERE ↙</span></div><div className="contact-main"><h2>Have a story?<br/>Let’s make it <span className="serif">move.</span></h2><button className="contact-circle" aria-label="Start a project brief" onClick={() => setModal('contact')}><ArrowUpRight size={46}/></button></div>
      <div className="contact-details">
        <a href={EMAIL_URL} className="contact-detail-item"><span className="contact-detail-label"><Mail size={14}/> EMAIL</span><span className="contact-detail-value">{CONTACT_EMAIL}</span></a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contact-detail-item"><span className="contact-detail-label"><MessageCircle size={14}/> WHATSAPP</span><span className="contact-detail-value">{CONTACT_PHONE}</span></a>
      </div>
      <div className="contact-bottom"><p>A film. A campaign. An idea you can’t stop thinking about.<br/>Let’s see where we can take it.</p><button className="text-link" onClick={() => setModal('contact')}>Start a project brief <ArrowUpRight size={19}/></button></div></div></section>
    </main>
    <footer className="footer wrap"><a href="#home" className="logo">divine<span>®</span></a><span>Thoughtfully cut. Intentionally created.</span><div className="footer-contact"><a href={EMAIL_URL}>{CONTACT_EMAIL}</a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{CONTACT_PHONE}</a><span>© {new Date().getFullYear()} Divine Ugochukwu</span><a href="#home" aria-label="Back to top"><ArrowUpRight size={18}/></a></div></footer>
    
    {modal && <Modal onClose={closeModal} title={modal === 'contact' ? 'A NEW COLLABORATION' : modal === 'process' ? 'BEHIND THE PROCESS' : 'CREATIVE DIRECTION / ' + modal.number}>{modal === 'contact' ? <BriefForm/> : modal === 'process' ? <div className="process-modal"><div className="eyebrow red">STORY FIRST. ALWAYS.</div><h2>More than a sequence of cuts.</h2><p>Every project starts with a feeling. Here’s how I find it.</p>{[['Listen & discover', 'The audience. The intention. The emotion. Before opening a timeline, I get clear on what the story needs to say.'], ['Explore & assemble', 'I find the strongest moments, build a narrative, and choose the tools that bring the idea to life — not the other way around.'], ['Refine & finish', 'Pacing, color, sound, and the little details. I keep refining until the final frame feels as considered as the first.']].map(([title, body], i) => <div className="process-step" key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></div>)}<div className="modal-note">Showreel coming soon. In the meantime, explore the gallery to get a feel for my creative interests.</div></div> : <div className="project-modal"><img src={modal.image} alt={`${modal.title} — featured visual work`}/><div className="project-modal-copy"><div className="eyebrow red">{modal.tag}</div><h2>{modal.title}</h2><p>{modal.description}</p><h3>The approach</h3><ol>{modal.process.map(s => <li key={s}>{s}</li>)}</ol><div className="project-tools">Toolkit <strong>{modal.tools}</strong></div><div className="modal-note">Exploring creative direction and visual storytelling — from concept to final frame.</div></div></div>}</Modal>}

    {workflowDetail && (
      <Modal onClose={() => setWorkflowDetail(null)} title={`${workflowDetail.name.toUpperCase()} / WORKFLOW DEEP DIVE`}>
        <div className="workflow-detail">
          <div className="workflow-detail-hero">
            <img src={workflowDetail.image} alt={`${workflowDetail.name} workflow`}/>
            <div className="workflow-detail-hero-overlay">
              <span className="eyebrow red">{workflowDetail.tag}</span>
              <h2>{workflowDetail.name}</h2>
              <p>{workflowDetail.category}</p>
            </div>
          </div>
          <div className="workflow-detail-body">
            <p className="workflow-detail-summary">{workflowDetail.summary}</p>
            <div className="workflow-detail-meta">
              <span><strong>Best for:</strong> {workflowDetail.bestFor}</span>
              <span><strong>Typical time:</strong> {workflowDetail.time}</span>
            </div>
            
            <h3>Step-by-step process — {workflowDetail.steps.length} steps from start to finish</h3>
            <div className="workflow-steps">
              {workflowDetail.steps.map(step => (
                <div key={step.n} className="workflow-step">
                  <span className="workflow-step-number">{step.n}</span>
                  <div className="workflow-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="workflow-protip">
              <div className="workflow-protip-label">DIVINE’S PRO TIP</div>
              <p>{workflowDetail.proTip}</p>
            </div>

            <div className="workflow-detail-cta">
              <p>Want this workflow applied to your project?</p>
              <div className="button-row">
                <a href={EMAIL_URL} className="button dark"><Mail size={16}/> Email me</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="button outline"><MessageCircle size={16}/> WhatsApp</a>
                <button className="button outline" onClick={() => { setWorkflowDetail(null); setModal('contact'); }}>Start brief <ArrowUpRight size={16}/></button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    )}
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
