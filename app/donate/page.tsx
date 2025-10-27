import { BlurFade } from "@/components/ui/blur-fade";
import DonationForm from "@/app/donate/_components/DonationForm";

const BLUR_FADE_DELAY = 0.04;

export default function Donate() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-8 p-6 pb-20">
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Help us sustain Our <span className="text-primary">Mission</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Lorem ipsum
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="w-full max-w-3xl">
          <DonationForm />
        </div>
      </BlurFade>
    </div>
  );
}
