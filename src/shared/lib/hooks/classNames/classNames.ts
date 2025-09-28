type Mode = Record<string, boolean | undefined>;

export function classNames(
   className?: string,
   mode: Mode = {},
   additionals: Array<string | undefined> = []
): string {
   return [
      className,
      ...Object.entries(mode)
         .filter(([_, value]) => Boolean(value))
         .map(([cls]) => cls),
      ...additionals.filter(Boolean),
   ].join(" ");
}
