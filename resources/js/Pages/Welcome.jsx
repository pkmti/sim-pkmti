import { Link, Head } from '@inertiajs/react';
import DarkMode from '@/Components/darkMode';
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { MapPinIcon, CalendarDaysIcon, BookmarkSquareIcon, ArrowLongRightIcon, ArrowLongLeftIcon, CalendarIcon, ArrowLongDownIcon,
    ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Accordion from '@/Components/Accordion';


export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="PKM TI" />
            <nav className="container navbar bg-white shadow-md fixed sm:px-12 z-10">
                <div className="navbar-start">
                    <a href='#' className="cursor-pointer w-14">
                        <img src="/images/Logo-PKM-TI.png" alt="" />
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

                    <DarkMode />

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
                                className="font-medium bg-primary px-6 py-2 rounded-md text-white hover:text-white hover:bg-blue-lagoon dark:text-gray-400 dark:hover:text-white transition-all duration-300"
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
            </nav>

            <div className="flex pt-28 container">
                <main>
                    <div className='relative w-full'>
                        <div className='flex flex-row gap-6 items-center justify-between sm:px-12 w-full'>
                            <div className='flex flex-col w-full'>
                                <span className='uppercase font-medium md:text-base sm:text-lg mb-1 text-blue-lagoon'>Dunia Baru Bersama PKM</span>
                                <h3 className='capitalize text-secondary leading-19 font-black lg:text-8xl w-full'>Berkarya Tanpa Batas Selamat Datang di dunia PKM</h3>
                                <p className='text-xs sm:text-sm mt-3 font-light capitalize w-9/12'>Selamat datang di Pangkalan Kreativitas Mahasiswa (PKM), tempat di mana inovasi bertemu dengan inspirasi. Jelajahi potensi tak terbatas ide-ide kreatif, riset terdepan, dan solusi revolusioner. Bersama PKM, kita bukan hanya mengamati perubahan, tapi menjadi agen perubahannya.</p>
                                <div className='mt-3 w-64'>
                                    <button className="bg-primary hover:bg-blue-lagoon text-white btn sm:btn-xs md:btn-sm lg:btn-md"> <BookOpenIcon className='w-5 h-5' /> Buku Panduan</button>
                                </div>
                            </div>
                            <div class="flex justify-center w-full h-full">
                                <div class="relative w-full min-h-full">
                                    <div class="transform rotate-y-45 translate-x-7 rounded-bl-3xl rounded-tr-3xl translate-y-8 absolute inset-0 bg-primary"></div>
                                    <img src="images/gedung-TI.jpg" class="object-contain hover:brightness-75 rounded-bl-3xl rounded-tr-3xl shadow-lg transform rotate-y-2" alt="Gedung Teknologi Informasi" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* important date section */}
                    <div className='flex flex-row w-full justify-center items-center mt-32'>
                        <div className='flex flex-row gap-4 justify-between items-start bg-slate-200 shadow-2xl px-6 py-6 rounded-lg'>
                            <div className='flex flex-row gap-4 pr-10'>
                                <BookmarkSquareIcon className='w-6 h-6 font-extrabold' />
                                <div className='block'>
                                    <span className='capitalize text-gray-400 font-normal text-sm md:text-base'>
                                        Agenda Acara
                                    </span>

                                    <p className='text-base md:text-sm font-light'>
                                        Pembukaan PKM-TI 2024
                                    </p>
                                </div>
                            </div>

                            <div className="divider divider-horizontal before:bg-black after:bg-black"></div>

                            <div className='flex flex-row gap-4'>
                                <CalendarDaysIcon className='w-6 h-6 font-extrabold' />
                                <div className='block'>
                                    <span className='capitalize text-gray-400 font-normal text-sm md:text-base'>
                                        Date
                                    </span>

                                    <p className='text-base md:text-sm font-light'>
                                        Minggu, 4 Februari 2024
                                    </p>
                                </div>
                            </div>

                            <div className="divider divider-horizontal before:bg-black after:bg-black"></div>


                            <div className='flex flex-row gap-4'>
                                <MapPinIcon className='w-6 h-6 font-extrabold' />

                                <div className='block'>
                                    <span className='capitalize text-gray-400 font-normal text-sm md:text-base'>
                                        Lokasi Acara
                                    </span>

                                    <p className='text-base md:text-sm leading-[0.45rem] font-light w-11/12'>
                                        Gedung Teknologi Informasi Fakultas Teknik Universitas Udayana
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end imporatant date section */}

                    {/* section about us */}
                    <section id="about-us" className="mt-32 px-10 flex justify-center align-center space-x-10">
                        <div className="sm:w-1/2 overflow-hidden">
                            <img src="/images/pkm-ti-2023.jpg" className="mx-auto w-[450px] h-[450px] rounded-tr-3xl rounded-bl-3xl shadow-[-35px_35px_0_0_#0D79B9]" alt="" />
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
                                <ArrowLongDownIcon class="w-6 h-6 mr-3 animate-bounce" />
                                scroll down
                            </a>
                        </div>
                    </section>
                    {/* end about us section */}

                    {/* pkm topic section */}
                    <section id="pkm-topik" className="p-10 mt-20">
                        <div className="relative">
                            <div className="relative z-[1] h-fit pb-40 w-full rounded-3xl flex flex-col justify-start items-center overflow-hidden p-10 bg-[url('images/pkm-ti-2023-pembukaan.jpg')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-secondary before:to-blue-500 before:opacity-75 before:-z-[1]">
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
                            </div>
                            <div className="relative -mt-32 z-[5] flex justify-center space-x-4">
                                <div className="block max-w-[250px] text-center p-4 bg-white rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-2xl text-primary font-bold mb-2">PKM-KC</h3>
                                    <p className="text-center text-slate-500">Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya.</p>
                                </div>
                                <div className="block max-w-[250px] text-center p-4 bg-white rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-2xl text-primary font-bold mb-2">PKM-KC</h3>
                                    <p className="text-center text-slate-500">Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya.</p>
                                </div>
                                <div className="block max-w-[250px] text-center p-4 bg-white rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-2xl text-primary font-bold mb-2">PKM-KC</h3>
                                    <p className="text-center text-slate-500">Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya.</p>
                                </div>
                                <div className="block max-w-[250px] text-center p-4 bg-white rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-2xl text-primary font-bold mb-2">PKM-KC</h3>
                                    <p className="text-center text-slate-500">Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end pkm topic section */}

                    {/*  speakers section */}
                    <section className='flex flex-row w-full gap-6 sm:px-12 mt-20'>
                        <div className='grid md:grid-cols-3 items-center gap-5'>
                            <div className='relative'>
                                <img src='https://satujam.com/wp-content/uploads/2017/01/1-1.jpg' className='rounded-lg h-72 w-64 object-fill cursor-pointer hover:w-72'
                                />
                                <div className='absolute inset-0 backdrop-blur-sm cursor-pointer bg-linear-blue opacity-0 hover:opacity-75 rounded-lg transition-opacity flex justify-center items-center'>
                                    <div className='px-4'>
                                        <p className='text-white opacity-100 text-lg font-bold leading-5'>“Tips and Trik Membuat Proposal PKM Lolos Pimnas”</p>
                                        <div className="divider before:bg-white after:bg-white"></div>
                                        <div className='flex flex-col'>
                                            <span className='font-bold capitalize text-sm text-white'>Bayu Rizkyyy</span>
                                            <p className='font-light text-sm md:text-xs text-white'>Koordinator Sie Ilmiah PKM TI 2023</p>
                                        </div>

                                        <div className='flex flex-col mt-4 gap-3'>
                                            <div className='flex flex-row gap-4 items-center'>
                                                <CalendarIcon className='w-4 h-4 text-white' />
                                                <p className='text-xs font-thin capitalize text-white'>Senin, 4 Februari 2024</p>
                                            </div>

                                            <div className='flex flex-row gap-4 items-center'>
                                                <MapPinIcon className='w-8 h-8 text-white' />
                                                <p className='text-xs font-thin capitalize text-white'>Gedung Teknologi Informasi, Fakultas Teknik Universitas Udayana</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <img src='https://mundomaya.travel/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/08/Gunung-Bromo.jpg.webp' className='rounded-lg h-72 w-64 object-fill cursor-pointer hover:w-72' />
                                <div className='absolute inset-0 backdrop-blur-sm cursor-pointer bg-linear-blue opacity-0 hover:opacity-75 rounded-lg transition-opacity flex justify-center items-center'>
                                    <div className='px-4'>
                                        <p className='text-white opacity-100 text-lg font-bold leading-5'>“Tips and Trik Membuat Proposal PKM Lolos Pimnas”</p>
                                        <div className="divider before:bg-white after:bg-white"></div>
                                        <div className='flex flex-col'>
                                            <span className='font-bold text-sm capitalize text-white'>Bayu Rizkyyy</span>
                                            <p className='font-light text-sm md:text-xs text-white'>Koordinator Sie Ilmiah PKM TI 2023</p>
                                        </div>

                                        <div className='flex flex-col mt-4 gap-3'>
                                            <div className='flex flex-row gap-4 items-center'>
                                                <CalendarIcon className='w-4 h-4 text-white' />
                                                <p className='text-xs font-thin capitalize text-white'>Senin, 4 Februari 2024</p>
                                            </div>

                                            <div className='flex flex-row gap-4 items-center'>
                                                <MapPinIcon className='w-8 h-8 text-white' />
                                                <p className='text-xs font-thin capitalize text-white'>Gedung Teknologi Informasi, Fakultas Teknik Universitas Udayana</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3Xnk9H92N756VtYCg3aNC47ZJVi78Y0gGy4Op-qz7Xu1_87cuQwj9zNPa23IJnpaSZ_GJxxpdytnNsxTJNSu9e3asNPSg6Sj4Si9KwbCe9qPVQP3AQz8YiDbR4LUM7TnnErWZ-UjKrGwI/s640/Gunung-Bromo-Jawa-timur.jpg' className='rounded-lg h-72 w-64 hover:w-72 object-fill cursor-pointer z-10' />
                                <div className='absolute inset-0 backdrop-blur-sm cursor-pointer bg-linear-blue opacity-0 hover:opacity-75 rounded-lg transition-opacity flex justify-center items-center'>
                                    <div className='px-4'>
                                        <p className='text-white opacity-100 text-lg font-bold leading-5'>“Tips and Trik Membuat Proposal PKM Lolos Pimnas”</p>
                                        <div className="divider before:bg-white after:bg-white"></div>
                                        <div className='flex flex-col'>
                                            <span className='font-bold text-sm text-white'>Bayu Rizkyyy</span>
                                            <p className='font-light text-sm md:text-xs text-white'>Koordinator Sie Ilmiah PKM TI 2023</p>
                                        </div>

                                        <div className='flex flex-col mt-4 gap-3'>
                                            <div className='flex flex-row gap-4 items-center'>
                                                <CalendarIcon className='w-4 h-4 text-white' />
                                                <p className='text-xs font-thin text-white'>Senin, 4 Februari 2024</p>
                                            </div>

                                            <div className='flex flex-row gap-4 items-center'>
                                                <MapPinIcon className='w-8 h-8 text-white' />
                                                <p className='text-xs font-thin text-white'>Gedung Teknologi Informasi, Fakultas Teknik Universitas Udayana</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col w-5/12'>
                            <span className='uppercase text-sm md:text-base text-primary font-medium mb-1'>Pembicara</span>
                            <h3 className='capitalize text-2xl md:text-4xl font-extrabold text-secondary leading-11'>Bertemu dengan mereka yang sudah profesional</h3>
                            <p className='text-sm md:text-xs font-light text-gray-500 mt-3 capitalize w-4/5'>
                                Selamatkan tempat di barisan terdepan karena kami mempersembahkan Narasumber yang luar biasa di acara spesial PKM kami! Bersiaplah untuk terinspirasi, berinteraksi, dan mengambil momentum positif dari pandangan hidup yang penuh semangat. Tunggu apa lagi? Bergabunglah dengan kami untuk pengalaman yang mengesankan! 🚀
                            </p>

                            <div className='flex flex-row gap-4 flex-shrink-0 mt-5'>
                                <button className="btn btn-sm shadow-2xl rounded-lg"><ArrowLongLeftIcon className='w-7 h-7 font-black' /></button>
                                <button className="btn btn-sm shadow-2xl shadow-slate-200 rounded-lg"><ArrowLongRightIcon className='w-7 h-7 font-black' /></button>
                            </div>
                        </div>
                    </section>

                    {/* Suhu section */}
                    <section className='flex flex-col w-full py-4 mt-28 sm:px-12'>
                        <div className="relative z-[1] h-fit pb-40 w-full rounded-3xl flex flex-col justify-start items-center overflow-hidden p-10 bg-[url('images/pkm-ti-2023-pembukaan.jpg')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-secondary before:to-blue-500 before:opacity-75 before:-z-[1]">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="inline h-1 w-32 bg-white rounded-full"></span>
                                <span className="inline h-2 w-2 bg-white rounded-full"></span>
                                <p className="uppercase font-semibold text-white px-6">Para Suhu Berbicara</p>
                                <span className="inline h-2 w-2 bg-white rounded-full"></span>
                                <span className="inline h-1 w-32 bg-white rounded-full"></span>
                            </div>
                            <h2 className="capitalize text-5xl font-bold text-white mb-2">Bergabung Dengan Mereka</h2>
                            <p className="text-slate-200 text-center">
                                Jelajahi kategori-kategori sub topik PKM kami dan temukan passion yang menggetarkan hati Anda. Mulai dari keberlanjutan hingga teknologi, kesehatan hingga seni, kami mengundang Anda untuk meresapi setiap sub topik dengan penuh antusiasme. Temukan tempat Anda di dunia PKM, di mana setiap kategori adalah panggung bagi idealisasi dan perubahan.
                            </p>
                        </div>

                        <div className="relative -mt-32 z-[5] flex justify-center space-x-4">
                            <div className="block max-w-[40rem] text-center p-4 bg-white/70 backdrop-blur-md backdrop-brightness-150 rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className='w-full flex justify-center items-center mb-4'>
                                    <img src='images/emot-bayu.png?v=1' className='max-w-[10rem] rounded-full items-center object-contain object-center bg-no-repeat border-2 border-primary' />
                                </div>
                                <p className="text-center text-slate-500 mb-2">“ Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya. “</p>
                                <h3 className="text-xl text-primary font-bold mb-2">Bayu</h3>
                                <p className='capitalize text-slate-400 '>mahasiswa aktif teknologi informasi</p>

                            </div>
                        </div>

                        <div className='flex flex-row gap-4 flex-shrink-0 mt-5 items-center justify-center'>
                            <button className="btn btn-sm shadow-2xl rounded-lg"><ArrowLongLeftIcon className='w-6 h-6 font-black' /></button>
                            <button className="shadow-xl rounded-md px-3 py-2"><ArrowLongRightIcon className='w-6 h-6 font-black' /></button>
                        </div>

                    {/* FAQ section */}
                        <section id='#FaQ' className='block w-full mt-20 py-16'>
                            <div className='flex flex-col w-full'>
                                <div className='px-8 lg:px-10'>
                                    <span className='uppercase text-sm font-semibold md:text-base text-primary'>MAlu Bertanya nanti gatau</span>
                                    <h3 className='capitalize font-black text-5xl mt-2 text-linear-blue'>Frequently Asked Questions</h3>
                                    <p className='capitalize text-slate-500 mt-2 w-4/5'>Pertanyaan umum mengenai Kelompok Studi Tech Artisan. Jika masih ada yang ingin ditanyakan, kalian bisa hubungi kontak dibawah ini.</p>
                                </div>


                            </div>

                            <div className='flex flex-row w-full mt-10 justify-between items-center'>
                                <div className='mt-5 items-start'>
                                    <img src='images/image-FAQ.png?version=1.0' className='max-h-[450px]' />
                                </div>

                                <div className='md:w-6/12 flex flex-col gap-4'>
                                    <Accordion title="Siapa yang boleh ikut PKM TI?" answer="Khusus untuk mahasiswa Fakultas Teknik Universitas Udayana saja yang boleh bergabung dalam Kelompok Studi TecArt"/>

                                    <Accordion title="Emang Wajib Kak?" answer="Pakek nanya wajib lah 🥶"/>
                                    <Accordion title="Kalo menang dapet PC Gaming gak?" answer="Mang eak Dapet hadiah Pc 😊🥶"/>
                                    <Accordion title="Kalo pake jasa joki gapapa kan kak?" answer="yang bener aje rugi dong !"/>


                                </div>
                            </div>

                        </section>


                    </section>
                    
                    {/* Contact section */}
                    <section className='flex flex-col justify-center  w-full text-center items-center sm:px-12'>
                        <div className='mt-4 block justify-center  w-full text-center items-center'>
                            <h3 className='capitalize text-5xl font-black flex gap-4 justify-center flex-row items-center'><span className='text-linear-blue'>Find More</span> <span className='text-blue-lagoon'>about us</span></h3>

                            <div className='flex w-full items-center text-center justify-center'>
                                <p className='font-light text-sm md:text-base text-slate-500 text-center mt-2 w-full md:w-2/4 '>
                                Dapatkan info terkini tentang kegiatan yang diselenggarakan Technology Artisan pada Official Accounts Technology Artisan. Ikuti terus perkembangannya !
                                </p>
                            </div>

                            <div className='flex flex-row justify-center items-center relative w-full gap-4 mt-5'>
                                    <button className='bg-white-blue rounded-lg px-4 py-2 flex flex-row gap-3 items-center'>
                                        <ChatBubbleLeftEllipsisIcon className='w-5 h-5 text-primary'/>
                                        <span className='text-linear-blue lowercase font-medium text-sm'>hmti.udayana</span>
                                    </button>

                                    <button className='bg-white-blue rounded-lg px-4 py-2 flex flex-row gap-3 items-center'>
                                        <ChatBubbleLeftEllipsisIcon className='w-5 h-5 text-primary'/>
                                        <span className='text-linear-blue lowercase font-medium text-sm'>hmti.udayana</span>
                                    </button>

                                    <button className='bg-white-blue rounded-lg px-4 py-2 flex flex-row gap-3 items-center'>
                                        <ChatBubbleLeftEllipsisIcon className='w-5 h-5 text-primary'/>
                                        <span className='text-linear-blue lowercase font-medium text-sm'>hmti.udayana</span>
                                    </button>

                                    <button className='bg-white-blue rounded-lg px-4 py-2 flex flex-row gap-3 items-center'>
                                        <ChatBubbleLeftEllipsisIcon className='w-5 h-5 text-primary'/>
                                        <span className='text-linear-blue lowercase font-medium text-sm'>hmti.udayana</span>
                                    </button>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </>
    );
}
