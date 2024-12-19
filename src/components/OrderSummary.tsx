import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
  onGenerateReceipt: () => void;
}

export const OrderSummary = ({ subtotal, tax, total, onGenerateReceipt }: OrderSummaryProps) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateReceipt = async () => {
    setIsGenerating(true);
    try {
      await onGenerateReceipt();
      toast({
        title: "Receipt Generated",
        description: "Your order receipt has been generated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate receipt. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="p-6 glass-panel animate-in">
      <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Button
        className="w-full mt-6"
        onClick={handleGenerateReceipt}
        disabled={isGenerating}
      >
        {isGenerating ? "Generating..." : "Generate Order Receipt"}
      </Button>
    </Card>
  );
};