"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import goDevLogo from "@/assets/img/goedv.png";
import ugariteLogo from "@/assets/img/ugarite.png";
import cubetaLogo from "@/assets/img/cubeta.png";
import Link from "next/link";
import { Project } from "@/core";

const companies: Project[] = [
  {
    logo: goDevLogo.src,
    title: "GoDev",
    link: "go-dev",
    url: "https://godev.app/",
  },
  {
    logo: ugariteLogo.src,
    title: "Ugaritech",
    link: "ugaritech",
    url: "https://ugaritech.ca/",
  },
  {
    logo: cubetaLogo.src,
    title: "Cubeta",
    link: "cubeta",
    url: "https://cubeta.io/",
  },
  {
    logo: "/placeholder.svg?height=50&width=100",
    title: "Big Bang Its",
    link: "big-bang",
    url: "https://its.ae/",
  },
];

function MyWorks() {
  return (
    <section
      className={`relative min-h-screen flex flex-col items-center bg-primary`}
      aria-hidden={true}
      id="work"
    >
      <div className="sm:w-[75%] w-full flex flex-col mt-28 px-12  ">
        <h1 className="text-3xl font-bold text-center mb-8">
          A collection of companies that have worked with them
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 ">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden cursor-pointer">
                <Link href={`/company/${company.link}`} passHref>
                  <CardHeader className="p-12 bg-secondary">
                    <Image
                      src={company.logo}
                      alt={`${company.title} logo`}
                      width={100}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                  </CardHeader>
                </Link>
                <CardContent className="p-4 bg-[#e6e6e6]">
                  <CardTitle className="text-xl mb-2">
                    {company.title}
                  </CardTitle>
                  <motion.p
                    className="text-sm text-muted-foreground"
                    whileHover={{ color: "#2563eb" }}
                  >
                    {company.url}
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
