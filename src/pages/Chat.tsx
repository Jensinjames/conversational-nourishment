import { ChatInterface } from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Button variant="outline">← Back to Dashboard</Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Chat Support
          </h1>
        </div>
        <ChatInterface />
      </div>
    </div>
  );
};

export default Chat;