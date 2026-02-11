export { auth as default } from "@/auth";

export const config = {
  matcher: [
    
    '/add-post/:path*',
    '/api/:path*',
  ],
}