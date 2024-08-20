import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";



export default function Sidebar() {
    return (
        <div>
            <div className="flex flex-col gap-6 overflow-hidden rounded-2xl border border-[#e53939] p-4">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-[#e53939]">Logo</h1>
                    <p className="text-[#e53939]">Dev Junior</p>
                </div>

                <div className="max-w-md overflow-hidden rounded-2xl shadow-lg ">
                <Image
                    src="/images/MinhaFoto.jpeg"
                    width={450}
                    height={450}
                    alt="Foto de perfil"
                />
                </div>


            <div className="flex flex-col items-center gap-8 text-[#e53939]">

                <p className="flex items-center gap-1">
                    <MdEmail /> <span>guilhermehsantos00@gmail.com</span>
                </p>



                <ul className="flex items-center gap-4">
                    <li>
                        <a href="https://github.com/GuilhermeHS2" className="flex h-16 w-16 items-center justify-center rounded-full border border-[#000000] transition-all  
                                hover:border-[#181717] hover:text-[#181717] hover:shadow-lg hover:shadow-[#181717]/40 "> 
                                <FaGithub size={32} />                              
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/guilhermexx28/" className="flex h-16 w-16 items-center justify-center rounded-full border border-[#000000] transition-all 
                                hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-[#000000] hover:shadow-lg hover:shadow-[#E1306C]/40">
                            <FaInstagram size={32} /> 
                                
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/guilhermehs2/" className="flex h-16 w-16 items-center justify-center rounded-full border border-[#000000] transition-all 
                                hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#000000] hover:shadow-lg hover:shadow-[#0A66C2]/40">
                            <FaLinkedin size={32} /> 
                                
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}