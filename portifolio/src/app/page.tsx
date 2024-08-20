import Sidebar from "@/components/Sidebar";
import AboutMe from "@/components/AboutMe";

export default function Home() {
    return( 
        <div className="container mx-auto mt-8 px-4 overflow-hidden"> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24">
                <div>
                    <Sidebar/>
                </div>
                <div className="col-span-2">
                    <AboutMe/>
                </div>
            </div>
        </div>
    );
}
