export interface CategoryTheme {
  id: string;
  name: string;
  accentGradient: string;
  cardBorder: string;
  cardHoverBorder: string;
  cardBg: string;
  cardHoverShadow: string;
  iconBg: string;
  iconText: string;
  iconHoverBg: string;
  titleHover: string;
  tagBg: string;
  tagText: string;
  tagLabel: string;
  cta: string;
  subtext: string;
  solidColor: string;
}

export const CATEGORY_THEMES: Record<string, CategoryTheme> = {
  'safety-tapes': {
    id: 'safety-tapes',
    name: 'Safety Tapes',
    accentGradient: 'from-amber-500 via-amber-400 to-orange-500',
    cardBorder: 'border-amber-200/90 hover:border-amber-400',
    cardHoverBorder: 'hover:border-amber-400',
    cardBg: 'bg-gradient-to-b from-amber-50/70 via-white to-amber-50/30 hover:from-amber-100/70 hover:via-amber-50/40 hover:to-white',
    cardHoverShadow: 'hover:shadow-lg hover:shadow-amber-500/15',
    iconBg: 'bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-amber-500/30',
    iconText: 'text-amber-700',
    iconHoverBg: 'group-hover:bg-amber-500',
    titleHover: 'group-hover:text-amber-950',
    tagBg: 'bg-amber-100/90',
    tagText: 'text-amber-800',
    tagLabel: 'Hazard & Floor',
    cta: 'text-amber-700 bg-amber-100/90 group-hover:bg-amber-500 group-hover:text-white',
    subtext: 'text-amber-600',
    solidColor: 'bg-amber-500',
  },
  'reflective-tapes': {
    id: 'reflective-tapes',
    name: 'Reflective Tapes',
    accentGradient: 'from-emerald-500 via-teal-400 to-lime-500',
    cardBorder: 'border-emerald-200/90 hover:border-emerald-400',
    cardHoverBorder: 'hover:border-emerald-400',
    cardBg: 'bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/30 hover:from-emerald-100/70 hover:via-emerald-50/40 hover:to-white',
    cardHoverShadow: 'hover:shadow-lg hover:shadow-emerald-500/15',
    iconBg: 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/30',
    iconText: 'text-emerald-700',
    iconHoverBg: 'group-hover:bg-emerald-500',
    titleHover: 'group-hover:text-emerald-950',
    tagBg: 'bg-emerald-100/90',
    tagText: 'text-emerald-800',
    tagLabel: 'High-Visibility',
    cta: 'text-emerald-700 bg-emerald-100/90 group-hover:bg-emerald-500 group-hover:text-white',
    subtext: 'text-emerald-600',
    solidColor: 'bg-emerald-500',
  },
  'double-sided-tapes': {
    id: 'double-sided-tapes',
    name: 'Double Sided Tapes',
    accentGradient: 'from-blue-600 via-indigo-500 to-sky-500',
    cardBorder: 'border-blue-200/90 hover:border-blue-400',
    cardHoverBorder: 'hover:border-blue-400',
    cardBg: 'bg-gradient-to-b from-blue-50/70 via-white to-blue-50/30 hover:from-blue-100/70 hover:via-blue-50/40 hover:to-white',
    cardHoverShadow: 'hover:shadow-lg hover:shadow-blue-500/15',
    iconBg: 'bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/30',
    iconText: 'text-blue-700',
    iconHoverBg: 'group-hover:bg-blue-600',
    titleHover: 'group-hover:text-blue-950',
    tagBg: 'bg-blue-100/90',
    tagText: 'text-blue-800',
    tagLabel: 'Mounting & VHB',
    cta: 'text-blue-700 bg-blue-100/90 group-hover:bg-blue-600 group-hover:text-white',
    subtext: 'text-blue-600',
    solidColor: 'bg-blue-600',
  },
  'specialty-tapes': {
    id: 'specialty-tapes',
    name: 'Specialty Tapes',
    accentGradient: 'from-purple-600 via-violet-500 to-fuchsia-500',
    cardBorder: 'border-purple-200/90 hover:border-purple-400',
    cardHoverBorder: 'hover:border-purple-400',
    cardBg: 'bg-gradient-to-b from-purple-50/70 via-white to-purple-50/30 hover:from-purple-100/70 hover:via-purple-50/40 hover:to-white',
    cardHoverShadow: 'hover:shadow-lg hover:shadow-purple-500/15',
    iconBg: 'bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-purple-600/30',
    iconText: 'text-purple-700',
    iconHoverBg: 'group-hover:bg-purple-600',
    titleHover: 'group-hover:text-purple-950',
    tagBg: 'bg-purple-100/90',
    tagText: 'text-purple-800',
    tagLabel: 'Foil & Masking',
    cta: 'text-purple-700 bg-purple-100/90 group-hover:bg-purple-600 group-hover:text-white',
    subtext: 'text-purple-600',
    solidColor: 'bg-purple-600',
  },
  'teflon-ptfe-tapes': {
    id: 'teflon-ptfe-tapes',
    name: 'Teflon & PTFE Tapes',
    accentGradient: 'from-rose-500 via-red-500 to-orange-500',
    cardBorder: 'border-rose-200/90 hover:border-rose-400',
    cardHoverBorder: 'hover:border-rose-400',
    cardBg: 'bg-gradient-to-b from-rose-50/70 via-white to-rose-50/30 hover:from-rose-100/70 hover:via-rose-50/40 hover:to-white',
    cardHoverShadow: 'hover:shadow-lg hover:shadow-rose-500/15',
    iconBg: 'bg-rose-100 text-rose-700 group-hover:bg-rose-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-rose-600/30',
    iconText: 'text-rose-700',
    iconHoverBg: 'group-hover:bg-rose-600',
    titleHover: 'group-hover:text-rose-950',
    tagBg: 'bg-rose-100/90',
    tagText: 'text-rose-800',
    tagLabel: 'Up to 260°C Heat',
    cta: 'text-rose-700 bg-rose-100/90 group-hover:bg-rose-600 group-hover:text-white',
    subtext: 'text-rose-600',
    solidColor: 'bg-rose-600',
  },
  'antistatic-esd-tapes': {
    id: 'antistatic-esd-tapes',
    name: 'Antistatic & ESD Tapes',
    accentGradient: 'from-cyan-500 via-sky-400 to-teal-500',
    cardBorder: 'border-cyan-200/90 hover:border-cyan-400',
    cardHoverBorder: 'hover:border-cyan-400',
    cardBg: 'bg-gradient-to-b from-cyan-50/70 via-white to-cyan-50/30 hover:from-cyan-100/70 hover:via-cyan-50/40 hover:to-white',
    cardHoverShadow: 'hover:shadow-lg hover:shadow-cyan-500/15',
    iconBg: 'bg-cyan-100 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-cyan-600/30',
    iconText: 'text-cyan-700',
    iconHoverBg: 'group-hover:bg-cyan-600',
    titleHover: 'group-hover:text-cyan-950',
    tagBg: 'bg-cyan-100/90',
    tagText: 'text-cyan-800',
    tagLabel: 'Static & Cleanroom',
    cta: 'text-cyan-700 bg-cyan-100/90 group-hover:bg-cyan-600 group-hover:text-white',
    subtext: 'text-cyan-600',
    solidColor: 'bg-cyan-600',
  },
};

export const DEFAULT_CATEGORY_THEME: CategoryTheme = {
  id: 'default',
  name: 'Industrial Category',
  accentGradient: 'from-amber-500 to-orange-500',
  cardBorder: 'border-slate-200 hover:border-amber-400',
  cardHoverBorder: 'hover:border-amber-400',
  cardBg: 'bg-gradient-to-b from-slate-50 via-white to-slate-50/30 hover:from-amber-50/50 hover:to-white',
  cardHoverShadow: 'hover:shadow-lg hover:shadow-slate-400/15',
  iconBg: 'bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-md',
  iconText: 'text-amber-700',
  iconHoverBg: 'group-hover:bg-amber-500',
  titleHover: 'group-hover:text-slate-900',
  tagBg: 'bg-slate-100',
  tagText: 'text-slate-700',
  tagLabel: 'Industrial Grade',
  cta: 'text-amber-700 bg-amber-100/90 group-hover:bg-amber-500 group-hover:text-white',
  subtext: 'text-amber-600',
  solidColor: 'bg-amber-500',
};

export function getCategoryTheme(categoryId: string): CategoryTheme {
  return CATEGORY_THEMES[categoryId] || DEFAULT_CATEGORY_THEME;
}
