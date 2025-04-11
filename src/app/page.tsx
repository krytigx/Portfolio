import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <section className="pb-16 pt-10 md:pt-20 md:pb-32">
        <div className="flex flex-col md:flex-row gap-8">
      
      

      {/* Text Section */}
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <h1 className="mb-4" text-5xl font-bold">
          KRITIG<br />GARG
        </h1>
        <div className="mb-4">
          <Link
            href="mailto:tejasgarg421@gmail.com"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center"
          >
            tejasgarg421@gmail.com
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
        
      </div>
      {/* Photo Section */}
      <div className="w-full md:w-1/3">
        <img
          src="https://raw.githubusercontent.com/krytigx/Portfolio_images/refs/heads/main/555_timer.jpg"
          
          alt="Tejas Garg"
          className="rounded-2xl shadow-lg object-cover w-full h-auto"
        />
      </div>
        <p className="text-lg md:text-xl leading-relaxed">
          Hello, I'm a freelancer specializing in minimal design with 10 years of expertise — based in Tokyo, working remote. Let's create!
        </p>
    </div>
  </section>


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


