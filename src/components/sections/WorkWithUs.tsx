import type { MarketingCopy } from "@/content/marketing"

type WorkWithUsProps = {
  copy: MarketingCopy["workWithUs"]
}

export function WorkWithUs({ copy }: WorkWithUsProps) {
  return (
    <section className="border-b border-foreground/10 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          {copy.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          {copy.title}
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {copy.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm text-foreground/70">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
