import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <section className="pb-16 pt-10 md:pt-20 md:pb-32">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">

          {/* Left Side: Name and Email */}
          <div className="flex-1">
            {/* Name: Slide from Top */}
            <motion.h1
              className="text-7xl md:text-[120px] font-extrabold leading-none mb-6"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              TEJAS<br />GARG
            </motion.h1>

            {/* Email: Slide from Left */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Link
                href="mailto:tejasgarg421@gmail.com"
                className="text-base opacity-80 hover:opacity-100 transition-opacity flex items-center"
              >
                tejasgarg421@gmail.com
                <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Image and Description */}
          <motion.div
            className="flex flex-col items-end gap-6 md:w-1/3"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <img
              src="https://raw.githubusercontent.com/krytigx/Portfolio_images/refs/heads/main/place_holder.jpg"
              alt="Tejas Garg"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
            />
            <p className="text-right text-lg md:text-xl leading-relaxed max-w-sm">
              Hello, I'm a freelancer specializing in minimal design with 10 years of expertise — based in Tokyo, working remote. Let's create!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

      <section className="py-16">
        <div className="flex justify-between items-center mb-10">
          <h5 className="text-sm font-medium opacity-70">work.</h5>
          <Link href="/works" className="text-sm hover:underline">
            Show More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link href="/works/stone-mind" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/709253059/205560863.jpeg"
                alt="Stone Mind"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <h4 className="text-lg font-medium">Stone Mind</h4>
            </div>
          </Link>

          <Link href="/works/violet-orbit" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/709253059/3225808702.png"
                alt="Violet Orbit"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <h4 className="text-lg font-medium">Violet Orbit</h4>
            </div>
          </Link>

          <Link href="/works/visual-screen-models" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/709253059/961028993.png"
                alt="Visual Screen Models"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <h4 className="text-lg font-medium">Visual Screen Models</h4>
            </div>
          </Link>

          <Link href="/works/flexible-area-models" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/709253059/3768869390.png"
                alt="Flexible Area Models"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <h4 className="text-lg font-medium">Flexible Area Models</h4>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="flex justify-between items-center mb-10">
          <h5 className="text-sm font-medium opacity-70">about.</h5>
          <Link href="/about" className="text-sm hover:underline">
            Show More
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <p className="text-lg md:text-xl leading-relaxed">
              I collaborate with businesses of all sizes worldwide, using the latest technologies. My designs have also earned multiple awards.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://ext.same-assets.com/709253059/2232509785.jpeg"
                alt="Designer working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


