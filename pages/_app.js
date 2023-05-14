import '@/styles/globals.css';
import colourScheme from '@/styles/colours';
import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <NextNProgress options={{ showSpinner: false }} color={colourScheme.primaryAccent} />
            <Component {...pageProps} />
            <ToastContainer />
        </ChakraProvider>
    )
}
