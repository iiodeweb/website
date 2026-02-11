import { getPagesCopy } from "@/content/pages"
import { getLocale } from "@/lib/locale-server"

export default async function PreorderPage() {
  const locale = await getLocale()
  const copy = getPagesCopy(locale).preorder

  return (
    <section className="bg-background text-foreground">
      <div className="iiode-container py-24">
        <p className="text-xs uppercase text-foreground/60">
          {copy.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl">{copy.title}</h1>
        <p className="mt-4 text-foreground/70">
          {copy.description}
        </p>
        <form
          className="mt-10 grid gap-6"
          action="mailto:admin@iiode.com"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm text-foreground/70">
              {copy.fields.name}
              <input
                name="name"
                className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground"
                required
              />
            </label>
            <label className="text-sm text-foreground/70">
              {copy.fields.surname}
              <input
                name="surname"
                className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground"
                required
              />
            </label>
          </div>
          <label className="text-sm text-foreground/70">
            {copy.fields.company}
            <input
              name="company"
              className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground"
            />
          </label>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm text-foreground/70">
              {copy.fields.address}
              <input
                name="address"
                className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground"
              />
            </label>
            <label className="text-sm text-foreground/70">
              {copy.fields.number}
              <input
                name="number"
                className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground"
              />
            </label>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm text-foreground/70">
              {copy.fields.postCode}
              <input
                name="post_code"
                className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground"
              />
            </label>
            <label className="text-sm text-foreground/70">
              {copy.fields.city}
              <input
                name="city"
                className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground"
              />
            </label>
          </div>
          <label className="text-sm text-foreground/70">
            {copy.fields.quantity}
            <input
              name="quantity"
              type="number"
              min="1"
              className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground"
            />
          </label>
          <label className="text-sm text-foreground/70">
            {copy.fields.message}
            <textarea
              name="message"
              rows={4}
              className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-foreground px-6 py-3 text-xs uppercase text-background md:w-fit"
          >
            {copy.submit}
          </button>
        </form>
      </div>
    </section>
  )
}
