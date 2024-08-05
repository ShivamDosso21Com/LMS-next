import Image from "next/image";

export default function Topbar() {
    return (
        <div className="bg-white shadow-2xl w-full h-16 flex items-center fixed top-0 left-0 z-50">
            <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
        </div>
    );
}

