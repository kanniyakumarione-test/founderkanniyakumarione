import { useEffect, useState } from "react";
import {
  Home,
  User,
  Award,
  Folder,
  MessageCircle,
  Mail,
} from "lucide-react";

const sections = [
  { label: "Home", id: "home", icon: Home },
  { label: "About", id: "about", icon: User },
  { label: "Certificates", id: "certificates", icon: Award },
  { label: "Projects", id: "projects", icon: Folder },
  { label: "Feedback", id: "comments", icon: MessageCircle },
  { label: "Contact", id: "contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive(s.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <nav
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50
        hidden md:flex
        px-2 py-2 rounded-2xl
        backdrop-blur-2xl
        border border-white/20
        bg-black/20
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        hover:scale-[1.02]
        ${
          scrolled
            ? "bg-black/40 border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.1)]"
            : "bg-white/5"
        }`}
      >
        <ul className="flex gap-1">
          {sections.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`
                cursor-pointer px-5 py-2.5 rounded-xl text-[13px] font-semibold
                tracking-tight transition-all duration-300
                ${
                  active === item.id
                    ? "bg-white/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.25)] border border-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= MOBILE PREMIUM DOCK ================= */}
      <nav
        className="
          fixed bottom-4 left-1/2 -translate-x-1/2 z-50
          md:hidden
          w-[94%]
          rounded-3xl
          border border-white/15
          bg-black/40
          backdrop-blur-2xl
          shadow-[0_15px_50px_rgba(0,0,0,0.55)]
        "
      >
        <ul className="relative flex items-center justify-between px-2 py-2">
          {sections.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <li
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative flex-1"
              >
                {/* Active glow */}
                {isActive && (
                  <span
                    className="
                      absolute inset-0 mx-auto
                      h-full w-[90%]
                      rounded-2xl
                      bg-cyan-400/20
                      blur-xl
                    "
                  />
                )}

                <button
                  className={`
                    relative z-10 mx-auto flex w-full flex-col items-center
                    rounded-2xl py-2
                    transition-all duration-300
                    active:scale-90
                    ${
                      isActive
                        ? "text-cyan-400"
                        : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  <Icon className="mb-1 h-5 w-5" />
                  <span className="text-[10px] font-medium">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
