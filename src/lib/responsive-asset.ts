export function getMobileVariant(assetPath: string): string | null {
  if (!assetPath.includes("/desktop/")) {
    return null
  }

  return assetPath.replace("/desktop/", "/mobile/")
}
