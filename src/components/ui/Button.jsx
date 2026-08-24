// Reusable button. Renders <a> when href is given, else <button>.
const base =
  'inline-flex items-center justify-center gap-2.5 rounded-[9px] px-[21px] py-[13px] text-sm font-bold transition-all duration-200 border'

const variants = {
  primary:
    'bg-[#c58a36] text-white border-[#c58a36] shadow-[0_9px_25px_#2c0b1250] hover:bg-[#d49b45] hover:-translate-y-0.5',
  ghost:
    'bg-transparent border-[#bca69b] text-inherit hover:bg-white hover:text-[#4d1823]',
  heroGhost:
    'bg-transparent border-[#80646a] text-[#f6e7d6] hover:bg-white hover:text-[#4d1823]',
}

export default function Button({
  as,
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`
  const Tag = as || (href ? 'a' : 'button')
  return (
    <Tag href={href} className={classes} {...props}>
      {children}
    </Tag>
  )
}
