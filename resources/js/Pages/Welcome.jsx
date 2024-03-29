import { Head, Link } from "@inertiajs/react";
import { motion, useAnimation } from "framer-motion";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import {
    MapPinIcon,
    CalendarDaysIcon,
    BookmarkSquareIcon,
    CalendarIcon,
    ArrowLongDownIcon,
    ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import Accordion from "@/Components/Accordion";
import CustomCarousel from "@/Components/CustomCorausel";
import NavBar from "@/Components/NavBar";
import ScrollToTop from "@/Components/ScrollTop";
import SlickCarousel from "@/Components/SlickCarousel";

export default function Welcome({ auth }) {
    const controls = useAnimation();

    const variantFade = (x, y) => {
        return {
            visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
            hidden: { opacity: 0, x: x, y: y, transition: { duration: 0.5 } },
        };
    };

    const variantZoom = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
        hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
    };

    return (
        <>
            <Head title="PKM TI" />
            <NavBar auth={auth} />

            <div className="flex flex-col pt-28 overflow-x-hidden">
                <main className="px-6 sm:px-0">
                    <div className="relative w-full">
                        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between sm:px-12 w-full">
                            <motion.div
                                whileInView="visible"
                                variants={variantFade(-100, 0)}
                                initial="hidden"
                                animate={controls}
                                className="flex flex-col w-full"
                            >
                                <span className="uppercase font-semibold text-sm sm:text-base mb-1 text-blue-lagoon">
                                    Pelatihan PKM TI 2024
                                </span>
                                <h3 className="capitalize text-secondary leading-19 font-bold text-5xl lg:text-6xl w-full">
                                    Sistem Informasi Pelatihan PKM TI Udayana
                                </h3>
                                <p className="text-sm sm:text-base my-5 font-light w-full">
                                    Pelatihan PKM TI 2024 merupakan bagian dari program kerja Himpunan Mahasiswa Teknologi Informasi Universitas Udayana periode 2024, yang bertujuan membimbing mahasiswa dalam merancang Program Kreativitas Mahasiswa (PKM) yang inovatif dan kreatif di bidang Teknologi Informasi.
                                </p>
                                <div className="mt-3 w-64 none">
                                    <a href={route('guidebook')} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-blue-lagoon text-white btn lg:btn-md">
                                        <BookOpenIcon className="w-5 h-5" />
                                        Buku Panduan
                                    </a>

                                </div>
                            </motion.div>
                            <motion.div
                                whileInView="visible"
                                variants={variantFade(100, 0)}
                                initial="hidden"
                                animate={controls}
                                className="hidden justify-center items-center w-full h-full lg:flex"
                            >
                                <div className="relative min-h-full">
                                    <div className="transform rotate-y-45 translate-x-7 rounded-bl-3xl rounded-tr-3xl translate-y-8 absolute inset-0 bg-primary md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]"></div>
                                    <img
                                        src="images/gedung-TI.jpg"
                                        className="object-cover hover:brightness-75 rounded-bl-3xl rounded-tr-3xl shadow-lg transform rotate-y-2 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]"
                                        alt="Gedung Teknologi Informasi"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* important date section */}
                    <div className="flex flex-row w-full justify-center items-center mt-16 sm:mt-24 sm:px-12">
                        <motion.div
                            whileInView="visible"
                            variants={variantFade(0, 100)}
                            initial="hidden"
                            animate={controls}
                            className="flex flex-col md:flex-row gap-4 justify-between items-start w-full md:w-11/12 bg-base-100 shadow-lg border border-base-300 px-6 py-6 rounded-lg"
                        >
                            <div className="flex flex-row gap-4 sm:pr-10">
                                <BookmarkSquareIcon className="w-6 h-6 font-extrabold" />
                                <div className="block">
                                    <span className="capitalize text-gray-400 font-normal text-sm md:text-base">
                                        Agenda Acara
                                    </span>

                                    <p className="text-base md:text-sm font-light">
                                        Pembukaan PKM-TI 2024
                                    </p>
                                </div>
                            </div>

                            <div className="divider divider-horizontal before:bg-black after:bg-black"></div>

                            <div className="flex flex-row gap-4">
                                <CalendarDaysIcon className="w-6 h-6 font-extrabold" />
                                <div className="block">
                                    <span className="capitalize text-gray-400 font-normal text-sm md:text-base">
                                        Date
                                    </span>

                                    <p className="text-base md:text-sm font-light">
                                        Minggu, 4 Februari 2024
                                    </p>
                                </div>
                            </div>

                            <div className="divider divider-horizontal before:bg-black after:bg-black"></div>

                            <div className="flex flex-row gap-4">
                                <MapPinIcon className="w-6 h-6 font-extrabold" />

                                <div className="block">
                                    <span className="capitalize text-gray-400 font-normal text-sm md:text-base">
                                        Lokasi Acara
                                    </span>

                                    <p className="text-base md:text-sm font-light">
                                        Gedung Teknologi Informasi Fakultas
                                        Teknik Universitas Udayana
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {/* end imporatant date section */}

                    {/* section about us */}
                    <section
                        id="about-us"
                        className="pt-10 md:pt-28 sm:pt-32 px-0 sm:px-10 flex flex-col lg:flex-row justify-center items-center md:space-x-0"
                    >
                        <motion.div
                            whileInView="visible"
                            variants={variantFade(-100, 0)}
                            initial="hidden"
                            animate={controls}
                            className="relative h-fit items-center w-full lg:w-1/2"
                        >
                            <div className="mx-auto hidden lg:block  lg:w-[450px] lg:h-[450px] transform -translate-x-8 translate-y-8 rounded-bl-3xl rounded-tr-3xl absolute inset-0 bg-primary"></div>
                            <img
                                src="images/gedung-TI.jpg"
                                className="mx-auto hidden lg:block  lg:w-[450px] lg:h-[450px] object-cover hover:brightness-75 rounded-bl-3xl rounded-tr-3xl shadow-lg transform rotate-y-2 ease-in-out duration-300"
                                alt="Gedung Teknologi Informasi"
                            />
                        </motion.div>
                        <motion.div
                            whileInView="visible"
                            variants={variantFade(100, 0)}
                            initial="hidden"
                            animate={controls}
                            className="w-full ml-0 mt-14 sm:mt-0 lg:w-1/2"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="inline h-1 w-32 bg-secondary rounded-full"></span>
                                <span className="inline h-2 w-2 bg-secondary rounded-full"></span>
                                <span className="inline h-1 w-52 bg-secondary rounded-full"></span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 leading-17 capitalize">
                                mengenal lebih dekat PKM TI 2024
                            </h2>
                            <p className="text-sm sm:text-base">
                                <span className="block font-semibold leading-8">
                                    Apa itu PKM TI 2024?
                                </span>
                                Pelatihan PKM Teknologi Informasi 2024 merupakan salah satu inisiatif dari Himpunan Mahasiswa Teknologi Informasi (HMTI) yang bertujuan untuk memberikan platform bagi mahasiswa dalam memperluas pengetahuan mereka terkait Program Kreativitas Mahasiswa (PKM). Pelatihan ini akan mengeksplorasi tema
                                <span className="font-bold text-bold">
                                    “Membangkitkan Generasi Dengan Kreativitas Visioner Untuk Menghasilkan Karya Inovatif, dan Kreatif Melalui PKM”
                                </span>
                                yang bermakna harapan agar generasi muda Teknologi Informasi dapat termotivasi dalam mengembangkan kreativitas visioner dan mampu memperhitungkan tren masa depan dengan berkarya melalui PKM. Dengan melibatkan mahasiswa dalam pelatihan ini, diharapkan mahasiswa dapat memperoleh pemahaman mendalam mengenai pengembangan judul, penyesuaian format berdasarkan pedoman, teknik penelitian, serta keterampilan teknis yang diperlukan untuk mengimplementasikan ide-ide tersebut.
                            </p>
                            <a
                                href="#pkm-topik"
                                className="flex mt-4 text-sm text-slate-500 cursor-pointer"
                            >
                                <ArrowLongDownIcon className="w-6 h-6 mr-3 animate-bounce" />
                                Jelajahi Bidang PKM TI 2024
                            </a>
                        </motion.div>
                    </section>
                    {/* end about us section */}

                    {/* pkm topic section */}
                    <section id="pkm-topik" className="p-0 sm:p-10 mt-20">
                        <div className="relative">
                            <div className="relative z-[1] h-fit pb-28 sm:pb-40 w-full rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-10 bg-[url('images/pkm-ti-2023-pembukaan.jpg')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-secondary before:to-blue-500 before:opacity-80 before:-z-[1]">
                                <motion.div
                                    whileInView="visible"
                                    variants={variantZoom}
                                    initial="hidden"
                                    animate={controls}
                                    className="flex flex-col justify-start items-center"
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="inline h-1 w-16 sm:w-32 bg-white rounded-full"></span>
                                        <span className="inline h-2 w-2 bg-white rounded-full"></span>
                                        <p className="uppercase font-semibold text-center text-white text-sm sm:text-base px-6">
                                            Bidang PKM TI 2024
                                        </p>
                                        <span className="inline h-2 w-2 bg-white rounded-full"></span>
                                        <span className="inline h-1 w-16 sm:w-32 bg-white rounded-full"></span>
                                    </div>
                                    <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl  font-bold text-white mb-2 text-center">
                                        Hasilkan Karya yang Inovatif dan Kreatif
                                    </h2>
                                    <p className="text-sm sm:text-base text-slate-200 text-center">
                                        Pada PKM TI 2024 Bidang PKM yang diperbolehkan adalah PKM Kewirausahaan (PKM-K), Pengabdian Masyarakat (PKM-PM), Penalaran Iptek (PKM-PI), Karsa Cipta (PKM-KC), dan Gagasan Futuristik Tertulis (PKM-GFT). Adapun judul yang dibuat oleh masing-masing tim harus relevan dengan bidang Teknologi Informasi, disarankan menggunakan istilah seperti AI, Machine Learning, IoT, AR, VR, atau XR.
                                    </p>

                                </motion.div>
                            </div>
                            <div className="relative -mt-20 sm:-mt-32 z-[5] flex flex-col justify-center items-center lg:flex-row lg:items-start space-y-6 lg:space-x-4 lg:space-y-0">
                                <motion.div
                                    whileInView="visible"
                                    variants={variantZoom}
                                    initial="hidden"
                                    animate={controls}
                                    className="block w-11/12 lg:max-w-[250px] border border-[1] border-base-300 text-center p-4 bg-base-100 rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-2xl text-primary font-bold mb-2">
                                        PKM-KC
                                    </h3>
                                    <p className="line-clamp-[9] text-center text-slate-500">
                                        Program Kreativitas Mahasiswa-Karsa
                                        Cipta (PKM-KC) merupakan program
                                        penciptaan yang didasari atas karsa dan
                                        nalar mahasiswa, bersifat konstruktif
                                        serta menghasilkan suatu sistem, desain,
                                        model/barang atau prototipe dan
                                        sejenisnya.
                                    </p>
                                    <a href={route("panduanbelmawa")} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                                        Selengkapnya
                                    </a>
                                </motion.div>

                                <motion.div
                                    whileInView="visible"
                                    variants={variantZoom}
                                    initial="hidden"
                                    animate={controls}
                                    className="block w-11/12 lg:max-w-[250px] border border-[1] border-base-300 text-center p-4 bg-base-100 rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-2xl text-primary font-bold mb-2">
                                        PKM-K
                                    </h3>
                                    <p className="line-clamp-[9] text-center text-slate-500">
                                        Program Kreativitas Mahasiswa
                                        Kewirausahaan (PKM-K) merupakan program
                                        kreativitas mahasiswa dalam menciptakan
                                        aktivitas usaha. Dalam PKM-K, tim
                                        mahasiswa berlatih membuat kreativitas
                                        produk usaha yang dibutuhkan masyarakat
                                        (pasar). Melalui program PKM-K,
                                        mahasiswa memiliki kesempatan yang luas
                                        untuk merealisasikan ide kreatif produk
                                        (barang/jasa), berinovasi menciptakan
                                        produk baru, serta meningkatkan
                                        kompetensi, wawasan dan pengalaman dalam
                                        berwirausaha
                                    </p>
                                    <a href={route("panduanbelmawa")} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                                        Selengkapnya
                                    </a>
                                </motion.div>

                                <motion.div
                                    whileInView="visible"
                                    variants={variantZoom}
                                    initial="hidden"
                                    animate={controls}
                                    className="block w-11/12 lg:max-w-[250px] border border-[1] border-base-300 text-center p-4 bg-base-100 rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-2xl text-primary font-bold mb-2">
                                        PKM-PM
                                    </h3>
                                    <p className="line-clamp-[9] text-center text-slate-500">
                                        PKM-PM adalah program penerapan ilmu
                                        pengetahuan, teknologi dan seni yang
                                        berorientasi non profit dalam upaya
                                        untuk membantu mengakhiri kemiskinan,
                                        mengurangi kesenjangan dan melindungi
                                        lingkungan.
                                    </p>
                                    <a href={route("panduanbelmawa")} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                                        Selengkapnya
                                    </a>
                                </motion.div>

                                <motion.div
                                    whileInView="visible"
                                    variants={variantZoom}
                                    initial="hidden"
                                    animate={controls}
                                    className="block w-11/12 lg:max-w-[250px] border border-[1] border-base-300 text-center p-4 bg-base-100 rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-2xl text-primary font-bold mb-2">
                                        PKM-PI
                                    </h3>
                                    <p className="line-clamp-[9] text-center text-slate-500">
                                        Program Kreativitas Mahasiswa
                                        Penerapan-IPTEK (PKM-PI) termasuk
                                        kedalam salah satu kelompok PKM 5 bidang
                                        yang menerapkan ilmu pengetahuan dan
                                        teknologi untuk menjadi solusi tepat
                                        dalam menyelesaikan permasalahan yang
                                        ada di masyarakat.
                                    </p>
                                    <a href={route("panduanbelmawa")} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                                        Selengkapnya
                                    </a>
                                </motion.div>

                                <motion.div
                                    whileInView="visible"
                                    variants={variantZoom}
                                    initial="hidden"
                                    animate={controls}
                                    className="block w-11/12 lg:max-w-[250px] border border-[1] border-base-300 text-center p-4 bg-base-100 rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-2xl text-primary font-bold mb-2">
                                        PKM-GFT
                                    </h3>
                                    <p className="line-clamp-[9] text-center text-slate-500">
                                        PKM Gagasan Futuristik Tertulis
                                        (PKM-GFT) merupakan gagasan kreatif yang
                                        futuristik sebagai respons intelektual
                                        atas persoalan aktual yang dihadapi
                                        bangsa. Gagasan tersebut tidak terikat
                                        bidang ilmu, bersifat unik dan
                                        bermanfaat, sehingga kampus yang
                                        diidealisasikan sebagai pusat solusi
                                        dapat menjadi kenyataan.
                                    </p>
                                    <a href={route("panduanbelmawa")} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                                        Selengkapnya
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    {/* end pkm topic section */}

                    {/*  speakers section */}
                    <section className="flex flex-col-reverse lg:flex-row items-center w-full gap-6 sm:px-12 mt-20">
                        <SlickCarousel>
                            <div>
                                <div className="relative mx-2 overflow-hidden group rounded-lg">
                                    <img
                                        src="images/Gusti_Made_Arya_Sasmita,ST.,MT.png?Dosen-TeknologiInformasi"
                                        className="w-64 h-80 rounded-lg object-fill object-center cursor-pointer group-hover:scale-125 duration-300"
                                    />
                                    <div className="absolute w-64 h-80 inset-0 cursor-pointer bg-gradient-blue opacity-0 hover:opacity-100 rounded-lg transition-opacity flex justify-center items-center">
                                        <div className="px-4">
                                            <p className="text-white opacity-100 text-lg font-bold leading-5">
                                                “Tips Untuk Menyusun Proposal PKM yang Sesuai!"
                                            </p>
                                            <div className="divider before:bg-white after:bg-white"></div>
                                            <div className="flex flex-col">
                                                <span className="font-bold capitalize text-sm text-white">
                                                    Gusti Made Arya Sasmita, ST., MT.
                                                </span>
                                                <p className="font-light text-sm md:text-xs text-white">
                                                    Dosen Teknologi Informasi
                                                </p>
                                            </div>

                                            <div className="flex flex-col mt-4 gap-3">
                                                <div className="flex flex-row gap-4 items-center">
                                                    <CalendarIcon className="w-4 h-4 text-white" />
                                                    <p className="text-xs font-thin capitalize text-white">
                                                        Sabtu, 30 Maret 2024
                                                    </p>
                                                </div>

                                                <div className="flex flex-row gap-4 items-center">
                                                    <MapPinIcon className="w-8 h-8 text-white" />
                                                    <p className="text-xs font-thin capitalize text-white">
                                                        Gedung Teknologi
                                                        Informasi, Fakultas
                                                        Teknik Universitas
                                                        Udayana
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative mx-2 overflow-hidden group rounded-lg">
                                    <img
                                        src="images/Anak_Agung_Ngurah_Hary_Susila, S.TI.,M.MT.png?Dosen-TeknologiInformasi"
                                        className="w-64 h-80 rounded-lg object-fill object-center cursor-pointer group-hover:scale-125 duration-300"
                                    />
                                    <div className="absolute w-64 h-80 inset-0 cursor-pointer bg-gradient-blue opacity-0 hover:opacity-100 rounded-lg transition-opacity flex justify-center items-center">
                                        <div className="px-4">
                                            <p className="text-white opacity-100 text-lg font-bold leading-5">
                                                “Tips and Trik Menyusun Proposal
                                                PKM dengan Benar”
                                            </p>
                                            <div className="divider before:bg-white after:bg-white"></div>
                                            <div className="flex flex-col">
                                                <span className="font-bold capitalize text-sm text-white">
                                                    Anak Agung Ngurah Hary Susila, S.TI., M.MT.
                                                </span>
                                                <p className="font-light text-sm md:text-xs text-white">
                                                    Dosen Teknologi Informasi
                                                </p>
                                            </div>

                                            <div className="flex flex-col mt-4 gap-3">
                                                <div className="flex flex-row gap-4 items-center">
                                                    <CalendarIcon className="w-4 h-4 text-white" />
                                                    <p className="text-xs font-thin capitalize text-white">
                                                        Sabtu, 30 Maret 2024
                                                    </p>
                                                </div>

                                                <div className="flex flex-row gap-4 items-center">
                                                    <MapPinIcon className="w-8 h-8 text-white" />
                                                    <p className="text-xs font-thin capitalize text-white">
                                                        Gedung Teknologi
                                                        Informasi, Fakultas
                                                        Teknik Universitas
                                                        Udayana
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative mx-2 overflow-hidden group rounded-lg">
                                    <img
                                        src="images/seorang-ahli.jpg"
                                        className="w-64 h-80 rounded-lg object-fill object-center cursor-pointer group-hover:scale-125 duration-300"
                                    />
                                    <div className="absolute w-64 h-80 inset-0 cursor-pointer bg-gradient-blue opacity-0 hover:opacity-100 rounded-lg transition-opacity flex justify-center items-center">
                                        <div className="px-4">
                                            <p className="text-white opacity-100 text-lg font-bold leading-5">
                                                “Tips and Trik Membuat Proposal
                                                PKM Lolos Pimnas 1”
                                            </p>
                                            <div className="divider before:bg-white after:bg-white"></div>
                                            <div className="flex flex-col">
                                                <span className="font-bold capitalize text-sm text-white">
                                                    Seseorang Ahli
                                                </span>
                                                <p className="font-light text-sm md:text-xs text-white">
                                                    Ahli Proposal PKM
                                                </p>
                                            </div>

                                            <div className="flex flex-col mt-4 gap-3">
                                                <div className="flex flex-row gap-4 items-center">
                                                    <CalendarIcon className="w-4 h-4 text-white" />
                                                    <p className="text-xs font-thin capitalize text-white">
                                                        Sabtu, 30 Maret 2024
                                                    </p>
                                                </div>

                                                <div className="flex flex-row gap-4 items-center">
                                                    <MapPinIcon className="w-8 h-8 text-white" />
                                                    <p className="text-xs font-thin capitalize text-white">
                                                        Gedung Teknologi
                                                        Informasi, Fakultas
                                                        Teknik Universitas
                                                        Udayana
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlickCarousel>

                        <motion.div
                            whileInView="visible"
                            variants={variantFade(100, 0)}
                            initial="hidden"
                            animate={controls}
                            className="flex flex-col w-full lg:w-1/2"
                        >
                            <span className="uppercase text-sm sm:text-base text-primary font-semibold mb-1">
                                Pembicara
                            </span>
                            <h3 className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-12 md:leading-16">
                                Bertemu dengan mereka yang sudah profesional
                            </h3>
                            <p className="text-sm sm:text-base font-light text-gray-500 mt-3">
                                Selamatkan tempat di barisan terdepan karena
                                kami mempersembahkan Narasumber yang luar biasa
                                di acara spesial PKM kami! Bersiaplah untuk
                                terinspirasi, berinteraksi, dan mengambil
                                momentum positif dari pandangan hidup yang penuh
                                semangat. Tunggu apa lagi? Bergabunglah dengan
                                kami untuk pengalaman yang mengesankan! 🚀
                            </p>
                        </motion.div>
                    </section>

                    {/* Section Roundown Acara */}
                    <section
                        id="roundown-acara"
                        className="block sm:px-12 mt-24"
                    >
                        <motion.div
                            whileInView="visible"
                            variants={variantZoom}
                            initial="hidden"
                            animate={controls}
                            className="flex flex-col items-center"
                        >
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="inline h-1 w-16 sm:w-32 bg-secondary rounded-full"></span>
                                <span className="inline h-2 w-2 bg-secondary rounded-full"></span>
                                <p className="uppercase font-semibold text-blue-lagoon px-6 text-center text-sm sm:text-base">
                                    TimeLine Acara
                                </p>
                                <span className="inline h-2 w-2 bg-secondary rounded-full"></span>
                                <span className="inline h-1 w-16 sm:w-32 bg-secondary rounded-full"></span>
                            </div>
                            <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary mb-2">
                                Jangan Lewatkan Kesempatan Ini
                            </h2>
                            <p className="text-center text-sm sm:text-base">
                                Setiap detik adalah kesempatan untuk belajar,
                                berbagi, dan terhubung dengan komunitas kreatif.
                                Catat tanggalnya dan pastikan Anda tidak
                                melewatkan momen magis di PKM Wonderland. Ayo,
                                mari jadwalkan momen berharga kita bersama!
                            </p>
                        </motion.div>

                        <motion.div
                            whileInView="visible"
                            variants={variantZoom}
                            initial="hidden"
                            animate={controls}
                            className="overflow-x-auto w-full mt-6"
                        >
                            <table className="table overflow-hidden">
                                {/* head table */}
                                <thead>
                                    <tr className="bg-white-blue text-base uppercase text-slate-600">
                                        <th>Waktu</th>
                                        <th>Acara</th>
                                        <th>Lokasi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="hover">
                                        <td className="block w-[150px] sm:min-w-[250px]">

                                            <p className="capitalize text-sm sm:text-base">
                                                8 - 14 Maret 2024
                                            </p>
                                        </td>
                                        <td>
                                            Pendaftaran dan Pengumpulan Judul
                                        </td>
                                        <td>
                                            <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"> • Online</button>
                                        </td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className="hover">
                                        <td className="block w-[150px] sm:min-w-[250px]">

                                            <p className="capitalize text-sm sm:text-base">
                                                8 - 21 Maret 2024
                                            </p>
                                        </td>
                                        <td>
                                            Seleksi Judul
                                        </td>
                                        <td>
                                            <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"> • Online</button>
                                        </td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className="hover">
                                        <td className="block w-[150px] sm:min-w-[250px]">

                                            <p className="capitalize text-sm sm:text-base">
                                                22 Maret 2024
                                            </p>
                                        </td>
                                        <td>
                                            Pengumuman Tim Terdaftar Pengumuman Tim Terdaftar
                                        </td>
                                        <td>
                                            <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"> • Online</button>

                                        </td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr className="hover">
                                        <td className="block w-[150px] sm:min-w-[250px]">

                                            <p className="capitalize text-sm sm:text-base">
                                                23 Maret 2024
                                            </p>
                                        </td>
                                        <td>
                                            Pengumuman Tim Terdaftar Pengumuman Tim Terdaftar
                                        </td>
                                        <td>
                                            <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"> • Online</button>

                                        </td>
                                    </tr>

                                    {/* row 5 */}
                                    <tr className="hover">
                                        <td className="block w-[150px] sm:min-w-[250px]">

                                            <p className="capitalize text-sm sm:text-base">
                                                30 Maret 2024
                                            </p>
                                        </td>
                                        <td>
                                            Pelatihan PKM TI 2024
                                        </td>
                                        <td>
                                            <button className="btn btn-sm bg-blue-lagoon hover:bg-primary text-white"> Aula Suastika</button>
                                        </td>
                                    </tr>

                                    {/* row 6 */}
                                    <tr className="hover">
                                        <td className="block w-[150px] sm:min-w-[250px]">

                                            <p className="capitalize text-sm sm:text-base">
                                                30 Maret – 17 Mei 2024
                                            </p>
                                        </td>
                                        <td>
                                            Masa Asistensi Draf Proposal PKM TI
                                        </td>
                                        <td>
                                            -
                                        </td>
                                    </tr>
                                    {/* row 7 */}
                                    <tr className="hover">
                                        <td className="block w-[150px] sm:min-w-[250px]">

                                            <p className="capitalize text-sm sm:text-base">
                                                31 Maret – 16 Mei 2024
                                            </p>
                                        </td>
                                        <td>
                                            Pengumpulan Bukti Asistensi
                                        </td>
                                        <td>
                                            <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"> • Online</button>

                                        </td>
                                    </tr>

                                    {/* row 8 */}
                                    <tr className="hover">
                                        <td className="block w-[150px] sm:min-w-[250px]">

                                            <p className="capitalize text-sm sm:text-base">
                                                11 – 17 Mei 2024
                                            </p>
                                        </td>
                                        <td>
                                            Pengumpulan Draf Proposal
                                        </td>
                                        <td>
                                            <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"> • Online</button>

                                        </td>
                                    </tr>

                                    {/* row 9 */}
                                    <tr className="hover">
                                        <td className="block w-[150px] sm:min-w-[250px]">

                                            <p className="capitalize text-sm sm:text-base">
                                                8 Juni 2024
                                            </p>
                                        </td>
                                        <td>
                                            Klinik PKM TI 2024
                                        </td>
                                        <td>
                                            <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"> • Online</button>

                                        </td>
                                    </tr>

                                    {/* row 10 */}
                                    <tr className="hover">
                                        <td className="block w-[150px] sm:min-w-[250px]">

                                            <p className="capitalize text-sm sm:text-base">
                                                12 – 15 Juni 2024
                                            </p>
                                        </td>
                                        <td>
                                            Pengumpulan Proposal Final	                                        </td>
                                        <td>
                                            <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"> • Online</button>

                                        </td>
                                    </tr>

                                    {/* row 11 */}
                                    <tr className="hover">
                                        <td className="block w-[150px] sm:min-w-[250px]">

                                            <p className="capitalize text-sm sm:text-base">
                                                22 Juni 2024
                                            </p>
                                        </td>
                                        <td>
                                            Pengumuman Kelulusan Pelatihan PKM TI 2024	                                        </td>
                                        <td>
                                            <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"> • Online</button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>
                    </section>

                    {/* testimoni section */}
                    <section className="flex flex-col w-full py-4 mt-24 sm:px-12">
                        <div className="relative z-[1] h-fit pb-28 sm:pb-40 w-full rounded-2xl sm:rounded-3xl overflow-hidden p-10 bg-[url('images/pkm-ti-2023.jpg')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-secondary before:to-blue-500 before:opacity-80 before:-z-[1]">
                            <motion.div
                                whileInView="visible"
                                variants={variantZoom}
                                initial="hidden"
                                animate={controls}
                                className="flex flex-col justify-start items-center"
                            >
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="inline h-1 w-16 sm:w-32 bg-white rounded-full"></span>
                                    <span className="inline h-2 w-2 bg-white rounded-full"></span>
                                    <p className="uppercase font-semibold text-sm sm:text-base text-center text-white px-6">
                                        testimoni peserta
                                    </p>
                                    <span className="inline h-2 w-2 bg-white rounded-full"></span>
                                    <span className="inline h-1 w-16 sm:w-32 bg-white rounded-full"></span>
                                </div>
                                <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2">
                                    Apa kata mereka?
                                </h2>
                                <p className="text-slate-200 text-center text-sm sm:text-base">
                                    Inilah pandangan langsung dari peserta yang telah mengikuti pelatihan PKM Teknologi Informasi periode sebelumnya. Mereka berbagi pengalaman, kesan, dan manfaat yang diperoleh dari program pelatihan ini.
                                </p>
                            </motion.div>
                        </div>

                        <div className="relative -mt-24 sm:-mt-32 z-[5] flex justify-center items-center">
                            <CustomCarousel className="flex justify-center items-center text-center space-x-4">
                                <div className="relative flex justify-center items-center pb-5">
                                    <div className="flex flex-col items-center w-11/12 md:max-w-[50rem] p-6 bg-white/75 backdrop-blur-2xl backdrop-brightness-150 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                        <div className="w-full flex justify-center items-center mb-4 max-w-[12rem] max-h-[12rem] rounded-full overflow-hidden border-2 border-primary">
                                            <img
                                                src="images/kak-kepin.jpg?v=1"
                                                className="object-contain object-center bg-no-repeat"
                                                alt="Kepin"
                                            />
                                        </div>
                                        <p className="text-center text-slate-600 mb-2">
                                            “Pelatihan PKM TI ini bener-bener berguna banget. Lewat pelatihan ini aku jadi tau gimana buat proposal yang baik dan ampuh buat lolos pendanaan. Ditambah lagi pemateri nya bener-bener ngasih insight baru!!!”
                                        </p>
                                        <h3 className="capitalize text-xl text-primary font-bold mb-2">
                                            Kepin
                                        </h3>
                                        <p className="capitalize text-slate-400">
                                            mahasiswa aktif teknologi informasi
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="relative flex justify-center items-center pb-5">
                                    <div className="flex flex-col items-center w-11/12 md:max-w-[50rem] p-6 bg-white/75 backdrop-blur-2xl backdrop-brightness-150 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                        <div className="w-full flex justify-center items-center mb-4 max-w-[12rem] max-h-[12rem] rounded-full overflow-hidden border-2 border-primary">
                                            <img
                                                src="images/kak-christina.jpg?v=1"
                                                className="object-contain object-center bg-no-repeat"
                                                alt="Christina"
                                            />
                                        </div>
                                        <p className="text-center text-slate-600 mb-2">
                                            “Banyak insight dan pandangan baru yang saya dapat berkat tips and trick dari Pelatihan PKM TI. Saya merasa lebih siap dan percaya diri untuk eksplorasi ide menjadi hasil yang inovatif.”
                                        </p>
                                        <h3 className="capitalize text-xl text-primary font-bold mb-2">
                                            Christina
                                        </h3>
                                        <p className="capitalize text-slate-400">
                                            mahasiswa aktif teknologi informasi
                                        </p>
                                    </div>
                                </div>

                            </CustomCarousel>
                        </div>
                    </section>

                    {/* FAQ section */}
                    <section id="FaQ" className="block w-full mt-20 py-16 sm:px-12">
                        <div className="flex flex-col w-full">
                            <motion.div
                                whileInView="visible"
                                variants={variantFade(-100, 0)}
                                initial="hidden"
                                animate={controls}
                            >
                                <span className="uppercase text-sm font-semibold md:text-base text-primary">
                                    Pertanyaan Umum
                                </span>
                                <h3 className="capitalize font-black text-4xl md:text-5xl mt-2 text-secondary">
                                    Hal yang sering ditanyakan
                                </h3>
                                <p className="text-slate-500 mt-2 w-11/12 text-sm sm:text-base">
                                    Pertanyaan umum yang sering ditanyakan terkait PKM TI 2024. Jika masih ada yang ingin ditanyakan lebih lanjut, kalian bisa hubungi narahubung dibawah ini.
                                </p>
                            </motion.div>
                        </div>

                        <div className="flex flex-col-reverse lg:flex-row w-full mt-10 justify-between items-start lg:items-center">
                            <motion.div
                                whileInView="visible"
                                variants={variantZoom}
                                initial="hidden"
                                animate={controls}
                                className="mt-5 items-start"
                            >
                                <img
                                    src="images/image-FAQ.png?version=1.0"
                                    className="max-h-[450px]"
                                />
                            </motion.div>

                            <motion.div
                                whileInView="visible"
                                variants={variantZoom}
                                initial="hidden"
                                animate={controls}
                                className="lg:w-1/2 flex flex-col gap-4"
                            >
                                <Accordion
                                    title="Apakah mahasiswa program studi Teknologi Informasi Universitas Udayana wajib mengikuti Pelatihan PKM TI 2024?"
                                    answer="Mahasiswa yang belum mengikuti Pelatihan PKM TI periode sebelumnya atau belum lulus pada pelatihan sebelumnya wajib untuk mengikuti Pelatihan PKM TI 2024. Dan bagi mahasiswa yang sudah mengikuti Pelatihan PKM TI periode sebelumnya juga boleh mengikuti Pelatihan PKM TI 2024."
                                />
                                <Accordion
                                    title="Apa yang akan dilakukan mahasiswa selama Pelatihan PKM TI 2024?"
                                    answer="Selama Pelatihan PKM TI 2024, mahasiswa akan dibimbing dalam merancang Program Kreativitas Mahasiswa (PKM) yang inovatif dan kreatif di bidang Teknologi Informasi."
                                />
                                <Accordion
                                    title="Apa yang diharapkan mahasiswa peroleh setelah mengikuti Pelatihan PKM TI 2024?"
                                    answer="Setelah mengikuti Pelatihan PKM TI 2024, diharapkan mahasiswa akan memperoleh pemahaman mendalam mengenai pengembangan judul, penyesuaian format berdasarkan pedoman, teknik penelitian, serta keterampilan teknis yang diperlukan untuk mengimplementasikan ide-ide tersebut."
                                />
                                <Accordion
                                    title="Apa luaran yang dihasilkan oleh mahasiswa setelah mengikuti Pelatihan PKM TI 2024?"
                                    answer="Luaran dari kegiatan ini berupa proposal PKM yang memiliki potensi memberikan manfaat signifikan dalam konteks Teknologi Informasi dan dapat diajukan untuk mendapatkan dukungan dan pendanaan pada tahun 2025."
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* Contact section */}
                    <section
                        id="contact-us"
                        className="min-h-screen flex flex-col justify-start w-full text-center items-center sm:pt-16 pb-0 sm:px-12"
                    >
                        <div className="mt-4 block justify-center  w-full text-center items-center">
                            <motion.div
                                whileInView="visible"
                                variants={variantZoom}
                                initial="hidden"
                                animate={controls}
                            >
                                <h3 className="capitalize text-4xl md:text-5xl font-black flex gap-2 md:gap-4 justify-center flex-row items-center">
                                    <span className="text-secondary">
                                        Kontak
                                    </span>{" "}
                                    <span className="text-blue-lagoon">
                                        Kami
                                    </span>
                                </h3>

                                <div className="flex w-full items-center text-center justify-center">
                                    <p className="font-light text-sm md:text-base text-slate-500 text-center mt-2 w-full md:w-4/5 ">
                                        Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi narahubung yang tertera di bawah ini.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileInView="visible"
                                variants={variantZoom}
                                initial="hidden"
                                animate={controls}
                                className="flex flex-wrap md:flex-row justify-center items-center relative w-full gap-4 mt-5"
                            >
                                <button className="bg-white-blue rounded-lg px-4 py-2 flex flex-row gap-3 items-center">
                                    <ChatBubbleLeftEllipsisIcon className="w-12 h-12 text-primary" />
                                    <div className="block text-start">
                                        <p className="text-linear-blue font-semibold text-lg">
                                            Putri
                                        </p>
                                        <a
                                            href="https://wa.me/+6281381090336"
                                            target="_blank"
                                            className="text-linear-blue font-medium text-sm block hover:underline">
                                            WA : 0813-8109-0336
                                        </a>
                                        <a
                                            href="http://line.me/ti/p/~niputucans"
                                            target="_blank"
                                            className="text-linear-blue font-medium text-sm block hover:underline">
                                            LINE : niputucans
                                        </a>
                                    </div>
                                </button>

                                <button className="bg-white-blue rounded-lg px-4 py-2 flex flex-row gap-3 items-center">
                                    <ChatBubbleLeftEllipsisIcon className="w-12 h-12 text-primary" />
                                    <div className="block text-start">
                                        <p className="text-linear-blue font-semibold text-lg">
                                            Inna
                                        </p>
                                        <a
                                            href="https://wa.me/+6285739490558"
                                            target="_blank"
                                            className="text-linear-blue font-medium text-sm block hover:underline">
                                            WA: 0857-3949-0558
                                        </a>
                                        <a
                                            href="http://line.me/ti/p/~tiksnaapsr."
                                            target="_blank"
                                            className="text-linear-blue font-medium text-sm block hover:underline">
                                            LINE: tiksnaapsr.
                                        </a>
                                    </div>
                                </button>

                                <button className="bg-white-blue rounded-lg px-4 py-2 flex flex-row gap-3 items-center">
                                    <ChatBubbleLeftEllipsisIcon className="w-12 h-12 text-primary" />
                                    <div className="block text-start">
                                        <p className="text-linear-blue font-semibold text-lg">
                                            Bay
                                        </p>
                                        <a
                                            href="https://wa.me/+62895321697691"
                                            target="_blank"
                                            className="text-linear-blue font-medium text-sm block hover:underline">
                                            WA: 0895-3216-97691
                                        </a>
                                        <a
                                            href="http://line.me/ti/p/~baay9"
                                            target="_blank"
                                            className="text-linear-blue font-medium text-sm block hover:underline">
                                            LINE: baay9
                                        </a>
                                    </div>
                                </button>


                            </motion.div>

                            <motion.div
                                whileInView="visible"
                                variants={variantZoom}
                                initial="hidden"
                                animate={controls}
                            >
                                <img
                                    src="images/contact-us-bro.png"
                                    className="mx-auto max-h-[450px] mt-10"
                                    alt="contact us illustration"
                                />
                            </motion.div>
                        </div>
                    </section>
                </main>

                <footer className="footer p-12 bg-base-200 text-base-content grid-flow-row sm:grid-cols-2 md:grid-cols-6 gap-x-20">
                    <aside className="col-span-2 w-4/5 md:w-full">
                        <img
                            src="images/Logo-PKM-TI.png"
                            className="w-32"
                            alt="PKM TI Logo"
                        />
                        <p className="capitalize text-lg font-semibold">
                            program studi sarjana teknologi informasi fakultas
                            teknik universitas udayana
                        </p>
                    </aside>
                    <nav className="col-span-1 md:col-span-2">
                        <h6 className="footer-title mb-0">Alamat</h6>
                        <a className="link link-hover mb-4" href="https://maps.app.goo.gl/BxpnRYfHvLDrVYmZ8" target="_blank" rel="noopener noreferrer">
                            Jl. Kampus Udayana Bukit Jimbaran, Jimbaran, Kuta
                            Selatan, Kabupaten Badung, Bali 80361
                        </a>

                        <h6 className="footer-title mb-0">Telepon</h6>
                        <a className="link link-hover mb-4" href="tel:0361701806">(0361) 701806</a>

                        <h6 className="footer-title mb-0">Email</h6>
                        <a className="link link-hover mb-4" href="mailto:hmti@unud.ac.id">hmti@unud.ac.id</a>
                    </nav>
                    <nav className="col-span-1 md:col-span-2">
                        <h6 className="footer-title mb-0">Terkait</h6>
                        <a className="link link-hover mb-2">
                            UNUD | Teknologi Informasi
                        </a>

                        <a className="link link-hover mb-2">BEM PM Udayna</a>

                        <a className="link link-hover mb-2">SMFT Udayana</a>
                    </nav>
                </footer>
                <footer className="py-5 px-12 bg-base-300 text-slate-600">
                    <p>© 2024 PKM TI Udayana </p>
                </footer>
            </div>

            <ScrollToTop />
        </>
    );
}
