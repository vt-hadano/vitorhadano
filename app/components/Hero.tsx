import Button from "./Button";
import GitIcon from "./icon/GitIcon";
import InstagramIcon from "./icon/InstagramIcon";
import LinkedinSquareIcon from "./icon/LinkedinSquareIcon";

export default function Hero() {
    return (
        <div className="pt-20 h-screen">
            <div className="md:justify-end md:items-center items-end justify-center h-full w-full md:pr-40 pb-10 flex font-altregular text-black-100">
                <div className="md:w-[32rem] w-[16rem] flex-col flex md:gap-4 gap-2">
                    <div>
                        <p className="md:text-3xl text-xl">Olá! <span className="font-montserrat">E</span>u sou</p>
                        <h1 className="font-extrabold md:text-8xl text-5xl tracking-[0.2em] leading-none">Vitor</h1>
                        <h1 className="font-extrabold md:text-8xl text-5xl tracking-[0.2em] leading-none">Hadano</h1>
                    </div>
                    <div className="flex flex-row items-center md:gap-8 gap-4">
                        <div className="w-full h-0.5 bg-black-100 rounded-full"></div>
                        <div className="bg-cyan rounded-full md:p-2 p-1 flex justify-center items-center drop-shadow-sm hover:bg-light-cyan transition-all ">
                            <a href="https://www.linkedin.com/in/vitorhadano/" target="_blank" rel="noopener noreferrer">
                                <LinkedinSquareIcon parentClassName="" className="md:h-4 md:w-4 h-3 w-3 fill-white-100" />
                            </a>
                        </div>
                        <div className="bg-pink rounded-full md:p-2 p-1 flex justify-center items-center drop-shadow-sm hover:bg-light-pink transition-all">
                            <a href="https://www.linkedin.com/in/vitorhadano/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon parentClassName="" className="md:h-4 md:w-4 h-3 w-3 fill-white-100" />
                            </a>
                        </div>
                        <div className="bg-purple rounded-full md:p-2 p-1 flex justify-center items-center drop-shadow-sm hover:bg-light-purple transition-all ">
                            <a href="https://www.linkedin.com/in/vitorhadano/" target="_blank" rel="noopener noreferrer">
                                <GitIcon parentClassName="" className="md:h-4 md:w-4 h-3 w-3 fill-white-100" />
                            </a>
                        </div>
                        <div className="w-full h-0.5 bg-black-100 rounded-full"></div>
                    </div>
                    <p className="md:text-3xl text-sm w-full text-justify">Que tal melhorar a experiência do seu site com a minha ajuda?</p>
                    <a href="#form-contato">
                        <Button className="drop-shadow-lg md:py-2 py-1 w-full bg-pink rounded-full md:text-3xl text-md text-white-100 hover:bg-light-pink transition-all focus:bg-white-100 focus:border-4 focus:border-pink focus:text-pink">Vamos lá!</Button>
                    </a>

                </div>
            </div>
        </div>
    );
}