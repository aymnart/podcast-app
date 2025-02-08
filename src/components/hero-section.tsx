import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "@phosphor-icons/react";
import { FC } from "react";
import heroMainImage from "@/assets/images/hero-main.jpg";

const Hero: FC = () => {
  return (
    <section className="container mx-auto pb-4 pt-6 md:py-10 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-[32px] font-bold tracking-tight leading-10 text-foreground md:text-5xl transition-all">
            اكتشف بودكاستك المفضل القادم
          </h1>
          <p className="text-md text-muted-foreground max-w-xl">
            استكشف آلاف البودكاست في أي موضوع. ابدأ الاستماع الآن وأشعل فضولك بتجربة جديدة من البودكاست.
          </p>
          <div className="mt-0 md:mt-1">
            <Button size="lg" className="rounded-full text-white">
              ابدأ الاستماع
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={heroMainImage}
              alt="غلاف البودكاست المميز"
              width={800}
              height={600}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <Button
              size="icon"
              variant="secondary"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-16 w-16"
            >
              <Play weight="fill" className="h-10 w-10" />
              <span className="sr-only">تشغيل البودكاست المميز</span>
            </Button>
          </div>
          <div className="absolute -right-4 -top-4 h-72 w-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -left-4 h-72 w-72 bg-primary/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
