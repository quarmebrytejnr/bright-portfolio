import { 
  users, type User, type InsertUser,
  messages, type Message, type InsertMessage,
  projects, type Project, type InsertProject 
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Message operations
  createMessage(message: InsertMessage): Promise<Message>;
  getMessages(): Promise<Message[]>;
  getMessage(id: number): Promise<Message | undefined>;
  
  // Project operations
  createProject(project: InsertProject): Promise<Project>;
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private usersData: Map<number, User>;
  private messagesData: Map<number, Message>;
  private projectsData: Map<number, Project>;
  private userCurrentId: number;
  private messageCurrentId: number;
  private projectCurrentId: number;

  constructor() {
    this.usersData = new Map();
    this.messagesData = new Map();
    this.projectsData = new Map();
    this.userCurrentId = 1;
    this.messageCurrentId = 1;
    this.projectCurrentId = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.usersData.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.usersData.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.usersData.set(id, user);
    return user;
  }
  
  // Message operations
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.messageCurrentId++;
    const message: Message = { 
      ...insertMessage, 
      id,
      createdAt: new Date().toISOString()
    };
    this.messagesData.set(id, message);
    return message;
  }
  
  async getMessages(): Promise<Message[]> {
    return Array.from(this.messagesData.values());
  }
  
  async getMessage(id: number): Promise<Message | undefined> {
    return this.messagesData.get(id);
  }
  
  // Project operations
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.projectCurrentId++;
    const project: Project = { ...insertProject, id };
    this.projectsData.set(id, project);
    return project;
  }
  
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projectsData.values());
  }
  
  async getProject(id: number): Promise<Project | undefined> {
    return this.projectsData.get(id);
  }
  
  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projectsData.values()).filter(
      (project) => project.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  async updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined> {
    const existingProject = this.projectsData.get(id);
    if (!existingProject) return undefined;
    
    const updatedProject = { ...existingProject, ...project };
    this.projectsData.set(id, updatedProject);
    return updatedProject;
  }
  
  async deleteProject(id: number): Promise<boolean> {
    return this.projectsData.delete(id);
  }
}

export const storage = new MemStorage();
