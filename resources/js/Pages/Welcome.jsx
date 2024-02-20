import { Link, Head } from '@inertiajs/react';
import { useEffect } from 'react';
import DarkMode from '@/Components/darkMode';
import { BookOpenIcon } from "@heroicons/react/24/outline";
import {
    MapPinIcon, CalendarDaysIcon, BookmarkSquareIcon, ArrowLongRightIcon, ArrowLongLeftIcon, CalendarIcon, ArrowLongDownIcon,
    ChatBubbleLeftEllipsisIcon
} from "@heroicons/react/24/solid";
import Accordion from '@/Components/Accordion';
// import { Carousel } from 'react-responsive-carousel';
import CustomCarousel from '@/Components/CustomCorausel';
import NavBar from '@/Components/NavBar';
import ScrollToTop from '@/Components/ScrollTop';
import SlickCarousel from '@/Components/SlickCarousel';

export default function Welcome({ auth}) {
    return (
        <>
            <Head title="PKM TI" />
            <NavBar />

            <div className="flex flex-col pt-28 overflow-y-hidden">
                <main className='px-6 sm:px-0'>
                    <div className='relative w-full'>
                        <div className='flex flex-col sm:flex-row gap-6 items-center justify-between sm:px-12 w-full'>
                            <div  className='flex flex-col w-full'>
                                <span className='uppercase font-medium sm:text-lg mb-1 text-blue-lagoon'>Dunia Baru Bersama PKM</span>
                                <h3 className='capitalize text-secondary leading-19 font-bold text-5xl lg:text-6xl w-full'>Berkarya Tanpa Batas Selamat Datang di dunia PKM</h3>
                                <p className='text-sm sm:text-base mt-3 font-light capitalize w-11/12'>Selamat datang di Pangkalan Kreativitas Mahasiswa (PKM), tempat di mana inovasi bertemu dengan inspirasi. Jelajahi potensi tak terbatas ide-ide kreatif, riset terdepan, dan solusi revolusioner. Bersama PKM, kita bukan hanya mengamati perubahan, tapi menjadi agen perubahannya.</p>
                                <div className='mt-3 w-64 none'>
                                    <button className="bg-primary hover:bg-blue-lagoon text-white btn lg:btn-md"> <BookOpenIcon className='w-5 h-5' /> Buku Panduan</button>
                                </div>
                            </div>
                            <div  className="hidden justify-center items-center w-full h-full lg:flex">
                                <div className="relative min-h-full">
                                    <div className="transform rotate-y-45 translate-x-7 rounded-bl-3xl rounded-tr-3xl translate-y-8 absolute inset-0 bg-primary md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]"></div>
                                    <img src="images/gedung-TI.jpg" className="object-cover hover:brightness-75 rounded-bl-3xl rounded-tr-3xl shadow-lg transform rotate-y-2 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]" alt="Gedung Teknologi Informasi" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* important date section */}
                    <div className='flex flex-row w-full justify-center items-center mt-16 sm:mt-24 sm:px-12'>
                        <div className='flex flex-col md:flex-row gap-4 justify-between items-start w-full md:w-11/12 bg-base-100 shadow-lg border border-base-300 px-6 py-6 rounded-lg'>
                            <div className='flex flex-row gap-4 sm:pr-10'>
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

                                    <p className='text-base md:text-sm font-light'>
                                        Gedung Teknologi Informasi Fakultas Teknik Universitas Udayana
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end imporatant date section */}

                    {/* section about us */}
                    <section id="about-us" className="pt-10 md:pt-28 sm:pt-32 px-0 sm:px-10 flex flex-col lg:flex-row justify-center items-center md:space-x-0">
                        <div  className="relative h-fit items-center w-full lg:w-1/2">
                            <div class="mx-auto hidden lg:block  lg:w-[450px] lg:h-[450px] transform -translate-x-8 translate-y-8 rounded-bl-3xl rounded-tr-3xl absolute inset-0 bg-primary"></div>
                            <img src="images/gedung-TI.jpg" class="mx-auto hidden lg:block  lg:w-[450px] lg:h-[450px] object-cover hover:brightness-75 rounded-bl-3xl rounded-tr-3xl shadow-lg transform rotate-y-2 ease-in-out duration-300" alt="Gedung Teknologi Informasi" />
                        </div>
                        <div  className="w-full ml-0 mt-14 sm:mt-0 lg:w-1/2">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="inline h-1 w-32 bg-secondary rounded-full"></span>
                                <span className="inline h-2 w-2 bg-secondary rounded-full"></span>
                                <span className="inline h-1 w-52 bg-secondary rounded-full"></span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 leading-17">Semangat Berkarya Menciptakan Ide-ide Kreatif Untuk Kemajuan Indonesia</h2>
                            <p className='text-sm sm:text-base'>
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
                    <section id="pkm-topik" className="p-0 sm:p-10 mt-20">
                        <div className="relative">
                            <div className="relative z-[1] h-fit pb-28 sm:pb-40 w-full rounded-2xl sm:rounded-3xl flex flex-col justify-start items-center overflow-hidden p-6 sm:p-10 bg-[url('images/pkm-ti-2023-pembukaan.jpg')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-secondary before:to-blue-500 before:opacity-80 before:-z-[1]">
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="inline h-1 w-16 sm:w-32 bg-white rounded-full"></span>
                                    <span className="inline h-2 w-2 bg-white rounded-full"></span>
                                    <p className="uppercase font-semibold text-center text-white text-sm sm:text-base px-6">Eksplorasi topik pkm</p>
                                    <span className="inline h-2 w-2 bg-white rounded-full"></span>
                                    <span className="inline h-1 w-16 sm:w-32 bg-white rounded-full"></span>
                                </div>
                                <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl  font-bold text-white mb-2 text-center">Kembangkan Ide Cemerlang Anda</h2>
                                <p className="text-sm sm:text-base text-slate-200 text-center">
                                    Jelajahi kategori-kategori sub topik PKM kami dan temukan passion yang menggetarkan hati Anda. Mulai dari keberlanjutan hingga teknologi, kesehatan hingga seni, kami mengundang Anda untuk meresapi setiap sub topik dengan penuh antusiasme. Temukan tempat Anda di dunia PKM, di mana setiap kategori adalah panggung bagi idealisasi dan perubahan.
                                </p>
                            </div>
                            <div className="relative -mt-20 sm:-mt-32 z-[5] flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-4 md:space-y-0">
                                <div className="block w-11/12 md:max-w-[250px] border border-[1] border-base-300 text-center p-4 bg-base-100 rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-2xl text-primary font-bold mb-2">PKM-KC</h3>
                                    <p className="text-center text-slate-500">Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya.</p>
                                </div>
                                <div className="block w-11/12 md:max-w-[250px] border border-[1] border-base-300 text-center p-4 bg-base-100 rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-2xl text-primary font-bold mb-2">PKM-KC</h3>
                                    <p className="text-center text-slate-500">Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya.</p>
                                </div>
                                <div className="block w-11/12 md:max-w-[250px] border border-[1] border-base-300 text-center p-4 bg-base-100 rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-2xl text-primary font-bold mb-2">PKM-KC</h3>
                                    <p className="text-center text-slate-500">Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya.</p>
                                </div>
                                <div className="block w-11/12 md:max-w-[250px] border border-[1] border-base-300 text-center p-4 bg-base-100 rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-2xl text-primary font-bold mb-2">PKM-KC</h3>
                                    <p className="text-center text-slate-500">Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end pkm topic section */}

                    {/*  speakers section */}
                    <section className='flex flex-col-reverse lg:flex-row items-center w-full gap-6 sm:px-12 mt-20'>
                            <SlickCarousel>
                                <div>
                                    <div className='relative mx-2 overflow-hidden group rounded-lg'>
                                        <img src='images/prabowo.png' className='w-64 h-80 rounded-lg object-fill object-center cursor-pointer group-hover:scale-125 duration-300'
                                        />
                                        <div className='absolute w-64 h-80 inset-0 cursor-pointer bg-gradient-blue opacity-0 hover:opacity-100 rounded-lg transition-opacity flex justify-center items-center'>
                                            <div className='px-4'>
                                                <p className='text-white opacity-100 text-lg font-bold leading-5'>“Tips and Trik Membuat Proposal PKM Lolos Pimnas 1”</p>
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
                                </div>
                                <div>
                                    <div className='relative mx-2 overflow-hidden group rounded-lg'>
                                        <img src='images/nadiem.png' className='w-64 h-80 rounded-lg object-fill object-center cursor-pointer group-hover:scale-125 duration-300'
                                        />
                                        <div className='absolute w-64 h-80 inset-0 cursor-pointer bg-gradient-blue opacity-0 hover:opacity-100 rounded-lg transition-opacity flex justify-center items-center'>
                                            <div className='px-4'>
                                                <p className='text-white opacity-100 text-lg font-bold leading-5'>“Tips and Trik Membuat Proposal PKM Lolos Pimnas 1”</p>
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
                                </div>
                                <div>
                                    <div className='relative mx-2 overflow-hidden group rounded-lg'>
                                        <img src='images/rektor.png' className='w-64 h-80 rounded-lg object-fill object-center cursor-pointer group-hover:scale-125 duration-300'
                                        />
                                        <div className='absolute w-64 h-80 inset-0 cursor-pointer bg-gradient-blue opacity-0 hover:opacity-100 rounded-lg transition-opacity flex justify-center items-center'>
                                            <div className='px-4'>
                                                <p className='text-white opacity-100 text-lg font-bold leading-5'>“Tips and Trik Membuat Proposal PKM Lolos Pimnas 1”</p>
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
                                </div>
                                
                            </SlickCarousel>

                        <div className='flex flex-col w-full lg:w-1/2'>
                            <span className='uppercase text-sm md:text-base text-primary font-medium mb-1'>Pembicara</span>
                            <h3 className='capitalize text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary leading-12 md:leading-16'>Bertemu dengan mereka yang sudah profesional</h3>
                            <p className='text-sm sm:text-base font-light text-gray-500 mt-3 capitalize'>
                                Selamatkan tempat di barisan terdepan karena kami mempersembahkan Narasumber yang luar biasa di acara spesial PKM kami! Bersiaplah untuk terinspirasi, berinteraksi, dan mengambil momentum positif dari pandangan hidup yang penuh semangat. Tunggu apa lagi? Bergabunglah dengan kami untuk pengalaman yang mengesankan! 🚀
                            </p>
                        </div>
                    </section>

                    {/* Section Roundown Acara */}
                    <section id='roundown-acara' className='flex flex-col justify-start items-center sm:px-12 mt-24'>
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="inline h-1 w-16 sm:w-32 bg-secondary rounded-full"></span>
                            <span className="inline h-2 w-2 bg-secondary rounded-full"></span>
                            <p className="uppercase font-semibold text-blue-lagoon px-6 text-center text-sm sm:text-base">Roundown Acara</p>
                            <span className="inline h-2 w-2 bg-secondary rounded-full"></span>
                            <span className="inline h-1 w-16 sm:w-32 bg-secondary rounded-full"></span>
                        </div>
                        <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary mb-2">Jangan Lewatkan Kesempatan Ini</h2>
                        <p className="text-center text-sm sm:text-base">
                            Setiap detik adalah kesempatan untuk belajar, berbagi, dan terhubung dengan komunitas kreatif. Catat tanggalnya dan pastikan Anda tidak melewatkan momen magis di PKM Wonderland. Ayo, mari jadwalkan momen berharga kita bersama!
                        </p>

                        <div className="overflow-x-auto w-full mt-6">
                            <table className="table overflow-hidden">
                                {/* head */}
                                <thead>
                                <tr className='bg-white-blue text-base uppercase text-slate-600'>
                                    <th>Waktu</th>
                                    <th>Acara</th>
                                    <th>Lokasi</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className='hover'>
                                        <td className='block w-[150px] sm:min-w-[250px]'>
                                            <p className='text-base sm:text-xl text-blue-lagoon font-semibold'>08.30 - 11.30</p>
                                            <p className='capitalize text-sm sm:text-base'>selasa, 6 februari</p>
                                        </td>
                                        <td>Sosialisasi Program Kreativitas Mahasiswa 2024</td>
                                        <td>Live Youtube Channel Direktorat Pembelajaran dan Kemahasiswaan</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className='hover'>
                                        <td className='block w-[150px] sm:min-w-[250px]'>
                                            <p className='text-base sm:text-xl text-blue-lagoon font-semibold'>08.30 - 11.30</p>
                                            <p className='capitalize text-sm sm:text-base'>selasa, 6 februari</p>
                                        </td>
                                        <td>Pelatihan Membuat Proposal LOLOS Pimnas</td>
                                        <td>Gedung Teknologi Informasi</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className='hover'>
                                        <td className='block w-[150px] sm:min-w-[250px]'>
                                            <p className='text-base sm:text-xl text-blue-lagoon font-semibold'>08.30 - 11.30</p>
                                            <p className='capitalize text-sm sm:text-base'>selasa, 6 februari</p>
                                        </td>
                                        <td>Sosialisasi Program Kreativitas Mahasiswa 2024</td>
                                        <td>Live Youtube Channel Direktorat Pembelajaran dan Kemahasiswaan</td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr className='hover'>
                                        <td className='block w-[150px] sm:min-w-[250px]'>
                                            <p className='text-base sm:text-xl text-blue-lagoon font-semibold'>08.30 - 11.30</p>
                                            <p className='capitalize text-sm sm:text-base'>selasa, 6 februari</p>
                                        </td>
                                        <td>Sosialisasi Program Kreativitas Mahasiswa 2024</td>
                                        <td>Live Youtube Channel Direktorat Pembelajaran dan Kemahasiswaan</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Suhu section */}
                    <section className='flex flex-col w-full py-4 mt-24 sm:px-12'>
                        <div className="relative z-[1] h-fit pb-28 sm:pb-40 w-full rounded-2xl sm:rounded-3xl flex flex-col justify-start items-center overflow-hidden p-10 bg-[url('images/pkm-ti-2023-pembukaan.jpg')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-secondary before:to-blue-500 before:opacity-80 before:-z-[1]">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="inline h-1 w-16 sm:w-32 bg-white rounded-full"></span>
                                <span className="inline h-2 w-2 bg-white rounded-full"></span>
                                <p className="uppercase font-semibold text-sm sm:text-base text-center text-white px-6">saatnya kamu buktikan</p>
                                <span className="inline h-2 w-2 bg-white rounded-full"></span>
                                <span className="inline h-1 w-16 sm:w-32 bg-white rounded-full"></span>
                            </div>
                            <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2">Bergabung Dengan Mereka</h2>
                            <p className="text-slate-200 text-center text-sm sm:text-base">
                                Jelajahi kategori-kategori sub topik PKM kami dan temukan passion yang menggetarkan hati Anda. Mulai dari keberlanjutan hingga teknologi, kesehatan hingga seni, kami mengundang Anda untuk meresapi setiap sub topik dengan penuh antusiasme. Temukan tempat Anda di dunia PKM, di mana setiap kategori adalah panggung bagi idealisasi dan perubahan.
                            </p>
                        </div>

                        <div className="relative -mt-24 sm:-mt-32 z-[5] flex justify-center items-center">
                            <CustomCarousel className="flex justify-center items-center text-center space-x-4">
                                <div className='relative flex justify-center items-center pb-5'>
                                    <div className="flex flex-col w-11/12 md:max-w-[40rem] p-4 bg-white/70 backdrop-blur-md backdrop-brightness-150 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                        <div className='w-full flex justify-center items-center mb-4'>
                                            <img src='images/emot-bayu.png?v=1' className='max-w-[10rem] rounded-full items-center object-contain object-center bg-no-repeat border-2 border-primary' alt="Bayu" />
                                        </div>
                                        <p className="text-center text-slate-500 mb-2">“Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya.”</p>
                                        <h3 className="text-xl text-primary font-bold mb-2">Bayu</h3>
                                        <p className='capitalize text-slate-400'>mahasiswa aktif teknologi informasi</p>
                                    </div>
                                </div>

                                <div className='relative flex justify-center items-center pb-5'>
                                    <div className="flex flex-col w-11/12 md:max-w-[40rem] p-4 bg-white/70 backdrop-blur-md backdrop-brightness-150 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                        <div className='w-full flex justify-center items-center mb-4'>
                                            <img src='images/emot-bayu.png?v=1' className='max-w-[10rem] rounded-full items-center object-contain object-center bg-no-repeat border-2 border-primary' alt="Bayu" />
                                        </div>
                                        <p className="text-center text-slate-500 mb-2">“Program Kreativitas Mahasiswa-Karsa test (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya.”</p>
                                        <h3 className="text-xl text-primary font-bold mb-2">Bayu</h3>
                                        <p className='capitalize text-slate-400'>mahasiswa aktif teknologi informasi</p>
                                    </div>
                                </div>
                            </CustomCarousel>
                        </div>

                        {/* <div className='flex flex-row gap-4 flex-shrink-0 mt-5 items-center justify-center'>
                            <button className="btn btn-sm shadow-2xl rounded-lg" onClick={handlePrevClick}><ArrowLongLeftIcon className='w-6 h-6 font-black' /></button>
                            <button className="shadow-xl rounded-md px-3 py-2" onClick={handleNextClick}><ArrowLongRightIcon className='w-6 h-6 font-black' /></button>
                        </div> */}

                        {/* FAQ section */}
                        <section id='FaQ' className='block w-full mt-20 py-16'>
                            <div className='flex flex-col w-full'>
                                <div className='px-0 md:px-8 lg:px-10'>
                                    <span className='uppercase text-sm font-semibold md:text-base text-primary'>Malu Bertanya nanti gatau</span>
                                    <h3 className='capitalize font-black text-4xl md:text-5xl mt-2 text-secondary'>Frequently Asked Questions</h3>
                                    <p className='capitalize text-slate-500 mt-2 w-4/5 text-sm sm:text-base'>Pertanyaan umum mengenai Kelompok Studi Tech Artisan. Jika masih ada yang ingin ditanyakan, kalian bisa hubungi kontak dibawah ini.</p>
                                </div>
                            </div>

                            <div className='flex flex-col-reverse md:flex-row w-full mt-10 justify-between items-center'>
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
                    <section id='contact-us' className='min-h-screen flex flex-col justify-start w-full text-center items-center sm:pt-16 pb-0'>
                        <div className='mt-4 block justify-center  w-full text-center items-center'>
                            <h3 className='capitalize text-4xl md:text-5xl font-black flex gap-2 md:gap-4 justify-center flex-row items-center'><span className='text-secondary'>Find More</span> <span className='text-blue-lagoon'>about us</span></h3>

                            <div className='flex w-full items-center text-center justify-center'>
                                <p className='font-light text-sm md:text-base text-slate-500 text-center mt-2 w-full md:w-2/4 '>
                                    Dapatkan info terkini tentang kegiatan yang diselenggarakan Technology Artisan pada Official Accounts Technology Artisan. Ikuti terus perkembangannya !
                                </p>
                            </div>

                            <div className='flex flex-wrap md:flex-row justify-center items-center relative w-full gap-4 mt-5'>
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

                            <div>
                                <img src="images/contact-us-bro.png" className='mx-auto max-h-[450px] mt-10' alt="contact us illustration" />
                            </div>
                        </div>
                    </section>

                </main>

                <footer className="footer p-12 bg-base-200 text-base-content grid-cols-2 md:grid-cols-6 gap-x-20">
                    <aside className='col-span-2 w-4/5 md:w-full'>
                        <img src="images/Logo-PKM-TI.png" className='w-32' alt="" />
                        <p className='capitalize text-lg text-slate-700 font-semibold dark:text-white'>program studi sarjana teknologi informasi fakultas teknik universitas udayana</p>
                    </aside> 
                    <nav className='col-span-1 md:col-span-2'>
                        <h6 className="footer-title mb-0">Alamat</h6> 
                        <a className="link link-hover mb-4">Jl. Kampus Udayana Bukit Jimbaran, Jimbaran, Kuta Selatan, Kabupaten Badung, Bali 80361</a>

                        <h6 className="footer-title mb-0">Telepon</h6> 
                        <a className="link link-hover mb-4">(0361) 701806</a>

                        <h6 className="footer-title mb-0">Email</h6> 
                        <a className="link link-hover mb-4">hmti@unud.ac.id</a>
                    </nav> 
                    <nav className='col-span-1 md:col-span-2'>
                        <h6 className="footer-title mb-0">Terkait</h6> 
                        <a className="link link-hover mb-2">UNUD | Teknologi Informasi</a>

                        <a className="link link-hover mb-2">BEM PM Udayna</a>

                        <a className="link link-hover mb-2">SMFT Udayana</a>
                    </nav>
                </footer>
                <footer className='py-5 px-12 bg-base-300 text-slate-600'>
                    <p>© 2024 Ilmiah PKM TI </p>
                </footer>
            </div>


            <ScrollToTop/>
        </>
    );
}
