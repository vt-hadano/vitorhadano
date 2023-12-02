import GradientBg from "./GradientBg/GradientBg";
import SectionTitle from "./SectionTitle";

export default function Projetos() {
    return (
        <div className="w-full flex flex-col gap-16">
            <SectionTitle>Projetos</SectionTitle>
            <div className="h-64 mx-16">
                <GradientBg extraClass="shadow-xl rounded-2xl">
                    <div className="px-8 py-4 rounded-full bg-white-100 shadow-lg relative z-40"><h3 className="font-medium text-lg"><span className="font-montserrat">E</span>M BREVE</h3></div>
                </GradientBg>
            </div>
        </div>
    );
}