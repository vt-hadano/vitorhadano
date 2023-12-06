'use client'

import Button from "./Button";
import CustomInput from "./CustomInput/CustomInput";
import HandleSubmit from "./HandleEmail";

interface emailMessage {
    nome: string;
    email: string;
    tel: string;
    subject: string;
    content: string;
}

export default function Contatos() {

    return (
        <div className="h-screen w-full">
            <div className="md:justify-start md:items-center items-start justify-center h-full w-full md:pl-20 flex font-altregular md:pt-auto pt-10 text-black-100">
                <div className="md:w-1/3 w-[16rem] flex-col flex h-1/2 gap-2">
                    <CustomInput
                        label={"Nome"}
                        extraClasses={"bg-black-12 placeholder:text-black-50 focus:border-pink"}
                        name={"nome"}
                        type={"text"}
                        placeholder={"John Doe"}
                    />
                    <CustomInput
                        label={<p><span className="font-montserrat">E</span>-mail</p>}
                        extraClasses={"bg-black-12 placeholder:text-black-50 focus:border-pink"}
                        name={"email"}
                        type={"email"}
                        placeholder={"johndoe@example.com"}
                    >
                    </CustomInput>
                    <CustomInput
                        label={"Telefone"}
                        extraClasses={"bg-black-12 placeholder:text-black-50 focus:border-pink"}
                        name={"telefone"}
                        type={"tel"}
                        placeholder={"(99) 9 9999-9999"}
                    />
                    <CustomInput
                        label={"Assunto"}
                        extraClasses={"bg-black-12 placeholder:text-black-50 focus:border-pink"}
                        name={"assunto"}
                        type={"text"}
                        placeholder={"O que você quer fazer?"}
                    />
                    <CustomInput
                        label={"Descrição do Projeto"}
                        extraClasses={"bg-black-12 placeholder:text-black-50 focus:border-pink"}
                        name={"descProjeto"}
                        type={"textarea"}
                        placeholder={"Qual é o plano?"}
                    />
                    <Button className="drop-shadow-lg mt-4 md:py-2 py-1 w-full bg-pink rounded-full md:text-xl text-md text-white-100 hover:bg-light-pink transition-all focus:bg-black-5 focus:border-pink focus:text-pink" onClick={HandleSubmit}><span className="font-montserrat">E</span>nviar</Button>
                    {}
                </div>
            </div>
        </div>
    )
}