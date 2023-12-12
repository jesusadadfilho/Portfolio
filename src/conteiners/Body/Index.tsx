import React from "react";
import { BodyContainer, ExperiencesContainer, ExpirienceLabelItem, ExpirienceItemText, LinkContainer, ResumeContainer, ResumeLink, ResumeText, ExpirienceItem, ExpirienceTecnologies, ExpirienceItemTextBold, ExpirienceTitle, ProjectsContainer, ProjectItem, ProjectContent, ProjectTitle } from "./styledComponents";

export default class Body extends React.Component {
    render(){
        return(
            <BodyContainer>
                <ResumeContainer>
                    <ResumeText>I am a 3D application developer with 4 years of experience, who is passionate about technology and its applications, particularly in the field of gaming. I have worked on a range of solutions and have experience using game engines such as Unreal, Unity, Godot, BabylonJS, and ThreeJS. My journey began in assistive technologies at Labiras Laboratory, and I currently work as an Unreal Developer at +A Educação-Imersys. I enjoy working collaboratively in groups to solve problems and learn new ways of developing both professionally and personally.</ResumeText>
                    <LinkContainer>
                    <ResumeText>My full resume:</ResumeText>
                    <ResumeLink href="https://drive.google.com/file/d/1fldlnrjDDyC3eQXH6F2d0qAME0LweRv2/view?usp=sharing">Resume</ResumeLink>
                    </LinkContainer>
                </ResumeContainer>
                <ExperiencesContainer>
                    <ExpirienceTitle>
                        EXPERIENCE:
                    </ExpirienceTitle>
                    <ExpirienceItem>
                        <ExpirienceLabelItem>
                            <ExpirienceItemText>August 2022 - Moment -</ExpirienceItemText>
                            <ExpirienceItemText>Unreal Developer at +A Educação-Imersys</ExpirienceItemText>
                        </ExpirienceLabelItem>
                        <ExpirienceItemText>Tecnologies used: </ExpirienceItemText>
                        <ExpirienceTecnologies>
                            <ExpirienceItemTextBold>Unreal</ExpirienceItemTextBold>
                        </ExpirienceTecnologies>
                    </ExpirienceItem>
                    <ExpirienceItem>
                        <ExpirienceLabelItem>
                            <ExpirienceItemText>February 2020 - August 2022 - </ExpirienceItemText>
                            <ExpirienceItemText>Unreal Developer at Xsensors</ExpirienceItemText>
                        </ExpirienceLabelItem>
                        <ExpirienceItemText>Tecnologies used: </ExpirienceItemText>
                        <ExpirienceTecnologies>
                            <ExpirienceItemTextBold>Unreal</ExpirienceItemTextBold>
                            <ExpirienceItemTextBold>Unity</ExpirienceItemTextBold>
                            <ExpirienceItemTextBold>Godot</ExpirienceItemTextBold>
                            <ExpirienceItemTextBold>Three.js</ExpirienceItemTextBold>
                            <ExpirienceItemTextBold>Babylon.js</ExpirienceItemTextBold>
                            <ExpirienceItemTextBold>React</ExpirienceItemTextBold>
                        </ExpirienceTecnologies>
                    </ExpirienceItem>
                </ExperiencesContainer>
                <ProjectsContainer>
                    <ProjectItem>
                        <img src="https://i.imgur.com/6Z4X6ZB.png" />
                        <ProjectContent>
                            <ProjectTitle>Projeto X</ProjectTitle>
                            <ProjectContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet fringilla enim. Donec convallis ex sit amet sem tristique, eu suscipit mauris placerat. Suspendisse ultricies nunc quis ex fringilla venenatis. Proin eget nunc ut libero rhoncus ultrices. Nunc commodo hendrerit sollicitudin. Aenean molestie libero non lorem commodo, ac tempus nunc scelerisque. Phasellus rutrum finibus diam, a hendrerit lacus lobortis a. Nullam tincidunt, arcu nec maximus euismod, felis lectus convallis dui, accumsan finibus nunc tellus ac augue. Quisque risus felis, maximus nec libero sed, placerat fermentum ipsum. Nulla facilisi. Maecenas iaculis magna vulputate, auctor velit nec, porta nulla. Aliquam vitae tempor turpis.
                            </ProjectContent>
                        </ProjectContent>
                    </ProjectItem>
                </ProjectsContainer>
            </BodyContainer>
        );
    }
}