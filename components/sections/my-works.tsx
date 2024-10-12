"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import ugariteLogo from "@/assets/img/ugarite.png";
import cubetaLogo from "@/assets/img/cubeta.png";
import Link from "next/link";

interface Project {
  logo: string;
  title: string;
  url: string;
}

const projects: Project[] = [
  {
    logo: "/placeholder.svg?height=50&width=100",
    title: "GoDev",
    url: "https://godev.app/",
  },
  {
    logo: ugariteLogo.src,
    title: "Ugaritech",
    url: "https://ugaritech.ca/",
  },
  {
    logo: cubetaLogo.src,
    title: "Cubeta",
    url: "https://cubeta.io/",
  },
  {
    logo: "/placeholder.svg?height=50&width=100",
    title: "Big Bang Its",
    url: "https://its.ae/",
  },
];

function MyWorks() {
  return (
    <section
      className={`relative min-h-screen flex flex-col items-center bg-primary`}
      aria-hidden={true}
    >
      <div className="sm:w-[75%] w-full flex flex-col mt-28 px-12  ">
        <h1 className="text-2xl font-bold text-center mb-8">
          Selected work I have taken on in the past.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden cursor-pointer">
                <Link href={project.title} passHref>
                  <CardHeader className="p-12 bg-secondary">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={100}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                  </CardHeader>
                </Link>
                <CardContent className="p-4 bg-[#e6e6e6]">
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                  <motion.p
                    className="text-sm text-muted-foreground"
                    whileHover={{ color: "#2563eb" }}
                  >
                    {project.url}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default MyWorks;
