import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, MicOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useConversation } from "@11labs/react";

// Test credentials - will be replaced with real Toast API integration later
const TEST_MENU = {
  categories: [
    {
      name: "Burgers",
      items: [
        { name: "Classic Burger", price: 9.99 },
        { name: "Cheeseburger", price: 10.99 },
      ],
    },
    {
      name: "Drinks",
      items: [
        { name: "Cola", price: 2.99 },
        { name: "Water", price: 1.99 },
      ],
    },
  ],
};

export const VoiceControl = () => {
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();
  const conversation = useConversation();

  useEffect(() => {
    return () => {
      if (isListening) {
        conversation.endSession();
      }
    };
  }, [isListening, conversation]);

  const handleVoiceCommand = async (transcript: string) => {
    // Simple mock order processing logic
    const lowerTranscript = transcript.toLowerCase();
    const menuItems = TEST_MENU.categories.flatMap(cat => cat.items);
    
    const matchedItem = menuItems.find(item => 
      lowerTranscript.includes(item.name.toLowerCase())
    );

    if (matchedItem) {
      toast({
        title: "Order Received",
        description: `Adding ${matchedItem.name} to your order ($${matchedItem.price})`,
      });
    } else {
      toast({
        title: "Item Not Found",
        description: "Sorry, I couldn't find that item in our menu. Please try again.",
        variant: "destructive",
      });
    }
  };

  const startListening = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Using test agent ID - replace with actual Toast integration later
      await conversation.startSession({
        agentId: "test-agent",
        onMessage: (message) => {
          if (message.message) { // Changed from message.text to message.message
            handleVoiceCommand(message.message);
          }
        },
      });
      
      setIsListening(true);
      toast({
        title: "Voice Control Active",
        description: "Listening for your order...",
      });
    } catch (error) {
      console.error("Voice control error:", error);
      toast({
        title: "Error",
        description: "Failed to start voice control. Please check your microphone.",
        variant: "destructive",
      });
    }
  };

  const stopListening = async () => {
    await conversation.endSession();
    setIsListening(false);
    toast({
      title: "Voice Control Stopped",
      description: "Voice input has been stopped.",
    });
  };

  return (
    <Card className="p-6 glass-panel animate-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Voice Control</h2>
        <Button
          variant={isListening ? "destructive" : "default"}
          size="icon"
          onClick={isListening ? stopListening : startListening}
          className="w-12 h-12 rounded-full"
        >
          {isListening ? (
            <MicOff className="h-6 w-6" />
          ) : (
            <Mic className="h-6 w-6" />
          )}
        </Button>
      </div>
      <p className="text-muted-foreground mt-4">
        {isListening
          ? "Listening for your order..."
          : "Click the microphone to start ordering"}
      </p>
      <div className="mt-4 text-sm text-muted-foreground">
        <p>Test Menu Available:</p>
        <ul className="mt-2 space-y-1">
          {TEST_MENU.categories.map((category) => (
            <li key={category.name}>
              {category.name}: {category.items.map(item => item.name).join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};