import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function Tecnologias() {
    return (
        <div className="flex flex-col gap-16 py-16">
            <SectionTitle>
                Tecnologias
            </SectionTitle>
            <Image
                src="/img-16.png" alt={"Avatar de Vitor Hadano criando um aplicativo em um laboratório"}
                width={726}
                height={775}
                className="w-full"
            />
        </div>
    );
}