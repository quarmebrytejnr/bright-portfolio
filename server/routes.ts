import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { insertMessageSchema } from "@shared/schema";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertMessageSchema.parse(req.body);
      
      // Save to storage
      const message = await storage.createMessage(validatedData);
      
      // Send email notification
      const emailSent = await sendContactEmail(validatedData);
      
      if (emailSent) {
        res.json({ 
          success: true, 
          message: 'Message sent successfully!',
          id: message.id 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: 'Message saved but email notification failed. I will still receive your message.' 
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      });
    }
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
