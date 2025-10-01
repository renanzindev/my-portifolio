import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Gerador de Senhas",
            subtitle: "Jan 2025 - Fev 2025",
            srcImg: "/src/assets/images/GeradorSenhas.png",
            description: "Identifiquei, na empresa em que trabalho, a necessidade de um gerador de senhas e, por iniciativa própria, desenvolvi uma solução personalizada, que atualmente utilizo semanalmente.",
            technologies: "Tecnologias: JavaScript, HTML, CSS,",
            websiteURL: "https://protect-senhaa.vercel.app/",
            codeURL: "https://github.com/renanzindev/ProtectSenha",
        },
        {
            title: "Sorteador de Times de Vôlei",
            subtitle: "Jun 2025 - Ago 2025",
            srcImg: "/src/assets/images/SorteioVolei.png",
            description: "O Sorteador de Times de Vôlei é uma aplicação web que organiza partidas de forma prática e justa. Permite adicionar participantes, configurar o número de times e equilibrar a quantidade de homens e mulheres por equipe.",
            technologies: "Tecnologias: JavaScript, HTML5, CSS3,",
            websiteURL: "https://sorteio-volei.vercel.app/",
            codeURL: "https://github.com/renanzindev/SorteioVolei",
        },
        {
            title: "Sandubão",
            subtitle: "Set 2024 - Out 2024",
            srcImg: "/src/assets/images/Sandubao.png",
            description: "O Sandubão é uma aplicação web de cardápio digital desenvolvida para lanchonetes e hamburguerias. O sistema apresenta os produtos de forma visual e organizada, com fotos, descrições, preços e a opção de adicionar ao pedido. Além do menu de sanduíches, conta com categorias como bebidas, combos e customizações, oferecendo uma experiência simples e intuitiva para o usuário.",
            technologies: "Tecnologias: JavaScript, HTML5, CSS3, React,",
            websiteURL: "https://sandubao3.vercel.app/",
            codeURL: "https://github.com/renanzindev/Sandubao3",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
