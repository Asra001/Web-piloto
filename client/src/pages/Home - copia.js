import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Gamepad2, Mail, MapPin, MonitorCog, ShieldCheck, Sparkles, Wrench, X, ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, } from "lucide-react";
import { useState } from "react";
/**
 * Filosofía visual aplicada: minimalismo orgánico técnico.
 * Esta página combina precisión informática y oficio artesanal mediante composición editorial asimétrica,
 * verdes naturaleza, marrones de banco de trabajo, detalles de circuito sutiles y microinteracciones discretas.
 */
const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663653120528/Un3gtEeM9mTc77nFkDXjig/soluciones-hero-workbench-SHjYrN75kZmtwHu7iF9XmY.webp";
const perfilImage = "/manus-storage/perfil-tecnico_a4debe44.png";
const abstractImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663653120528/Un3gtEeM9mTc77nFkDXjig/diagnostic-flow-abstract-f4TqdZWEu7RLwgDrLhcMXk.webp";
const contactImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663653120528/Un3gtEeM9mTc77nFkDXjig/contact-workshop-calm-7pzfBNzPgZ3kS6YQwtH3n2.webp";
const galleryItems = [
    {
        id: 1,
        title: "Joy-Con derecho rojo",
        problem: "Batería agotada - no encendía",
        solution: "Batería sustituida, todos los botones responden y los LEDs funcionan correctamente. Listo para darle una segunda vida.",
        image: "/manus-storage/reparacion-joycon-rojo_1b7a50d3.png",
        videoUrl: "https://www.facebook.com/share/v/14gfqho29Wo/",
        category: "Mandos, Nintendo",
        type: "image",
    },
];
const services = [
    {
        icon: Gamepad2,
        title: "Reparación de consolas",
        description: "Diagnóstico y reparación de fallos frecuentes en consolas: limpieza, mantenimiento preventivo, conectores, ventilación y problemas de encendido.",
    },
    {
        icon: Wrench,
        title: "Mandos y periféricos",
        description: "Sustitución y revisión de joysticks, botones, gatillos, baterías, conectores y piezas sometidas a desgaste por uso intensivo.",
    },
    {
        icon: MonitorCog,
        title: "Soporte informático",
        description: "Configuración, optimización, resolución de incidencias y acompañamiento técnico para usuarios particulares o pequeños entornos profesionales.",
    },
];
const workflow = [
    "Escucha del problema y primera orientación clara.",
    "Diagnóstico técnico con criterios de viabilidad y coste.",
    "Reparación cuidadosa con herramientas de precisión.",
    "Pruebas finales para validar estabilidad y funcionamiento.",
];
const skills = [
    "Diagnóstico hardware",
    "Mantenimiento preventivo",
    "Reparación de mandos",
    "Configuración de equipos",
    "Resolución de incidencias",
    "Atención a clientes",
];
export default function Home() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);
    // Extraer categorías únicas
    const categories = Array.from(new Set(galleryItems.map((item) => item.category))).sort();
    // Filtrar items por categoría
    const filteredItems = selectedCategory
        ? galleryItems.filter((item) => item.category === selectedCategory)
        : galleryItems;
    function handlePrevious() {
        setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    }
    function handleNext() {
        setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    }
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        emailjs.init("x0bOKMspMwZdEpQc-");
        const templateParams = {
            to_email: "solucionesitrapidas.hayden@gmail.com",
            from_name: name,
            from_email: email,
            message: message,
            company_name: "Soluciones Informáticas Rápidas",
        };
        emailjs
            .send("service_wcrn1ld", "template_zh9am56", templateParams)
            .then(() => {
            toast.success("Mensaje enviado", {
                description: "Tu mensaje ha sido enviado correctamente. Te responderé pronto.",
            });
            form.reset();
        }, () => {
            toast.error("Error al enviar", {
                description: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
            });
        });
    }
    return (<div className="min-h-screen bg-[#f3efe5] text-[#1f2d28] selection:bg-[#53847A] selection:text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-[#f3efe5]/80 backdrop-blur-xl">
        <nav className="container flex h-20 items-center justify-between gap-5">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir al inicio">
            <img src={perfilImage} alt="Logo de perfil" className="h-11 w-11 rounded-sm border border-[#53847A]/30 object-cover shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5"/>
            <span className="leading-tight">
              <span className="block font-display text-xl font-semibold tracking-tight">
                Soluciones Informáticas
              </span>
              <span className="block font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#6b5a43]">
                rápidas
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.22em] text-[#49655e] md:flex">
            <a className="nav-link" href="#sobre-mi">
              Sobre mí
            </a>
            <a className="nav-link" href="#servicios">
              Servicios
            </a>
            <a className="nav-link" href="#galeria">
              Galería
            </a>
            <a className="nav-link" href="#proceso">
              Proceso
            </a>
            <a className="nav-link" href="#contacto">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <main id="inicio" className="overflow-hidden pt-20">
        <section className="relative min-h-[calc(100vh-5rem)] border-b border-[#d9cdb7]">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Mesa de reparación electrónica con mando abierto, herramientas de precisión y portátil de diagnóstico" className="h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#111b17]/90 via-[#1e332c]/70 to-[#53847A]/10"/>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(243,239,229,0.14),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.2),transparent)]"/>
          </div>

          <div className="container relative flex min-h-[calc(100vh-5rem)] items-center py-16">
            <div className="max-w-3xl animate-rise text-white">
              <p className="mb-6 inline-flex items-center gap-3 border border-white/20 bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-[#e4d6bf] backdrop-blur">
                <Sparkles className="h-4 w-4"/> Informática · Consolas · Mandos
              </p>
              <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Reparación técnica con mirada artesanal.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#efe7d9] sm:text-xl">
                Soy informático y aficionado a la reparación de consolas y mandos. En
                <strong> Soluciones Informáticas rápidas</strong> combino diagnóstico,
                paciencia y criterio técnico para ayudar a clientes, y para mostrar a reclutadores una experiencia práctica, resolutiva y orientada al detalle.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-[#e6d2ad] text-[#1f2d28] hover:bg-[#f0dfbf]">
                  <a href="#contacto">
                    Solicitar contacto <ArrowRight className="ml-2 h-4 w-4"/>
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 text-white hover:bg-white/15">
                  <a href="#servicios">Ver servicios</a>
                </Button>
              </div>
            </div>
          </div>

          <aside className="absolute bottom-6 right-6 hidden max-w-xs border border-white/20 bg-[#f3efe5]/90 p-5 shadow-2xl backdrop-blur lg:block">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[#53847A]">
              Especialidad
            </p>
            <p className="mt-3 text-sm leading-6 text-[#31443d]">
              Diagnóstico honesto, reparación cuidadosa y comunicación clara antes de intervenir cualquier equipo.
            </p>
          </aside>
        </section>

        <section id="sobre-mi" className="container grid gap-12 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-44 w-44 bg-[#53847A]/20 blur-3xl"/>
            <img src={perfilImage} alt="Perfil profesional: técnico trabajando en reparación de equipos informáticos" className="relative aspect-[4/5] w-full max-w-lg object-cover shadow-[0_30px_80px_rgba(44,58,50,0.25)]"/>
            <div className="absolute -bottom-7 right-0 max-w-[15rem] border border-[#53847A]/20 bg-[#fffaf0] p-5 shadow-xl">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[#6b5a43]">
                Enfoque
              </p>
              <p className="mt-2 font-display text-2xl leading-7 text-[#2d4039]">
                Precisión, calma y criterio técnico.
              </p>
            </div>
          </div>

          <div>
            <p className="section-kicker">Sobre mí</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#20332c] sm:text-5xl">
              Un perfil técnico que entiende tanto el software como el banco de reparación.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#526158]">
              Mi objetivo es presentar una experiencia profesional cercana, útil y demostrable: informática aplicada, resolución de problemas y reparación de consolas y mandos como hobby especializado. Este portafolio está pensado para que un cliente vea confianza y para que un reclutador identifique criterio, constancia y capacidad de aprendizaje.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (<div key={skill} className="flex items-center gap-3 border border-[#d7c8ad] bg-white/45 px-4 py-3 text-sm text-[#31443d]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#53847A]"/>
                  {skill}
                </div>))}
            </div>
          </div>
        </section>

        <section id="servicios" className="relative border-y border-[#d9cdb7] bg-[#20332c] py-24 text-[#f5efe4]">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${abstractImage})`, backgroundSize: "720px", backgroundPosition: "left center" }}/>
          <div className="container relative">
            <div className="max-w-2xl">
              <p className="section-kicker text-[#d9c9a7]">Servicios</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Soluciones claras para equipos que necesitan volver a funcionar bien.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {services.map((service, index) => {
            const Icon = service.icon;
            return (<article key={service.title} className="service-card group">
                    <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#c8a76d]">0{index + 1}</span>
                    <Icon className="mt-8 h-9 w-9 text-[#d8c59f] transition-transform duration-300 group-hover:-translate-y-1"/>
                    <h3 className="mt-7 font-display text-3xl font-semibold">{service.title}</h3>
                    <p className="mt-4 leading-7 text-[#d9d0c0]">{service.description}</p>
                  </article>);
        })}
            </div>
          </div>
        </section>

        <section id="galeria" className="container py-24">
          <div className="mb-12 max-w-2xl">
            <p className="section-kicker">Galería</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#20332c] sm:text-5xl">
              Reparaciones completadas con éxito.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#526158]">
              Cada proyecto es una oportunidad para demostrar precisión, cuidado y criterio técnico. Aquí puedes ver algunos ejemplos de reparaciones realizadas.
            </p>
          </div>

          {/* Filtros de categoría */}
          <div className="mb-8 flex flex-wrap gap-3">
            <button onClick={() => setSelectedCategory(null)} className={`px-4 py-2 font-mono text-sm font-semibold transition-all duration-300 ${selectedCategory === null
            ? "bg-[#53847A] text-white shadow-md"
            : "border border-[#53847A] text-[#53847A] hover:bg-[#53847A]/10"}`}>
              Todas
            </button>
            {categories.map((category) => (<button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 font-mono text-sm font-semibold transition-all duration-300 ${selectedCategory === category
                ? "bg-[#53847A] text-white shadow-md"
                : "border border-[#53847A] text-[#53847A] hover:bg-[#53847A]/10"}`}>
                {category}
              </button>))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {filteredItems.map((item) => (<div key={item.id} className="group cursor-pointer overflow-hidden border border-[#d7c8ad] bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1" onClick={() => setSelectedItem(item.id)}>
                <div className="relative aspect-square overflow-hidden bg-[#f0e8d8]">
                  {item.type === "image" ? (<>
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#20332c]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                    </>) : (<>
                      <div className="h-full w-full bg-gradient-to-br from-[#20332c] to-[#53847A] flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-white text-4xl mb-2">▶</div>
                          <p className="text-white text-xs font-mono">Vídeo</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#20332c]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                    </>)}
                  <span className="absolute bottom-3 left-3 inline-block bg-[#53847A] px-3 py-1 font-mono text-xs font-semibold text-white">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-[#20332c]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#6b5a43]">{item.problem}</p>
                </div>
              </div>))}
          </div>
        </section>

        {selectedItem && (<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f2d28]/80 p-4 backdrop-blur-sm">
            <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden bg-white shadow-2xl">
              <button onClick={() => setSelectedItem(null)} className="absolute right-4 top-4 z-10 rounded-full bg-[#53847A] p-2 text-white transition-transform duration-200 hover:scale-110">
                <X className="h-5 w-5"/>
              </button>

              <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                <div className="relative bg-[#f0e8d8] overflow-hidden">
                  <div className="grid grid-cols-2 gap-4 p-4 h-full">
                    {filteredItems[currentIndex]?.image && (<div className="relative aspect-square overflow-hidden border border-[#d7c8ad]">
                        <img src={filteredItems[currentIndex].image} alt={filteredItems[currentIndex].title} className="h-full w-full object-cover"/>
                      </div>)}
                    {filteredItems[currentIndex]?.videoUrl && (<div className="relative aspect-square overflow-hidden border border-[#d7c8ad] bg-[#20332c] flex items-center justify-center">
                        <a href={filteredItems[currentIndex].videoUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                          <div className="text-white text-5xl">▶</div>
                          <p className="text-white text-xs font-mono text-center">Ver en Facebook</p>
                        </a>
                      </div>)}
                  </div>
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <span className="inline-block bg-[#53847A] px-3 py-1 font-mono text-xs font-semibold text-white">
                      {filteredItems[currentIndex]?.category}
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-[#20332c]">
                      {filteredItems[currentIndex]?.title}
                    </h3>
                    <div className="mt-6 space-y-4">
                      <div>
                        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#53847A]">
                          Problema
                        </p>
                        <p className="mt-2 text-[#31443d]">{filteredItems[currentIndex]?.problem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#53847A]">
                          Solución
                        </p>
                        <p className="mt-2 text-[#31443d]">{filteredItems[currentIndex]?.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button onClick={handlePrevious} className="flex items-center justify-center gap-2 border border-[#d7c8ad] bg-white px-4 py-2 text-sm font-semibold text-[#20332c] transition-all duration-200 hover:bg-[#f7f1e6]">
                      <ChevronLeft className="h-4 w-4"/> Anterior
                    </button>
                    <button onClick={handleNext} className="flex items-center justify-center gap-2 border border-[#d7c8ad] bg-white px-4 py-2 text-sm font-semibold text-[#20332c] transition-all duration-200 hover:bg-[#f7f1e6]">
                      Siguiente <ChevronRight className="h-4 w-4"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>)}

        <section id="proceso" className="container grid gap-12 py-24 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <p className="section-kicker">Proceso</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#20332c] sm:text-5xl">
              Un método simple para evitar incertidumbre.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526158]">
              La reparación no debería ser opaca. Por eso el proceso se comunica por etapas: primero se entiende el problema, luego se valida la intervención y finalmente se realizan pruebas antes de entregar el equipo.
            </p>
          </div>
          <div className="space-y-4">
            {workflow.map((item, index) => (<div key={item} className="group flex gap-5 border border-[#d7c8ad] bg-[#fffaf0]/70 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white">
                <span className="font-display text-4xl text-[#53847A]">{index + 1}</span>
                <p className="pt-2 leading-7 text-[#31443d]">{item}</p>
              </div>))}
          </div>
        </section>

        <section className="container pb-24">
          <div className="grid overflow-hidden border border-[#d7c8ad] bg-[#f7f1e6] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[360px]">
              <img src={contactImage} alt="Mesa limpia con mando reparado, herramientas y libreta" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#20332c]/45 to-transparent"/>
            </div>
            <div id="contacto" className="p-7 sm:p-10 lg:p-14">
              <p className="section-kicker">Contacto</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#20332c]">
                Hablemos de tu equipo o de una oportunidad profesional.
              </h2>
              <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
                <label className="form-label">
                  Nombre
                  <input className="form-input" name="name" placeholder="Tu nombre" required/>
                </label>
                <label className="form-label">
                  Correo electrónico
                  <input className="form-input" type="email" name="email" placeholder="tu@email.com" required/>
                </label>
                <label className="form-label">
                  Mensaje
                  <textarea className="form-input min-h-32 resize-y" name="message" placeholder="Cuéntame qué necesitas reparar o qué perfil estás buscando" required/>
                </label>
                <Button type="submit" size="lg" className="mt-2 bg-[#53847A] text-white hover:bg-[#436b63]">
                  Enviar mensaje <Mail className="ml-2 h-4 w-4"/>
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d9cdb7] bg-[#20332c] py-10 text-[#efe7d9]">
        <div className="container flex flex-col gap-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-2xl font-semibold">Soluciones Informáticas rápidas</p>
              <p className="mt-2 text-sm text-[#cfc3ad]">Informática, reparación de consolas y mandos.</p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-[#d8c59f] sm:flex-row sm:items-center sm:gap-6">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> Disponible para clientes y reclutadores</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Diagnóstico responsable</span>
              <span className="inline-flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4"/> Perfil profesional</span>
            </div>
          </div>

          <div className="border-t border-[#d9cdb7] pt-6">
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#c8a76d]">Conecta conmigo</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61572463093752&sk=reels_tab" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c59f] text-[#d8c59f] transition-all duration-300 hover:bg-[#53847A] hover:border-[#53847A] hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5"/>
              </a>
              <a href="https://www.instagram.com/soluciones_it_rapidas_hayden/" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c59f] text-[#d8c59f] transition-all duration-300 hover:bg-[#53847A] hover:border-[#53847A] hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5"/>
              </a>
              <a href="https://www.linkedin.com/in/hayden-aguilera-vico-it" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c59f] text-[#d8c59f] transition-all duration-300 hover:bg-[#53847A] hover:border-[#53847A] hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>);
}
