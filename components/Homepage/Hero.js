import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
  
const Hero = () => {
    const imagePaths = [
        "/img/landing/hero-1.jpg",
        "/img/landing/hero-2.jpg",
        "/img/landing/hero-3.jpg",
        "/img/landing/hero-4.jpg",
        "/img/landing/hero-5.jpg",
        "/img/landing/hero-6.jpg"
    ];

    const heroBG = imagePaths[Math.floor(Math.random() * imagePaths.length)];

    function showMore(e) {
        e.preventDefault();

        const elem = document.getElementById("main");
        window.scrollTo({
            top: elem?.getBoundingClientRect().top,
            behavior: "smooth",
        });
    }

    return (
        <Flex w={'full'} h={'100vh'} maxH={'calc(100vh - 60px)'} backgroundImage={ `url(${heroBG})` } backgroundSize={'cover'} backgroundPosition={'center center'}>
            <VStack w={'full'} justify={'center'} px={useBreakpointValue({ base: 4, md: 8 })} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text color={'white'} fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        We are 472 (Hoylake & West Kirby) Squadron RAF Air Cadets
                    </Text>
                    <Stack direction={'row'}>
                        <Button onClick={() => window.open("https://www.raf.mod.uk/aircadets/interested-in-joining-as-a-cadet/?squadronno=472", "_blank")} bg={'blue.400'} rounded={'full'} color={'white'} _hover={{ bg: 'blue.500' }}>
                            Join Now
                        </Button>
                        <Button onClick={showMore} bg={'whiteAlpha.300'} rounded={'full'} color={'white'} _hover={{ bg: 'whiteAlpha.500' }}>
                            Learn More
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    );
}

export default Hero;