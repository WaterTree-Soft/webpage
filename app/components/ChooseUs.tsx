import React from "react";
import HeaderWithSubtitle from "./reusable/Header";
// import { Accordion, AccordionContent, AccordionItem } from "./ui/accordian";
// import { AccordionTrigger } from "@radix-ui/react-accordion";
import { Award, CheckCircle2, Clock, Users } from "lucide-react";
import { Accordion } from "./ui/accordian";
export const WhyChooseUs: React.FC = () => {
    const whyUsData = [
      {
        id: "expertise",
        title: "Technical Expertise",
        subtitle: "Certified professionals with cutting-edge knowledge",
        icon: "🏆",
        content:
          "Our team consists of certified professionals with years of experience in cutting-edge technologies. We stay updated with the latest industry trends and best practices to deliver solutions that are not just current, but future-ready.",
      },
      {
        id: "approach",
        title: "Client-Centric Approach",
        subtitle: "Building partnerships, not just projects",
        icon: "👥",
        content:
          "We believe in building long-term partnerships with our clients. Our approach involves understanding your unique business needs, providing transparent communication throughout the project, and delivering solutions that exceed expectations.",
      },
      {
        id: "delivery",
        title: "On-Time Delivery",
        subtitle: "Meeting deadlines without compromising quality",
        icon: "⏰",
        content:
          "We understand the importance of deadlines in business. Our project management methodology ensures timely delivery without compromising on quality. We provide regular updates and maintain clear timelines for all project milestones.",
      },
      {
        id: "quality",
        title: "Quality Assurance",
        subtitle: "Rigorous testing for exceptional results",
        icon: "✅",
        content:
          "Quality is at the core of everything we do. We follow rigorous testing procedures, code reviews, and quality assurance processes to ensure that every solution we deliver meets the highest standards of performance and reliability.",
      },
    ];
  return (
    <section className="h-[40rem] flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderWithSubtitle
          header="Why Choose"
          subtitle="Discover what sets us apart in the competitive IT landscape"
          helilightedText="Watertree Info Tech"
        />
       
            <Accordion
            items={whyUsData}
            />
          
      </div>
    </section>
  );
}