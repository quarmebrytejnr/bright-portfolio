import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Serve PDF files
  app.get('/attached_assets/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.resolve(process.cwd(), 'attached_assets', filename);
    res.sendFile(filePath);
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
