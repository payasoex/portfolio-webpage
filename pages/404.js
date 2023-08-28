import NextLink from 'next/link';
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react';

const NotFound = () => {
    return (
        <Container my={6}>
            <Heading as="h1">Not Found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6}/>

            <Box my={10} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound;
