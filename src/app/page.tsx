import Link from "next/link";
import { Button } from "@/components/ui/button";
import { listEntries, listLocales, loadGraph } from "@/lib/content";

export default function HomePage() {
  const locales = listLocales();
  const zhCount = listEntries("zh").length;
  const enCount = listEntries("en").length;
  const { entities, relations } = loadGraph();

  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
        <p className="animate-rise font-display text-5xl leading-none tracking-tight text-[var(--ink)] sm:text-7xl md:text-8xl">
          TapeOut
          <span className="mt-2 block text-[var(--brand)]">Encyclopedia</span>
        </p>
        <p className="animate-rise-delay mt-6 max-w-xl text-lg leading-relaxed text-[var(--mute)] sm:text-xl">
          以 GitHub 开源仓库为核心的 TapeOut 百科预览。真相源是仓库里的 Markdown / YAML；Issue 与
          PR 是共建主路径。
        </p>
        <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-[var(--brand)] text-white hover:bg-[var(--brand)]/90">
            <Link href="/entries/zh">浏览中文词条</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/entries/en">Browse English</Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="https://github.com/BruceLanLan/tapeout-encyclopedia-public/tree/main/content/public-github">
              公开 GitHub 目录
            </a>
          </Button>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--paper)]/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-[var(--ink)]">词条库</h2>
            <p className="mt-2 text-[var(--mute)]">
              zh {zhCount} · en {enCount} · locales {locales.join(", ")}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--ink)]">公开仓库</h2>
            <p className="mt-2 text-[var(--mute)]">
              仅收录经匿名访问验证的 GitHub 仓库
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--ink)]">知识图谱</h2>
            <p className="mt-2 text-[var(--mute)]">
              {entities.length} entities · {relations.length} relations
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-[var(--ink)]">数据层</h2>
            <p className="mt-2 text-[var(--mute)]">
              引用{" "}
              <a className="text-[var(--brand)] underline-offset-4 hover:underline" href="https://tapeout.work">
                tapeout.work
              </a>{" "}
              公开 API，不把瞬时数字写成永恒事实。
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl tracking-tight">三层分工</h2>
          <p className="mt-3 max-w-2xl text-[var(--mute)]">
            新手指南保持页码溯源与「不扩写」契约；百科承接多语言词条与 Agent 共建；tapeout.work 承接可观测数据。
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "Beginner guide",
                d: "权威教材 · PDF 溯源 · 禁止扩写",
                href: "https://github.com/chickdady-svg/tapeout-beginner-guide",
              },
              {
                t: "Encyclopedia",
                d: "词条 · 图谱 · i18n · Agent 协议",
                href: "/specs/00-overview",
              },
              {
                t: "tapeout.work",
                d: "Registry / market / PoD 观测 API",
                href: "https://tapeout.work",
              },
            ].map((item) => (
              <li key={item.t}>
                <a
                  href={item.href}
                  className="block border-t-2 border-[var(--brand)] pt-4 transition-transform hover:-translate-y-0.5"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  <div className="font-display text-xl">{item.t}</div>
                  <p className="mt-2 text-sm text-[var(--mute)]">{item.d}</p>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
