type ClsParam = string | string[] | Record<string, boolean>

export const cls = (...arr: ClsParam[]): string => {
  return arr.reduce((acc: string, item: ClsParam): string => {
    if (Array.isArray(item)) return `${acc} ${item.join(' ')}`.trim()
    if (typeof item === 'object') return [acc, Object.keys(item).filter(v => item[v])].join(' ')
    return [acc, item].join(' ')
  }, '')
}
