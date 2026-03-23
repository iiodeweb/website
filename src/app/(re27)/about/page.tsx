import Link from "next/link"

import { getPagesCopy } from "@/content/pages"
import { siteConfig } from "@/content/site"
import { getLocale } from "@/lib/locale-server"
import { getRuntimeEnvProbe } from "@/lib/runtime-env"
import { readServerAccessProbe } from "@/lib/server-access-probe"

export default async function AboutPage() {
  const locale = await getLocale()
  const copy = getPagesCopy(locale).about
  const accessProbe = readServerAccessProbe()
  const runtimeEnvProbe = getRuntimeEnvProbe()

  return (
    <section className="bg-background text-foreground">
      <div className="iiode-section-wrap" data-scroll-track="true">
        <div
          className="iiode-container iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2"
          data-scroll-panel="true"
        >
          <div className="iiode-split-half iiode-media-half iiode-media-half-left iiode-text-half iiode-half-pad-2 flex items-start pt-10 md:pt-8">
            <div className="iiode-type-2 iiode-copy-narrow grid gap-5 text-foreground md:ml-auto">
              <h1 className="iiode-type-2 text-foreground">{copy.title}</h1>
              {copy.sections.map((line, index) => (
                <p key={line} className={index === 0 ? "" : "border-t border-foreground/20 pt-4"}>
                  {line}
                </p>
              ))}
              <p className="border-t border-foreground/20 pt-4">
                {copy.servicesLabel}{" "}
                <Link href={siteConfig.archiveUrl} className="underline underline-offset-4">
                  services.iiode.com
                </Link>
              </p>
            </div>
          </div>
          <div className="iiode-split-half iiode-media-half iiode-media-half-right iiode-text-half iiode-half-pad-2 flex items-start pt-10 md:pt-8">
            <div className="iiode-type-2 iiode-copy-narrow grid gap-5 text-foreground md:mr-auto">
              <h2 className="iiode-type-2 text-foreground">{copy.contactTitle}</h2>
              <p>{copy.contactIntro}</p>
              {copy.addresses.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                {copy.contactLine}{" "}
                <Link href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
                  {siteConfig.email}
                </Link>
              </p>
              <div className="border-t border-foreground/20 pt-4 text-sm">
                <p>Runtime cwd: {accessProbe.cwd}</p>
                <p>Server access probe: {accessProbe.found ? "connected" : "not found"}</p>
                <p>{accessProbe.sourcePath ? `Access source: ${accessProbe.sourcePath}` : "Access source: none"}</p>
                <p>{accessProbe.found ? accessProbe.content : "No readable file found at connect/access."}</p>
                <p className="pt-3">Runtime env probe: {runtimeEnvProbe.found ? "found" : "not found"}</p>
                <p>
                  {runtimeEnvProbe.sourcePath
                    ? `Runtime env source: ${runtimeEnvProbe.sourcePath}`
                    : "Runtime env source: none"}
                </p>
                <div className="grid gap-3 pt-3 font-mono text-[11px] leading-4">
                  <div className="grid gap-1">
                    <p>Access candidates</p>
                    {accessProbe.candidates.map((candidate) => (
                      <p key={candidate.path}>
                        [{candidate.exists ? (candidate.readable ? "readable" : "unreadable") : "missing"}]{" "}
                        {candidate.path}
                        {candidate.error ? ` (${candidate.error})` : ""}
                      </p>
                    ))}
                  </div>
                  <div className="grid gap-1">
                    <p>Runtime env candidates</p>
                    {runtimeEnvProbe.candidates.map((candidate) => (
                      <p key={candidate.path}>
                        [{candidate.exists ? (candidate.readable ? "readable" : "unreadable") : "missing"}]{" "}
                        {candidate.path}
                        {candidate.error ? ` (${candidate.error})` : ""}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
