import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
  
const Hero = () => {
    const imagePaths = [
        "/img/landing/hero-1.jpg",
        "/img/landing/hero-2.jpg",
        "/img/landing/hero-3.jpg"
    ];

    const heroBG = imagePaths[Math.floor(Math.random() * imagePaths.length)];

    return (
        <Flex w={'full'} h={'100vh'} backgroundImage={ `url(${heroBG})` } backgroundSize={'cover'} backgroundPosition={'center center'}>
            <VStack w={'full'} justify={'center'} px={useBreakpointValue({ base: 4, md: 8 })} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text color={'white'} fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        We are 472 (Hoylake and West Kirby) Air Cadets Squadron
                    </Text>
                    <Stack direction={'row'}>
                        <Button bg={'blue.400'} rounded={'full'} color={'white'} _hover={{ bg: 'blue.500' }}>
                            Show me more
                        </Button>
                        <Button bg={'whiteAlpha.300'} rounded={'full'} color={'white'} _hover={{ bg: 'whiteAlpha.500' }}>
                            Show me more
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    );
}

export default Hero;