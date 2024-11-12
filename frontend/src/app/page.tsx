import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { PredictAttackTypeForm } from "@/components/predict-attack-type-form";

export default function Home() {
  return (
    <section className="h-full py-16">
      <MaxWidthWrapper className="space-y-20">
        <h1 className="font-semibold text-center text-2xl">
          Misbehaviour Detection in Ad-Hoc <br />
          Networks Using Machine Learning
        </h1>
        <PredictAttackTypeForm />
      </MaxWidthWrapper>
    </section>
  );
}
