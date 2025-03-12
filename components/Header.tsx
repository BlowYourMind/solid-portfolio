import ThemeToggle from "./ToggleButton";

export default function Header({ theme }: { theme: string }) {
  return (
    <header className="bg-background-30 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px] transition-colors">
      <ThemeToggle initialTheme={theme} />
    </header>
  );
}
