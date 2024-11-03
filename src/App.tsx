import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
        Click me
      </Button>
    </div>
  );
}
