import colourScheme from '@/styles/colours';
import { Avatar, Box, chakra, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
  
const testimonials = [
    {
        name: 'Joselyn McGrady',
        role: 'Sergeant',
        content: 'I love being a SGT in the RAF Air Cadets because I get to do amazing things like flying, gliding and shooting, and I also learn valuable skills like leadership and teamwork. I am proud to be part of the RAF Air Cadets and I would recommend it to anyone who wants to challenge themselves and have fun.',
        avatar: '/img/landing/testimonials/SGT McGrady.jpg',
    },
    {
        name: 'Agastya Santosh',
        role: 'Ex. Sergeant',
        content: "The RAF Air Cadets was a great preparation for my future career and a source of unforgettable memories. I acquired skills that are essential in any job, such as working with others, leading projects and communicating effectively.",
        avatar: '/img/landing/testimonials/SGT Santosh.jpg',
    },
    {
        name: 'Zack Astbury',
        role: 'Ex. Flight Sergeant',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis quam et eros dignissim, sit amet imperdiet massa venenatis. In cursus metus lectus, eu interdum orci molestie id.",
        avatar: '/img/landing/testimonials/FS Astbury.jpg',
    },
    {
        name: 'Ava Hardman',
        role: 'Sergeant',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis quam et eros dignissim, sit amet imperdiet massa venenatis. In cursus metus lectus, eu interdum orci molestie id.',
        avatar: '/img/landing/testimonials/SGT Hardman.jpg',
    }
];
  
function TestimonialCard(props) {
    const { name, role, content, avatar } = props;
    return (
        <Flex p={6} mt={12} boxShadow={'xl'} maxW={'640px'} direction={{ base: 'column-reverse', md: 'row' }} width={'full'} rounded={'xl'} justifyContent={'space-between'} position={'relative'} bg={useColorModeValue('white', 'gray.800')}>
            <Flex direction={'column'} textAlign={'left'} justifyContent={'space-between'}>
                <chakra.p fontWeight={'medium'} fontSize={'15px'} pb={4}>
                    {content}
                </chakra.p>
                <chakra.p fontWeight={'bold'} fontSize={14}>
                    {name}
                    <chakra.span fontWeight={'medium'} color={'gray.500'}>
                        {' '}
                        - {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
            <Avatar src={avatar} height={'100px'} width={'100px'} alignSelf={'center'} m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}/>
        </Flex>
    );
}
  
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
            <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={'20'} mb={16} mx={'auto'}>
                {testimonials.map((cardInfo, index) => (
                    <TestimonialCard key={index} {...cardInfo} index={index} />
                ))}
            </SimpleGrid>
        </Flex>
    );
}

export default Testimonials