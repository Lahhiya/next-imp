import CardContent from "./CardContent";

export default function SkillsSection(){
    return (
      <section className="container-lg max-w-full h-screen flex flex-col justify-center align-middle mt-10">
        <div className="flex justify-center">
            <h1 className="flex justify-between gap-2 text-4xl">
            Skills :
            </h1>
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <CardContent />
                <CardContent />
                <CardContent />
            </div>
        </div>
      </section>
    );
}