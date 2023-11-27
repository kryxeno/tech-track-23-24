import { createHash } from "crypto"

export const hashToIndex = (cuid: string, arrayLength: number) => {
  const hash = createHash("sha256").update(cuid).digest("hex")
  const hashCode = parseInt(hash.substr(0, 8), 16) // Using first 8 characters of the hash

  return hashCode % arrayLength // Modulo array length to get a number within the range
}
