import CardContent from "./CardContent";
import { cardItems } from "../types/CardContent";

export default function SkillsSection() {
    const items: cardItems[] = [
        {
        id: 1,
        judul: "Workshop Kreativitas Digital",
        deskripsi:
            "Sesi interaktif untuk mengeksplorasi ide-ide kreatif menggunakan teknologi digital. Peserta akan belajar membuat konten visual sederhana dan memahami tren desain modern.",
        link: "/",
        icon: "activity",
        },
        {
        id: 2,
        judul: "Pelatihan Public Speaking",
        deskripsi:
            "Program ini dirancang untuk meningkatkan kepercayaan diri berbicara di depan umum. Peserta akan berlatih teknik vokal, bahasa tubuh, dan cara menyusun presentasi yang menarik.",
        link: "/",
        icon: "speech",
        },
        {
        id: 3,
        judul: "Kompetisi Coding Dasar",
        deskripsi:
            "Ajang kompetisi bagi pemula yang ingin mengasah kemampuan logika dan pemrograman. Peserta akan diberikan tantangan sederhana untuk menyelesaikan masalah menggunakan bahasa pemrograman populer.",
        link: "/",
        icon: "laptop-minimal",
        },
    ];

    return (
        <section className="container-lg max-w-full h-screen flex flex-col justify-center align-middle mt-10">
            <div className="flex justify-center">
            <h1 className="flex justify-between gap-2 text-4xl">Activities :</h1>
            </div>
            <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {items.map((cItem) => (
                <CardContent key={cItem.id} item={cItem} />
                ))}
            </div>
            </div>
        </section>
    );
}
