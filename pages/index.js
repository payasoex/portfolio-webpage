import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading,
    Link, 
    Image, 
    useColorModeValue, 
    Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'


const Page = () => {
    return (
        <Container>
            <Box 
                borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3} 
                mt={6} 
                align="center"
            >
               Hi!, I'm a fullstack dev from Lautaro, Chile! 
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading 
                        as="h2" 
                        variant="page-title"
                        mt={5}
                    >
                        Javier Retamal 
                    </Heading>
                    <p>Fullstack Developer / Biotechnologist / Entrepreneur</p>
                </Box>
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 4}} 
                    ml={{md: 6}} 
                    align="center"
                >
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/javier.jpeg" alt="profile image"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Works
                </Heading>
                <Paragraph>Aqui debe ir alguna breve descripcion de mi</Paragraph>
                <Box align="center" my={4}>
                    <Link as={NextLink} href="/works">
                        <Button 
                            rightIcon={<ChevronRightIcon/>}
                            colorScheme="teal"
                            >
                            My portfolio
                        </Button>
                    </Link>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1988</BioYear>
                    Born in Temuco, Chile.
                </BioSection>
                <BioSection>
                    <BioYear>2014</BioYear>
                    Graduated as Biotechnologist at Universidad de La Frontera, Temuco.
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Completed a Master in Science in Applied Cellular and Molecular Biology at Universidad de La Frontera, Temuco.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Graduated from The Frontend Developer Career Path on Scrimba.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Completed a bootcamp in Javascript Full Stack Development on Edutecno/E-Camp.
                </BioSection>
            </Section>
        </Container>
    )
}

export default Page