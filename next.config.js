/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export',
trailingSlash: true,
images: {
    unoptimized: true
},
  // Add this if your repository is not at the root domain
  // basePath: '/your-repository-name',
  // assetPrefix: '/your-repository-name',
}

module.exports = nextConfig