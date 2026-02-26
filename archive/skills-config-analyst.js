// ─────────────────────────────────────────────────────────────
// Skills Matrix — Analyst Configuration
// Edit this file to customise skills, categories, levels, and UI text.
// No changes to index.html needed.
// ─────────────────────────────────────────────────────────────

// ─── UI TEXT ───
const UI_TEXT = {
    appTitle: "Skills Matrix — Analysts",
    memberInputPlaceholder: "Team member name...",
    addMemberButton: "+ Add Member",
    skillHeaderHint: "click for detail",
    teamMemberColumn: "Team Member",
    teamAverageLabel: "Team Average",
    emptyStateTitle: "No team members yet",
    emptyStateHint: "Add a team member above to start building the matrix",
    exportFilename: "skills-matrix-analysts.csv",
    detailHeadings: {
        description: "What this skill means",
        levels: "What each level looks like",
        improve: "How to improve",
    },
};

// ─── LEVELS ───
const LEVELS = [
    { label: "—",          color: "transparent" },
    { label: "Foundation", color: "var(--level-1)" },
    { label: "Proficient", color: "var(--level-2)" },
    { label: "Advanced",   color: "var(--level-3)" },
    { label: "Expert",     color: "var(--level-4)" },
];

// ─── SKILL CATEGORIES & SKILLS ───
const SKILLS = [
    {
        category: "Specification & Analysis",
        skills: [
            {
                id: "specWriting",
                name: "Writing Calc Specifications",
                description: "Producing clear, complete, and unambiguous calculation specifications that developers can code from — covering all scenarios, edge cases, and business rules.",
                levels: [
                    "Can write simple spec sections with guidance. Understands the basic spec template and structure.",
                    "Writes standard calc specs independently. Covers happy-path scenarios and common edge cases. Specs are clear and codeable.",
                    "Writes complex multi-scenario specs. Anticipates developer questions. Handles interactions between calc types and scheme-specific nuances.",
                    "Defines spec standards and templates. Reviews other analysts' specs. Drives continuous improvement in spec quality across the team.",
                ],
                improve: [
                    "Study completed specs alongside the finished code. See how developers interpreted your words.",
                    "Track the questions developers ask during build. Use these to improve your next spec.",
                    "Spec a complex calc (e.g. GMP equalisation) end-to-end. Get peer review from a senior analyst.",
                    "Create a spec quality checklist. Run workshops on common spec pitfalls.",
                ],
            },
            {
                id: "requirementsGathering",
                name: "Requirements Gathering",
                description: "Eliciting, documenting, and validating requirements from scheme rules, legislation, client instructions, and stakeholder conversations.",
                levels: [
                    "Can extract basic requirements from scheme rules with guidance. Takes notes in meetings.",
                    "Gathers requirements independently from rules and client instructions. Asks clarifying questions. Documents requirements clearly.",
                    "Handles ambiguous or conflicting requirements. Facilitates discovery workshops. Identifies unstated assumptions.",
                    "Defines the requirements process. Coaches others on elicitation techniques. Manages complex multi-stakeholder requirements.",
                ],
                improve: [
                    "Sit in on requirements sessions. Compare the rules to the final spec to see what was extracted.",
                    "Lead a requirements gathering session for a straightforward calc. Prepare questions in advance.",
                    "Handle a scheme with ambiguous rules. Document your assumptions and get sign-off.",
                    "Design a requirements traceability approach. Train new analysts on gathering techniques.",
                ],
            },
            {
                id: "gapAnalysis",
                name: "Gap Analysis & Impact Assessment",
                description: "Identifying what needs to change when scheme rules are amended, legislation changes, or new requirements emerge — and assessing the impact on existing calcs.",
                levels: [
                    "Can compare two versions of a document to spot differences with guidance.",
                    "Performs gap analysis independently. Identifies affected calcs and documents changes needed.",
                    "Assesses cross-scheme impact. Identifies knock-on effects and dependencies. Produces clear impact reports.",
                    "Defines the impact assessment framework. Advises on complex regulatory changes affecting multiple schemes.",
                ],
                improve: [
                    "Compare a rule amendment to the existing spec. List every difference you find.",
                    "Perform a full gap analysis for a rule change. Walk through the impact with a developer.",
                    "Handle a legislative change affecting multiple schemes. Create a reusable impact template.",
                    "Lead the response to a major regulatory change (e.g. new pension freedoms, dashboards).",
                ],
            },
            {
                id: "dataAnalysis",
                name: "Data Analysis & Querying",
                description: "Analysing scheme data to support specifications, validate calcs, investigate issues, and produce reports — using SQL, Excel, or other tools.",
                levels: [
                    "Can work with data in Excel (filters, sorting, basic formulas). Understands table structures with guidance.",
                    "Writes basic SQL queries. Creates pivot tables and lookups in Excel. Uses data to validate calc outputs.",
                    "Writes complex queries (joins, CTEs, aggregations). Analyses large datasets. Produces data-driven insights for spec decisions.",
                    "Go-to person for data questions. Designs data validation strategies. Builds reusable query libraries.",
                ],
                improve: [
                    "Learn basic SQL SELECT statements. Practice with real scheme data in a safe environment.",
                    "Write queries to investigate a support ticket. Build a spreadsheet model to cross-check results.",
                    "Analyse a full scheme's data for a migration or reconciliation exercise.",
                    "Create a shared SQL library for common analyst queries. Mentor others on data techniques.",
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
                description: "Deep understanding of pension scheme rules, trust deeds, overriding legislation, and how they interact to define calculation requirements.",
                levels: [
                    "Aware that scheme rules exist. Can read a rule with guidance to understand a calc requirement.",
                    "Reads and interprets rules independently for standard calcs. Understands key legislation (GMP, LTA, AA, etc.).",
                    "Interprets complex or ambiguous rules. Spots conflicts between rules and legislation. Advises on edge cases and precedent.",
                    "Deep legislative knowledge. Consulted on rule interpretation across schemes. Keeps team updated on regulatory changes.",
                ],
                improve: [
                    "Read the rules for your current scheme alongside the spec. Ask your lead to explain key sections.",
                    "Study the Pensions Act basics and key statutory instruments. Read rules for multiple schemes to see patterns.",
                    "Attend industry webinars. Study complex scenarios like GMP equalisation and McCloud.",
                    "Build a knowledge base of rule interpretations. Present legislative updates to the team.",
                ],
            },
            {
                id: "calcTypes",
                name: "Calculation Types & Methodologies",
                description: "Understanding the full range of pension calculations — quotes, retirements, deaths, transfers, refunds, augmentations — and the methodologies behind them.",
                levels: [
                    "Understands 2-3 basic calc types (e.g. deferred quote, retirement). Can follow the methodology with guidance.",
                    "Comfortable with most standard calc types. Understands how they relate to each other and to the benefit structure.",
                    "Handles all calc types including complex ones (transfers, bulk calcs, augmentations). Understands actuarial factors and their application.",
                    "Expert across all calc types and methodologies. Defines how new or unusual calcs should be approached. Advises actuaries on implementation.",
                ],
                improve: [
                    "Work through a simple calc type end-to-end — from rule to spec to worked example.",
                    "Expand to less familiar calc types. Understand when each applies and how they differ.",
                    "Spec a complex or unusual calc type. Study actuarial factor tables and their derivation.",
                    "Document the full calc type catalogue for your schemes. Define best practice for new calc types.",
                ],
            },
            {
                id: "gmp",
                name: "GMP / Equalisation / Revaluation",
                description: "Specialist knowledge of Guaranteed Minimum Pension, GMP equalisation methodologies, and revaluation — among the most complex areas in UK pensions.",
                levels: [
                    "Aware that GMP exists and is complex. Can follow GMP-related spec content with heavy guidance.",
                    "Understands basic GMP concepts (pre/post-97, fixed/s148 revaluation). Can spec guided GMP calcs.",
                    "Specs GMP equalisation methods (C2, D2, etc.) independently. Handles complex revaluation scenarios.",
                    "Expert in all GMP methodologies. Consulted across teams. Keeps up with evolving DWP guidance.",
                ],
                improve: [
                    "Read an introductory guide to GMP. Ask a GMP specialist to explain the basics.",
                    "Study the different revaluation methods. Work on a GMP scheme spec with mentoring.",
                    "Spec a full GMP equalisation calc. Study the DWP guidance and worked examples in detail.",
                    "Present on GMP topics. Contribute to industry discussions. Build GMP reference documentation.",
                ],
            },
            {
                id: "taxAndLimits",
                name: "Tax, Limits & Allowances",
                description: "Understanding HMRC tax rules, lifetime and annual allowances, pension commencement lump sums, and how they constrain or modify calculations.",
                levels: [
                    "Aware that tax rules apply to pensions. Can follow tax-related spec sections with guidance.",
                    "Understands standard tax rules (PCLS, LTA, AA). Specs tax calculations for common scenarios.",
                    "Handles complex tax scenarios (multiple crystallisation events, scheme-specific protections, carry forward). Spots tax implications in other calcs.",
                    "Expert in pension taxation. Advises on novel tax scenarios. Keeps up with HMRC changes and budget impacts.",
                ],
                improve: [
                    "Read the HMRC pensions tax manual basics. Follow a tax calc through a worked example.",
                    "Spec the tax elements of a retirement calc. Understand how LTA and AA interact.",
                    "Handle a complex tax scenario (e.g. multiple protections, serious ill-health). Build reference examples.",
                    "Present tax updates after each budget. Create a tax rules reference for the team.",
                ],
            },
        ],
    },
    {
        category: "Testing & Validation",
        skills: [
            {
                id: "workedExamples",
                name: "Worked Examples & Spreadsheets",
                description: "Creating manually calculated worked examples and spreadsheet models to validate that calculation logic is correct before and during development.",
                levels: [
                    "Can follow a worked example. Checks code output against expected results with guidance.",
                    "Creates worked examples from specs. Builds validation spreadsheets. Reconciles differences with code output.",
                    "Builds complex spreadsheet models for multi-step calcs. Identifies errors in both code and examples. Creates edge-case scenarios.",
                    "Designs the worked example process. Creates reusable validation spreadsheets. Trains others on spreadsheet modelling.",
                ],
                improve: [
                    "Manually work through a simple calc with a calculator to understand each step.",
                    "Build your own spreadsheet for a calc you've specced. Compare every intermediate step with the developer.",
                    "Create a library of validation spreadsheets for common calc types.",
                    "Standardise the worked example format. Run sessions on spreadsheet validation techniques.",
                ],
            },
            {
                id: "uatCoordination",
                name: "UAT Coordination & Support",
                description: "Planning, coordinating, and supporting User Acceptance Testing — working with admin teams to validate that calculations are correct and fit for purpose.",
                levels: [
                    "Understands what UAT is. Can respond to simple UAT queries with guidance.",
                    "Supports UAT independently. Explains calc results clearly to admin users. Helps investigate discrepancies.",
                    "Designs UAT test plans. Anticipates admin questions. Coordinates UAT across multiple calcs or schemes. Streamlines the process.",
                    "Defines UAT standards. Builds tools or templates to support admin testing. Transforms UAT efficiency.",
                ],
                improve: [
                    "Sit in on a UAT session. See how admin users interact with the calcs.",
                    "Own UAT support for a scheme. Create a test pack before UAT starts.",
                    "Design a comprehensive UAT plan covering all scenarios. Gather admin feedback and act on it.",
                    "Build self-service UAT tools. Establish UAT best practices across the team.",
                ],
            },
            {
                id: "testStrategy",
                name: "Test Strategy & Scenarios",
                description: "Designing comprehensive test scenarios that cover all paths through a calculation — normal, boundary, edge cases, and error conditions.",
                levels: [
                    "Can identify basic test scenarios (happy path, simple variants) with guidance.",
                    "Designs test scenarios independently covering common edge cases. Thinks about boundary values and date scenarios.",
                    "Creates comprehensive test matrices. Identifies complex interactions between scenarios. Tests for regulatory boundary conditions.",
                    "Defines test strategy for the team. Ensures systematic coverage. Builds scenario libraries for common calc types.",
                ],
                improve: [
                    "For your next spec, list every scenario you can think of before looking at existing tests.",
                    "Study boundary value analysis and equivalence partitioning concepts. Apply them to a calc.",
                    "Create a full test matrix for a complex calc. Review it with a developer for coverage gaps.",
                    "Build a reusable test scenario library. Train analysts on systematic test design.",
                ],
            },
            {
                id: "proformas",
                name: "Proformas & Output Validation",
                description: "Specifying and validating the formatted output documents that present calculation results to scheme members and administrators.",
                levels: [
                    "Understands what a proforma is. Can check output against a template with guidance.",
                    "Specs proforma layouts from templates. Validates field mappings and conditional content. Spots formatting issues.",
                    "Designs complex proformas with conditional sections and multi-scenario outputs. Ensures regulatory compliance of output wording.",
                    "Defines proforma standards. Advises on output best practice. Reviews proforma specs across schemes.",
                ],
                improve: [
                    "Compare a proforma spec to the generated output. Understand every field mapping.",
                    "Spec a proforma end-to-end. Validate the output with sample data.",
                    "Handle a complex proforma with conditional sections across multiple scenarios.",
                    "Create proforma templates and standards. Run a session on output best practice.",
                ],
            },
        ],
    },
    {
        category: "Delivery & Process",
        skills: [
            {
                id: "projectDelivery",
                name: "Project Delivery & Planning",
                description: "Estimating, planning, and delivering analytical work within project timelines — from initial analysis through to UAT sign-off.",
                levels: [
                    "Completes assigned tasks within a project. Follows the delivery process with guidance.",
                    "Estimates own work reasonably. Manages own deliverables. Communicates progress proactively.",
                    "Plans and delivers complex multi-calc projects. Identifies risks and dependencies early. Manages analyst workstream.",
                    "Runs major delivery programmes. Defines estimation frameworks. Mentors others on delivery skills.",
                ],
                improve: [
                    "Track your estimates vs actuals. Discuss variances with your lead.",
                    "Take on more estimation responsibility. Learn to break work into smaller deliverables.",
                    "Lead the analyst workstream on a project end-to-end. Practice stakeholder communication.",
                    "Formalise estimation techniques. Share lessons learned from past projects.",
                ],
            },
            {
                id: "stakeholderMgmt",
                name: "Stakeholder Management",
                description: "Managing relationships with clients, actuaries, admin teams, developers, and project managers — balancing competing priorities and expectations.",
                levels: [
                    "Communicates clearly within the immediate team. Asks for help when needed.",
                    "Communicates confidently with developers and admin. Writes clear emails and spec queries. Gives status updates.",
                    "Manages client-facing relationships. Handles difficult conversations. Translates between business and technical language.",
                    "Influences at a senior level. Represents the team in client meetings and cross-departmental discussions.",
                ],
                improve: [
                    "Practice summarising requirements in plain English for different audiences.",
                    "Own communication with developers for your scheme. Present progress in team meetings.",
                    "Lead a client requirements workshop. Get feedback on your communication style.",
                    "Present at client review meetings. Mentor others on stakeholder management.",
                ],
            },
            {
                id: "handover",
                name: "Developer Handover & Collaboration",
                description: "Handing over specifications to developers effectively — ensuring they understand the requirements, answering questions, and collaborating throughout the build.",
                levels: [
                    "Hands over specs to developers. Answers basic questions about the spec content.",
                    "Conducts spec walkthrough sessions. Anticipates developer questions. Available and responsive during the build phase.",
                    "Collaborates closely with developers throughout. Helps resolve ambiguities in real time. Reviews code output against spec intent.",
                    "Defines the handover process. Builds strong analyst-developer partnerships. Drives improvements in how specs are consumed.",
                ],
                improve: [
                    "Sit in on a developer's spec review. Note what they focus on and what they question.",
                    "Run a formal walkthrough for your next spec. Gather feedback from the developer afterwards.",
                    "Pair with a developer during the build. Understand how your spec translates to code.",
                    "Design a handover checklist. Gather metrics on spec quality (questions raised, defects found).",
                ],
            },
            {
                id: "documentation",
                name: "Documentation & Knowledge Sharing",
                description: "Writing clear documentation, sharing knowledge with the team, and ensuring institutional knowledge about schemes and processes is captured.",
                levels: [
                    "Documents own work when asked. Follows existing documentation patterns.",
                    "Writes clear scheme notes and process docs proactively. Shares learnings in team channels.",
                    "Creates comprehensive scheme guides. Runs knowledge-sharing sessions. Documents analytical decisions and rationale.",
                    "Defines documentation standards. Builds a team knowledge base. Champions documentation culture.",
                ],
                improve: [
                    "Document something you learned about a scheme this week. Share it with one person.",
                    "Write a scheme guide for a scheme you know well. Get feedback from someone unfamiliar with it.",
                    "Run a lunch-and-learn session on a domain topic. Create a decision log for a complex spec.",
                    "Evaluate documentation tools. Create templates that make good docs easy.",
                ],
            },
            {
                id: "supportTickets",
                name: "Support & Live Issue Investigation",
                description: "Investigating support tickets for live pension schemes — analysing calculation discrepancies, data issues, and advising on fixes.",
                levels: [
                    "Investigates simple tickets with guidance. Can check calc results against rules.",
                    "Resolves standard tickets independently. Traces discrepancies through the calc logic. Documents findings clearly.",
                    "Handles complex cross-calc issues. Identifies root causes vs symptoms. Proposes spec corrections or rule clarifications.",
                    "Defines support investigation processes. Reduces ticket volume through spec improvements. Handles critical incidents.",
                ],
                improve: [
                    "Shadow someone investigating a support ticket. Learn the common issue patterns.",
                    "Take on more tickets independently. Build a personal knowledge base of common issues.",
                    "Analyse ticket trends for a scheme. Propose spec improvements to eliminate recurring issues.",
                    "Design a knowledge base for common issues. Run post-incident reviews.",
                ],
            },
        ],
    },
    {
        category: "Professional",
        skills: [
            {
                id: "communication",
                name: "Communication & Presentation",
                description: "Communicating effectively in writing and verbally — specs, emails, meetings, presentations, and informal conversations.",
                levels: [
                    "Communicates clearly within the immediate team. Writes understandable specs with guidance.",
                    "Writes clear, well-structured specs and emails. Presents confidently in team meetings.",
                    "Handles difficult conversations. Presents to clients and wider groups. Adapts communication style to the audience.",
                    "Exceptional written and verbal skills. Presents at company-wide or industry events. Influences senior stakeholders.",
                ],
                improve: [
                    "Get feedback on your spec writing. Is it clear to someone who wasn't in the meeting?",
                    "Volunteer to present in team meetings. Practice summarising complex topics concisely.",
                    "Lead a client-facing meeting. Ask a trusted colleague for honest feedback.",
                    "Present at a company event. Mentor others on communication skills.",
                ],
            },
            {
                id: "mentoring",
                name: "Mentoring & Coaching",
                description: "Helping team members develop their analytical skills through mentoring, pairing, coaching, and creating a supportive learning environment.",
                levels: [
                    "Open to being mentored. Asks good questions. Learns from feedback.",
                    "Helps newer team members. Shares knowledge willingly. Pairs effectively on specs.",
                    "Actively mentors 1-2 people. Creates learning opportunities. Gives constructive feedback on specs and analysis.",
                    "Defines the team's mentoring programme. Develops people systematically. Coaches across experience levels.",
                ],
                improve: [
                    "Be proactive about asking for feedback on your specs. Take notes on what you learn.",
                    "Offer to pair with someone newer on their next spec. Share a useful technique each week.",
                    "Take on a formal mentee. Set goals together and review regularly.",
                    "Design an onboarding programme for new analysts. Create a skills development framework.",
                ],
            },
            {
                id: "problemSolving",
                name: "Problem Solving & Initiative",
                description: "Approaching analytical problems systematically, showing initiative in finding solutions, and not waiting to be told what to do.",
                levels: [
                    "Solves straightforward analytical problems. Escalates appropriately when stuck.",
                    "Breaks down problems methodically. Researches rules and precedent before escalating. Shows initiative.",
                    "Tackles ambiguous problems. Proposes solutions to gaps in rules or process. Drives improvements proactively.",
                    "Solves cross-team systemic issues. Anticipates problems before they occur. Drives continuous improvement.",
                ],
                improve: [
                    "When stuck on a rule interpretation, write down what you've considered before asking for help.",
                    "Before escalating, research similar schemes or precedent. Document your reasoning.",
                    "Identify a process gap and propose a solution. Drive it through to implementation.",
                    "Identify patterns in recurring analytical issues. Propose structural changes to prevent them.",
                ],
            },
            {
                id: "timeManagement",
                name: "Time Management & Prioritisation",
                description: "Managing your workload effectively, prioritising competing demands from multiple schemes and projects, and delivering reliably.",
                levels: [
                    "Completes tasks on time with clear priorities set by others.",
                    "Manages own time effectively. Balances multiple scheme demands. Communicates when overloaded.",
                    "Prioritises across multiple projects and schemes. Helps others manage workload. Meets deadlines consistently.",
                    "Optimises team workflow. Identifies and removes bottlenecks. Balances short-term delivery with long-term improvement.",
                ],
                improve: [
                    "Use a task list daily. Track where your time actually goes for a week.",
                    "Practice estimating tasks and comparing to actuals. Learn to say 'not right now' with a reason.",
                    "Manage a shared backlog across schemes. Help the team prioritise collectively.",
                    "Implement workflow improvements. Measure and improve team throughput.",
                ],
            },
        ],
    },
];
