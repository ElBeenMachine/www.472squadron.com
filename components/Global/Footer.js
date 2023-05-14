import { Box, Container, Image, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const Footer = () => {
    return (
        <Box id='footer' bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }} spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Image maxW={"250px"} src='/img/nav-logo.png' />
                        </Box>
                        <Text fontSize={'sm'}>
                            This website was created and is maintained by <Link href={"https://www.beenhamow.co.uk"} target="_blank">Ollie Beenham</Link>
                        </Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Other Links</ListHeader>
                        <Link target='_blank' href={'https://www.raf.mod.uk/'}>RAF Website</Link>
                        <Link target='_blank' href={'https://www.raf.mod.uk/aircadets/'}>RAF Air Cadets HQ</Link>
                        <Link target='_blank' href={'https://recruitment.raf.mod.uk/'}>Careers in the RAF</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Current Cadets</ListHeader>
                        <Link target='_blank' href={'https://cadets.bader.mod.uk'}>Cadet Portal</Link>
                        <Link target='_blank' href={'https://learn.bader.mod.uk'}>Bader Learn</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link target='_blank' href={'https://www.raf.mod.uk/aircadets/cadets/parents-and-carers/'}>Parents and Carers</Link>
                        <Link target='_blank' href={'https://www.raf.mod.uk/aircadets/safeguarding/safeguarding-guide/'}>Safeguarding</Link>
                        <Link target='_blank' href={'https://www.raf.mod.uk/aircadets/safeguarding/report-a-concern/'}>Report a Concern</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        <Link target='_blank' href={'https://www.facebook.com/472squadron'}>Facebook</Link>
                        <Link target='_blank' href={'https://www.twitter.com/472squadron'}>Twitter</Link>
                        <Link target='_blank' href={'https://www.instagram.com/472squadron'}>Instagram</Link>
                        <Link target='_blank' href={'https://www.youtube.com/@472Squadron'}>YouTube</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default Footer;