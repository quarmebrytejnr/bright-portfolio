import { Timeline } from "@/components/ui/timeline";

type WorkExperience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
};

type Education = {
  degree: string;
  institution: string;
};

const workExperiences: WorkExperience[] = [
  {
    title: "CWAR Digital Analytics Lead",
    company: "Publicis Central & West Africa",
    location: "Ghana",
    period: "Sep 2023 – Present",
    description: "Publicis is a leading global marketing and communications agency network operating across various industries in 22 African countries.",
    achievements: [
      "Implemented a comprehensive Marketing Mix Modeling (MMM) framework for a major FMCG client, identifying optimal channel combinations that improved ROI by 27% within 6 months.",
      "Designed a unified lakehouse architecture using Microsoft Fabric, Azure Data Lake, and Power BI, integrating 10+ data sources to reduce reporting latency by 70%.",
      "Led real-time sentiment analytics using Azure Event Hubs and Stream Analytics, enabling proactive brand management across 22 African markets.",
      "Optimized a $4.2M annual marketing budget across 5 channels and 3 markets, resulting in 18% increased efficiency and 8% lift in conversion rates."
    ]
  },
  {
    title: "Data Analyst",
    company: "Vodafone",
    location: "Ghana",
    period: "Feb 2022 - Sep 2023",
    description: "Vodafone is a leading telco business in Ghana, providing a wide range of financial products to 10M+ MAU nationwide.",
    achievements: [
      "Led a comprehensive BI system audit using statistical analysis in R and Python to identify reporting anomalies, saving $2M in fines.",
      "Built a fraud detection model (Python + Azure ML) that reduced losses by $62,500/month, later deployed as a Power BI embedded dashboard.",
      "Developed a cloud-based revenue forecasting system (ARIMA + Azure Synapse) that contributed to a 5% revenue growth.",
      "Slashed churn rate by ~10% by conducting data mining, modeling, and statistical analysis to assess customer journey on 30K+ users."
    ]
  },
  {
    title: "Business Intelligence Analyst",
    company: "INFUSEmedia",
    location: "Boston (Remote)",
    period: "Aug 2021 – Jan 2022",
    description: "INFUSEmedia runs a demand generation engine that provides industry-leading solutions designed to help B2B organizations reach target audiences with precision.",
    achievements: [
      "Architected a distributed data processing system using Apache Spark, PySpark, and AWS EMR to process 50TB+ of marketing data daily.",
      "Implemented real-time KPI tracking using Apache Kafka and Power BI, improving campaign decision speed by 40%.",
      "Optimized data warehouse performance using Amazon Redshift and dbt, improving query response times by 40%.",
      "Built automated data quality monitoring using Great Expectations and Apache Airflow, reducing data incidents by 30%."
    ]
  },
  {
    title: "Data Analyst",
    company: "RBK Technologies",
    location: "Ghana",
    period: "Feb 2017 – May 2021",
    description: "RBK Technologies provides data analytics and Business Intelligence solutions to companies in the banking & finance sector.",
    achievements: [
      "Studied and segmented 3000+ customers using SQL and built a Python time-series model to predict customer purchasing behavior.",
      "Led the migration of on-premise data systems to Snowflake and Azure Synapse, improving query performance and scalability.",
      "Developed and deployed 5+ Power Automate workflows that automated repetitive tasks, resulting in a 20% increase in team productivity.",
      "Independently and collaboratively created 14+ Power BI and Tableau dashboards to reveal insights and support weekly reporting on KPIs."
    ]
  }
];

const education: Education[] = [
  {
    degree: "BSc. Biomedical Science",
    institution: "University of Cape Coast, Ghana"
  },
  {
    degree: "Cert. Artificial Intelligence & Machine Learning",
    institution: "Lancaster University, Ghana"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Work Experience</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey across various organizations and roles.
          </p>
        </div>
        
        <div className="relative pl-8 border-l-2 border-primary/20 dark:border-gray-700 space-y-12 max-w-4xl mx-auto">
          {workExperiences.map((experience, index) => (
            <div key={index} className="relative timeline-item">
              <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-secondary border-4 border-white dark:border-gray-900"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ml-2">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-primary dark:text-white">{experience.title}</h3>
                  <span className="text-sm font-medium bg-secondary/10 dark:bg-secondary/20 text-secondary px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                </div>
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                  {experience.company}, {experience.location}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">{experience.description}</p>
                
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex">
                      <i className="fas fa-caret-right text-secondary mt-1.5 mr-2 flex-shrink-0"></i>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          
          <div className="relative timeline-item">
            <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-accent border-4 border-white dark:border-gray-900"></div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ml-2">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <h3 className="text-xl font-semibold text-primary dark:text-white">Education</h3>
              </div>
              
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                {education.map((edu, eduIndex) => (
                  <li key={eduIndex} className="flex">
                    <i className={`fas fa-${eduIndex === 0 ? 'graduation-cap' : 'certificate'} text-accent mt-1 mr-3 flex-shrink-0`}></i>
                    <div>
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p>{edu.institution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
