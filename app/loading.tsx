import LoadingIcon from "./components/LoadinIcon/LoadingIcon";

export default function loading() {
    return (
        <div className="h-full w-full flex items-center justify-center bg-white-100">
            <LoadingIcon />
        </div>
    );
}