import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/main";
import Fonts from "../components/fonts";
import theme from "../libs/theme";
import { AnimatePresence } from "framer-motion";

const website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}>
                <AnimatePresence mode="await" initial={true}>
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default website