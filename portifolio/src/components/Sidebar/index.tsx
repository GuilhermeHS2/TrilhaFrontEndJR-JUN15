import Image from "next/image";
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";



export default function Sidebar() {
    return (
        <div>
            <div className="flex flex-col gap-6 overflow-hidden rounded-2xl border border-zinc-600 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-red-600">Logo</h1>
                    <p className="text-zinc-200">Dev Junior</p>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                    src="/images/MinhaFoto.jpeg"
                    width={450}
                    height={450}
                    alt="Foto de perfil"
                />
                </div>


            <div className="flex flex-col items-center gap-8 text-zinc-200">

                <p className="flex items-center gap-1">
                    <MdEmail /> <span>guilhermehsantos00@gmail.com</span>
                </p>



                <ul>
                    <li><a href="https://github.com/GuilhermeHS2" className="flex items-center gap-1"> 
                                <FaGithub />  
                                    <span className="text-blue-500">GitHub</span>
                                
                        </a>
                    </li>
                    <li><a href="https://www.instagram.com/guilhermexx28/" className="flex items-center gap-1">
                            <FaInstagram /> 
                                <span className="text-pink-500">Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}