import { Box, chakra, Container, HStack, Stack, Text, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")} rounded={"full"} w={8} h={8} cursor={"pointer"} as={"a"} href={href} display={"inline-flex"} alignItems={"center"} justifyContent={"center"} transition={"background 0.3s ease"} _hover={{ bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200") }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
}

const Footer = () => {
    return (
        <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
            <Box borderTopWidth={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")}>
                <Container as={Stack} maxW={"6xl"} py={4} flexDirection={"row"} spacing={4} justifyContent={"space-between"} alignItems={"center"}>
                    <Text>This website was created and is maintained by <Link href={"https://www.beenhamow.co.uk"} target="_blank">Ollie Beenham</Link></Text>
                    {/* <HStack spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>

                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </HStack> */}
                </Container>
            </Box>
        </Box>
    )
}

export default Footer;