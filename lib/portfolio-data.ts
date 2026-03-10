// =============================================================================
// ARQUIVO DE CONFIGURACAO DO PORTFOLIO
// Edite os dados abaixo para personalizar seu portfolio.
// =============================================================================

export const personalInfo = {
  name: "Seu Nome",
  role: "Analista de BI",
  tagline: "Transformando dados em decisoes estrategicas",
  description:
    "Analista de Business Intelligence com paixao por Ciencia de Dados. " +
    "Especializado em transformar dados brutos em insights acionaveis, " +
    "construindo dashboards interativos e modelos preditivos que impulsionam " +
    "decisoes de negocio.",
  location: "Brasil",
  email: "seu.email@exemplo.com",
  availability: "Disponivel para projetos",
}

export const socialLinks = {
  linkedin: "https://linkedin.com/in/seu-perfil",
  github: "https://github.com/seu-usuario",
  // Adicione ou remova links conforme necessario
  // twitter: "https://twitter.com/seu-usuario",
  // kaggle: "https://kaggle.com/seu-usuario",
}

export const aboutMe = {
  title: "Sobre Mim",
  paragraphs: [
    "Sou um profissional apaixonado por dados, atuando como Analista de BI com foco crescente em Ciencia de Dados. Minha jornada comecou na area de negocios, o que me deu uma visao unica de como os dados podem transformar organizacoes.",
    "Atualmente, trabalho criando dashboards e relatorios que auxiliam a tomada de decisao em nivel estrategico. Estou em constante evolucao, aprofundando meus conhecimentos em Machine Learning, Estatistica e programacao para entregar solucoes cada vez mais robustas.",
    "Acredito que a verdadeira magia acontece na interseccao entre dados e negocios - e e exatamente nesse espaco que eu opero.",
  ],
}

// =============================================================================
// SKILLS / FERRAMENTAS
// Cada categoria possui um array de ferramentas. Adicione, remova ou edite
// livremente. O icone e um nome de icone do Lucide React.
// Niveis: "Avancado" | "Intermediario" | "Basico"
// =============================================================================

export type SkillLevel = "Avancado" | "Intermediario" | "Basico"

export interface Skill {
  name: string
  level: SkillLevel
  icon: string // nome do icone Lucide
}

export interface SkillCategory {
  category: string
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Visualizacao de Dados",
    description: "Ferramentas para criar dashboards e relatorios interativos",
    skills: [
      { name: "Power BI", level: "Avancado", icon: "BarChart3" },
      { name: "Tableau", level: "Intermediario", icon: "PieChart" },
      { name: "Looker Studio", level: "Intermediario", icon: "LineChart" },
      { name: "Metabase", level: "Basico", icon: "LayoutDashboard" },
    ],
  },
  {
    category: "Linguagens & Programacao",
    description: "Linguagens utilizadas no dia a dia para analise e automacao",
    skills: [
      { name: "Python", level: "Avancado", icon: "Code2" },
      { name: "SQL", level: "Avancado", icon: "Database" },
      { name: "R", level: "Intermediario", icon: "Terminal" },
      { name: "DAX / M", level: "Avancado", icon: "Braces" },
    ],
  },
  {
    category: "Ciencia de Dados & ML",
    description: "Bibliotecas e frameworks para modelagem e analise",
    skills: [
      { name: "Pandas", level: "Avancado", icon: "Table" },
      { name: "Scikit-learn", level: "Intermediario", icon: "Brain" },
      { name: "NumPy", level: "Intermediario", icon: "Calculator" },
      { name: "Matplotlib / Seaborn", level: "Intermediario", icon: "TrendingUp" },
    ],
  },
  {
    category: "Banco de Dados & Cloud",
    description: "Infraestrutura e armazenamento de dados",
    skills: [
      { name: "PostgreSQL", level: "Avancado", icon: "Database" },
      { name: "MySQL", level: "Intermediario", icon: "Database" },
      { name: "BigQuery", level: "Intermediario", icon: "Cloud" },
      { name: "Azure", level: "Basico", icon: "Server" },
    ],
  },
]

// =============================================================================
// PROJETOS
// Adicione seus projetos aqui. Podem estar com status "em breve" enquanto
// voce ainda nao publicou.
// =============================================================================

export interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
  image?: string // caminho para imagem em /public
  status: "publicado" | "em-breve"
}

export const projects: Project[] = [
  {
    title: "Dashboard de Vendas",
    description:
      "Dashboard interativo em Power BI para analise de performance de vendas com KPIs, segmentacao por regiao e previsao de tendencias.",
    tags: ["Power BI", "DAX", "SQL"],
    status: "em-breve",
  },
  {
    title: "Analise Preditiva de Churn",
    description:
      "Modelo de Machine Learning para prever a evasao de clientes utilizando Python e Scikit-learn, com feature engineering e validacao cruzada.",
    tags: ["Python", "Scikit-learn", "Pandas"],
    status: "em-breve",
  },
  {
    title: "ETL Pipeline Automatizado",
    description:
      "Pipeline de dados automatizado para extracao, transformacao e carga de dados de multiplas fontes para um Data Warehouse.",
    tags: ["Python", "SQL", "Airflow"],
    status: "em-breve",
  },
  {
    title: "Analise Exploratoria de Dados",
    description:
      "Projeto completo de EDA com visualizacoes estatisticas, identificacao de padroes e insights acionaveis a partir de datasets publicos.",
    tags: ["Python", "Matplotlib", "Pandas"],
    status: "em-breve",
  },
]

// =============================================================================
// NAVEGACAO
// =============================================================================

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]
