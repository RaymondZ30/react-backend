const courses = [
    {
        id: 1030,
        name: 'Introduction to Web Development I',
        description: 'Students will examine the structure of the Internet and the World Wide Web and how they work; design and implement professional interactive websites using styles in CSS. Topics include design principles, image manipulation, and simple CGI scripting. Explore innovative trends that use the Internet as a computing platform.'
    },
    {
        id: 1045,
        name: 'Introduction to Web Programming',
        description: 'Introduction to programming with a modern programming language (e.g., JavaScript) in a web-based environment. Program development skills including: analyzing a problem to make it amenable to programming; writing structured, modularized programs; program documentation; interacting with the computer operating system; event driven programming for client-side web applications.'
    },
    {
        id: 1050,
        name: 'Introduction to Computer Science',
        description: 'Offers a broad overview of the computer science discipline. Provides students with an appreciation for and an understanding of the many different aspects of the discipline. Topics include information and data representation; introduction to computer hardware and programming; networks; applications (e.g., spreadsheet, database); social networking; ethics; and history. Intended for both students expecting to continue in computer science as well as for those taking it for general interest.'
    },
    {
        id: 1150,
        name: 'Program Design',
        description: 'Program design entails building and implementing an algorithm in a programming language (such as Java) using good software development principles. Students develop problem-solving techniques while learning the basics of algorithm development, procedural abstraction, and data representation.'
    },
    {
        id: 1160,
        name: 'Algorithms and Data Structures I',
        description: 'Students focus on practicing and developing programing skills. Students implement algorithms along with appropriate data structures to produce good software. Students apply recursion, abstract data types, algorithm analysis, sorting and searching algorithms, pointers, arrays, dynamic memory management, linked lists, stacks, and queues. Students also learn about low-level data representations and systematic software development. As a tool, object-oriented programming is introduced.'
    },
    {
        id: 1181,
        name: 'Object-Oriented Computing',
        description: 'Object-oriented programming (OOP) is a paradigm to design and develop software based on the concept of objects. Students are introduced to the fundamental concepts of programming from an object-oriented (OO) perspective: abstraction; objects; classes and class hierarchies; methods; encapsulation and information hiding; inheritance; polymorphism. Students learn and practice the application of OO design with modeling tools (e.g. class diagrams), container/collection classes, event-driven programming, exception handling, GUI, multi-threading, and networking. The focus is placed on good software engineering principles using a language that supports the OO paradigm.'
    },
    {
        id: 1280,
        name: 'Unix Tools and Scripting',
        description: 'Introduction to concepts and practices in operating systems, software engineering tools, system and network administration. Scripting languages, utilities, tools and techniques. Topics include command line interface, filters, pipelines, file organization, reusable utilities, software configuration management, simplifying programming tasks, System/Network configuration, administration, and security issues.'
    },
    {
        id: 1480,
        name: 'Networking',
        description: 'A hands-on introduction to designing, installing and supporting computer networks including network standards, protocols, topologies, networking hardware and network operating systems. Enterprise-wide deployment of computing resources using client/server architecture. Administration of networking operating system facilities. Upon successful completion, students should have the foundation to challenge the CompTIA Network+ certification test.'
    },
    {
        id: 2030,
        name: 'Web Development II',
        description: 'Intermediate website design and development covering information architecture, accessibility and usability. Includes advanced CSS, basic programming (client-side and server-side scripting), the Document Object Model (DOM), handling form data and designing for mobile devices. Students will design and implement a moderately complex website as a class project.'
    },
    {
        id: 2130,
        name: 'Multimedia and Animation',
        description: 'Presents the core multimedia technologies and standards including text, audio, video, graphics, 2D and 3D modeling and animation. Standard algorithms, tools and techniques for manipulating multimedia objects. Use of multimedia scripting languages and authoring environments. Students will design and implement a multimedia project.'
    },
    {
        id: 2150,
        name: 'Algorithms and Data Structures II',
        description: 'Students build on the foundational concepts learned in CPSC 1160 and expand their skills to include non-linear data structures and hashing. Topics include algorithm analysis, non-comparative sorting, algorithmic paradigms (divide and conquer, greedy, heuristic, backtracking, and dynamic programming), binary search trees, balanced trees, tree traversals, priority queues and heaps, Huffman codes, graphs, and graph algorithms. Students implement solutions using an object-oriented programming language.'
    },
    {
        id: 2190,
        name: 'Theoretical Foundations of Computer Science',
        description: 'Covers sets and propositions; relations and functions; permutations, combinations and counting; induction proofs; graphs, trees and networks; Boolean algebra and mathematical models; application of theoretical concepts to program development.'
    },
    {
        id: 2221,
        name: 'Database Systems',
        description: 'A comprehensive introduction to theory and practice of designing and building databases and applications using database management systems. The relational model, relational algebra, SQL (the standard language for creating, querying, and modifying relational databases), UML or E/R approach to database design, as well as relational design principles based on functional dependencies and normal forms. Other topics include indexes, views, transactions, integrity constraints, and triggers. Students will design and implement a relational database for an enterprise as a major project using programming tools widely used in industry (e.g., Oracle).'
    },
    {
        id: 2261,
        name: 'Web Technology',
        description: 'Offers an intermediate to advanced practical treatment of the architecture of Web-based information systems. Topics include protocols; the role of clients, servers, gateways, and proxies; document markup languages; client and server side programming/scripting; database integration; server administration and security; and applications (such as e-commerce).'
    },
    {
        id: 2350,
        name: 'Software Practices',
        description: 'Students learn how to apply software development best practices to create the right product (validated), done right (verified), and managed right (through responsive and responsible process). They will learn the "what", "how", and "why" of agile practices, and the consequences for not following them, while working through the Software Development Life Cycle (SDLC) on multi-developer projects.'
    },
    {
        id: 2600,
        name: 'Full Stack Web Development I',
        description: 'Students explore web application development concepts and practices, including common full-stack architectures, server-side scripting languages and frameworks, and databases. Students learn the basics of server side-scripting and build a basic web application using contemporary languages, libraries, and frameworks.'
    },
    {
        id: 2650,
        name: 'Full Stack Web Development II',
        description: 'Building on the knowledge and skills learned in Full Stack Web Development I, students explore intermediate web application development practices, including security and authentication, third-party APIs, web accessibility, advanced UI design techniques, contemporary front-end architectures and frameworks, and hosting and deployment. Students build and deploy a moderately-complex web application.'
    },
    {
        id: 2810,
        name: 'Computer and Information Security',
        description: 'An introduction to the policies, mechanisms, and implementations of computer security. Provides an understanding of threats, including script kiddies; covert channels; and malicious logic such as viruses, worms, time bombs, and trap doors. Students will learn how attacks work, how to defend against attacks, and how to design and administer secure systems and networks.'
    }
]

module.exports = courses;