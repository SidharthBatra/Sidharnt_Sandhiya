import Image from "next/image";
import Gallery from "@/components/gallery";
import Reveal from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

const galleryPhotos = [
  { src: "/photos/gallery-01.jpg", alt: "Welcome sign at the engagement ceremony" },
  { src: "/photos/gallery-02.jpg", alt: "Portrait of Sandhiya" },
  { src: "/photos/gallery-03.jpg", alt: "Sandhiya in her engagement outfit" },
  { src: "/photos/gallery-04.jpg", alt: "Sidhant and Sandhiya together" },
  { src: "/photos/gallery-05.jpg", alt: "Sidhant and Sandhiya sharing a moment" },
  { src: "/photos/gallery-06.jpg", alt: "Group photo with family and friends" },
  { src: "/photos/gallery-07.jpg", alt: "Ring ceremony moment" },
  { src: "/photos/gallery-08.jpg", alt: "A blessing from family" },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <Image
          src="/photos/hero.jpg"
          alt={`${siteConfig.coupleNames.first} and ${siteConfig.coupleNames.second}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
          <Reveal>
            <p className="animate-float-slow text-xs font-medium uppercase tracking-[0.35em] text-blush-100/90 sm:text-sm">
              We&rsquo;re Engaged
            </p>
          </Reveal>

          <Reveal delayMs={150}>
            <h1 className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-[family-name:var(--font-display)] text-4xl leading-tight font-semibold sm:text-7xl md:text-8xl">
              <span className="text-shimmer">{siteConfig.coupleNames.first}</span>
              <span className="align-middle text-2xl font-normal text-gold-300 sm:text-5xl">
                &
              </span>
              <span className="text-shimmer">{siteConfig.coupleNames.second}</span>
            </h1>
          </Reveal>

          <Reveal delayMs={300}>
            <div className="mt-7 flex items-center gap-4 text-blush-100/90">
              <span className="h-px w-8 bg-gold-300/70 sm:w-12" />
              <p className="font-[family-name:var(--font-display)] text-lg tracking-wide sm:text-xl">
                {siteConfig.eventDate}
              </p>
              <span className="h-px w-8 bg-gold-300/70 sm:w-12" />
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={500} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/80">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <span className="h-8 w-px animate-pulse bg-white/60" />
          </div>
        </Reveal>
      </section>

      {/* Welcome message */}
      <section className="mx-auto max-w-2xl px-6 py-16 text-center sm:py-24">
        <Reveal>
          <div className="mx-auto mb-6 h-px w-16 bg-gold-400/70" />
          <p className="font-[family-name:var(--font-display)] text-xl leading-relaxed text-charcoal-soft italic sm:text-2xl">
            &ldquo;{siteConfig.welcomeMessage}&rdquo;
          </p>
          <p className="mt-6 text-sm tracking-wide text-gold-600 uppercase">
            With love, {siteConfig.coupleNames.first} &amp; {siteConfig.coupleNames.second}
          </p>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 sm:pb-24">
        <Reveal className="mb-10 text-center sm:mb-14">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-charcoal sm:text-4xl">
            A Few Favorite Moments
          </h2>
          <p className="mt-3 text-sm text-charcoal-soft sm:text-base">
            Tap any photo for a closer look
          </p>
        </Reveal>

        <Gallery photos={galleryPhotos} />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blush-50 to-blush-100 px-6 py-20 text-center sm:py-28">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-300/20 blur-3xl" />
        <Reveal className="relative">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-charcoal sm:text-4xl">
            Want to see everything?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-charcoal-soft sm:text-base">
            The full album has all the photos from our engagement day — download
            your favorites and relive the celebration.
          </p>

          <a
            href={siteConfig.driveAlbumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-9 inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 bg-[length:200%_auto] px-9 py-4 text-base font-medium text-white shadow-[0_10px_30px_-8px_rgba(161,127,58,0.6)] transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-[0_14px_36px_-6px_rgba(161,127,58,0.7)] active:scale-95 sm:px-11 sm:py-4.5 sm:text-lg"
          >
            View All Photos
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal px-6 py-10 text-center">
        <p className="font-[family-name:var(--font-display)] text-lg text-blush-100 sm:text-xl">
          {siteConfig.coupleNames.first} &amp; {siteConfig.coupleNames.second}
        </p>
        <p className="mt-2 text-xs tracking-wide text-white/50 sm:text-sm">
          {siteConfig.eventDate}
        </p>
      </footer>
    </main>
  );
}
