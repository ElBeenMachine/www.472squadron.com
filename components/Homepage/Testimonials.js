import colourScheme from '@/styles/colours';
import { Avatar, Box, chakra, Flex, SimpleGrid, useColorModeValue, Stack, Heading, Text } from '@chakra-ui/react';
  
const testimonials = [
    {
        name: 'Joselyn McGrady',
        title: 'Sergeant',
        heading: 'Make Friends',
        content: 'Cadets introduced me to so many new people, I\'ve made some lifelong friends here and would honestly recommend joining to everyone.',
        avatar: '/img/landing/testimonials/SGT McGrady.jpg',
    },
    {
        name: 'Agastya Santosh',
        title: 'Ex. Sergeant',
        heading: "Learn Life Skills",
        content: "The RAF Air Cadets was a great preparation for my future career and a source of unforgettable memories. I acquired skills that are essential in any job, such as working with others, leading projects and communicating effectively.",
        avatar: '/img/landing/testimonials/SGT Santosh.jpg',
    },
    {
        name: 'Zack Astbury',
        title: 'Ex. Flight Sergeant',
        heading: "Enter Competitions",
        content: "During my time in the RAF Air Cadets, I had the opportunity to represent my squadron in cross-country. Winning the gold medal gave me the change to go to a regional competition - The highlight of my cadet career.",
        avatar: '/img/landing/testimonials/FS Astbury.jpg',
    },
    {
        name: 'Ava Hardman',
        title: 'Sergeant',
        heading: "Try New Things",
        content: 'I love being a SGT in the RAF Air Cadets because I get to do amazing things like flying, gliding and shooting. I am proud to be part of the RAF Air Cadets and I would recommend it to anyone who wants to challenge themselves and have fun.',
        avatar: '/img/landing/testimonials/SGT Hardman.jpg',
    }
];

const Testimonial = ({ children }) => {
    return <Box maxW={{ lg: "400px", base: "100%" }}>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} boxShadow={'lg'} p={8} rounded={'xl'} align={'center'} pos={'relative'} _after={{ content: `""`, w: 0, h: 0, borderLeft: 'solid transparent', borderLeftWidth: 16, borderRight: 'solid transparent', borderRightWidth: 16, borderTop: 'solid', borderTopWidth: 16, borderTopColor: useColorModeValue('white', 'gray.800'), pos: 'absolute', bottom: '-16px', left: '50%', transform: 'translateX(-50%)', }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }) => {
    return (
        <Text textAlign={'center'} color={useColorModeValue('gray.600', 'gray.400')} fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({ src, name, title }) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} alt={name} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};
  
const Testimonials = () => {
    return (
        <Flex mt={12} textAlign={'center'} pt={10} justifyContent={'center'} direction={'column'} width={'full'} overflow={'hidden'}>
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                <chakra.h3 fontWeight={'bold'} fontSize={20} textTransform={'uppercase'} color={colourScheme.primaryAccent}>
                    People love us
                </chakra.h3>
                <chakra.h1 pb={5} fontSize={48} fontWeight={'bold'} color={useColorModeValue('gray.700', 'gray.50')}>
                    You're in good company
                </chakra.h1>
                <chakra.h2 margin={'auto'} width={'70%'} fontWeight={'medium'} color={useColorModeValue('gray.500', 'gray.400')}>
                    See why over{' '}
                    <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
                        40,000+
                    </chakra.strong>
                    {' '}
                    young adults in the UK are enrolled in the RAF Air Cadets!
                </chakra.h2>
            </Box>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: '5', lg: '20'}} mt={16} mb={16} mx={'auto'}>
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index}>
                        <TestimonialContent>
                            <TestimonialHeading>{ testimonial.heading }</TestimonialHeading>
                            <TestimonialText>{ testimonial.content }</TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar src={ testimonial.avatar } name={ testimonial.name } title={ testimonial.title } />
                    </Testimonial>
                ))}
            </SimpleGrid>
        </Flex>
    );
}

export default Testimonials