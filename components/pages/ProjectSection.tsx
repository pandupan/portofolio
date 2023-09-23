'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Button from "../core/Button"
import { motion } from "framer-motion"

const ProjectSection = () => {
  return (
    <section id="project">
      <div className="container px-20 w-full h-full mx-auto flex flex-col my-10 ">
      <div className="text-indigo-500 text-[32px] font-semibold pb-4 ">My Project</div>
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-5"
          initial={{y:100, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.9,delay:0.5}}
        >
          <Card className="bg-[#1b153d] text-white w-[400px] h-[480px] rounded-md">
            <CardHeader>
              <CardTitle className="relative w-full h-[170px] rounded-md">
                <Image src="/image/techdigi.png" alt="Project" fill={true}/>
              </CardTitle>
              <CardDescription>
                <span className="mt-2">Techdigi | Commision Project</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-justify">
              <span>Pembuatan profile company perusahaan yang terletak dikota bandung, perusahaan ini bergerak dalam ceveloper sofwaaare, design, photography, serta dalam bidang networking. Selain  itu perusahaan ini juga aktif dalam kegiataan organisasi salah satu partai diIndonesia.</span>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="https://techdigi.vercel.app/">
                <Button title="Live Demo Here!"/>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="bg-[#1b153d] text-white w-[400px] h-[480px] rounded-md">
            <CardHeader>
              <CardTitle className="relative w-full h-[170px] rounded-md">
                <Image src="/image/stunting.png" alt="Project" fill={true}/>
              </CardTitle>
              <CardDescription>
                <span className="mt-2">Stunting | Lecturer Project</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-justify">
              <span>Proyek ini merupakan salah satu penelitian yang dilakukan dosen di Universitas Siliwangi. Website ini akan menjadi sarana yang efektif untuk melacak perkembangan anak-anak, memberikan informasi penting kepada orangtua, serta memberikan wadah bagi para peneliti dan pihak terkait untuk berkolaborasi dalam upaya menangani masalah stunting.</span>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="https://techdigi.vercel.app/">
                <Button title="Live Demo Here!"/>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="bg-[#1b153d] text-white w-[400px] h-[480px] rounded-md">
            <CardHeader>
              <CardTitle className="relative w-full h-[170px] rounded-md">
                <Image src="/image/emciar.png" alt="Project" fill={true}/>
              </CardTitle>
              <CardDescription>
                <span className="mt-2">Emciar | Commision Project</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-justify">
              <span>
Pembuatan website untuk perusahaan ketenagakerjaan di India memfasilitasi penyediaan tenaga kerja terampil dan berkualitas kepada berbagai sektor industri di negara tersebut. Website ini akan menjadi platform yang informatif dan efisien bagi perusahaan klien yang mencari pekerja berkualitas, serta membuka peluang karier yang lebih baik bagi pencari kerja di India.</span>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="https://emciar-xi.vercel.app/">
                <Button title="Live Demo Here!"/>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="bg-[#1b153d] text-white w-[400px] h-[480px] rounded-md">
            <CardHeader>
              <CardTitle className="relative w-full h-[170px] rounded-md">
                <Image src="/image/veemost.png" alt="Project" fill={true}/>
              </CardTitle>
              <CardDescription>
                <span className="mt-2">Veemost | Commision Project</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-justify">
              <span>Pembuatan website e-commerce untuk perusahaan yang berfokus pada distribusi teknologi jaringan, seperti router dan perangkat sejenisnya. Melalui website ini, perusahaan dapat menyediakan platform yang mudah digunakan bagi pelanggan untuk menjelajahi dan membeli produk-produk teknologi jaringan terkemuka. </span>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="https://techdigi.vercel.app/">
                <Button title="Live Demo Here!"/>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="bg-[#1b153d] text-white w-[400px] h-[480px] rounded-md">
            <CardHeader>
              <CardTitle className="relative w-full h-[170px] rounded-md">
                <Image src="/image/reactjob.png" alt="Project" fill={true}/>
              </CardTitle>
              <CardDescription>
                <span className="mt-2">Job Seeker | Commision Project</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-justify">
              <span>Pembuatan website lowongan pekerjaan dengan menggunakan React adalah untuk mempelajari fundamental React dan mengaplikasikan manipulasi API dalam pengembangan web. Dalam proyek ini, Saya membangun antarmuka pengguna yang dinamis dan responsif dengan menggunakan komponen React.</span>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="https://job-seeker-lowongan-pekerjaan-react-js.vercel.app/">
                <Button title="Live Demo Here!"/>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="bg-[#1b153d] text-white w-[400px] h-[480px] rounded-md">
            <CardHeader>
              <CardTitle className="relative w-full h-[170px] rounded-md">
                <Image src="/image/vimoni.png" alt="Project" fill={true}/>
              </CardTitle>
              <CardDescription>
                <span className="mt-2">Vimnoni | Commision Project</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-justify">
              <span>Pembuatan website penyedia API di negara Turki dengan tampilan yang interaktif adalah sebuah proyek yang menarik dan penting untuk mendukung pertumbuhan teknologi informasi di negara tersebut. Dengan tampilan yang interaktif, pengguna akan dapat dengan mudah mengakses dan memanfaatkan API yang disediakan, menjadikan pengalaman mereka lebih baik.</span>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="https://techdigi.vercel.app/">
                <Button title="Live Demo Here!"/>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-[#1b153d] text-white w-[400px] h-[480px] rounded-md">
            <CardHeader>
              <CardTitle className="relative w-full h-[170px] rounded-md">
                <Image src="/image/dapp.png" alt="Project" fill={true}/>
              </CardTitle>
              <CardDescription>
                <span className="mt-2">Dapp | Commision Project</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-justify">
              <span>Website blockchain ini merupakan sebuah platform inovatif yang bertujuan untuk menyediakan solusi terdepan dalam dunia teknologi distribusi. Melalui penggunaan teknologi blockchain yang aman dan terdesentralisasi, website ini memungkinkan pengguna untuk melakukan transaksi digital dengan cepat dan aman tanpa perantara.</span>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="https://d-app-theta.vercel.app/">
                <Button title="Live Demo Here!"/>
              </Link>
            </CardFooter>
          </Card>

        </motion.div>
      </div>
    </section>
  )
}

export default ProjectSection
