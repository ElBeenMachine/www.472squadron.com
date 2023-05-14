import colourScheme from '@/styles/colours';
import { SimpleGrid, Image, Flex, Heading, Text, Stack, StackDivider, Icon, useColorModeValue } from '@chakra-ui/react';
import { IoSchool, IoCompass } from 'react-icons/io5';
import { FaFighterJet } from "react-icons/fa";
  
const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}> 
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

const About = () =>  {
    return (
        <Flex textAlign={'center'} p={4} justifyContent={'center'} direction={'column'} width={'full'} overflow={'hidden'} mt={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Heading>Air Cadet Life</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Cadet life is all about challenge, excitement and adventure. Cadets have many opportunities including UK and overseas camps, leadership courses, air experience flights and pilot training. The focus is always on enjoying yourself while improving your skills.
                    </Text>
                    <Stack spacing={4} divider={ <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} /> }>
                        <Feature icon={ <Icon as={FaFighterJet} color={'yellow.500'} w={5} h={5} /> } iconBg={useColorModeValue('yellow.100', 'yellow.900')} text={'Flying and Gliding'} />
                        <Feature icon={<Icon as={IoSchool} color={'green.500'} w={5} h={5} />} iconBg={useColorModeValue('green.100', 'green.900')} text={'Earn Qualifications'} />
                        <Feature icon={ <Icon as={IoCompass} color={'purple.500'} w={5} h={5} /> } iconBg={useColorModeValue('purple.100', 'purple.900')} text={'Visit RAF Stations'} />
                    </Stack>
                </Stack>
                <Flex>
                    <Image rounded={'md'} alt={'feature image'} src={ '/img/landing/about.jpg' } objectFit={'cover'} />
                </Flex>
            </SimpleGrid>
        </Flex>
    );
}

export default About;