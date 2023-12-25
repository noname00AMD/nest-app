"use client";
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react';
import HotTags from "./HotTags";
import AdPanelSideBar from "./AdPanelSideBar";
import AdPanel728x90 from "./AdPanel728x90";
import TopAds from "./topAds";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/bundle';
export default function Body(props) {
    return (
        <>
            <Suspense>

                <div className=" bg-red-200">
                    <TopAds />
                </div>
            </Suspense>

            <div className={"home_body grid grid-cols-12 gap-4 xl:container xl:mx-auto"}>
                <section className="col-start-1 col-span-12   grid grid-cols-12 gap-4"
                    style={{ marginBottom: " 88px" }}>
                    <div className="col-start-1 col-span-9"
                        style={{ backgroundColor: " #fff", padding: " 8px", boxShadow: "1px 2px 5px rgba(0, 0, 0, .15)" }}>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-8 ">
                                <div className="grid grid-cols-12 gap-4" style={{ marginBottom: " 30px" }}>
                                    <div className="col-span-12">
                                        <div style={{ width: " 100%" }}>
                                            <div style={{ marginBottom: " 4px" }}>
                                                <Link href="/" style={{ width: " 100%", height: " 340px", display: " block", overflow: " hidden" }}>
                                                    <Image priority={true} width={300} height={250} alt="ass" style={{ width: " 100%", height: " 100%" }}
                                                        src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                                </Link>
                                            </div>
                                            <Link href="/" className="title" style={{ display: " inline-block", marginBottom: " 5px" }}>
                                                hot girl Trâm Anh nổi như cồn lào !!hot girl tram anh noi nhu con lao !!

                                            </Link>
                                            <p className='text'>Chỉ còn chưa đầy một ngày nữa kỳ thi tuyển sinh vào lớp 10
                                                THPT ở Hà Nội sẽ chính thức diễn ra, nhiều phụ huynh cùng sĩ tử đã đến Văn
                                                Miếu - Quốc Tử Giám cầu may mắn.</p>
                                        </div>
                                    </div>memo
                                </div>
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12" style={{ borderRadius: " 4px", overflow: " hidden" }}>


                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 ">
                                <ul>
                                    <li style={{ marginBottom: " 10px" }}>
                                        <Link href="/" style={{ width: " 100%", height: " 180px", display: " block" }}>
                                            <Image priority={true} width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </Link>
                                        <Link href="/" className="title2" style={{ padding: " 0 8px" }} >
                                            t girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                        </Link>
                                        <p style={{ padding: " 0 8px" }}> t girl tram anh noi nhu con lao !!hot girl tram anh noi
                                            nhu con lao !!t girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con
                                            lao !!</p>
                                    </li>

                                    <li className="clear-both my-3 overflow-auto" style={{ marginBottom: " 8px" }}>
                                        <Link href="/" className="border w-4/12 block float-left"
                                            style={{ backgroundSize: " cover", backgroundPosition: " 100% 100% ", backgroundRepeat: " no-repeat", height: " 68px", background: " url(/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png)" }} >

                                        </Link>

                                        <Link href="/" className="block w-8/12 float-left title4 pl-1">
                                            hot girt dgdff sfs ffs ff sfsf
                                        </Link>

                                    </li>
                                    <li className="clear-both my-3 overflow-auto" style={{ marginBottom: " 8px" }}>
                                        <Link href="/" className="border w-4/12 block float-left"
                                            style={{ backgroundSize: " cover", backgroundPosition: " 100% 100 % ", backgroundRepeat: " no-repeat", height: " 68px", background: " url(/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png)" }}>

                                        </Link>

                                        <Link href="/" className="block w-8/12 float-left title4 pl-1">
                                            hot girt dgdff sfs ffs ff sfsf
                                        </Link>

                                    </li >
                                    <li className="clear-both my-3 overflow-auto" style={{ marginBottom: " 8px" }}>
                                        <Link href="/" className="border w-4/12 block float-left"
                                            style={{ backgroundSize: " cover", backgroundPosition: " 100% 100 % ", backgroundRepeat: " no-repeat", height: " 68px", background: " url(/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png)" }}>

                                        </Link>

                                        <Link href="/" className="block w-8/12 float-left title4 pl-1">
                                            hot girt dgdff sfs ffs ff sfsf
                                        </Link>

                                    </li >





                                </ ul >
                            </div >
                        </div >
                    </div >
                    <div className="col-span-3 col-start-10 ">
                        <Suspense>
                            <AdPanelSideBar />
                        </Suspense>
                    </div>


                    <div className=" grid grid-cols-12 gap-4 col-span-12">
                        <div className="col-span-12 col-start-1" style={{
                            marginBottom: " 18px"
                        }}>
                            <h2 style={{ display: " inline" }} className="text_decor title2">Đáng chú ý :</h2>
                        </div >
                        <ul className="col-span-12 col-start-1 grid grid-cols-12 gap-4 ">
                            <li className="col-span-3">
                                <Link href="/" style={{ display: " inline-block", width: " 100%", height: " 168px", position: " relative" }}>
                                    <Image priority={true} width={300} height={250} alt="a" className="border" style={{
                                        width: " 100 % ", height: " 100 % "
                                    }}
                                        src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                </Link>
                                <Link href="/" className="title3" style={{
                                    display: "inline-block", width: " 100 %", padding: " 0  0 0 8px"
                                }}>
                                    hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram
                                    anh noi nhu con lao !!

                                </Link>
                            </li >
                            <li className="col-span-3">
                                <Link href="/" style={{
                                    display: " inline-block", width: " 100 % ", height: " 168px", position: " relative"
                                }}>
                                    <Image width={300} height={250} alt="a" className="border" style={{
                                        width: " 100 % ", height: " 100 % "
                                    }}
                                        src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                </Link>
                                <Link href="/" className="title3" style={{
                                    display: "inline-block", width: " 100 % ", padding: " 0  0 0 8px"
                                }}>
                                    hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao!!hot girl tram
                                    anh noi nhu con lao!!

                                </Link>
                            </li >
                            <li className="col-span-3">
                                <Link href="/" style={{
                                    display: " inline-block", width: " 100 % ", height: " 168px", position: " relative"
                                }}>
                                    <Image width={300} height={250} alt="a" className="border" style={{
                                        width: " 100 % ", height: " 100 % "
                                    }}
                                        src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                </Link>
                                <Link href="/" className="title3" style={{
                                    display: "inline-block", width: " 100 % ", padding: " 0  0 0 8px"
                                }}>
                                    hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao!!hot girl tram
                                    anh noi nhu con lao!!
                                </Link>
                            </li >
                            <li className="col-span-3">
                                <Link href="/" style={{
                                    display: " inline-block", width: " 100 % ", height: " 168px", position: " relative"
                                }}>
                                    <Image width={300} height={250} alt="a" className="border" style={{
                                        width: " 100 % ", height: " 100 % "
                                    }} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                </Link>
                                <Link href="/" className="title3" style={{
                                    display: "inline-block", width: " 100 %", padding: " 0  0 0 8px"
                                }}>
                                    hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao!!hot girl tram
                                    anh noi nhu con lao!!
                                </Link>
                            </li >
                        </ul >
                    </div >

                </section >
                <Suspense>

                    <section className="col-span-12">
                        <div className=" grid grid-cols-12 gap-4 2xl:px-44" style={{ marginBottom: " 40px" }} >
                            <div className="col-span-9">
                                <div className="my-4 overflow-auto">
                                    <div className="float-left w-4/12" style={{ verticalAlign: " top" }}>
                                        <Link href="/" style={{ width: " 100%", height: " 100%" }}>
                                            <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </Link>
                                    </div>
                                    <div className="float-left w-8/12" style={{
                                        height: " 100%", padding: " 0  0 0 8px"
                                    }}>
                                        <Link href="/" style={{
                                            paddingBottom: " 10px"
                                        }} className="title3">
                                            hot2 girl2 tram anh noi nhu con lao!!!hot girl tram anh noi nhu con lao!!hot girl tram
                                            anh noi nhu con lao!!

                                        </Link>
                                        <p style={{
                                            marginBottom: " 5px"
                                        }}>
                                            hot girl tr hot girl tram anh noi nhu con lao
                                            !!!hot girl tram a hot girl tram anh noi nhu con la
                                            hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                        </p>
                                        <div style={{
                                            textAlign: " right"
                                        }}>
                                            <Link href="/" className="title3">tin ICT
                                            </Link>
                                            <span style={{
                                                marginLeft: " 20px"
                                            }}>
                                                3 gio truoc
                                            </span >
                                        </div >
                                    </div >
                                </div >

                                <div className='lagre my-4 overflow-auto' style={{
                                    marginBottom: " 36px"
                                }}>
                                    <div className="float-left w-4/12" style={{
                                        verticalAlign: " top "
                                    }}>
                                        <Link href="/" style={{ width: " 100%", height: " 100%" }}>
                                            <Image width={300} height={250} alt="a" className="border" style={{
                                                width: " 100%", minHeight: " 360px"
                                            }}
                                                src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </Link>
                                    </div >
                                    <div className="float-left w-8/12" style={{
                                        height: " 100 %", padding: " 0  0 0 8px"
                                    }} >
                                        <Link href="/" className="title3">
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram
                                            anh noi nhu con lao!!

                                        </Link>
                                        <p style={{ paddingTop: " 10px", marginBottom: " 5px" }}>
                                            hot girl tr hot girl tram anh noi nhu con lao
                                            !!!hot girl tram a hot girl tram anh noi nhu con la
                                            hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                        </p>
                                        <div style={{ textAlign: " right" }}>
                                            <Link href="/" className="title3">tin ICT
                                            </Link>
                                            <span style={{
                                                marginLeft: " 20px"
                                            }} >
                                                3 gio truoc
                                            </span >
                                        </ div >
                                        <ul className="list-disc pl-5 ">
                                            <li className="my-4 leading-5">
                                                <Link className="text-red-500 font-semibold" href="">Giàu cỡ thần tiên tỷ tỷ Đặng Thu Thảo
                                                    cũng
                                                    săn đồ bình
                                                    dân trên
                                                    Shein, giá chưa
                                                    đến 400k mà diện lên sang chói mắt</Link>
                                            </li>
                                            <li className="my-4 leading-5">
                                                <Link className="text-red-500 font-semibold" href="">Giàu cỡ thần tiên tỷ tỷ Đặng Thu Thảo
                                                    cũng
                                                    săn đồ bình
                                                    dân trên
                                                    Shein, giá chưa
                                                    đến 400k mà diện lên sang chói mắt</Link>
                                            </li>
                                            <li className="my-4 leading-5">
                                                <Link className="text-red-500 font-semibold" href="">Giàu cỡ thần tiên tỷ tỷ Đặng Thu Thảo
                                                    cũng
                                                    săn đồ bình
                                                    dân trên
                                                    Shein, giá chưa
                                                    đến 400k mà diện lên sang chói mắt</Link>
                                            </li>

                                        </ul>
                                    </div >
                                </div >
                                <div className="ads" style={{ marginBottom: " 40px" }}>
                                    <AdPanel728x90 />
                                </div>
                                <div className="clear-both overflow-auto" style={{ marginBottom: " 36px" }}>
                                    <div className="w-4/12 float-left"  >
                                        <Link href="/" style={{ width: " 100%", height: " 100%" }}>
                                            <Image width={300} height={250} alt="a" className="border" style={{ width: " 100 % ", height: " 100 % " }}
                                                src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                    </div >
                                    <div className="w-8/12 float-left" style={{ height: " 100 %", padding: " 0  0 0 8px" }}>
                                        <Link href="/" className="title3">
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram
                                            anh noi nhu con lao !!

                                        </Link>
                                        <p style={{ paddingTop: " 10px", marginBottom: " 5px" }}>
                                            hot girl tr hot girl tram anh noi nhu con lao
                                            !!!hot girl tram a hot girl tram anh noi nhu con la
                                            hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                        </p>
                                        <div style={{ textAlign: " right" }}>
                                            <Link href="/" className="title3">tin ICT
                                            </Link>
                                            <span style={{ marginLeft: " 20px" }}>
                                                3 gio truoc
                                            </span >
                                        </div >
                                    </div >
                                </div >
                                <div className="clear-both overflow-auto" style={{ marginBottom: " 36px" }}>
                                    <div className="w-4/12 float-left"  >
                                        <Link href="/" style={{ width: " 100%", height: " 100%" }}>
                                            <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                    </div >
                                    <div className="w-8/12 float-left" style={{
                                        height: " 100 % ", padding: " 0  0 0 8px"
                                    }}>
                                        <Link href="/" className="title3">
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram
                                            anh noi nhu con lao !!

                                        </Link>
                                        <p style={{ paddingTop: " 10px", marginBottom: " 5px" }}>
                                            hot girl tr hot girl tram anh noi nhu con lao
                                            !!!hot girl tram a hot girl tram anh noi nhu con la
                                            hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                        </p>
                                        <div style={{ textAlign: " right" }}>
                                            <Link href="/" className="title3">tin ICT
                                            </Link>
                                            <span style={{ marginLeft: " 20px" }}>
                                                3 gio truoc
                                            </span >
                                        </div >
                                    </div >
                                </div >
                                <div className="clear-both overflow-auto special p-5" style={{
                                    marginBottom: " 36px"
                                }}>
                                    <div className="w-4/12 float-left"  >
                                        <Link href="/" style={{
                                            width: " 100 % ", height: " 100% "
                                        }} >
                                            < Image width={300} height={250} alt="a" className="border" style={{ width: " 100 % ", height: " 100 % " }}
                                                src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                    </div >
                                    <div className="w-8/12 float-left" style={{
                                        height: " 100 % ", padding: " 0  0 0 8px"
                                    }}>
                                        <Link href="/" className="title3">
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram
                                            anh noi nhu con lao!!

                                        </Link>
                                        <p style={{ paddingTop: " 10px", marginBottom: " 5px" }}>
                                            hot girl tr hot girl tram anh noi nhu con lao
                                            !!!hot girl tram a hot girl tram anh noi nhu con la
                                            hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                        </p>
                                        <div style={{ textAlign: " right" }}>
                                            <Link href="/" className="title3">tin ICT
                                            </Link>
                                            <span style={{ marginLeft: " 20px" }}>
                                                3 gio truoc
                                            </span >
                                        </div >
                                    </div >
                                </div >


                                {/* {{-- <div className='lagre' style={{marginBottom:" 36px"}}>
                    <div style={{verticalAlign:" top display:" inline-block", width:" 36%">
                        <Link href="/" style={{width:" 100%",height:" 100%"}}>
                            <Image width={300} height={250} alt="a" className="border" style={{width:" 100%",height:" 100%"
                                src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                        </Link>
                    </div>
                    <div style={{" height:" 100%", display:" inline-block", width:" 64%", padding:" 0  0 0 8px"}>
                        <Link href="/" className="title3">
                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram
                            anh noi nhu con lao !!

                        </Link>
                        <p style={{paddingTop:" 10px",marginBottom:" 5px"}}>
                            hot girl tr hot girl tram anh noi nhu con lao
                            !!!hot girl tram a hot girl tram anh noi nhu con la
                            hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                        </p>
                        <div style={{textAlign:" right"}}>
                            <Link href="/" className="title3">tin ICT
                            </Link>
                            <span style={{marginLeft:" 20px"}}>
                                3 gio truoc
                            </span>
                        </div>
                    </div>
                </div> --}} */}
                                < div className='lagre my-4 overflow-auto' style={{ marginBottom: " 36px" }} >
                                    <div className="float-left w-4/12" style={{
                                        verticalAlign: " top"
                                    }}>
                                        <Link href="/" style={{ width: " 100%", height: " 100%" }} >
                                            <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", minHeight: " 360px" }}
                                                src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </Link>
                                    </div >
                                    <div className="float-left w-8/12" style={{ height: " 100 %", padding: " 0  0 0 8px" }}>
                                        <Link href="/" className="title3">
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram
                                            anh noi nhu con lao !!

                                        </Link>
                                        <p style={{ paddingTop: " 10px", marginBottom: " 5px" }}>
                                            hot girl tr hot girl tram anh noi nhu con lao
                                            !!!hot girl tram a hot girl tram anh noi nhu con la
                                            hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                        </p>
                                        <div style={{ textAlign: " right" }}>
                                            <Link href="/" className="title3">tin ICT
                                            </Link>
                                            <span style={{ marginLeft: " 20px" }}>
                                                3 gio truoc
                                            </span >
                                        </ div >
                                        <ul className="list-disc pl-5 ">
                                            <li className="my-4 leading-5">
                                                <Link className="text-red-500 font-semibold" href="">Giàu cỡ thần tiên tỷ tỷ Đặng Thu Thảo
                                                    cũng
                                                    săn đồ bình
                                                    dân trên
                                                    Shein, giá chưa
                                                    đến 400k mà diện lên sang chói mắt</Link>
                                            </li>
                                            <li className="my-4 leading-5">
                                                <Link className="text-red-500 font-semibold" href="">Giàu cỡ thần tiên tỷ tỷ Đặng Thu Thảo
                                                    cũng
                                                    săn đồ bình
                                                    dân trên
                                                    Shein, giá chưa
                                                    đến 400k mà diện lên sang chói mắt</Link>
                                            </li>
                                            <li className="my-4 leading-5">
                                                <Link className="text-red-500 font-semibold" href="">Giàu cỡ thần tiên tỷ tỷ Đặng Thu Thảo
                                                    cũng
                                                    săn đồ bình
                                                    dân trên
                                                    Shein, giá chưa
                                                    đến 400k mà diện lên sang chói mắt</Link>
                                            </li>

                                        </ul>
                                    </div >
                                </div >
                            </div >
                            <div className="col-span-4 col-start-10">
                                <AdPanelSideBar />
                            </div>
                        </div >
                        <div className=" grid grid-cols-12 gap-4 2xl:px-44">
                            < div className="col-span-9" >
                                <div style={{
                                    marginBottom: " 36px"
                                }}>
                                    <ul>
                                        < li className="special clear-both overflow-auto" style={{
                                            padding: " 24px"
                                        }}>
                                            <Link href="/" className="float-left block w-4/12">
                                                < Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                    src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png"></Image>

                                            </Link>
                                            <div className="float-left  w-8/12" style={{ verticalAlign: " top " }} >
                                                <Link href="/" className="title3">
                                                    ashd sadd sdkasd addkjh

                                                </Link>
                                                <div style={{ textAlign: " right" }}>
                                                    <span>
                                                        100 views
                                                    </span>
                                                    <span style={{ marginLeft: " 10px" }}>
                                                        3 ngay truoc
                                                    </span>
                                                </div>
                                            </div >
                                        </li >

                                    </ul >
                                </div >
                                <div style={{
                                    marginBottom: " 40px"
                                }}>
                                    <AdPanel728x90 />
                                </div >
                                <div className="overflow-auto clear-both" style={{
                                    marginBottom: " 36px"
                                }}>
                                    <div className="w-4/12 float-left"                                 >
                                        <Link href="/" style={{
                                            width: " 100 % ", height: " 100% "
                                        }} >
                                            < Image width={300} height={250} alt="a" className="border" style={{ width: " 100 % ", height: " 100 % " }}
                                                src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                    </div >
                                    <div className="w-8/12 float-left" style={{
                                        height: " 100 % ", padding: " 0  0 0 8px"
                                    }}>
                                        <Link href="/" className="title3">
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram
                                            anh noi nhu con lao!!

                                        </Link>
                                        <p style={{ paddingTop: " 10px", marginBottom: " 5px" }}>
                                            hot girl tr hot girl tram anh noi nhu con lao
                                            !!!hot girl tram a hot girl tram anh noi nhu con la
                                            hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                        </p>
                                        <div style={{ textAlign: " right" }}>
                                            <Link href="/" className="title3">tin ICT
                                            </Link>
                                            <span style={{ marginLeft: " 20px" }}>
                                                3 gio truoc
                                            </span>
                                        </div >
                                    </div >
                                </div >
                                <div className="overflow-auto clear-both" style={{
                                    marginBottom: " 36px"
                                }}>
                                    <div className="float-left w-4/12" style={{
                                        verticalAlign: " top "
                                    }}>
                                        <Link href="/" style={{ width: " 100%", height: " 100%" }}>
                                            <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                    </div >
                                    <div className="float-left w-8/12" style={{ height: " 100 %", padding: " 0  0 0 8px" }}>
                                        <Link href="/" className="title3">
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram
                                            anh noi nhu con lao !!

                                        </Link>
                                        <p style={{ paddingTop: " 10px", marginBottom: " 5px" }}>
                                            hot girl tr hot girl tram anh noi nhu con lao
                                            !!!hot girl tram a hot girl tram anh noi nhu con la
                                            hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                        </p>
                                        <div style={{ textAlign: " right" }}>
                                            <Link href="/" className="title3">tin ICT
                                            </Link>
                                            <span style={{
                                                marginLeft: " 20px"
                                            }} >
                                                3 gio truoc
                                            </ span>
                                        </div>
                                    </div >
                                </div >
                                <div className="overflow-auto clear-both" style={{
                                    marginBottom: " 36px"
                                }}>
                                    <div className="float-left w-4/12" style={{
                                        verticalAlign: " top"
                                    }}>
                                        <Link href="/" style={{
                                            width: " 100 % ", height: " 100 % "
                                        }}>
                                            < Image width={300} height={250} alt="a" className="border" style={{ width: " 100 % ", height: " 100 % " }} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                    </div >
                                    <div className="float-left w-8/12" style={{ height: " 100 %", padding: " 0  0 0 8px" }}>
                                        <Link href="/" className="title3">
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram
                                            anh noi nhu con lao !!

                                        </Link>
                                        <p style={{ paddingTop: " 10px", marginBottom: " 5px" }}>
                                            hot girl tr hot girl tram anh noi nhu con lao
                                            !!!hot girl tram a hot girl tram anh noi nhu con la
                                            hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                        </p>
                                        <div style={{ textAlign: " right" }}>
                                            <Link href="/" className="title3">tin ICT
                                            </Link>
                                            <span style={{ marginLeft: " 20px" }}>
                                                3 gio truoc
                                            </span >
                                        </div >
                                    </div >
                                </div >
                                <div className="special">
                                    <div style={{
                                        marginBottom: " 8px"
                                    }} >
                                        <h2 className="text_decor" style={{
                                            display: " inline"
                                        }}>
                                            Đề xuất
                                        </h2>
                                    </div >
                                    <div className='grid grid-cols-12 gap-2 ' style={{ marginBottom: " 36px" }}>
                                        <div className='col-span-8'>
                                            <Link href="/" style={{
                                                width: " 100%", display: " block"
                                            }}>
                                                <Image width={300} height={250} alt="a" className="border"
                                                    src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <div style={{ display: " inline - block", padding: " 0  0 0 8px" }}>
                                                <Link href="/" className="title3">
                                                    hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot
                                                    girl tram anh noi nhu con lao !!

                                                </Link>
                                                <p style={{ paddingTop: " 10px", marginBottom: " 5px" }}>
                                                    hot girl tr hot girl tram anh noi nhu con lao
                                                    !!!hot girl tram a hot girl tram anh noi nhu con la
                                                    hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                                </p>
                                                <div style={{ textAlign: " right" }}>
                                                    <Link href="/" className="title3">tin ICT
                                                    </Link>
                                                    <span style={{ marginLeft: " 20px" }}>
                                                        3 gio truoc
                                                    </span >
                                                </div >
                                            </div >
                                        </div >
                                        <div className="col-span-4">
                                            <div>
                                                <Link href="/" style={{ display: " inline-block", width: " 100%" }}>
                                                    <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                        src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                                </Link>
                                                <Link href="/" className="title3" style={{
                                                    verticalAlign: " top"
                                                }}> hfsdks kfhsklhf
                                                    snaklh afkn nsafj asjfwie fsdknf s, f
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="/" style={{ display: " inline-block", width: " 100%" }}>
                                                    <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                        src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                                </Link>
                                                <Link href="/" className="title3" style={{ verticalAlign: " top" }} > hfsdks kfhsklhf
                                                    snaklh afkn nsafj asjfwie fsdknf s,f
                                                </Link>
                                            </div >
                                        </div >
                                    </div >
                                </ div >
                                <div className="grid grid-cols-12 gap-2">
                                    <div className="col-span-6">
                                        <h2>
                                            <Link href="/" className='title2'>BDS
                                            </Link>
                                        </h2>
                                        <div>
                                            <Link href="/" style={{ display: " inline-block", width: " 100%" }}>
                                                <Image width={300} height={250} alt="a" className="border" style={{
                                                    width: " 100 % ", height: " 100% "
                                                }}
                                                    src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href="/" className="title3" style={{
                                                verticalAlign: " top"
                                            }}> hfsdks kfhsklhf snaklh
                                                afkn nsafj asjfwie fsdknf s, f
                                            </Link>
                                        </div>
                                        <Link href="/" className="title4" style={{ display: " block" }}> adajk sldk daaldj
                                        </Link>

                                        <Link href="/" className="title4" style={{ display: " block" }}>ad aajka aaasdaldkaa ldj!!
                                        </Link>
                                    </div >
                                    <div className="col-span-6">
                                        <h2>
                                            <Link href="/" className="title2">BDS
                                            </Link>
                                        </h2>
                                        <div>
                                            <Link href="/" style={{ display: " inline-block", width: " 100%" }}>
                                                <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                    src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href="/" className="title3" style={{ verticalAlign: " top" }}> hfsdks kfhsklhf snaklh
                                                afkn nsafj asjfwie fsdknf s,f
                                            </Link>
                                        </div >
                                        <Link href="/" className="title4" style={{ display: " block" }}> adajkldkaldj
                                        </Link>

                                        <Link href="/" className="title4" style={{ display: "  block" }}> adajkldkaldj
                                        </Link>
                                    </div >
                                </div > adajkldkaldj
                                < div className="grid grid-cols-12 gap-4" >
                                    <div className="col-span-6">
                                        <h2>
                                            <Link href="/" className="title2">BDS
                                            </Link>
                                        </h2>
                                        <div>
                                            <Link href="/" style={{ display: " inline-block", width: " 100%" }}>
                                                <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                    src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href="/" className="title3" style={{ verticalAlign: " top" }}> hfsdks kfhsklhf snaklh
                                                afkn nsafj asjfwie fsdknf s,f
                                            </Link>
                                        </div >
                                        <Link href="/" className="title4" style={{ display: " block" }}> adajkldkaldj
                                        </Link>

                                        <Link href="/" className="title4" style={{ display: " block" }}> adajkldkaldj
                                        </Link>
                                    </div >
                                    <div className="col-span-6">
                                        <h2>
                                            <Link href="/" className="title2">BDS
                                            </Link>
                                        </h2>
                                        <div>
                                            <Link href="/" style={{ display: " inline-block", width: " 100%" }}>
                                                <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                    src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href="/" className="title3" style={{ verticalAlign: " top" }}> hfsdks kfhsklhf snaklh
                                                afkn nsafj asjfwie fsdknf s,f
                                            </Link>
                                        </div >
                                        <Link href="/" className="title4" style={{ display: " block" }}> adajkldkaldj
                                        </Link>

                                        <Link href="/" className="title4" style={{ display: "  block" }}> adajkldkaldj
                                        </Link>
                                    </div >
                                </div >
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="special col-span-6">
                                        <h2>
                                            <Link href="/" className="title2">BDS
                                            </Link>
                                        </h2>
                                        <div>
                                            <Link href="/" style={{ display: " inline-block", width: " 100%" }}>
                                                <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                    src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href="/" className="title3" style={{ verticalAlign: " top" }}> hfsdks kfhsklhf snaklh
                                                afkn nsafj asjfwie fsdknf s,f
                                            </Link>
                                        </div>
                                        <Link href="/" className="title4" style={{ display: " block" }}>adajkldkaldj
                                        </Link>

                                        <Link href="/" className="title4" style={{ display: " block" }}>adajkldkaldj
                                        </Link>
                                    </div >
                                    <div className="col-span-6">
                                        <h2>
                                            <Link href="/" className="title2">BDS
                                            </Link>
                                        </h2>
                                        <div>
                                            <Link href="/" style={{ display: " inline-block", width: " 100%" }}>
                                                <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                    src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href="/" className="title3" style={{ verticalAlign: " top" }}> hfsdks kfhsklhf snaklh
                                                afkn nsafj asjfwie fsdknf s,f
                                            </Link>
                                        </div >
                                        <Link href="/" className="title4" style={{ display: " block" }}> adajkldkaldj
                                        </Link>

                                        <Link href="/" className="title4" style={{ display: "  block" }}> adajkldkaldj
                                        </Link>
                                    </div >
                                </div >
                                <div className=" grid grid-cols-12 gap-4" style={{
                                    marginBottom: " 36px"
                                }}>
                                    <div className="special col-span-4">
                                        < h2 >
                                            <Link href="/" className="title2">BDS
                                            </Link>
                                        </ h2>
                                        <div>
                                            <Link href="/" style={{ display: " inline-block", width: " 100%" }}>
                                                <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                    src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href="/" className="title3" style={{
                                                verticalAlign: " top"
                                            }}> hfsdks kfhsklhfwie
                                                fsdknf s, f
                                            </Link>
                                            <span style={{ fontSize: " 13px", color: " #777" }} > 4 gio truoc</span>
                                        </div >
                                        <Link href="/" className="title4" style={{
                                            display: " block"
                                        }}> adajkldkaldj
                                        </Link>

                                        <Link href="/" className="title4" style={{ display: " block" }}> adajkldkaldj
                                        </Link>
                                    </div >
                                    <div className="col-span-4">
                                        <h2>
                                            <Link href="/">BDS
                                            </Link>
                                        </h2>
                                        <div>
                                            <Link href="/" style={{ display: " inline-block", width: " 100%" }}>
                                                <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                    src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href="/" className="title3" style={{ verticalAlign: " top" }}> hfsdks kfhsklhf snaklh
                                                afkn nsafj asjfwie fsdknf s,f
                                            </Link>
                                            <span style={{ fontSize: " 13px", color: " #777" }} > 4 gio truoc</span>

                                        </div >
                                        <Link href="/" className="title4" style={{ display: " block" }}>adajkldkaldj
                                        </Link>

                                        <Link href="/" className="title4" style={{ display: "  block" }}>adajkldkaldj
                                        </Link>
                                    </div >
                                    <div className="col-span-4">
                                        <h2>
                                            <Link href="/" className="title2">BDS
                                            </Link>
                                        </h2>
                                        <div>
                                            <Link href="/" style={{ display: " inline-block", width: " 100%" }}>
                                                <Image width={300} height={250} alt="a" className="border" style={{ width: " 100%", height: " 100%" }}
                                                    src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href="/" className="title3" style={{ verticalAlign: " top" }}> hfsdks kfhsklhf snaklh
                                                afkn nsafj asjfwie fsdknf s,f
                                            </Link>
                                            <span style={{ fontSize: " 13px", color: " #777" }}> - 4 gio truoc</span>

                                        </div >
                                        <Link href="/" className="title4" style={{ display: " block" }}>adajkldkaldj
                                        </Link>

                                        <Link href="/" className="title4" style={{ display: "  block" }}>adajkldkaldj
                                        </Link>
                                    </div >
                                </div >
                            </div >
                            <div className="col-span-4 col-start-10">
                                HotTags
                                <AdPanelSideBar />
                            </div>


                        </div >
                    </section >
                </Suspense>

            </div >
        </>
    )
}
