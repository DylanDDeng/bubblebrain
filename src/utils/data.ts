/**
 * Ensures that a value is a positive integer.
 */
function ensurePositiveInteger(value: number, name: string) {
  if (Number.isInteger(value) && value > 0) return value
  throw new Error(
    `'${name}' must be a positive integer. Please check 'src/config.ts' for the correct configuration.`
  )
}

/**
 * Parses a tuple of boolean and number.
 */
export function parseTuple(
  tuple: boolean | [boolean, number] | undefined,
  name: string
) {
  if (!tuple || !Array.isArray(tuple) || !tuple[0]) return undefined
  return ensurePositiveInteger(tuple[1], name)
}

/**
 * Retrieves the minutes read for a post.
 */
export function getMinutesRead(
  minutesRead: number | boolean,
  computedMinutesRead: number
) {
  return minutesRead === false
    ? 0
    : typeof minutesRead === 'number' && minutesRead > 0
      ? minutesRead
      : computedMinutesRead
}

/**
 * Build tag relations from input shapes.
 */
export function buildTagRelations(
  input: string[][] | string[] | Record<string, string[]>
): { unique: string[]; relations: Record<string, string[]> } {
  const relMap = new Map<string, Set<string>>()

  const ensure = (key: string): Set<string> => {
    let set = relMap.get(key)
    if (!set) {
      set = new Set<string>()
      relMap.set(key, set)
    }
    return set
  }

  const isString2DArray = (arr: unknown[]): arr is string[][] =>
    arr.length > 0 && Array.isArray(arr[0])

  if (Array.isArray(input)) {
    if (isString2DArray(input)) {
      for (const group of input) {
        const clean = Array.from(
          new Set(group.map((tag) => tag.trim()).filter(Boolean))
        )

        for (const a of clean) {
          const setA = ensure(a)
          for (const b of clean) {
            if (a !== b) setA.add(b)
          }
        }
      }
    } else {
      for (const tag of input) ensure(String(tag))
    }
  } else {
    for (const [key, values] of Object.entries(input)) {
      const set = ensure(key)
      for (const value of values) {
        if (value && value !== key) set.add(value)
      }
    }
  }

  const unique = Array.from(relMap.keys()).sort((a, b) =>
    a.localeCompare(b, 'zh-CN', { sensitivity: 'base' })
  )
  const relations: Record<string, string[]> = {}

  for (const key of unique) {
    relations[key] = Array.from(relMap.get(key) ?? [])
  }

  return { unique, relations }
}

