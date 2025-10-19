import path from 'path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Tell Turbopack to use this folder as the workspace root. This avoids
  // Turbopack inferring the parent folder when there are multiple lockfiles.
  turbopack: {
    root: path.resolve(__dirname),
  },
}

export default nextConfig
