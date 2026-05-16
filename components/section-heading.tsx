type SectionHeadingProps = {
  label?: string
  title: string
  description?: string
  align?: "center" | "left"
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      {label && (
        <span className="mb-3 inline-block rounded-full bg-teal-50 px-4 py-1 text-sm font-semibold tracking-wide text-teal-700 uppercase">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-slate-600">{description}</p>}
    </div>
  )
}
