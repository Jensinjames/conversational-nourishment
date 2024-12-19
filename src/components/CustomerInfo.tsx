import { Card } from "@/components/ui/card";

interface CustomerInfoProps {
  name: string;
  email: string;
  phone: string;
}

export const CustomerInfo = ({ name, email, phone }: CustomerInfoProps) => {
  return (
    <Card className="p-6 glass-panel animate-in">
      <h2 className="text-2xl font-semibold mb-6">Customer Information</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Name</span>
          <span className="font-medium">{name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Email</span>
          <span className="font-medium">{email}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Phone</span>
          <span className="font-medium">{phone}</span>
        </div>
      </div>
    </Card>
  );
};