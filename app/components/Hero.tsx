import Button from "./Button";
import GitIcon from "./icon/GitIcon";
import InstagramIcon from "./icon/InstagramIcon";
import LinkedinSquareIcon from "./icon/LinkedinSquareIcon";

export default function Hero() {
    return (
        <div className="pt-20 h-screen">
            <div className="justify-end items-center h-full w-full pr-40 flex font-altregular text-black-100">
                <div className="w-[32rem] flex-col flex gap-4">
                    <div>
                        <p className="text-3xl">Olá! <span className="font-montserrat">E</span>u sou</p>
                        <h1 className="font-extrabold text-8xl tracking-[0.2em] leading-none">Vitor</h1>
                        <h1 className="font-extrabold text-8xl tracking-[0.2em] leading-none">Hadano</h1>
                    </div>
                    <div className="flex flex-row items-center gap-8">
                        <div className="w-full h-0.5 bg-black-100 rounded-full"></div>
                        <div className="bg-cyan rounded-full p-2 flex justify-center items-center drop-shadow-sm hover:bg-light-cyan transition-all focus:bg-white-100 focus:border-4 focus:border-cyan ">
                            <a href="https://www.linkedin.com/in/vitorhadano/" target="_blank" rel="noopener noreferrer">
                                <LinkedinSquareIcon parentClassName="" className="h-4 w-4 fill-white-100 focus:fill-cyan" />
                            </a>
                        </div>
                        <div className="bg-pink rounded-full p-2 flex justify-center items-center drop-shadow-sm hover:bg-light-pink transition-all focus:bg-white-100 focus:border-4 focus:border-pink">
                            <a href="https://www.linkedin.com/in/vitorhadano/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon parentClassName="" className="h-4 w-4 fill-white-100 focus:fill-pink" />
                            </a>
                        </div>
                        <div className="bg-purple rounded-full p-2 flex justify-center items-center drop-shadow-sm hover:bg-light-purple transition-all focus:bg-white-100 focus:border-4 focus:border-purple ">
                            <a href="https://www.linkedin.com/in/vitorhadano/" target="_blank" rel="noopener noreferrer">
                                <GitIcon parentClassName="" className="h-4 w-4 fill-white-100 focus:fill-purple" />
                            </a>
                        </div>
                        <div className="w-full h-0.5 bg-black-100 rounded-full"></div>
                    </div>
                    <p className="text-3xl w-full text-justify">Que tal melhorar a experiência do seu site com a minha ajuda?</p>
                    <a href="#form-contato">
                        <Button className="drop-shadow-lg py-2 w-full bg-pink rounded-full text-3xl text-white-100 hover:bg-light-pink transition-all focus:bg-white-100 focus:border-4 focus:border-pink focus:text-pink">Vamos lá!</Button>
                    </a>

                </div>
            </div>
        </div>
    );
}