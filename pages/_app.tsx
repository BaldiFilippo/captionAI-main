import { Analytics } from "@vercel/analytics/react"
import type { AppProps } from "next/app"
import "../styles/globals.css"
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
} from "@clerk/nextjs"
import { useRouter } from "next/router"

//  List pages you want to be publicly accessible, or leave empty if
//  every page requires authentication. Use this naming strategy:
//   "/"              for pages/index.js
//   "/foo"           for pages/foo/index.js
//   "/foo/bar"       for pages/foo/bar.js
//   "/foo/[...bar]"  for pages/foo/[...bar].js
const publicPages: Array<string> = [
    "/sign-in/[[...index]]",
    "/sign-up/[[...index]]",
]

function MyApp({ Component, pageProps }: AppProps) {
    // Get the pathname
    const { pathname } = useRouter()

    // Check if the current route matches a public page
    const isPublicPage = publicPages.includes(pathname)

    // If the current route is listed as public, render it directly
    // Otherwise, use Clerk to require authentication
    return (
        <ClerkProvider {...pageProps}>
            {isPublicPage ? (
                <Component {...pageProps} />
            ) : (
                <>
                    <SignedIn>
                        <Component {...pageProps} />
                        <Analytics />
                    </SignedIn>
                    <SignedOut>
                        <RedirectToSignIn />
                    </SignedOut>
                </>
            )}
        </ClerkProvider>
    )
}

export default MyApp
