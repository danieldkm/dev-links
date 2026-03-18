export const MadeBySection = () => {
  return (
    <section className="flex flex-col items-center gap-2">
      <span className="text-sm text-text-muted">Feito com ❤️ por</span>
      <a
        href="https://github.com/danieldkm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-bold text-text hover:text-text-hover"
      >
        Daniel K. M.
      </a>
    </section>
  );
};
