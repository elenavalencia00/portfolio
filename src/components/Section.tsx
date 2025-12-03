type Props = { title: string; children: React.ReactNode };

export function Section({ title, children }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-neon-mint border-l-4 border-neon-mint pl-4">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
