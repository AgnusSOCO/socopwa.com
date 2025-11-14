import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Technology {
  name: string;
  logoUrl: string;
  categories: string[];
  link: string;
}

const TechStack: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const technologies: Technology[] = [
    { name: 'TensorFlow', logoUrl: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg', categories: ['ai', 'data'], link: 'https://www.tensorflow.org/' },
    { name: 'PyTorch', logoUrl: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg', categories: ['ai', 'data'], link: 'https://pytorch.org/' },
    { name: 'OpenAI', logoUrl: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg', categories: ['ai'], link: 'https://openai.com/' },
    { name: 'Hugging Face', logoUrl: 'https://huggingface.co/front/assets/huggingface_logo.svg', categories: ['ai', 'data'], link: 'https://huggingface.co/' },
    { name: 'LangChain', logoUrl: 'https://avatars.githubusercontent.com/u/126733545', categories: ['ai'], link: 'https://www.langchain.com/' },
    
    { name: 'AWS', logoUrl: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg', categories: ['cloud', 'devops'], link: 'https://aws.amazon.com/' },
    { name: 'Microsoft Azure', logoUrl: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg', categories: ['cloud', 'devops'], link: 'https://azure.microsoft.com/' },
    { name: 'Google Cloud', logoUrl: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg', categories: ['cloud', 'devops'], link: 'https://cloud.google.com/' },
    { name: 'DigitalOcean', logoUrl: 'https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg', categories: ['cloud'], link: 'https://www.digitalocean.com/' },
    { name: 'Vercel', logoUrl: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg', categories: ['cloud', 'frontend'], link: 'https://vercel.com/' },
    
    { name: 'Palo Alto Networks', logoUrl: 'https://www.vectorlogo.zone/logos/paloaltonetworks/paloaltonetworks-icon.svg', categories: ['security'], link: 'https://www.paloaltonetworks.com/' },
    { name: 'Fortinet', logoUrl: 'https://www.vectorlogo.zone/logos/fortinet/fortinet-icon.svg', categories: ['security'], link: 'https://www.fortinet.com/' },
    { name: 'CrowdStrike', logoUrl: 'https://cdn.worldvectorlogo.com/logos/crowdstrike.svg', categories: ['security'], link: 'https://www.crowdstrike.com/' },
    { name: 'Cloudflare', logoUrl: 'https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg', categories: ['security', 'cloud'], link: 'https://www.cloudflare.com/' },
    { name: 'Okta', logoUrl: 'https://www.vectorlogo.zone/logos/okta/okta-icon.svg', categories: ['security'], link: 'https://www.okta.com/' },
    { name: 'Snyk', logoUrl: 'https://www.vectorlogo.zone/logos/snyk/snyk-icon.svg', categories: ['security', 'devops'], link: 'https://snyk.io/' },
    
    { name: 'Docker', logoUrl: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg', categories: ['devops', 'cloud'], link: 'https://www.docker.com/' },
    { name: 'Kubernetes', logoUrl: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg', categories: ['devops', 'cloud'], link: 'https://kubernetes.io/' },
    { name: 'Terraform', logoUrl: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg', categories: ['devops', 'cloud'], link: 'https://www.terraform.io/' },
    { name: 'Jenkins', logoUrl: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg', categories: ['devops'], link: 'https://www.jenkins.io/' },
    { name: 'GitLab', logoUrl: 'https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg', categories: ['devops'], link: 'https://gitlab.com/' },
    { name: 'GitHub Actions', logoUrl: 'https://www.vectorlogo.zone/logos/github/github-icon.svg', categories: ['devops'], link: 'https://github.com/features/actions' },
    { name: 'Ansible', logoUrl: 'https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg', categories: ['devops'], link: 'https://www.ansible.com/' },
    
    { name: 'React', logoUrl: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', categories: ['frontend'], link: 'https://react.dev/' },
    { name: 'TypeScript', logoUrl: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg', categories: ['frontend', 'backend'], link: 'https://www.typescriptlang.org/' },
    { name: 'Tailwind CSS', logoUrl: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', categories: ['frontend'], link: 'https://tailwindcss.com/' },
    { name: 'Next.js', logoUrl: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg', categories: ['frontend', 'backend'], link: 'https://nextjs.org/' },
    { name: 'Vue.js', logoUrl: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg', categories: ['frontend'], link: 'https://vuejs.org/' },
    { name: 'Angular', logoUrl: 'https://www.vectorlogo.zone/logos/angular/angular-icon.svg', categories: ['frontend'], link: 'https://angular.io/' },
    
    { name: 'Node.js', logoUrl: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg', categories: ['backend'], link: 'https://nodejs.org/' },
    { name: 'Python', logoUrl: 'https://www.vectorlogo.zone/logos/python/python-icon.svg', categories: ['backend', 'ai', 'data'], link: 'https://www.python.org/' },
    { name: 'PostgreSQL', logoUrl: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg', categories: ['backend', 'data'], link: 'https://www.postgresql.org/' },
    { name: 'MongoDB', logoUrl: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg', categories: ['backend', 'data'], link: 'https://www.mongodb.com/' },
    { name: 'FastAPI', logoUrl: 'https://cdn.worldvectorlogo.com/logos/fastapi.svg', categories: ['backend'], link: 'https://fastapi.tiangolo.com/' },
    { name: 'Django', logoUrl: 'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg', categories: ['backend'], link: 'https://www.djangoproject.com/' },
    { name: 'GraphQL', logoUrl: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg', categories: ['backend'], link: 'https://graphql.org/' },
    
    { name: 'Redis', logoUrl: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg', categories: ['backend', 'data'], link: 'https://redis.io/' },
    { name: 'Elasticsearch', logoUrl: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg', categories: ['data'], link: 'https://www.elastic.co/' },
    { name: 'Apache Kafka', logoUrl: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg', categories: ['data', 'backend'], link: 'https://kafka.apache.org/' },
    { name: 'Snowflake', logoUrl: 'https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg', categories: ['data', 'cloud'], link: 'https://www.snowflake.com/' },
    { name: 'Apache Spark', logoUrl: 'https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg', categories: ['data'], link: 'https://spark.apache.org/' },
    { name: 'Tableau', logoUrl: 'https://www.vectorlogo.zone/logos/tableau/tableau-icon.svg', categories: ['data'], link: 'https://www.tableau.com/' },
  ];

  const categories = [
    { id: 'all', label: t('techStack.categories.all') },
    { id: 'ai', label: t('techStack.categories.ai') },
    { id: 'cloud', label: t('techStack.categories.cloud') },
    { id: 'security', label: t('techStack.categories.security') },
    { id: 'devops', label: t('techStack.categories.devops') },
    { id: 'frontend', label: t('techStack.categories.frontend') },
    { id: 'backend', label: t('techStack.categories.backend') },
    { id: 'data', label: t('techStack.categories.data') },
  ];

  const filteredTechnologies = selectedCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.categories.includes(selectedCategory));

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            {t('techStack.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('techStack.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('techStack.description')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
              aria-pressed={selectedCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl p-6 hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 border border-gray-700/50 hover:border-white/30 flex flex-col items-center justify-center"
              style={{
                animationDelay: `${index * 0.05}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Logo */}
              <div className="w-16 h-16 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={tech.logoUrl}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Name */}
              <h3 className="text-sm font-semibold text-white text-center group-hover:text-gray-100 transition-colors duration-300">
                {tech.name}
              </h3>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </a>
          ))}
        </div>

        {/* Empty state */}
        {filteredTechnologies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">{t('techStack.noResults')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStack;
