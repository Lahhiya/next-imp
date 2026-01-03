import dynamicIconImports from "lucide-react/dynamicIconImports";

export default interface CardTypes {
    id: number;
    judul: string;
    deskripsi: string;
    link: string;
    icon: keyof typeof dynamicIconImports;
    color : string;
};
