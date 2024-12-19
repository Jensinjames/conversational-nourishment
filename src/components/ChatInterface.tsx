import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ChatInterface() {
  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="flex flex-row items-center gap-3 p-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          <span className="font-semibold">Active</span>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-[400px] pr-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-start">
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm">Hello! How can I assist you today?</p>
              </div>
            </div>
            <div className="flex gap-3 items-start justify-end">
              <div className="rounded-lg bg-primary text-primary-foreground p-3">
                <p className="text-sm">I need help with my order.</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4">
        <form className="flex w-full gap-2">
          <Input className="flex-1" placeholder="Type your message..." type="text" />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}