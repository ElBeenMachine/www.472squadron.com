import Layout from "@/components/Global/Layout";
import About from "@/components/Homepage/About";
import Features from "@/components/Homepage/Features";
import Hero from "@/components/Homepage/Hero";
import Testimonials from "@/components/Homepage/Testimonials";
import { Container } from "@chakra-ui/react";

export default function Home() {
    return (
        <Layout pageTitle={"472 Squadron | Home"}>
            <Hero />
            <Container id="main" maxW={'5xl'}>
                <About />
                <Features />
                <Testimonials />
            </Container>
        </Layout>
    )
}
