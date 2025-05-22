import { Button } from "@/components/ui/button";
import workspace1 from "@/assets/workspace1.svg";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate Analytics Engineer on a mission to transform data into actionable insights.
          </p>
        </div>
        
        <div className="md:flex md:items-center md:space-x-8 lg:space-x-16">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              className="rounded-xl shadow-lg w-full h-auto" 
              src={workspace1}
              alt="Modern data analytics workspace with multiple screens showing visualizations"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary dark:text-white mb-3">Professional Profile</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Data and AI Solutions Specialist with 8+ years of experience designing cloud-native data architectures, implementing AI-driven analytics, and enabling enterprise-scale digital transformation. I specialize in bridging technical and business needs, with expertise in data governance, real-time analytics, and AI/ML integration.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary dark:text-white mb-3">My Approach</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm passionate about driving customer success through consultative engagements, proof-of-concept, and scalable cloud adoption. My work focuses on creating data solutions that deliver tangible business value and enable data-driven decision making across organizations.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://linkedin.com/in/bright-kwame-dogbey" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                <i className="fab fa-linkedin text-primary dark:text-blue-400 mr-2"></i> LinkedIn
              </a>
              <a href="https://bit.ly/bkd-portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                <i className="fab fa-github text-primary dark:text-gray-200 mr-2"></i> GitHub
              </a>
              <a href="/attached_assets/Bright Kwame Dogbey Analytics Engineer CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                <i className="fas fa-file-pdf text-primary dark:text-gray-200 mr-2"></i> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
