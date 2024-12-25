/** @type {import ("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        role: 'AI',
        privileges: ['USAGE', 'ALL PRIVILEGES'],
        url: 'postgresql://accounts:LvaABbcq35FY@ep-autumn-queen-a5pd8foc.us-east-2.aws.neon.tech/Ai-Content-Generator?sslmode=require'
    }
};