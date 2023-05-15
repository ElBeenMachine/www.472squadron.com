import Head from "next/head";
import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";

import Navbar from "./Navbar";
import Footer from "./Footer";
import colourScheme from "@/styles/colours";

const Layout = (props) => {
    const router = useRouter();
    const pageDescription = "We are 472 Squadron, a friendly and inclusive squadron committed to welcoming everyone regardless of gender, background, or ability.";
    const pageImage = "https://beta.472squadron.com/img/metadata.png";
    const pageURL = `https://beta.472squadron.com${router.pathname}`;

    return (
        <div>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>{props.pageTitle}</title>
                <meta name="description" content={pageDescription} />

                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemProp="name" content={props.pageTitle} />
                <meta itemProp="description" content={pageDescription} />
                <meta itemProp="image" content={pageImage} />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content={pageURL} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={pageImage} />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={props.pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={pageImage} />

                <meta name="theme-color" content={colourScheme.primaryAccent}></meta>

                <meta charSet="UFT-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link ref="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>
            <div>
                <Box display={"flex"} flexDirection={"column"} minH={"100vh"} bg={colourScheme.bodyBackground}>
                    <Navbar />
                    <Box flexGrow={1}>
                        {props.children}
                    </Box>
                    <Footer />
                </Box>
            </div>
        </div>
    )
}

export default Layout;