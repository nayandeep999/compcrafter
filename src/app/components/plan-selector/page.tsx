"use client";
import { useState } from "react";
import Wrapper from "../(shared)/Wrapper";
import { PLanSelctorCode } from "./PlanSelectorCode";
import { BadgePercent, Sparkle, Gem, Crown, ArrowRight } from "lucide-react";
import { Plan, PlanSelector, PlanSelectorGroup } from "./PlanSelector";
import { PlanSelectorUsage } from "./PlanSelectorUsage";

const PlanSelectorPage = () => {
  const [plan, setPlan] = useState<string>("");

  const imports = `import { Plan, PlanSelector, PlanSelectorGroup } from "compcrafter"`;

  return (
    <Wrapper
      title="Plan Selector"
      description="A component that allows users to select from a set of predefined plans, 
      displaying each plan's features, price, and other details."
      component={
        <div className="flex flex-col items-center justify-center py-5 px-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-100">
            Choose Your Plan
          </h2>
          <hr className="my-3 w-56" />

          <PlanSelectorGroup
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <div className="flex gap-4 justify-center flex-col">
              <PlanSelector value="free">
                <Plan
                  icon={<BadgePercent className="text-gray-100" />}
                  title="Free"
                  features={["SD (480p)", "Mobile", "Ads"]}
                  price={0}
                />
              </PlanSelector>
              <PlanSelector value="basic">
                <Plan
                  icon={<Sparkle className="text-gray-100" />}
                  title="Basic"
                  features={["HD (720p)", "1 Device"]}
                  price={4.99}
                />
              </PlanSelector>
              <PlanSelector value="standard">
                <Plan
                  icon={<Gem className="text-gray-100" />}
                  title="Standard"
                  features={["Full HD (1080p)", "2 Devices"]}
                  price={9.99}
                />
              </PlanSelector>
              <PlanSelector value="premium">
                <Plan
                  icon={<Crown className="text-gray-100" />}
                  title="Premium"
                  features={["Ultra HD (4K) + HDR", "4 Devices"]}
                  price={14.99}
                />
              </PlanSelector>
            </div>
          </PlanSelectorGroup>

          <hr className="my-3 w-56" />
          <button
            className={`
          flex gap-4 items-center px-6 py-3 rounded-lg
          bg-violet-800 hover:bg-violet-700
          font-semibold text-lg text-white text-balance
        `}
          >
            Proceed with {plan || "a"} plan
            <ArrowRight />
          </button>
        </div>
      }
      code={PLanSelctorCode}
      embedId="dciqfn6vRxc"
      imports={imports}
      usage={PlanSelectorUsage}
    />
  );
};

export default PlanSelectorPage;
