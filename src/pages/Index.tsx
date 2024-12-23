import { useState } from "react";
import { VoiceControl } from "@/components/VoiceControl";
import { OrderSummary } from "@/components/OrderSummary";
import { CustomerInfo } from "@/components/CustomerInfo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const [orderDetails] = useState({
    subtotal: 0.0,
    tax: 0.0,
    total: 0.0,
    customer: {
      name: "John Doe",
      email: "john@example.com",
      phone: "(555) 123-4567",
    },
  });

  const handleGenerateReceipt = async () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Customer Interaction
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Voice-enabled ordering system
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <VoiceControl />
            <CustomerInfo {...orderDetails.customer} />
          </div>
          <div className="space-y-8">
            <OrderSummary
              subtotal={orderDetails.subtotal}
              tax={orderDetails.tax}
              total={orderDetails.total}
              onGenerateReceipt={handleGenerateReceipt}
            />
            <div className="flex justify-center">
              <Link to="/chat">
                <Button className="w-full" size="lg">
                  <MessageCircle className="mr-2" />
                  Open Chat Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;