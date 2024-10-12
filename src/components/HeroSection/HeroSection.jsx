import { TypeAnimation } from 'react-type-animation';
import heroImg from '/alavy-khan-dev.png'
import { Link } from 'react-router-dom';
const pdf = 'http://alavykhan.com/resume.pdf'

const HeroSection = () => {
    const downloadFile = (url)=>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <div className="bg-zinc-950 grid grid-cols-1 md:grid-cols-2 items-center px-4  md:gap-20 py-4 md:py-16">
            <div id='hero' className='lg:ml-40'>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400'>Hello, I'm {" "}</span>
            <br />
            <TypeAnimation
                   sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Alavy Khan',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Frontend Developer',
                    1000,
                    'Software Developer',
                    1000,
                ]}
                wrapper="span"
                speed={5}
                repeat={Infinity}
                />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>I'm a passionate and creative Frontend Developer with a knack for turning design <br/>concepts into seamless, interactive web experiences.</p>
                    <div>
                    <Link to='https://www.upwork.com/freelancers/~01ce5a15fac94d482a' target="_blank"><button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-black bg-gradient-to-br from-white to-gray-300 text-black font-semibold hover:bg-slate-200'>Hire Me</button></Link>
                        
                        {/* <button onClick={()=>{downloadFile(pdf)}} className='px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-white to-gray-300 hover:bg-slate-800 text-white mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button> */}
                    </div>
            </div>
            <div className='lg:mr-40'>
                <img src={heroImg} className='lg:w-3/4 lg:ml-48' alt="" />
            </div>
        </div>
    );
};

export default HeroSection;