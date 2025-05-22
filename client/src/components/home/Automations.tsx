import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import workspace2 from "@/assets/workspace2.svg";
import { ArrowRight, Bot, Workflow, Zap } from "lucide-react";

interface AutomationItem {
  title: string;
  description: string;
  icon: "bot" | "zap" | "workflow";
  category: string;
  techs: string[];
}

const automations: AutomationItem[] = [
  {
    title: "Marketing Campaign Orchestration",
    description: "End-to-end automation for multi-channel marketing campaigns with dynamic customer segmentation and personalized content delivery.",
    icon: "workflow",
    category: "Workflow Automation",
    techs: ["Power Automate", "Microsoft 365", "Dynamics CRM", "Azure Logic Apps"]
  },
  {
    title: "Data Pipeline Automation",
    description: "Automated ETL workflows for data ingestion, transformation, and loading with intelligent error handling and notifications.",
    icon: "zap",
    category: "Data Integration",
    techs: ["n8n", "Azure Data Factory", "Python", "REST APIs"]
  },
  {
    title: "Intelligent Document Processing",
    description: "AI-powered document extraction and processing system that automates data entry from invoices, receipts, and forms.",
    icon: "bot",
    category: "AI Automation",
    techs: ["Power Automate", "Azure Form Recognizer", "SharePoint", "Microsoft AI"]
  },
  {
    title: "E-commerce Order Management",
    description: "Automated order processing workflow from capture to fulfillment with inventory synchronization and customer notifications.",
    icon: "workflow",
    category: "Workflow Automation",
    techs: ["n8n", "Shopify API", "Slack", "Email Integration"]
  },
  {
    title: "Social Media Analytics & Reporting",
    description: "Automated collection and visualization of social media metrics with scheduled report generation and insights delivery.",
    icon: "zap",
    category: "Data Integration",
    techs: ["Power Automate", "Meta API", "Google Sheets", "Power BI"]
  },
  {
    title: "Customer Support Automation",
    description: "Intelligent ticket routing and response system with sentiment analysis and escalation workflows.",
    icon: "bot",
    category: "AI Automation",
    techs: ["n8n", "NLP", "Zendesk", "Slack Integration"]
  }
];

const Automations = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'bot':
        return <Bot className="h-10 w-10 text-secondary" />;
      case 'zap':
        return <Zap className="h-10 w-10 text-secondary" />;
      case 'workflow':
        return <Workflow className="h-10 w-10 text-secondary" />;
      default:
        return <Workflow className="h-10 w-10 text-secondary" />;
    }
  };

  return (
    <section id="automations" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <div className="section-animate">
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6 fade-in">
                Automation Solutions
              </h2>
              <div className="w-20 h-1 bg-secondary mb-8 slide-in-left"></div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 slide-up">
                Leveraging the power of automation tools to streamline business processes, improve efficiency, and unlock new capabilities through integrated workflows.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-900 rounded-lg hover-shadow">
                  <div className="flex-shrink-0 bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                    <Workflow className="h-6 w-6 text-primary dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary dark:text-white">Process Automation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Streamlining repetitive tasks and workflows</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-900 rounded-lg hover-shadow">
                  <div className="flex-shrink-0 bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                    <Bot className="h-6 w-6 text-primary dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary dark:text-white">Intelligent Bots</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered assistants and automation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-900 rounded-lg hover-shadow">
                  <div className="flex-shrink-0 bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-primary dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary dark:text-white">Integration Solutions</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Connecting systems and data sources</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-900 rounded-lg hover-shadow">
                  <div className="flex-shrink-0 bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                    <i className="fas fa-chart-line h-6 w-6 text-primary dark:text-blue-400"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary dark:text-white">Analytics Automation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Automated data collection and reporting</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 slide-up">
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="hover-lift">Power Automate</Badge>
                  <Badge variant="secondary" className="hover-lift">n8n</Badge>
                  <Badge variant="secondary" className="hover-lift">Azure Logic Apps</Badge>
                  <Badge variant="secondary" className="hover-lift">Microsoft 365</Badge>
                  <Badge variant="secondary" className="hover-lift">UIPath</Badge>
                  <Badge variant="secondary" className="hover-lift">Zapier</Badge>
                  <Badge variant="secondary" className="hover-lift">Make.com</Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-6 section-animate">
            <div className="rounded-lg overflow-hidden slide-in-right">
              <img 
                src={workspace2} 
                alt="Automation workspace with multiple screens showing workflow diagrams" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-primary dark:text-white text-center mb-8 fade-in">
            Automation Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((item, index) => (
              <Card 
                key={index}
                className={`overflow-hidden hover-shadow transition-all duration-300 h-full section-animate ${
                  hoveredItem === index ? 'ring-2 ring-secondary ring-opacity-50' : ''
                }`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 dark:bg-gray-700 rounded-lg">
                      {renderIcon(item.icon)}
                    </div>
                    <Badge variant="outline" className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                      {item.category}
                    </Badge>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-primary dark:text-white mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.techs.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-between text-primary hover:text-secondary dark:text-white dark:hover:text-secondary p-0 ${
                        hoveredItem === index ? 'translate-x-1 transition-transform duration-300' : ''
                      }`}
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automations;