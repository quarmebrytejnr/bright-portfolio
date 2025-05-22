import { Badge } from "@/components/ui/badge";

type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Data Engineering",
    icon: "database",
    skills: [
      "ETL/ELT Process Development",
      "Data Pipeline Orchestration",
      "Cloud Data Architecture", 
      "Real-time Data Processing",
      "Data Quality Management"
    ]
  },
  {
    title: "Data Analysis",
    icon: "chart-line",
    skills: [
      "Statistical Analysis",
      "Exploratory Data Analysis",
      "A/B Testing & Experimentation",
      "Financial & Marketing Analytics",
      "Customer Segmentation"
    ]
  },
  {
    title: "Data Visualization",
    icon: "chart-pie",
    skills: [
      "Power BI Dashboard Development",
      "Tableau Reporting",
      "Looker Visualizations",
      "Interactive Web Dashboards",
      "Data Storytelling"
    ]
  },
  {
    title: "Machine Learning",
    icon: "brain",
    skills: [
      "Predictive Modeling",
      "Time Series Forecasting",
      "Classification & Regression",
      "MLOps & Model Deployment",
      "NLP & Sentiment Analysis"
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: "cloud",
    skills: [
      "Azure (Fabric, Synapse, Data Lake)",
      "AWS Services (S3, Redshift, EMR)",
      "Databricks & Delta Lake",
      "Snowflake Data Warehouse",
      "Infrastructure as Code (Terraform)"
    ]
  },
  {
    title: "Programming & Tools",
    icon: "code",
    skills: [
      "Python (Pandas, PySpark, NumPy)",
      "SQL (PostgreSQL, MySQL, Oracle)",
      "C#, R, Apache Airflow",
      "dbt, Kafka, Apache Spark",
      "TensorFlow, PyTorch, Scikit-learn"
    ]
  }
];

const technologies = [
  "Python", "SQL", "Power BI", "Tableau", "Azure Synapse", "AWS",
  "Databricks", "Snowflake", "TensorFlow", "dbt", "Apache Kafka",
  "Apache Airflow", "Microsoft Fabric", "PyTorch", "PySpark",
  "Scikit-learn", "MLflow", "Terraform"
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging industry-leading technologies to deliver exceptional data solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-lg flex items-center justify-center">
                  <i className={`fas fa-${category.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <i className="fas fa-check-circle text-secondary mr-2"></i>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary dark:text-white text-center mb-8">
            Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-medium rounded-full shadow-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
