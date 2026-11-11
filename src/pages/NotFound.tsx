import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  usePageMeta("/404", "Page not found");
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-ink px-5 pt-[76px] text-center">
      <div>
        <Logo className="mx-auto h-24 w-auto" />
        <p className="mt-8 font-display text-7xl italic text-gold-light">404</p>
        <h1 className="mt-4 font-display text-3xl text-ivory">This page has wandered off</h1>
        <p className="mx-auto mt-4 max-w-md text-ivory/70">Sankofa teaches us it is never wrong to go back. Let's return you home.</p>
        <Button to="/" className="mt-8">
          Back to home
        </Button>
      </div>
    </main>
  );
}
