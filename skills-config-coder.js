// ─────────────────────────────────────────────────────────────
// Skills Matrix — Configuration
// Edit this file to customise skills, categories, levels, and UI text.
// No changes to index.html needed.
// ─────────────────────────────────────────────────────────────

// ─── UI TEXT ───
// Customise labels, placeholders, and messages shown in the app.
const UI_TEXT = {
    appTitle: "Skills Matrix",
    memberInputPlaceholder: "Team member name...",
    addMemberButton: "+ Add Member",
    skillHeaderHint: "click for detail",
    teamMemberColumn: "Team Member",
    teamAverageLabel: "Team Average",
    emptyStateTitle: "No team members yet",
    emptyStateHint: "Add a team member above to start building the matrix",
    exportFilename: "skills-matrix.csv",
    detailHeadings: {
        description: "What this skill means",
        levels: "What each level looks like",
        improve: "How to improve",
    },
};

// ─── LEVELS ───
// Define your competency levels. The first entry ("—") is the unset/empty state.
// Add or remove levels as needed — the app will adapt automatically.
// Each level needs a label and a colour (CSS value or custom property).
const LEVELS = [
    { label: "—",          color: "transparent" },
    { label: "Foundation", color: "var(--level-1)" },
    { label: "Proficient", color: "var(--level-2)" },
    { label: "Advanced",   color: "var(--level-3)" },
    { label: "Expert",     color: "var(--level-4)" },
];

// ─── SKILL CATEGORIES & SKILLS ───
// Each category contains an array of skills.
// To add a new category, copy an existing block and change the values.
// To add a new skill, add an object to the skills array.
//
// Each skill needs:
//   id          — unique identifier (used in localStorage keys, so don't rename after use)
//   name        — display name shown in column header
//   description — what the skill means (shown in detail panel)
//   levels[]    — one description per level (excluding the "—" level), in order
//   improve[]   — one improvement tip per level, in order
//
const SKILLS = [
    {
        category: "Technical (C# & Engineering)",
        skills: [
            {
                id: "csharp",
                name: "C# & .NET",
                description: "Proficiency in C# language features, .NET framework/class libraries, and writing clean, maintainable code for pension calculation engines.",
                levels: [
                    "Writes basic C# with guidance. Understands variables, loops, conditionals, and simple classes.",
                    "Writes well-structured code independently. Comfortable with LINQ, generics, async/await, and common patterns.",
                    "Designs complex class hierarchies. Leverages advanced features (expression trees, reflection, spans). Optimises for performance.",
                    "Defines coding standards for the team. Deep knowledge of CLR internals. Evaluates and adopts new .NET features.",
                ],
                improve: [
                    "Pair with a senior developer. Work through MS Learn C# path.",
                    "Read 'C# in Depth'. Tackle increasingly complex calc modules solo.",
                    "Contribute to shared libraries. Mentor juniors on patterns. Profile and optimise hot paths.",
                    "Present at team tech talks. Evaluate new .NET versions for team adoption.",
                ],
            },
            {
                id: "reusable",
                name: "Reusable Code & Patterns",
                description: "Ability to write DRY, reusable code using design patterns appropriate for pension calculation logic — strategy, template method, factory, etc.",
                levels: [
                    "Understands the concept of reuse. Can follow existing patterns in the codebase.",
                    "Extracts common logic into shared methods/classes. Applies basic patterns (factory, strategy).",
                    "Designs reusable components used across multiple schemes. Balances abstraction with clarity.",
                    "Owns and evolves the shared calc library. Creates patterns that the team adopts as standards.",
                ],
                improve: [
                    "Study existing shared code. Ask why things are structured the way they are.",
                    "Look for duplication in your scheme work and extract it. Read 'Head First Design Patterns'.",
                    "Propose shared components. Get feedback via code review. Refactor legacy code.",
                    "Run a workshop on patterns. Write ADRs for major architectural decisions.",
                ],
            },
            {
                id: "testing",
                name: "Unit Testing & TDD",
                description: "Writing automated tests, practising test-driven development, and maintaining reliable test suites for calculation code.",
                levels: [
                    "Writes basic unit tests with guidance. Understands Assert methods and test structure.",
                    "Writes tests independently. Follows Arrange-Act-Assert. Good coverage of happy and edge cases.",
                    "Practises TDD. Designs testable code. Uses mocking/faking. Writes parameterised tests for calc scenarios.",
                    "Defines team testing strategy. Champions TDD adoption. Builds test infrastructure and helpers.",
                ],
                improve: [
                    "Write tests for existing untested code to build confidence. Pair with someone who does TDD.",
                    "Try writing tests first for your next feature. Use test cases from worked examples.",
                    "Introduce parameterised tests for scheme-specific calc scenarios. Mentor others on TDD.",
                    "Propose and build shared test utilities. Present TDD benefits with real metrics.",
                ],
            },
            {
                id: "sql",
                name: "SQL & Data Access",
                description: "Writing and optimising SQL queries, stored procedures, and understanding how calculation code interacts with the database layer.",
                levels: [
                    "Writes basic SELECT/INSERT/UPDATE. Can read simple stored procedures.",
                    "Writes joins, subqueries, CTEs. Can modify stored procedures. Understands indexes.",
                    "Optimises query performance. Designs data access patterns. Writes complex stored procs.",
                    "Go-to person for database issues. Designs schema changes. Performance-tunes critical queries.",
                ],
                improve: [
                    "Practice with real scheme data. Use SSMS to explore the database structure.",
                    "Study execution plans. Take on stored proc work for your schemes.",
                    "Profile slow queries in production. Learn about indexing strategies.",
                    "Lead database design reviews. Mentor team on query optimisation.",
                ],
            },
            {
                id: "sourcecontrol",
                name: "Source Control & CI/CD",
                description: "Using Git effectively for branching, merging, and code collaboration. Understanding the CI/CD pipeline for building and deploying calc code.",
                levels: [
                    "Commits, pushes, pulls. Creates branches. Resolves simple merge conflicts.",
                    "Uses feature branches consistently. Writes good commit messages. Understands the build pipeline.",
                    "Manages complex merges. Configures build steps. Troubleshoots pipeline failures.",
                    "Designs branching strategy. Maintains and improves CI/CD pipeline. Trains team on Git workflows.",
                ],
                improve: [
                    "Learn Git basics beyond the IDE. Practice resolving merge conflicts.",
                    "Read your team's CI/CD config files. Understand what each step does.",
                    "Volunteer to fix build failures. Set up a new project in the pipeline.",
                    "Evaluate and propose pipeline improvements. Document Git workflow standards.",
                ],
            },
            {
                id: "debugging",
                name: "Debugging & Troubleshooting",
                description: "Systematically diagnosing and fixing issues in calculation code, stored procedures, and the wider platform.",
                levels: [
                    "Uses breakpoints and step-through debugging. Can identify simple bugs with guidance.",
                    "Diagnoses issues independently. Uses watch windows, conditional breakpoints, logs effectively.",
                    "Debugs complex cross-system issues. Reads stack traces quickly. Diagnoses production issues from logs.",
                    "Solves the problems nobody else can. Builds diagnostic tooling. Identifies systemic issues.",
                ],
                improve: [
                    "Practice debugging unfamiliar code. Learn to read stack traces thoroughly.",
                    "Take on support tickets to build diagnostic skills. Learn SQL Profiler.",
                    "Volunteer for cross-scheme production issues. Build a personal debugging checklist.",
                    "Create diagnostic guides for common issues. Mentor others on systematic debugging.",
                ],
            },
        ],
    },
    {
        category: "Pension Domain",
        skills: [
            {
                id: "schemeRules",
                name: "Scheme Rules & Legislation",
                description: "Understanding pension scheme rules, overriding legislation, and how they translate into calculation requirements.",
                levels: [
                    "Aware that scheme rules exist. Can read a rule with guidance to understand a calc requirement.",
                    "Reads and interprets rules independently for standard calcs. Understands key legislation (GMP, LTA, etc.).",
                    "Interprets complex/ambiguous rules. Spots conflicts between rules and legislation. Advises on edge cases.",
                    "Deep legislative knowledge. Consulted on rule interpretation. Keeps team updated on regulatory changes.",
                ],
                improve: [
                    "Read the rules for your current scheme alongside the spec. Ask your BA to explain sections.",
                    "Study the Pensions Act basics. Read rules for multiple schemes to see patterns.",
                    "Attend industry webinars. Study complex scenarios like GMP equalisation.",
                    "Build a knowledge base of rule interpretations. Present legislative updates to the team.",
                ],
            },
            {
                id: "calcSpecs",
                name: "Calculation Specifications",
                description: "Reading and interpreting calculation specifications — understanding the business logic they describe and translating it into code.",
                levels: [
                    "Can follow a simple spec with guidance. Understands basic spec structure.",
                    "Reads and codes from specs independently. Asks good clarifying questions.",
                    "Handles complex specs with multiple scenarios. Spots ambiguities and gaps before coding.",
                    "Reviews specs for completeness. Provides feedback to spec writers. Defines spec standards.",
                ],
                improve: [
                    "Walk through a completed spec + code with someone who built it.",
                    "Take on a full calc from spec to delivery. Note every question you have to ask.",
                    "Review specs before coding starts. Build a checklist of common spec issues.",
                    "Work with the spec team to improve spec templates and quality.",
                ],
            },
            {
                id: "workedExamples",
                name: "Worked Examples & Spreadsheets",
                description: "Working with manually calculated examples and Excel spreadsheets to verify calculation logic and validate outputs.",
                levels: [
                    "Can follow a worked example. Matches code output to expected results with guidance.",
                    "Creates test cases from worked examples. Reconciles differences between code and spreadsheet results.",
                    "Builds own spreadsheet models to validate complex calcs. Identifies errors in provided examples.",
                    "Designs the worked example process. Creates reusable validation spreadsheets. Trains others.",
                ],
                improve: [
                    "Manually work through a simple calc with a calculator to understand each step.",
                    "Build your own spreadsheet for a calc you're working on. Compare every intermediate step.",
                    "Create a library of validation spreadsheets for common calc types.",
                    "Standardise the worked example format. Run sessions on spreadsheet validation techniques.",
                ],
            },
            {
                id: "proformas",
                name: "Proformas & Output Formats",
                description: "Understanding and implementing the formatted output documents that present calculation results to scheme members and administrators.",
                levels: [
                    "Understands what a proforma is. Can make minor formatting changes with guidance.",
                    "Implements proformas from templates. Maps calculation outputs to display fields correctly.",
                    "Handles complex conditional formatting and multi-scenario proformas. Debugs layout issues.",
                    "Designs proforma templates. Advises on output standards. Optimises the proforma generation engine.",
                ],
                improve: [
                    "Compare a proforma spec to the generated output. Understand every field mapping.",
                    "Take ownership of proforma delivery for a scheme. Learn the templating system.",
                    "Handle a complex proforma with conditional sections. Build a testing approach for layouts.",
                    "Propose improvements to the proforma framework. Create reusable templates.",
                ],
            },
            {
                id: "gmp",
                name: "GMP / Equalisation / Revaluation",
                description: "Specialist knowledge of Guaranteed Minimum Pension calculations, GMP equalisation methods, and revaluation — among the most complex areas in UK pensions.",
                levels: [
                    "Aware that GMP exists and is complex. Can follow GMP-related code with heavy guidance.",
                    "Understands basic GMP concepts (pre/post-97, fixed/s148 revaluation). Can implement guided GMP calcs.",
                    "Implements GMP equalisation methods (C2, D2, etc.). Handles complex revaluation scenarios.",
                    "Expert in all GMP methodologies. Consulted across teams. Keeps up with evolving guidance.",
                ],
                improve: [
                    "Read an introductory guide to GMP. Ask a GMP specialist to explain the basics.",
                    "Study the different revaluation methods. Work on a GMP scheme with mentoring.",
                    "Implement a full GMP equalisation calc. Study the DWP guidance in detail.",
                    "Present on GMP topics. Contribute to industry discussions. Build GMP reference documentation.",
                ],
            },
        ],
    },
    {
        category: "Delivery & Process",
        skills: [
            {
                id: "projectDelivery",
                name: "Project Delivery",
                description: "Estimating, planning, and delivering calculation work within project timelines — from initial analysis through to go-live.",
                levels: [
                    "Completes assigned tasks within a project. Follows the delivery process with guidance.",
                    "Estimates own work reasonably. Manages own deliverables. Communicates progress proactively.",
                    "Plans and delivers complex multi-calc projects. Identifies risks early. Adjusts plans pragmatically.",
                    "Runs major delivery programmes. Defines estimation frameworks. Mentors others on delivery skills.",
                ],
                improve: [
                    "Track your estimates vs actuals. Discuss variances with your lead.",
                    "Take on more estimation responsibility. Learn to break work into smaller deliverables.",
                    "Lead a small project end-to-end. Practice stakeholder communication.",
                    "Formalise estimation techniques. Share lessons learned from past projects.",
                ],
            },
            {
                id: "supportTickets",
                name: "Support & Live Issues",
                description: "Investigating and resolving support tickets for live pension schemes — diagnosing calculation errors, data issues, and urgent fixes.",
                levels: [
                    "Investigates simple tickets with guidance. Can read logs and trace basic issues.",
                    "Resolves standard tickets independently. Follows escalation procedures. Documents resolutions.",
                    "Handles complex cross-scheme issues. Identifies root causes vs symptoms. Proposes systemic fixes.",
                    "Defines support processes. Reduces ticket volume through preventive measures. Handles critical incidents.",
                ],
                improve: [
                    "Shadow someone resolving a support ticket. Learn the common issue patterns.",
                    "Take on more tickets independently. Build a personal knowledge base of resolutions.",
                    "Analyse ticket trends. Propose code fixes to eliminate recurring issues.",
                    "Design a knowledge base system. Run incident retrospectives.",
                ],
            },
            {
                id: "uat",
                name: "UAT & Admin Collaboration",
                description: "Supporting the admin team through User Acceptance Testing — explaining calcs, helping reproduce issues, and ensuring smooth handover.",
                levels: [
                    "Understands what UAT is. Can respond to simple UAT queries with guidance.",
                    "Supports UAT independently. Explains calc results clearly to non-technical users. Fixes UAT defects promptly.",
                    "Designs UAT test plans with admin. Anticipates admin questions. Streamlines the UAT process.",
                    "Defines UAT standards. Builds tools to support admin testing. Transforms UAT efficiency.",
                ],
                improve: [
                    "Sit in on a UAT session. See how admin users interact with the calcs.",
                    "Own UAT support for a scheme. Practice explaining technical concepts simply.",
                    "Create UAT guides tailored to each scheme. Gather admin feedback and act on it.",
                    "Design self-service UAT tools. Establish UAT best practices across the team.",
                ],
            },
            {
                id: "codeReview",
                name: "Code Review",
                description: "Giving and receiving constructive code reviews — improving code quality, sharing knowledge, and maintaining standards.",
                levels: [
                    "Responds to review feedback positively. Makes requested changes.",
                    "Gives useful review comments on logic, naming, and structure. Understands team coding standards.",
                    "Reviews complex code effectively. Catches subtle bugs and design issues. Mentors through reviews.",
                    "Defines review standards. Ensures reviews drive team-wide improvement. Balances thoroughness with velocity.",
                ],
                improve: [
                    "Read review comments on others' PRs to learn what reviewers look for.",
                    "Start reviewing PRs proactively. Focus on readability and correctness.",
                    "Review code in unfamiliar areas to broaden knowledge. Give actionable suggestions, not just criticism.",
                    "Create a code review checklist. Track review quality metrics.",
                ],
            },
            {
                id: "documentation",
                name: "Documentation & Knowledge Sharing",
                description: "Writing clear documentation, sharing knowledge with the team, and ensuring institutional knowledge is captured.",
                levels: [
                    "Documents own work when asked. Follows existing documentation patterns.",
                    "Writes clear READMEs and inline comments proactively. Shares learnings in team channels.",
                    "Creates comprehensive technical guides. Runs knowledge-sharing sessions. Documents architectural decisions.",
                    "Defines documentation standards. Builds a team knowledge base. Champions documentation culture.",
                ],
                improve: [
                    "Document something you learned this week. Share it with one person.",
                    "Write a how-to guide for a process you know well. Get feedback from someone new.",
                    "Run a lunch-and-learn session. Create an ADR for a recent decision.",
                    "Evaluate documentation tools. Create templates that make good docs easy.",
                ],
            },
        ],
    },
    {
        category: "Professional",
        skills: [
            {
                id: "communication",
                name: "Communication & Stakeholders",
                description: "Communicating effectively with colleagues, managers, BAs, admin team, and other stakeholders — in writing and verbally.",
                levels: [
                    "Communicates clearly within the immediate team. Asks for help when needed.",
                    "Communicates confidently with BAs and admin. Writes clear emails and messages. Gives status updates.",
                    "Handles difficult conversations. Presents to wider groups. Translates between technical and business language.",
                    "Influences at a senior level. Represents the team in cross-departmental discussions. Exceptional written and verbal skills.",
                ],
                improve: [
                    "Practice summarising technical problems in plain English.",
                    "Volunteer to write project updates. Present in team meetings.",
                    "Lead a stakeholder meeting. Get feedback on your communication style.",
                    "Present at company-wide events. Mentor others on communication.",
                ],
            },
            {
                id: "mentoring",
                name: "Mentoring & Coaching",
                description: "Helping team members develop their skills through mentoring, pairing, coaching, and creating a supportive learning environment.",
                levels: [
                    "Open to being mentored. Asks good questions. Learns from feedback.",
                    "Helps newer team members. Shares knowledge willingly. Pairs effectively.",
                    "Actively mentors 1-2 people. Creates learning opportunities. Gives constructive feedback.",
                    "Defines the team's mentoring programme. Develops people systematically. Coaches across experience levels.",
                ],
                improve: [
                    "Be proactive about asking for feedback. Take notes on what you learn.",
                    "Offer to pair with someone newer. Share a useful technique each week.",
                    "Take on a formal mentee. Set goals together and review regularly.",
                    "Design an onboarding programme. Create a skills development framework.",
                ],
            },
            {
                id: "problemSolving",
                name: "Problem Solving & Initiative",
                description: "Approaching problems systematically, showing initiative in finding solutions, and not waiting to be told what to do.",
                levels: [
                    "Solves straightforward problems. Escalates appropriately when stuck.",
                    "Breaks down problems methodically. Tries multiple approaches before escalating. Shows initiative.",
                    "Tackles ambiguous problems. Researches independently. Proposes solutions proactively.",
                    "Solves cross-team systemic issues. Anticipates problems before they occur. Drives continuous improvement.",
                ],
                improve: [
                    "When stuck, write down what you've tried before asking for help.",
                    "Before escalating, spend 30 minutes researching independently. Document your approach.",
                    "Look for problems that nobody owns. Propose a solution and drive it forward.",
                    "Identify patterns in recurring issues. Propose structural changes to prevent them.",
                ],
            },
            {
                id: "timeManagement",
                name: "Time Management & Prioritisation",
                description: "Managing your workload effectively, prioritising competing demands, and delivering reliably.",
                levels: [
                    "Completes tasks on time with clear priorities set by others.",
                    "Manages own time effectively. Balances project work with support. Communicates when overloaded.",
                    "Prioritises across multiple projects. Helps others manage workload. Meets deadlines consistently.",
                    "Optimises team workflow. Identifies and removes bottlenecks. Balances short-term delivery with long-term improvement.",
                ],
                improve: [
                    "Use a task list daily. Track where your time actually goes for a week.",
                    "Practice estimating tasks and comparing to actuals. Learn to say 'not right now' with a reason.",
                    "Manage a shared backlog. Help the team prioritise collectively.",
                    "Implement workflow improvements. Measure and improve team throughput.",
                ],
            },
        ],
    },
];
