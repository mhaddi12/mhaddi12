/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent this site from being embedded in iframes on other origins
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Stop browsers from sniffing content types
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Send origin only on same-origin requests; just the origin (no path) cross-origin
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Opt out of FLoC / Privacy Sandbox cohort tracking
          { key: 'Permissions-Policy', value: 'interest-cohort=()' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
