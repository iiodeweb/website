import type { Re27Copy } from "@/content/re27"

type WorkWithUsProps = {
  copy: Re27Copy["workWithUs"]
}

export function WorkWithUs({ copy }: WorkWithUsProps) {
  return (
    <section className="border-b border-foreground/10 bg-background">
      <div className="iiode-container grid min-h-[calc(100svh-4rem)] grid-cols-1 md:grid-cols-2">
        <div className="flex items-center border-b border-foreground/10 px-0 py-12 md:border-b-0 md:border-r md:px-10">
          <div>
            <p className="mb-6 text-xs uppercase text-foreground/60">
              {copy.eyebrow}
            </p>
            <h2 className="text-4xl md:text-6xl">{copy.title}</h2>
          </div>
        </div>
        <div className="flex items-center px-0 py-12 md:px-10">
          <div className="grid w-full gap-4">
            {copy.items.map((item) => (
              <div
                key={item.title}
                className="border border-foreground/10 bg-foreground/5 p-6"
              >
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
