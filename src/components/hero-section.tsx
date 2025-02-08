import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "@phosphor-icons/react";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-bl from-secondary via-background to-primary/10" /> */}
      <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              اكتشف بودكاست مفضلك القادم
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              استكشف آلاف البودكاست في أي موضوع. ابدأ الاستماع الآن وأشعل فضولك.
            </p>
            <div className="mt-10">
              <Button size="lg" className="rounded-full">
                ابدأ الاستماع
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/podcast-man.jpg"
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
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
