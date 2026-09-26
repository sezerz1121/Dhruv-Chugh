import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>

const projects = [
  { name: 'HCwrld — Motion Campaign', type: 'HCwrld · Streetwear campaign film', video: '/projects/hcwrld-motion-campaign.mp4', focus: 'center' },
  { name: 'Joker', type: 'Behance · Digital artwork', image: '/projects/behance-joker.png', link: 'https://www.behance.net/gallery/136552461/Joker', focus: 'center' },
  { name: 'Skull', type: 'Behance · Digital artwork', image: '/projects/behance-skull.png', link: 'https://www.behance.net/gallery/135069709/skull', focus: 'center' },
  { number: '01', name: 'HCwrld', type: 'Founder & Creative Director · Streetwear', className: 'cv-hc', line: <>Made for the<br/><i>world in motion.</i></> },
  { number: '02', name: 'Punora', type: 'D2C electronics · Marketplace creative', className: 'cv-punora', line: <>Everyday tech,<br/><i>made clear.</i></> },
  { number: '03', name: 'Friends Clearing Agency', type: 'Agency · Identity, social & print', className: 'cv-fca', line: <>Ideas made<br/><i>real.</i></> },
  { number: '04', name: 'Juice Wrld — Album Art', type: 'Music cover · Digital artwork', image: '/projects/jw-project.jpeg', link: 'https://www.behance.net/gallery/139462279/JUICE-WRLD-', focus: 'center' },
  { number: '05', name: 'Space Airways — Travel Website', type: 'Travel booking · Website UI/UX', image: '/projects/space-airways.jpeg', focus: 'top' },
  { number: '06', name: 'Jante Mereko Ko', type: 'Bhukkad Editor · Album cover artwork', image: '/projects/bhukkad-editor.jpeg', focus: 'center' },
  { number: '07', name: 'Dexter — Shopping App', type: 'E-commerce · Mobile app UI', image: '/projects/dexter-app.jpeg', focus: 'center' },
  { number: '08', name: 'When Back-Row Designs Front-Row', type: 'HCwrld · Editorial campaign artwork', image: '/projects/hc-back-row.jpeg', document: '/projects/project-08.pdf', focus: 'center' },
  { number: '09', name: 'All About HC', type: 'HCwrld · Streetwear campaign artwork', image: '/projects/hc-all-about.jpeg', document: '/projects/project-09.pdf', focus: 'center' },
  { number: '10', name: 'We Are Back', type: 'HCwrld · Poster & art direction', image: '/projects/hc-poster-art.jpeg', document: '/projects/project-10.pdf', focus: 'center' },
  { number: '11', name: 'Tiger Shirt', type: 'HCwrld · Apparel graphic design', image: '/projects/hc-tiger-shirt.jpeg', document: '/projects/project-11.pdf', focus: 'center' },
  { number: '12', name: 'October Pants', type: 'HCwrld · Apparel graphic design', image: '/projects/hc-pants.jpeg', document: '/projects/project-12.pdf', focus: 'center' },
  { name: 'Rugged Graphic Tee', type: 'HCwrld · Apparel graphic design', image: '/projects/hc-rugged-blue-tee.jpeg', focus: 'center' },
  { name: 'Cartoon Graphic Tee', type: 'HCwrld · Apparel graphic design', image: '/projects/hc-cartoon-tee.jpeg', focus: 'center' },
  { number: '18', name: 'Baddie Croptop + Product Mockup', type: 'HCwrld · Apparel & product mockup', image: '/projects/hc-forest-campaign.jpeg', focus: 'center' },
  { number: '21', name: 'Bandage Heart Emblem', type: 'HCwrld · Apparel graphic design', image: '/projects/hc-bandage-emblem.jpeg', focus: 'center' },
  { number: '22', name: 'Protect Peace Tee', type: 'HCwrld · Apparel graphic design', images: ['/projects/peace-tee-front.jpeg', '/projects/peace-tee-back.jpeg'], focus: 'center' },
  { number: '23', name: 'Paisley Flame Tee — Front & Back', type: 'HCwrld · Apparel graphic design', image: '/projects/hc-paisley-front-back.jpeg', focus: 'center' },
  { number: '17', name: 'Monster Doodle Tee', type: 'HCwrld · Apparel graphic design', images: ['/projects/monster-doodle-tee-front.jpeg', '/projects/monster-doodle-tee-back.jpeg'], document: '/projects/monster-doodle-project.pdf', focus: 'center' },
  { number: '25', name: 'Dragon Globe Tee', type: 'HCwrld · Apparel graphic design', image: '/projects/hc-dragon-globe-tee.jpeg', focus: 'center' },
]

const capabilities = [
  ['✦', 'Illustration', 'Hand-drawn Procreate artwork for apparel, products, and campaign visuals.'],
  ['Aa', 'Brand identity', 'Logos, colour, and type systems built to give brands a distinct visual identity.'],
  ['◌', 'Social creative', 'Instagram grid posts, Reels covers, and Story graphics made for social-first brands.'],
  ['▣', 'Campaign & ads', 'Campaign concepts, poster art, and short-film treatments shaped for distinct audiences.'],
  ['⌁', 'E-commerce design', 'Marketplace listings, hero banners, lifestyle images, and ads for Amazon, Meesho, and Myntra.'],
  ['▤', 'Print & packaging', 'Print and packaging layouts, including apparel size charts calibrated to Indian sizing.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const root = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('shown'))
      return undefined
    }
    const tiltListeners = []
    const ctx = gsap.context(() => {
      gsap.from('.nav, .hero-copy > *, .hero-art > *', {
        y: 28, opacity: 0, duration: .8, stagger: .09, ease: 'power3.out', clearProps: 'transform,opacity',
      })
      gsap.from('.hero-footer', { y: 16, opacity: 0, duration: .7, delay: .65, ease: 'power3.out' })
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(el, { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%', once: true } })
      })
      gsap.utils.toArray('.scroll-route-line').forEach((path) => {
        const length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(path, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 1 } })
      })
      if (window.matchMedia('(min-width: 761px) and (prefers-reduced-motion: no-preference)').matches) {
        gsap.to('.sun', { rotate: 360, duration: 18, repeat: -1, ease: 'none' })
        gsap.to('.paper-card', { y: -14, rotate: 9, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        gsap.to('.scribble', { y: -18, x: 8, duration: 2.7, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        gsap.to('.sticker', { rotate: -4, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        gsap.to('.contact-orb', { x: 48, y: 28, scale: 1.08, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        gsap.to('.contact .button', { y: -5, duration: 1.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      }
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        gsap.utils.toArray('.project, .cap, .paper-card').forEach((card) => {
          const move = (event) => {
            const rect = card.getBoundingClientRect()
            const x = (event.clientX - rect.left) / rect.width - .5
            const y = (event.clientY - rect.top) / rect.height - .5
            gsap.to(card, { rotateY: x * 10, rotateX: -y * 10, transformPerspective: 900, duration: .32, ease: 'power2.out', overwrite: 'auto' })
            card.style.setProperty('--px', `${((x + .5) * 100).toFixed(1)}%`)
            card.style.setProperty('--py', `${((y + .5) * 100).toFixed(1)}%`)
            card.style.setProperty('--holo-opacity', '1')
          }
          const reset = () => {
            gsap.to(card, { rotateX: 0, rotateY: 0, duration: .6, ease: 'power3.out', overwrite: 'auto' })
            card.style.setProperty('--holo-opacity', '0')
          }
          card.addEventListener('mousemove', move)
          card.addEventListener('mouseleave', reset)
          tiltListeners.push([card, move, reset])
        })
      }
    }, root)
    return () => {
      tiltListeners.forEach(([card, move, reset]) => { card.removeEventListener('mousemove', move); card.removeEventListener('mouseleave', reset) })
      ctx.revert()
    }
  }, [])
  const closeMenu = () => setMenuOpen(false)
  return <main ref={root}>
    <svg className="scroll-ribbon ribbon-desktop" viewBox="0 0 1213 2509" fill="none" aria-hidden="true"><path className="scroll-route-line" d="M170.762 287.444C173.974 -89.3678 1715.18 105.758 881.761 478.444C48.3461 851.13 -165.594 1564.37 507.762 1139.44C1181.12 714.521 1288.47 1750.9 425.762 2197.44C-436.944 2643.99 571.762 1061.94 854.262 2424.94" strokeWidth="168" strokeLinecap="round" /></svg>
    <svg className="scroll-ribbon ribbon-mobile" viewBox="0 0 402 7918" fill="none" aria-hidden="true"><path className="scroll-route-line" d="M129 37.5095C129 37.5095 -134.5 992.009 238.5 520.009C611.5 48.0095 -177 1319.51 129 1048.51C435 777.509 494.5 2314.01 129 2023.01C-236.5 1732.01 181.5 3956.51 329 3281.51C476.5 2606.51 -6.00008 3376.51 140 3904.01C286 4431.51 -103.5 4352.51 140 4698.51C383.5 5044.51 -40.4998 5924.51 129 5870.51C298.5 5816.51 487.5 6313.51 170 6695.01C-147.5 7076.51 431 8167.51 314.5 7281.51C198 6395.51 129 7880.01 129 7880.01" strokeWidth="75" strokeLinecap="round" /></svg>
    <div className="grain" />
    <header className="wrap hero" id="top">
      <nav className="nav">
        <a className="wordmark" href="#top" onClick={closeMenu}>Dhruv<span> Chugh</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>Menu <b>{menuOpen ? '×' : '+'}</b></button>
        <div className={'navlinks ' + (menuOpen ? 'open' : '')}>
          <a href="#work" onClick={closeMenu}>Work</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#about" onClick={closeMenu}>About</a>
        </div>
        <a className="pill" href="mailto:dhruvchugh2801@gmail.com">Let's talk <Arrow /></a>
      </nav>
      <div className="hero-grid">
        <section className="hero-copy">
          <p className="eyebrow"><span /> Graphic designer · Delhi, India</p>
          <h1>Art that gives<br/>brands a <em>pulse.</em></h1>
          <p className="intro-copy">I’m Dhruv — a graphic designer and illustrator creating expressive identities, hand-drawn worlds, and social-first work that gets people looking twice.</p>
          <div className="hero-actions"><a className="button" href="#work">See selected work <Arrow /></a><a className="underlink" href="#about">A little about me ↓</a></div>
        </section>
        <div className="hero-art" aria-label="Abstract hand-drawn illustration">
          <div className="sun">✳</div><div className="scribble">★</div><div className="paper-card"><small>DESIGNED<br/>BY DHRUV</small><b>MAKE<br/><i>NOISE.</i></b><span>✦</span></div><div className="sticker">ALL<br/>HEART</div><svg viewBox="0 0 500 450" className="doodle" aria-hidden="true"><path d="M47 338C101 190 162 406 244 274c77-124 119 47 217-178"/><path d="M73 106c54-68 89 27 134-22 47-51 77 24 128-44"/><circle cx="90" cy="345" r="24"/></svg>
        </div>
      </div>
      <div className="hero-footer"><span>Hand-drawn visual design & creative direction</span><div><b>ILLUSTRATION</b><b>IDENTITY</b><b>CAMPAIGNS</b></div></div>
    </header>

    <section className="statement wrap reveal" id="about"><p className="eyebrow"><span /> The short version</p><div><h2>I design for the <em>feeling</em><br/>you remember.</h2><p>From a maximalist streetwear label to marketplace-ready product creative, I bring clarity, character, and a human hand to every visual story.</p></div></section>

    <section className="capabilities wrap" id="capabilities"><div className="section-title reveal"><div><p className="eyebrow"><span /> What I do</p><h2>Ideas, <em>drawn out.</em></h2></div><p>I build visual languages that can live everywhere — from the first rough sketch to the last post in a campaign.</p></div><div className="cap-grid">{capabilities.map(([icon,title,text], i) => <article className="cap reveal" key={title}><div className="cap-top"><strong>{icon}</strong><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="work wrap" id="work"><div className="section-title reveal"><div><p className="eyebrow"><span /> Selected work</p><h2>Made to be <em>seen.</em></h2></div><p>Brand worlds from my CV, alongside album artwork, website and mobile experiences.</p></div><div className="project-grid">{projects.map((project, index) => { const media = project.image || project.images || project.video; const images = project.images || (project.image ? [project.image] : []); return <article className={'project reveal ' + (media ? `photo-project ${project.video ? 'video-project' : ''} ${project.images ? 'gallery-project' : ''}` : 'cv-project ' + project.className)} key={project.name}><div className="project-art"><span className="project-number">{project.number || String(index + 1).padStart(2, '0')}</span>{project.video ? <><video src={project.video} aria-label={project.name} autoPlay muted loop playsInline controls preload="metadata" style={{ objectPosition: project.focus }} /><a className="image-view" href={project.link || project.video} target="_blank" rel="noreferrer" aria-label={'View video: ' + project.name}>View ↗</a></> : images.length > 1 ? <><div className="project-image-scroll" aria-label={project.name + ' front and back views'}>{images.map((image, imageIndex) => <img key={image} src={image} alt={`${project.name} ${imageIndex === 0 ? 'front' : 'back'} view`} loading="lazy" decoding="async" style={{ objectPosition: project.focus }} />)}</div>{project.document && <a className="image-view" href={project.document} target="_blank" rel="noreferrer" aria-label={'View project document: ' + project.name}>View PDF ↗</a>}</> : project.image ? <><img src={project.image} alt={project.name + ' project preview'} loading={index === 4 ? 'eager' : 'lazy'} decoding="async" style={{ objectPosition: project.focus }} /><a className="image-view" href={project.document || project.link || project.image} target="_blank" rel="noreferrer" aria-label={(project.document ? 'View project PDF: ' : 'View full image: ') + project.name}>{project.document ? 'View PDF' : 'View'}</a></> : <div className="cv-brand"><b>{project.name}</b><p>{project.line}</p><small>FROM THE CV · EXPLORE</small><i className="cv-shape" /></div>}</div><div className="project-meta"><div><span>{project.type}</span><h3>{project.name}</h3></div></div></article>})}</div></section>

    <section className="impact"><div className="wrap metrics reveal"><div><strong>299K</strong><span>Accounts reached</span></div><div><strong>91K</strong><span>Views in one month</span></div><div><strong>10K+</strong><span>Units sold</span></div><div><strong>3</strong><span>Creative teams</span></div></div></section>

    <section className="experience wrap" id="experience"><div className="section-title reveal"><div><p className="eyebrow"><span /> Experience & education</p><h2>Made across <em>different worlds.</em></h2></div><p>Creative direction, marketplace design, and client work across streetwear, D2C, and agency projects.</p></div><div className="timeline"><article className="job reveal"><span className="date">2024 - Present</span><div><h3>HCwrld</h3><p className="role">Founder & Creative Director | Delhi / Noida</p></div><p>Build the streetwear label's visual identity through hand-drawn Procreate artwork, apparel graphics, social content, creator outreach, and campaign concepts. Instagram content reached 299K accounts and 91K views in one month.</p></article><article className="job reveal"><span className="date">2023 - 2024</span><div><h3>Punora</h3><p className="role">Graphic Designer | Noida</p></div><p>Designed product listings, hero banners, packaging, and paid social creative for a D2C electronics catalogue across Amazon, Meesho, and Myntra. The catalogue crossed 10,000 units sold.</p></article><article className="job reveal"><span className="date">2025 - Present</span><div><h3>Friends Clearing Agency</h3><p className="role">Graphic Designer</p></div><p>Create social graphics, identity assets, and print and packaging layouts for agency clients, taking briefs through to finished design files independently.</p></article></div><div className="education-block reveal"><p className="eyebrow"><span /> Education</p><div className="education-grid"><div><h3>BBA LL.B. (H)</h3><p>In progress | Maharaja Agrasen Institute of Management Studies, Delhi</p></div><div><h3>Schooling</h3><p>Delhi Public School, Vasant Kunj</p></div></div></div></section><section className="contact"><div className="contact-orb" /><div className="wrap contact-content reveal"><p className="eyebrow"><span /> Have a good idea?</p><h2>Let’s make<br/>something <em>loud.</em></h2><p>Available for creative collaborations, design roles, and projects with a point of view.</p><a className="button dark" href="mailto:dhruvchugh2801@gmail.com">dhruvchugh2801@gmail.com <Arrow /></a><div className="contact-meta"><span>Delhi, India</span><a href="tel:+919999242368">+91 99992 42368</a></div></div></section>
    <footer className="wrap"><a className="wordmark" href="#top">Dhruv<span> Chugh</span></a><p>© 2026 Dhruv Chugh</p><a href="mailto:dhruvchugh2801@gmail.com">Say hello ↗</a></footer>
  </main>
}
export default App
