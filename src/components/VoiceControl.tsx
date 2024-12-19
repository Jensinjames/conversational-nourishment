import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, MicOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useConversation } from "@11labs/react";

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

  const startListening = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: "your-agent-id", // Replace with your actual agent ID
      });
      setIsListening(true);
      toast({
        title: "Voice Control Active",
        description: "Listening for your order...",
      });
    } catch (error) {
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
    </Card>
  );
};