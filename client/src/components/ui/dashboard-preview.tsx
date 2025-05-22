import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BarChart, LineChart } from "lucide-react";

interface DashboardPreviewProps {
  title: string;
  icon?: "chart-bar" | "chart-line" | "chart-pie";
  embedUrl?: string;
  dashboardUrl?: string;
}

export function DashboardPreview({
  title,
  icon = "chart-bar",
  embedUrl,
  dashboardUrl,
}: DashboardPreviewProps) {
  const renderIcon = () => {
    switch (icon) {
      case "chart-line":
        return <LineChart className="text-5xl mb-4" />;
      case "chart-pie":
        return <i className="fas fa-chart-pie text-5xl mb-4"></i>;
      case "chart-bar":
      default:
        return <BarChart className="text-5xl mb-4" />;
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-primary dark:text-white mb-4">{title}</h3>
      <Card className="dashboard-preview bg-light dark:bg-gray-800 overflow-hidden shadow-lg">
        <CardContent className="p-0 h-[400px]">
          {embedUrl ? (
            <iframe
              title={title}
              src={embedUrl}
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <div className="text-center p-8">
                {renderIcon()}
                <p className="text-lg font-medium">Power BI Dashboard Embed</p>
                <p className="text-sm mt-2 max-w-md mx-auto">
                  This is a placeholder for an embedded Power BI dashboard. The actual dashboard would be embedded here using Power BI's embed code.
                </p>
                {dashboardUrl && (
                  <Button 
                    className="mt-4 bg-secondary text-white hover:bg-secondary/90"
                    onClick={() => window.open(dashboardUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Dashboard
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
