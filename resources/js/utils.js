const baseWords = [
    "Tech",
    "Code",
    "Digital",
    "Cyber",
    "Innovate",
    "Data",
    "Cloud",
    "Web",
    "Mobile",
    "Security",
    "AI",
    "Machine",
    "Network",
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Node",
    "Angular",
    "Swift",
    "Blockchain",
    "VR",
    "AR",
    "Quantum",
    "BigData",
    "Microservices",
    "Linux",
    "OpenSource",
    "Cryptography",
    "Automation",
];

const prefixes = [
    "Pro",
    "Tech",
    "Smart",
    "Soft",
    "Meta",
    "Hyper",
    "Ultra",
    "Super",
    "Mega",
    "Nano",
    "Micro",
    "Quick",
    "Agile",
    "Dynamic",
    "Agile",
    "Power",
    "Global",
    "Rapid",
    "Awesome",
    "Dynamic",
    "Infinite",
    "Extreme",
    "Epic",
    "Retro",
    "Future",
    "Swift",
    "Intelligent",
    "Cyber",
    "Robo",
    "Green",
];

const suffixes = [
    "Dev",
    "Engineer",
    "Wizard",
    "Master",
    "Techie",
    "Guru",
    "Champion",
    "Expert",
    "Ninja",
    "Sorcerer",
    "Architect",
    "Pioneer",
    "Innovator",
    "Maestro",
    "Savvy",
    "Enthusiast",
    "Challenger",
    "Specialist",
    "Maestro",
    "Genius",
    "Captain",
    "Hero",
    "Pioneer",
    "Legend",
    "Icon",
    "Savant",
    "Virtuoso",
    "Maestro",
    "Einstein",
    "Guru",
];

export default function useRandomTeamName() {
    const baseWord = baseWords[Math.floor(Math.random() * baseWords.length)];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    const affixType = Math.floor(Math.random() * 4) + 1;

    switch (affixType) {
        case 1:
            return `${prefix} ${baseWord}`;
        case 2:
            return `${baseWord} ${prefix}`;
        case 3:
            return `${baseWord} ${suffix}`;
        case 4:
            return `${prefix} ${baseWord} ${suffix}`;
        default:
            return baseWord;
    }
}
