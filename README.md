<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdulrasheed Saidu | ICT Specialist & Developer</title>
    <meta name="description" content="Portfolio of Abdulrasheed Saidu - ICT Specialist, Hardware Technician, and Systems Developer.">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome 6 Icons CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Inter Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
    </style>
</head>
<body class="bg-slate-900 text-slate-100 font-sans leading-relaxed selection:bg-blue-500 selection:text-white min-h-screen flex flex-col">

    <!-- Header / Navbar -->
    <header id="main-header" class="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" class="text-xl font-bold tracking-wider text-blue-400 hover:text-blue-300 transition-colors">
                ABDULRASHEED<span class="text-white">.ICT</span>
            </a>
            
            <!-- Desktop Nav -->
            <nav class="hidden md:flex space-x-8 text-sm font-medium">
                <a href="#about" class="text-slate-300 hover:text-blue-400 transition-colors">About</a>
                <a href="#skills" class="text-slate-300 hover:text-blue-400 transition-colors">Skills</a>
                <a href="#experience" class="text-slate-300 hover:text-blue-400 transition-colors">Experience & Education</a>
                <a href="#projects" class="text-slate-300 hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" class="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
            </nav>

            <!-- Mobile Menu Toggle Button -->
            <button 
                id="menu-toggle-btn" 
                type="button" 
                class="md:hidden text-slate-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle navigation"
            >
                <i id="menu-icon" class="fa-solid fa-bars text-xl"></i>
            </button>
        </div>

        <!-- Mobile Dropdown Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-slate-900/95 border-b border-slate-800 px-6 py-4 space-y-3">
            <a href="#about" class="block py-2 text-base font-medium text-slate-300 hover:text-blue-400 mobile-nav-link">About</a>
            <a href="#skills" class="block py-2 text-base font-medium text-slate-300 hover:text-blue-400 mobile-nav-link">Skills</a>
            <a href="#experience" class="block py-2 text-base font-medium text-slate-300 hover:text-blue-400 mobile-nav-link">Experience & Education</a>
            <a href="#projects" class="block py-2 text-base font-medium text-slate-300 hover:text-blue-400 mobile-nav-link">Projects</a>
            <a href="#contact" class="block py-2 text-base font-medium text-slate-300 hover:text-blue-400 mobile-nav-link">Contact</a>
        </div>
    </header>

    <main class="flex-1">
        <!-- Hero Section -->
        <section class="min-h-[85vh] flex items-center justify-center px-6 text-center relative overflow-hidden">
            <!-- Ambient Glow -->
            <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div class="max-w-3xl relative z-10 py-12">
                <span class="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4 border border-blue-500/20">
                    ICT Specialist & Systems Developer
                </span>
                
                <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
                    Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Abdulrasheed Saidu</span>
                </h1>
                
                <p class="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Specializing in hardware maintenance, system installations, web development, and ICT education. Bridging technical infrastructure with digital solutions.
                </p>

                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#projects" class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-layer-group text-sm"></i>
                        View Featured Work
                    </a>
                    <a href="#contact" class="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-6 py-3 rounded-lg transition flex items-center justify-center gap-2">
                        <i class="fa-solid fa-envelope text-sm text-blue-400"></i>
                        Get In Touch
                    </a>
                </div>

                <!-- Highlights Pillar Grid -->
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-800/80 text-left">
                    <div class="p-3 bg-slate-800/30 rounded-lg border border-slate-800/60">
                        <span class="text-xs text-blue-400 font-semibold uppercase tracking-wider block">Background</span>
                        <span class="text-sm text-white font-medium">Computer Science HND</span>
                    </div>
                    <div class="p-3 bg-slate-800/30 rounded-lg border border-slate-800/60">
                        <span class="text-xs text-blue-400 font-semibold uppercase tracking-wider block">Specialization</span>
                        <span class="text-sm text-white font-medium">Hardware & Networking</span>
                    </div>
                    <div class="col-span-2 sm:col-span-1 p-3 bg-slate-800/30 rounded-lg border border-slate-800/60">
                        <span class="text-xs text-blue-400 font-semibold uppercase tracking-wider block">Status</span>
                        <span class="text-sm text-emerald-400 font-medium flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Available for ICT Ops
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 px-6 bg-slate-950/50 border-y border-slate-800/60">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-white">About Me</h2>
                <p class="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                    I am an ICT Specialist with a strong foundation in Computer Science from Auchi Polytechnic. My expertise spans hardware troubleshooting, operating system deployments, network setup, and front-end web technologies including HTML, CSS, and modern web applications.
                </p>
                <p class="text-slate-400 text-base leading-relaxed">
                    Alongside core ICT infrastructure, I have professional training in technical operations, Computer Studies education, and Petroleum Product Marketing with certification from the Oil & Gas Education & Research Academy.
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-2">
                    <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60">Hardware Diagnostics</span>
                    <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60">System Deployment</span>
                    <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60">Computer Science</span>
                    <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60">Frontend Web</span>
                    <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60">Technical Instruction</span>
                    <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60">Safety & Operations</span>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="py-20 px-6 max-w-5xl mx-auto">
            <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">Core Competencies</h2>
            <p class="text-slate-400 text-sm sm:text-base text-center max-w-xl mx-auto mb-8">
                Proven capabilities spanning physical IT infrastructure, systems engineering, modern web technologies, and technical training.
            </p>

            <!-- Interactive Category Filter Buttons -->
            <div class="flex flex-wrap justify-center gap-2 mb-10" id="filter-buttons">
                <button onclick="filterSkills('all')" class="skill-btn active px-3.5 py-1.5 rounded-lg text-xs font-medium bg-blue-600 text-white transition cursor-pointer">All</button>
                <button onclick="filterSkills('hardware')" class="skill-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700/50 transition cursor-pointer">Hardware</button>
                <button onclick="filterSkills('development')" class="skill-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700/50 transition cursor-pointer">Development</button>
                <button onclick="filterSkills('systems')" class="skill-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700/50 transition cursor-pointer">Systems</button>
                <button onclick="filterSkills('education')" class="skill-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700/50 transition cursor-pointer">Education</button>
                <button onclick="filterSkills('certifications')" class="skill-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700/50 transition cursor-pointer">Certifications</button>
            </div>

            <!-- Skills Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="skills-grid">
                
                <div class="skill-card bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-200 group hover:-translate-y-0.5" data-category="hardware">
                    <div class="text-blue-400 text-3xl mb-4 group-hover:scale-105 transition-transform"><i class="fa-solid fa-laptop-medical"></i></div>
                    <h3 class="text-lg font-semibold mb-2 text-white">Hardware & Diagnostics</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">Computer hardware maintenance, component diagnostic tests, system upgrades, and preventive care.</p>
                </div>

                <div class="skill-card bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-200 group hover:-translate-y-0.5" data-category="development">
                    <div class="text-blue-400 text-3xl mb-4 group-hover:scale-105 transition-transform"><i class="fa-solid fa-code"></i></div>
                    <h3 class="text-lg font-semibold mb-2 text-white">Web Development</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">Building clean, semantic, and responsive websites using HTML, CSS, and interactive JavaScript.</p>
                </div>

                <div class="skill-card bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-200 group hover:-translate-y-0.5" data-category="systems">
                    <div class="text-blue-400 text-3xl mb-4 group-hover:scale-105 transition-transform"><i class="fa-solid fa-server"></i></div>
                    <h3 class="text-lg font-semibold mb-2 text-white">Systems Deployment</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">OS installation, configuration, driver management, network troubleshooting, and technical support.</p>
                </div>

                <div class="skill-card bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-200 group hover:-translate-y-0.5" data-category="education">
                    <div class="text-blue-400 text-3xl mb-4 group-hover:scale-105 transition-transform"><i class="fa-solid fa-chalkboard-user"></i></div>
                    <h3 class="text-lg font-semibold mb-2 text-white">Computer Instruction</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">Teaching computer studies, digital literacy, and mentoring students in ICT principles.</p>
                </div>

                <div class="skill-card bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-200 group hover:-translate-y-0.5" data-category="certifications">
                    <div class="text-blue-400 text-3xl mb-4 group-hover:scale-105 transition-transform"><i class="fa-solid fa-oil-well"></i></div>
                    <h3 class="text-lg font-semibold mb-2 text-white">Petroleum Technical Ops</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">Petroleum product marketing training, operations workflow, and technical safety standards.</p>
                </div>

                <div class="skill-card bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-200 group hover:-translate-y-0.5" data-category="certifications">
                    <div class="text-blue-400 text-3xl mb-4 group-hover:scale-105 transition-transform"><i class="fa-solid fa-certificate"></i></div>
                    <h3 class="text-lg font-semibold mb-2 text-white">Certifications</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">SoloLearn Certified Developer & Oil & Gas Education & Research Academy credentials.</p>
                </div>

            </div>
        </section>

        <!-- Education & Background Section -->
        <section id="experience" class="py-20 px-6 bg-slate-950/50 border-t border-slate-800/60">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">Education & Background</h2>
                <p class="text-slate-400 text-sm sm:text-base text-center max-w-xl mx-auto mb-12">
                    Academic foundations in computer science paired with specialized technical training and operations certifications.
                </p>
                
                <div class="space-y-8">
                    <!-- Education Item 1 -->
                    <div class="bg-slate-800/40 border border-slate-700/60 p-6 rounded-xl hover:border-slate-600 transition">
                        <div class="flex justify-between items-start flex-wrap gap-2 mb-2">
                            <h3 class="text-lg font-bold text-white flex items-center gap-2">
                                <i class="fa-solid fa-graduation-cap text-blue-400"></i>
                                Auchi Polytechnic
                            </h3>
                            <span class="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium">Graduated 2017</span>
                        </div>
                        <p class="text-sm font-semibold text-slate-300">Higher Level Computer Science & Technology Studies</p>
                        <p class="text-xs text-slate-400 mt-2 leading-relaxed">Advanced coursework in system architecture, network fundamentals, programming, and database principles.</p>
                    </div>

                    <!-- Education Item 2 -->
                    <div class="bg-slate-800/40 border border-slate-700/60 p-6 rounded-xl hover:border-slate-600 transition">
                        <div class="flex justify-between items-start flex-wrap gap-2 mb-2">
                            <h3 class="text-lg font-bold text-white flex items-center gap-2">
                                <i class="fa-solid fa-graduation-cap text-blue-400"></i>
                                Ordinary National Diploma (OND) in Computer Science
                            </h3>
                            <span class="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium">Graduated 2013</span>
                        </div>
                        <p class="text-sm font-semibold text-slate-300">Auchi Polytechnic — Upper Credit</p>
                        <p class="text-xs text-slate-400 mt-2 leading-relaxed">Graduated with Upper Credit distinction, covering software concepts, hardware mechanics, and computer logic.</p>
                    </div>

                    <!-- Training & Certifications -->
                    <div class="bg-slate-800/40 border border-slate-700/60 p-6 rounded-xl hover:border-slate-600 transition">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <i class="fa-solid fa-award text-blue-400"></i>
                            Professional Certifications & Training
                        </h3>
                        <ul class="space-y-3 text-sm text-slate-300">
                            <li class="flex items-start gap-2.5">
                                <i class="fa-solid fa-check text-blue-400 text-xs mt-1 shrink-0"></i>
                                <div><strong class="text-white">SoloLearn:</strong> Certified in Web Development fundamentals & programming concepts.</div>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <i class="fa-solid fa-check text-blue-400 text-xs mt-1 shrink-0"></i>
                                <div><strong class="text-white">Oil & Gas Education & Research Academy:</strong> Petroleum Product Marketing Certification.</div>
                            </li>
                            <li class="flex items-start gap-2.5">
                                <i class="fa-solid fa-check text-blue-400 text-xs mt-1 shrink-0"></i>
                                <div><strong class="text-white">ICT Teaching & Operations:</strong> Computer Studies instruction and practical workshop management.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-20 px-6 max-w-5xl mx-auto">
            <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">Featured Projects</h2>
            <p class="text-slate-400 text-sm sm:text-base text-center max-w-xl mx-auto mb-12">
                Key technical initiatives demonstrating modern web deployment and production hardware maintenance procedures.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <!-- Project 1 -->
                <div class="bg-slate-800/40 border border-slate-700/60 rounded-xl overflow-hidden flex flex-col justify-between p-6 hover:border-slate-600 transition">
                    <div>
                        <div class="flex justify-between items-start mb-3">
                            <div class="text-blue-400 text-2xl"><i class="fa-solid fa-code"></i></div>
                            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">Web Application</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-white">Developer & ICT Web Portfolio</h3>
                        <p class="text-slate-400 text-sm mb-4 leading-relaxed">A clean, responsive, single-page web application showcasing hardware maintenance capabilities, technical credentials, and developer projects.</p>
                        
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium">HTML5</span>
                            <span class="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium">Tailwind CSS</span>
                            <span class="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium">JavaScript</span>
                            <span class="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium">GitHub Pages</span>
                        </div>

                        <!-- Toggle Deliverables -->
                        <div class="mb-4">
                            <button onclick="toggleDetails('proj1-details')" class="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 cursor-pointer">
                                <i class="fa-solid fa-chevron-down text-[10px]" id="proj1-details-icon"></i>
                                View Specifications & Deliverables
                            </button>
                            <ul id="proj1-details" class="hidden mt-3 space-y-1.5 pl-4 border-l-2 border-blue-500/30 text-xs text-slate-300">
                                <li>• Responsive navigation with mobile menu drawer</li>
                                <li>• Interactive competencies categorization</li>
                                <li>• Instant contact integration with email & phone dispatch</li>
                                <li>• Zero external runtime dependencies</li>
                            </ul>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-slate-800 flex justify-between items-center text-sm mt-2">
                        <span class="text-slate-400 text-xs flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-blue-400"></span>
                            Status: Active
                        </span>
                        <a href="https://github.com/saiduabdulrasheed24434-blip/Abdulrasheed-portfolio-" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1.5 text-xs font-semibold">
                            <i class="fa-brands fa-github text-sm"></i>
                            Repository
                        </a>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="bg-slate-800/40 border border-slate-700/60 rounded-xl overflow-hidden flex flex-col justify-between p-6 hover:border-slate-600 transition">
                    <div>
                        <div class="flex justify-between items-start mb-3">
                            <div class="text-blue-400 text-2xl"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">Technical Systems</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-white">Hardware Diagnostic & Maintenance Suite</h3>
                        <p class="text-slate-400 text-sm mb-4 leading-relaxed">Implementation of systematic diagnostic procedures for hardware troubleshooting, system restoration, drive partitioning, and routine OS optimization.</p>
                        
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium">Hardware Ops</span>
                            <span class="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium">Sys Diagnostics</span>
                            <span class="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium">Technical Support</span>
                            <span class="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium">OS Deployment</span>
                        </div>

                        <!-- Toggle Deliverables -->
                        <div class="mb-4">
                            <button onclick="toggleDetails('proj2-details')" class="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 cursor-pointer">
                                <i class="fa-solid fa-chevron-down text-[10px]" id="proj2-details-icon"></i>
                                View Specifications & Deliverables
                            </button>
                            <ul id="proj2-details" class="hidden mt-3 space-y-1.5 pl-4 border-l-2 border-blue-500/30 text-xs text-slate-300">
                                <li>• Systematic hardware failure identification</li>
                                <li>• Data backup & disk partition configuration</li>
                                <li>• BIOS/UEFI setup & clean operating system installation</li>
                                <li>• Thermal management & preventative maintenance</li>
                            </ul>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-slate-800 flex justify-between items-center text-sm mt-2">
                        <span class="text-slate-400 text-xs flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-blue-400"></span>
                            Status: Active
                        </span>
                        <span class="text-slate-400 text-xs">Documentation & Systems</span>
                    </div>
                </div>

            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 px-6 bg-slate-950/50 border-t border-slate-800/60 text-center">
            <div class="max-w-2xl mx-auto">
                <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-white">Get In Touch</h2>
                <p class="text-slate-400 mb-8 leading-relaxed">
                    Feel free to reach out for ICT consultations, web development projects, or professional opportunities.
                </p>
                
                <!-- Direct contact action buttons -->
                <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 text-sm">
                    <a href="mailto:saiduabdulrasheed24434@gmail.com" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-lg shadow-blue-500/25">
                        <i class="fa-solid fa-envelope"></i>
                        saiduabdulrasheed24434@gmail.com
                    </a>
                    <a href="tel:08055007306" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-6 py-3 rounded-lg transition">
                        <i class="fa-solid fa-phone"></i>
                        08055007306
                    </a>
                    <button 
                        type="button" 
                        onclick="copyEmail()" 
                        id="copy-email-btn"
                        class="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/80 px-4 py-3 rounded-lg text-xs font-semibold transition cursor-pointer"
                    >
                        <i id="copy-icon" class="fa-solid fa-copy"></i>
                        <span id="copy-text">Copy Email</span>
                    </button>
                </div>

                <!-- Interactive Quick Message Composer -->
                <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-left shadow-xl">
                    <h3 class="text-base font-semibold text-white mb-2 flex items-center gap-2">
                        <i class="fa-solid fa-paper-plane text-blue-400 text-sm"></i>
                        Quick Inquiry Composer
                    </h3>
                    <p class="text-xs text-slate-400 mb-4">
                        Send an inquiry directly to Abdulrasheed's inbox for hardware repairs, networking, or website development.
                    </p>

                    <form onsubmit="handleInquirySubmit(event)" class="space-y-4 text-sm">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label for="sender-name" class="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                                <input 
                                    id="sender-name" 
                                    type="text" 
                                    placeholder="e.g. Adebayo Kunle" 
                                    class="w-full px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                            </div>
                            <div>
                                <label for="inquiry-subject" class="block text-xs font-medium text-slate-300 mb-1">Subject / Service Needed</label>
                                <input 
                                    id="inquiry-subject" 
                                    type="text" 
                                    placeholder="e.g. Hardware Maintenance Consultation" 
                                    class="w-full px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                            </div>
                        </div>

                        <div>
                            <label for="inquiry-message" class="block text-xs font-medium text-slate-300 mb-1">Message</label>
                            <textarea 
                                id="inquiry-message" 
                                rows="3" 
                                required 
                                placeholder="Describe your system requirements or project scope..." 
                                class="w-full px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            class="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <i class="fa-solid fa-envelope"></i>
                            Open in Email Client
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="py-8 px-6 text-center text-xs text-slate-500 border-t border-slate-800 bg-slate-950">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 Abdulrasheed Saidu. All rights reserved.</p>

            <div class="flex items-center gap-6">
                <a href="https://github.com/saiduabdulrasheed24434-blip" target="_blank" rel="noopener noreferrer" class="hover:text-slate-300 transition-colors flex items-center gap-1.5">
                    <i class="fa-brands fa-github text-sm"></i>
                    GitHub Profile
                </a>
                <button onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" class="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer">
                    <span>Back to top</span>
                    <i class="fa-solid fa-arrow-up text-[10px]"></i>
                </button>
            </div>
        </div>
    </footer>

    <!-- Interactive Client-side Script -->
    <script>
        // Mobile Navigation Toggle
        const menuBtn = document.getElementById('menu-toggle-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            menuIcon.className = isHidden ? 'fa-solid fa-bars text-xl' : 'fa-solid fa-xmark text-xl';
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.className = 'fa-solid fa-bars text-xl';
            });
        });

        // Filter Skills by Category
        function filterSkills(category) {
            const buttons = document.querySelectorAll('.skill-btn');
            buttons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-slate-800/60', 'text-slate-400');
            });
            event.target.classList.remove('bg-slate-800/60', 'text-slate-400');
            event.target.classList.add('bg-blue-600', 'text-white');

            const cards = document.querySelectorAll('.skill-card');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Toggle Project Specifications Accordion
        function toggleDetails(id) {
            const el = document.getElementById(id);
            const icon = document.getElementById(id + '-icon');
            const isHidden = el.classList.toggle('hidden');
            if (icon) {
                icon.className = isHidden ? 'fa-solid fa-chevron-down text-[10px]' : 'fa-solid fa-chevron-up text-[10px]';
            }
        }

        // Copy Email to Clipboard
        function copyEmail() {
            const email = "saiduabdulrasheed24434@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                const copyText = document.getElementById('copy-text');
                const copyIcon = document.getElementById('copy-icon');
                copyText.innerText = "Email Copied!";
                copyIcon.className = "fa-solid fa-check text-emerald-400";
                setTimeout(() => {
                    copyText.innerText = "Copy Email";
                    copyIcon.className = "fa-solid fa-copy";
                }, 2500);
            });
        }

        // Quick Inquiry Email Dispatch
        function handleInquirySubmit(event) {
            event.preventDefault();
            const name = document.getElementById('sender-name').value || 'Client';
            const subject = document.getElementById('inquiry-subject').value || `ICT Inquiry from ${name}`;
            const message = document.getElementById('inquiry-message').value;
            const body = `Hello Abdulrasheed,\n\n${message}\n\nBest regards,\n${name}`;
            window.location.href = `mailto:saiduabdulrasheed24434@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
    </script>
</body>
</html>
