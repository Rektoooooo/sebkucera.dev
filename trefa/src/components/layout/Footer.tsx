"use client";

export default function Footer() {
  const navigate = (id: string) => {
    if (id.startsWith("/")) {
      window.location.href = id;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/images/trefa-logo.png" alt="Autoškola Trefa" className="h-12 w-auto" />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Autoškola a motoškola v Praze. Řidičské oprávnění skupiny B, A1, AM.
              Profesionální výuka s vysokou úspěšností.
            </p>
            <div className="mt-4 flex gap-4 text-sm text-muted">
              <span>+420 123 456 789</span>
              <span>info@autoskolatrefa.cz</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-light">
              Navigace
            </h4>
            <ul className="space-y-2">
              {[
                { id: "kurzy", label: "Chci řidičák" },
                { id: "motoskola", label: "Motoškola" },
                { id: "/trefa/cenik", label: "Ceník" },
                { id: "faq", label: "FAQ" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => navigate(item.id)}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-light">
              Informace
            </h4>
            <ul className="space-y-2">
              {[
                { id: "o-nas", label: "O nás" },
                { id: "vozovy-park", label: "Vozový park" },
                { id: "vyukova-plocha", label: "Výuková plocha" },
                { id: "ke-stazeni", label: "Ke stažení" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => navigate(item.id)}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider mt-8" />
        <p className="mt-6 text-center text-xs text-muted-light">
          &copy; {new Date().getFullYear()} Autoškola Trefa. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}
