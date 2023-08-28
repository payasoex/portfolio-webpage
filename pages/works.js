import { Container, Heading, SimpleGrid, Divider, Box } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item"; 
import thumbTheOutworld from "../public/images/works/theoutworld-thumbnail.jpeg";
import Layout from "../components/layout/article";

const Works = () => {
    return(
        <Layout>
            <Container mt={6}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
    {/* en caso de aumentar el numero de proyectos modificar el numero de columnas */}
                    <SimpleGrid columns={[1, 1, 1]} gap={6}>
                        <Section>
                            <WorkGridItem id="TheOutworld" title="The Outworld" thumbnail={thumbTheOutworld}>
                            A Web App where we inspire families to connect, explore, and grow together 
                            through fun and engaging outdoor/indoor
                            activities. Whether you're a local or a visitor,
                            you can find the perfect adventures tailored to your family's
                            interests and age groups.
                            </WorkGridItem>
                        </Section>
                    </SimpleGrid>
            </Container>
        </Layout>

)
}

export default Works