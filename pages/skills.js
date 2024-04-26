import { 
    Container, 
    Box, 
    Heading,
    Link, 
    Image, 
    useColorModeValue, 
    Button } from "@chakra-ui/react";
import Layout from "../components/layout/article";

function Skills() {
    return (
        <Layout>
            <Container mt={6}>
                <Heading as="h3" fontSize={20} mb={4}>My Skills</Heading>
            </Container>
        </Layout>
    )
}

export default Skills;