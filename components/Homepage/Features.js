import { Box, Container, Heading, SimpleGrid, Icon, Text, Stack, HStack, VStack } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import colourScheme from '@/styles/colours';
  
// Replace test data with your own
const features = [
    {
        id: 1,
        title: "Flying and Gliding",
        text: "Flying is central to your cadet experience. You'll have loads of opportunities to take to the skies."
    },
    {
        id: 2,
        title: "Earn Qualifications",
        text: "You’ll gain real qualifications that will set you apart from the crowd when you head to university or begin your chosen career."
    },
    {
        id: 3,
        title: "Duke of Edinburgh Award",
        text: "The DofE Award Scheme takes you through a programme of activities that will leave you a more confident, motivated and capable person."
    },
    {
        id: 4,
        title: "Visit RAF Stations",
        text: "Cadets can spend a week at an RAF station where they experience the full range of life and work on it, as well as take part in sports, visits and adventure training."
    }
];
  
const Features = () => {
    return (
        <Box mt={12} p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>Activities</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    Cadets can enjoy a wide range of activities during their career with us. Ranging from BTEC qualifications to going flying in a Grob Tutor, there is something for everyone!
                </Text>
            </Stack>
    
            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <Box color={colourScheme.primaryAccent} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600}>{feature.title}</Text>
                                <Text color={'gray.600'}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default Features;