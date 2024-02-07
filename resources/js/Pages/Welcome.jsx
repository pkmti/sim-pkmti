import { Link, Head } from '@inertiajs/react';
import DarkMode from '@/Components/darkMode';
import CardTopic from '@/Components/CardTopic';
import {ArrowLongDownIcon} from '@heroicons/react/24/solid';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="PKM TI" />
            <div className="navbar bg-white shadow-md fixed sm:px-10 z-10">
                <div className="navbar-start">
                    <a href='#' className="cursor-pointer w-14">
                        <img src="/images/Logo PKM TI.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#about-us'>About Us</a>
                        </li>
                        <li>
                            <a href='#'>FAQ</a>
                        </li>
                        <li>
                            <a href='#'>Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end space-x-4">

                    <DarkMode/>
                    
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-medium bg-primary px-6 py-2 rounded-md text-white hover:text-white hover:bg-sky-600 dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="font-medium px-6 py-2 rounded-md text-primary outline outline-primary outline-2 -outline-offset-2 hover:text-white hover:bg-primary dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* hero section */}
            <section className='min-h-screen'>

            </section>

            {/* section about us */}
            <section id="about-us" className="min-h-screen px-10 flex justify-center align-center space-x-10">
                <div className="sm:w-1/2 overflow-hidden">
                    <img src="/images/pkm ti 2023.jpg" className="mx-auto w-[450px] h-[450px] rounded-tr-[60px] rounded-bl-[60px] shadow-[-35px_35px_0_0_#0D79B9]" alt="" />
                </div>
                <div className="sm:w-1/2">
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="inline h-1 w-32 bg-secondary rounded-full"></span>
                        <span className="inline h-2 w-2 bg-secondary rounded-full"></span>
                        <span className="inline h-1 w-52 bg-secondary rounded-full"></span>
                    </div>
                    <h2 className="text-5xl font-bold text-secondary mb-2">Semangat Berkarya Menciptakan Ide-ide Kreatif Untuk Kemajuan Indonesia</h2>
                    <p>
                        <span className="block font-semibold leading-8">apa sih itu PKM? Emang Penting?</span>
                        Pelatihan PKM TI 2023 adalah salah satu program kerja Himpunan MahasiswaTeknologi Informasi(HMTI) yang bertujuan untuk memberikan wadah bagi mahasiswa untukmengetahui dan menambah pengetahuan mengenai PKM. Pelatihan PKM tahun 2023mengusung tema “Gelorakan Mahasiswa Teknologi Informasi yang Aktif, Kreatif danInovatif”. Dengan adanya kegiatan ini diharapkan mahasiswa Teknologi Informasidapat mengembangkan kompetensi dan semangat berkarya untuk menciptakan ide-idekreatif kemudian nantinya dapat disusun menjadi proposal PKM yang dapatbermanfaat bagi masyarakat luas. 
                    </p>
                    <a href="#pkm-topik" className="flex mt-4 text-sm text-slate-500 cursor-pointer">
                        <ArrowLongDownIcon class="w-6 h-6 mr-3 animate-bounce"/>
                        scroll down
                    </a>
                </div>
            </section>
            <section id="pkm-topik" className="min-h-screen p-10">
                <div className="bg-blue-400 h-[400px] w-full rounded-3xl flex flex-col justify-start items-center p-10">
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="inline h-1 w-32 bg-white rounded-full"></span>
                        <span className="inline h-2 w-2 bg-white rounded-full"></span>
                        <p className="uppercase font-semibold text-white px-6">Eksplorasi topik pkm</p>
                        <span className="inline h-2 w-2 bg-white rounded-full"></span>
                        <span className="inline h-1 w-32 bg-white rounded-full"></span>
                    </div>
                    <h2 className="capitalize text-5xl font-bold text-white mb-2">Kembangkan Ide Cemerlang Anda</h2>
                    <p className="text-slate-200 text-center">
                    Jelajahi kategori-kategori sub topik PKM kami dan temukan passion yang menggetarkan hati Anda. Mulai dari keberlanjutan hingga teknologi, kesehatan hingga seni, kami mengundang Anda untuk meresapi setiap sub topik dengan penuh antusiasme. Temukan tempat Anda di dunia PKM, di mana setiap kategori adalah panggung bagi idealisasi dan perubahan.
                    </p>
                    <div className="mt-8 flex space-x-6">
                        <CardTopic
                        title="PKM-KC"
                        description="Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya."
                        />
                        <CardTopic
                        title="PKM-PM"
                        description="Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya."
                        />
                        <CardTopic
                        title="PKM-K"
                        description="Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya."
                        />
                        <CardTopic
                        title="PKM-PI"
                        description="Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya."
                        />
                    </div>
                </div>
            </section>

            {/* section speakers */}
            <section id="speakers" className="min-h-screen">

            </section>
        </>
    );
}
