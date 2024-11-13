import { Container } from "../../components/container";
import heroImg from '../../assets/heroImg-2.png'


export function Home(){
    return (
        <Container>
            <div className="w-full h-screen flex items-center justify-center"
           
            >
                <div className="w-full h-full max-w-5xl mx-auto flex items-center flex-col gap-36 md:gap-8 md:h-4/5 md:flex-row"
                >
                    <div className=" w-72 h-72  md:w-96 md:h-96 overflow-hidden border-2 rounded-full flex items-center justify-center mt-20">
                        <img
                        className="w-full h-full object-contain rounded-full"
                        src={heroImg} alt="Photo of Vitor Torquato" />
                    </div>

                    <div className="flex flex-col items-center gap-4 justify-center">
                        <h1 className="text-4xl md:text-7xl text-slate-100">VITOR TORQUATO</h1>
                        <h2 className="text-2xl md:text-4xl text-center text-slate-500">I'm a Frontend developer</h2>
                    </div>

                </div>
            </div>

            <section className="w-full mt-8 md:mt-20">
                <h1 className="text-3xl text-center text-slate-100 mb-8">About me</h1>

                <p className="text-slate-100 text-center mb-7">Hey there! I’m Vitor Torquato de Sousa, a front-end developer with just over a year in the game. I’m all about creating clean, user-friendly interfaces that don’t just look good but also bring out the real vibe of the brand.</p>
                
                <p className="text-slate-100 text-center mb-7">
                When I’m not deep in code, you’ll probably find me out on the field or pushing my limits in some sport. I bring that same energy to my work—always ready to take on new challenges and keep leveling up. Let’s connect and build something awesome!</p>

            </section>

            
            
        </Container>
    )
}