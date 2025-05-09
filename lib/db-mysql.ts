import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    database: process.env.MYSQL_DATABASE || 'ikengineering',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || ''
  }
});

export async function query(
  q: string,
  values: (string | number | Date)[] = []
) {
  try {
    const results = await db.query(q, values);
    await db.end();
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// User methods
export async function getUsers() {
  return query('SELECT * FROM users');
}

export async function getUserById(id: number) {
  const results = await query('SELECT * FROM users WHERE id = ?', [id]);
  return results[0] || null;
}

export async function getUserByEmail(email: string) {
  const results = await query('SELECT * FROM users WHERE email = ?', [email]);
  return results[0] || null;
}

export async function createUser(userData: any) {
  const result = await query(
    `INSERT INTO users (name, email, password, role, phone, address, joining_date, skills, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
    [
      userData.name,
      userData.email,
      userData.password,
      userData.role,
      userData.phone || null,
      userData.address || null,
      userData.joining_date || null,
      userData.skills || null
    ]
  );
  
  const id = (result as any).insertId;
  return getUserById(id);
}

// Project methods
export async function getProjects() {
  return query('SELECT * FROM projects');
}

export async function getProjectById(id: number) {
  const results = await query('SELECT * FROM projects WHERE id = ?', [id]);
  return results[0] || null;
}

// Machine methods
export async function getMachines() {
  return query('SELECT * FROM machines');
}

export async function getMachineById(id: number) {
  const results = await query('SELECT * FROM machines WHERE id = ?', [id]);
  return results[0] || null;
}

// Work report methods
export async function getWorkReports() {
  return query(`
    SELECT wr.*, u.name as labor_name 
    FROM work_reports wr
    JOIN users u ON wr.labor_id = u.id
  `);
}

export async function getWorkReportById(id: number) {
  const results = await query(`
    SELECT wr.*, u.name as labor_name 
    FROM work_reports wr
    JOIN users u ON wr.labor_id = u.id
    WHERE wr.id = ?
  `, [id]);
  return results[0] || null;
}

export async function getWorkReportsByLaborId(laborId: number) {
  return query(`
    SELECT wr.*, u.name as labor_name 
    FROM work_reports wr
    JOIN users u ON wr.labor_id = u.id
    WHERE wr.labor_id = ?
  `, [laborId]);
}

export async function createWorkReport(reportData: any) {
  const result = await query(
    `INSERT INTO work_reports (
      labor_id, machine_id, project_id, job_name, job_number, 
      settings_count, report_date, start_time, end_time, 
      delay_time, delay_reason, total_running_hours, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
    [
      reportData.labor_id,
      reportData.machine_id,
      reportData.project_id,
      reportData.job_name,
      reportData.job_number || null,
      reportData.settings_count,
      reportData.report_date,
      reportData.start_time,
      reportData.end_time,
      reportData.delay_time,
      reportData.delay_reason || null,
      reportData.total_running_hours
    ]
  );
  
  const id = (result as any).insertId;
  
  // Handle images if present
  if (reportData.images && reportData.images.length > 0) {
    for (const image of reportData.images) {
      await query(
        'INSERT INTO report_images (report_id, image_url, created_at) VALUES (?, ?, NOW())',
        [id, image]
      );
    }
  }
  
  return getWorkReportById(id);
}

// Client methods
export async function getClients() {
  return query('SELECT * FROM clients');
}

// Testimonial methods
export async function getTestimonials() {
  return query('SELECT * FROM testimonials');
}

export default {
  query,
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  getProjects,
  getProjectById,
  getMachines,
  getMachineById,
  getWorkReports,
  getWorkReportById,
  getWorkReportsByLaborId,
  createWorkReport,
  getClients,
  getTestimonials
};