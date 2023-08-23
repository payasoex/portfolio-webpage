import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={5} align="center">
               Hola, Soy un desarrollador fullstack de Lautaro, Chile 
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" mt={5}>
                        Javier Retamal 
                    </Heading>
                    <p>Desarrollador Fullstack / Biotecnólogo / Emprendedor</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page