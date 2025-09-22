import { Separator } from "@/components/ui/separator";

const Billing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6 text-center">
      <div>
        <h3 className="text-2xl font-semibold">
          💳 Billing Page
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          ⚙️ We’re working hard on this feature…  
          🚀 Updates coming soon! Stay tuned 😊
        </p>
      </div>
      <Separator className="w-1/2" />
    </div>
  );
};

export default Billing;
