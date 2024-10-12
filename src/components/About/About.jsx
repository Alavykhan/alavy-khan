import { useState, useTransition } from 'react';
import aboutImg from '/alavy-about.png'
import TabButton from '../TabButton/TabButton';


const TabData=[
    {
        title: 'Skills',
        id:'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>Next.JS</li>
                <li>React JS</li>
                <li>JavaScript</li>
                <li>Express JS</li>
                <li>Node.JS</li>
                <li>Tailwind CSS</li>
            </ul>
        )
    }, 
    {
        title: 'Education',
        id:'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Web Development Course by Programming Hero</li>
                <li>Bachelor of Business Administration </li>
            </ul>
        )

    }, 
    {
        title: 'Experience',
        id:'experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>Doing freelance job from from January 2022 onwards</li>
                <li>Worked as a communication manager in an advertising agency, from 2017-2021</li>
            </ul>
        )
    }, 
]



const About = () => {


    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition (()=>{
            setTab(id);
        })
    }


    return (
        <section id='about' className="bg-zinc-950 py-10 md:grid md:grid-cols-2 gap-8 lg:pt-24 text-white">
            <div className='lg:ml-40 p-4'>
                <img className='rounded-xl' src={aboutImg} width={600} height={500} alt='about me image' />
            </div>
            <div className='lg:mr-40 p-4'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base md:text-xl text-justify'>I'm a passionate and creative Frontend Developer with a knack for turning design concepts into seamless, interactive web experiences. My journey in the world of coding began with a fascination for blending aesthetics and functionality. Over a year, I've honed my skills in crafting elegant and user-centric websites that look great and provide exceptional user experiences.</p>
                <div className='flex flex-row mt-8'>
                        <TabButton selectTab={()=>handleTabChange('skills')} active= {tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={()=>handleTabChange('education')} active= {tab === "education"}>
                            {" "}
                            Eduction{" "}
                        </TabButton>
                        <TabButton selectTab={()=>handleTabChange('experience')} active= {tab === "experience"}>
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {
                            TabData.find((t)=>t.id === tab).content
                        }
                    </div>
            </div>
        </section>
    );
};

export default About;