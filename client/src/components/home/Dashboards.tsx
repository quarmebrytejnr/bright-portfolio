import { DashboardPreview } from "@/components/ui/dashboard-preview";

const Dashboards = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Live Dashboards</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore interactive data visualizations from my portfolio.
          </p>
        </div>
        
        <div className="space-y-16">
          <DashboardPreview
            title="OOH Monitoring Dashboard"
            icon="chart-bar"
            dashboardUrl="https://app.powerbi.com/view?r=example-report-id"
          />
          
          <DashboardPreview
            title="Digital Performance Dashboard"
            icon="chart-line"
            dashboardUrl="https://app.powerbi.com/view?r=example-report-id"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
