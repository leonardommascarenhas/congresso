"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScheduleButton = () => {
  const handleScroll = (e: any) => {
    e.preventDefault();
    const target = document.querySelector("#schedule");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href="#schedule" onClick={handleScroll}>
      <Button
        variant="outline"
        size="lg"
        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent px-8 py-3">
        Ver programação completa
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </a>
  );
};

export default ScheduleButton;
