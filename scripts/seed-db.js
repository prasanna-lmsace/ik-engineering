// scripts/seed-db.js
const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env.local' });

async function seed() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    database: process.env.MYSQL_DATABASE || 'ikengineering',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || ''
  });

  console.log('Connected to database. Starting seed...');

  // Seed users
  await connection.execute(`
    INSERT INTO users (name, email, password, role, phone, address, joining_date, skills, created_at, updated_at)
    VALUES 
      ('Admin User', 'admin@example.com', 'password123', 'admin', '+91 9876543210', '123 Admin Street, Chennai', '2020-01-15', 'Management, Engineering', NOW(), NOW()),
      ('John Doe', 'john@example.com', 'password123', 'labor', '+91 9876543211', '456 Worker Avenue, Chennai', '2021-03-10', 'Machine Operation, Maintenance', NOW(), NOW())
  `);
  
  console.log('Users seeded.');

  // Seed projects
  await connection.execute(`
    INSERT INTO projects (name, description, customer_name, start_date, end_date, status, created_at, updated_at)
    VALUES 
      ('A2B Murukku Production', 'Setting up murukku production line for A2B restaurant chain', 'A2B Restaurant Group', '2023-07-01', '2023-08-15', 'in_progress', NOW(), NOW()),
      ('Jum Jum Sweets Production', 'Installation of mixing and production equipment for Jum Jum Sweets', 'Jum Jum Sweets Ltd.', '2023-07-15', '2023-08-30', 'in_progress', NOW(), NOW())
  `);
  
  console.log('Projects seeded.');

  // Seed machines
  await connection.execute(`
    INSERT INTO machines (name, description, model_number, created_at, updated_at)
    VALUES 
      ('Murukku Machine #1', 'CNG-powered murukku making machine with automated extrusion', 'MM-CNG-2023-01', NOW(), NOW()),
      ('Industrial Mixer #1', 'CNG-powered industrial mixer for large batch processing', 'IM-CNG-2023-01', NOW(), NOW())
  `);
  
  console.log('Machines seeded.');

  // Add more seed data as needed...

  await connection.end();
  console.log('Database seeding completed successfully!');
}

seed().catch(err => {
  console.error('Error seeding database:', err);
  process.exit(1);
});