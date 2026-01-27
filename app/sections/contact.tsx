'use client';

const featuredPosts = [
  {
    platform: "LinkedIn",
    iconSrc: "/linkedin.png",
    accentColor: "from-sky-400/40 to-sky-500/20",
    bgColor: "bg-sky-950/40",
    title: "How I made my first money!",
    insight: "Started a side hustle and made my first money!",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7376318448194289664/", 
    likes: "30+",
    views: "5.2k+",
  },
  {
    platform: "Twitter / X",
    iconSrc: "/twitter.png",
    accentColor: "from-slate-200/40 to-slate-500/10",
    bgColor: "bg-slate-900/60",
    title: "Leetcode 50 Problems Solved!",
    insight: "A post that blew when i posted about my progress on Leetcode!",
    href: "https://x.com/twrana26/status/1953120378106331525?s=20", 
    likes: "280+",
    views: "11k+",
  },
  {
    platform: "Medium",
    iconSrc: "/medium-icon.svg", 
    accentColor: "from-emerald-400/40 to-emerald-500/10",
    bgColor: "bg-emerald-950/40",
    title: "I’m not confused—I just have too many paths in front of me",
    insight: "A short reflection on product thinking, constraints, and learning by doing.",
    href: "https://medium.com/@startwinklerana/im-not-confused-i-just-have-too-many-paths-in-front-of-me-e6dae199b210", // TODO: replace with specific Medium article URL
    likes: "0",
    views: "0",
  },
];

const codingPlatforms = [
  {
    name: "LeetCode",
    metricLabel: "Problems solved",
    metricValue: "120+",
    href: "https://leetcode.com/u/TwinkleRana/", 
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg",
  },
  {
    name: "Codeforces",
    metricLabel: "Rating",
    metricValue: "—",
    href: "https://codeforces.com/profile/tuviankal",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeforces/codeforces-plain.svg",
  },
  {
    name: "CodeChef",
    metricLabel: "Contest rating",
    metricValue: "1300+",
    href: "https://www.codechef.com/users/twinkle_rana",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codechef/codechef-plain.svg",
  },
  {
    name: "GitHub",
    metricLabel: "Public repos",
    metricValue: "20+",
    href: "https://github.com/twinklerana",
    iconSrc: "/github.png",
  },
  {
    name: "Codolio",
    metricLabel: "Portfolio",
    metricValue: "Live",
    href: "https://codolio.com/profile/Twinkle26",
    iconSrc: "/codolio.png", 
  },
];

export default function contact() {
  return (
    <section
      id="contacts"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-14">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">
            In Public
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 mb-3">
            Platforms where i build, write, and practice in public.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A curated snapshot of the places I build, write, and practice in
            public. 
          </p>
        </header>

        {/* Featured posts (larger cards) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-sm font-medium tracking-[0.25em] text-slate-400 uppercase">
              Featured posts
            </h3>
            <span className="text-xs text-slate-500">
              LinkedIn · X · Medium
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <article
                key={post.platform}
                className={`group relative rounded-2xl border border-slate-800/80 ${post.bgColor} backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between transition-colors transition-transform duration-200 hover:-translate-y-1 hover:border-slate-500/60`}
              >
                {/* Platform + icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`h-9 w-9 rounded-xl bg-gradient-to-br ${post.accentColor} flex items-center justify-center border border-white/10`}
                  >
                    <img
                      src={post.iconSrc}
                      alt={post.platform}
                      className="h-4 w-4 object-contain invert"
                      onError={(e) => {
                        // Fallback to a simple icon if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-xs font-medium tracking-wide text-slate-300 uppercase">
                    {post.platform}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-base sm:text-lg font-semibold text-slate-50 leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {post.insight}
                  </p>
                </div>

                {/* Meta: likes + views */}
                <div className="mb-4 flex items-center gap-4 text-[11px] sm:text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400/70" />
                    <span>
                      <span className="text-slate-200">{post.likes}</span>{" "}
                      likes
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-500/70" />
                    <span>
                      <span className="text-slate-200">{post.views}</span>{" "}
                      views
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs text-slate-300/90 hover:text-slate-100 transition-colors"
                >
                  <span>View post</span>
                  <span className="h-px w-10 bg-slate-500/60 group-hover:w-14 transition-all duration-200" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Coding platforms snapshot (smaller cards below) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-sm font-medium tracking-[0.25em] text-slate-400 uppercase">
              Coding platforms snapshot
            </h3>
            <span className="text-xs text-slate-500">
              Progress over time, not overnight
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {codingPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md px-4 py-3 flex items-center gap-3 transition-colors transition-transform duration-150 hover:-translate-y-0.5 hover:border-slate-600/80"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/80 border border-slate-700/70">
                  <img
                    src={platform.iconSrc}
                    alt={platform.name}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-100 truncate">
                    {platform.name}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    <span className="text-slate-300">
                      {platform.metricValue}
                    </span>{" "}
                    <span className="text-slate-500">
                      {platform.metricLabel}
                    </span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}