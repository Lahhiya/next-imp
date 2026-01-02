import dynamicIconImports from "lucide-react/dynamicIconImports";

export type cardItems = {
    id: number;
    judul: string;
    deskripsi: string;
    link: string;
    icon: keyof typeof dynamicIconImports;
};
