const hashtagDictionary = [
    'Technology', 'Innovation', 'Digital', 'AI', 'ArtificialIntelligence', 'MachineLearning',
    'DataScience', 'BigData', 'Cloud', 'CloudComputing', 'IoT', 'InternetOfThings',
    'Business', 'Entrepreneur', 'Startup', 'Leadership', 'Management', 'Strategy',
    'Marketing', 'DigitalMarketing', 'ContentMarketing', 'SocialMedia', 'SEO',
    'SearchEngineOptimization', 'GrowthHacking', 'Branding', 'Advertising', 'Sales',
    'Programming', 'Design', 'Development', 'WebDevelopment', 'AppDevelopment', 'UX', 'UI',
    'Careers', 'JobSearch', 'Recruitment', 'HR', 'HumanResources', 'Networking',
    'France', 'French', 'Europe', 'EU', 'Germany', 'UK', 'USA', 'Canada', 'Australia',
    'Fintech', 'Cybersecurity', 'ProductManagement', 'PersonalBranding', 'JobTips', 
    'CareerGrowth', 'FutureOfWork', 'RemoteWork', 'Startups', 'VC', 'PublicSpeaking', 
    'InnovationMindset', 'DataAnalytics', 'SoftwareEngineering', 'UXDesign', 'UIUX', 
    'CommunityBuilding', 'ContentCreation', 'SocialImpact', 'Sustainability', 'GreenTech', 
    'HealthTech', 'EdTech', 'WorkLifeBalance', 'Productivity', 'Mindfulness', 'Web3', 
    'Blockchain', 'Cryptocurrency', 'Agile', 'Scrum', 'DevOps', 'CloudNative', 'SaaS', 
    'CustomerExperience', 'CX', 'UserExperience', 'InclusiveDesign', 'AIethics', 'Automation', 
    'FutureSkills', 'SkillDevelopment', 'Learning', 'PersonalDevelopment', 'Teamwork', 
    'Motivation', 'Success',
    // Nouveaux hashtags
    'Algeria','Africa','Bayannet','Microsoft', 'Apple', 'Samsung',
    'ArtificialIntelligence', 'MachineLearning', 'DataScience', 'BigData', 'InternetOfThings',
    'Robotics', 'QuantumComputing', 'CloudComputing', 'Cybersecurity', 'Blockchain',
    'Fintech', 'EdTech', 'HealthTech', 'CleanEnergy', 'SustainableTech',
    'DigitalTransformation', 'TechTrends', 'Innovation', 'DisruptiveTechnology',
    'ProductManagement', 'Agile', 'Scrum', 'DevOps', 'SoftwareDevelopment',
    'FullStack', 'Frontend', 'Backend', 'MobileDevelopment', 'WebDevelopment',
    'UXDesign', 'UIUX', 'UserExperience', 'ProductDesign', 'DesignThinking',
    'DigitalMarketing', 'ContentMarketing', 'SocialMediaMarketing', 'SEOAgency',
    'BrandStrategy', 'ContentCreation', 'PersonalBranding', 'GrowthHacking',
    'Startups', 'Entrepreneurship', 'VentureCapital', 'AngelInvestor', 'Funding',
    'Leadership', 'Management', 'Strategy', 'HumanResources', 'Recruitment',
    'CareerAdvice', 'JobSearchTips', 'WorkLifeBalance', 'RemoteWork', 'FutureOfWork',
    'Networking', 'PublicSpeaking', 'Mentorship', 'PersonalDevelopment',
    'DataAnalytics', 'BusinessIntelligence', 'DataVisualization', 'PredictiveAnalytics',
    'ProjectManagement', 'ChangeManagement', 'BusinessDevelopment', 'SalesStrategy',
    'MarketingAutomation', 'CustomerExperience', 'CX', 'UserAcquisition',
    'eCommerce', 'RetailTech', 'SupplyChain', 'Logistics', 'LogisticsManagement',
    'AIforBusiness', 'MachineLearningApplications', 'CloudSolutions', 'SaaS',
    'CybersecurityAwareness', 'DataPrivacy', 'Privacy', 'NetworkSecurity',
    'CloudNative', 'Kubernetes', 'Microservices', 'Containerization',
    'Python', 'JavaScript', 'Java', 'C++', 'React', 'Angular', 'Vuejs', 'Nodejs',
    'GitHub', 'Git', 'OpenSource', 'CodeCommunity', 'ProgrammingLife',
    'TechIndustry', 'StartupLife', 'DigitalNomad', 'TechJob', 'JobOpportunity',
    'AIethics', 'ResponsibleAI', 'EthicalHacking', 'DataProtection', 'GDPR',
    'FutureSkills', 'SkillDevelopment', 'LearningAndDevelopment', 'L&D', 'Reskilling',
    'Upskilling', 'ProfessionalGrowth', 'CareerPath', 'SuccessMindset', 'Motivation',
    'SocialImpact', 'Sustainability', 'CircularEconomy', 'CSR', 'CorporateSocialResponsibility',
    'MentalHealth', 'Mindfulness', 'Wellbeing', 'Productivity', 'TimeManagement',
    'Teamwork', 'Collaboration', 'CommunityBuilding', 'InclusionAndDiversity', 'DiversityAndInclusion',
    'WorkplaceCulture', 'CorporateCulture', 'EmployeeEngagement',
    'WebDesign', 'WebDevelopment', 'FrontEndDevelopment', 'BackEndDevelopment', 'MobileAppDevelopment',
    'ReactJS', 'VueJS', 'AngularJS', 'NodeJS', 'ExpressJS', 'Django', 'Flask', 'PythonDevelopment',
    'JavaDevelopment', 'C++', 'CSharp', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'TypeScript', 'Sass', 'Less',
    'HTML', 'CSS', 'JavaScript', 'SQL', 'NoSQL', 'MongoDB', 'PostgreSQL', 'MySQL',
    'Algorithms', 'DataStructures', 'SoftwareEngineering', 'SystemDesign',
    'CloudComputing', 'AWS', 'Azure', 'GoogleCloud', 'GCP', 'DevOps', 'CI-CD', 'Kubernetes', 'Docker',
    'MachineLearning', 'DeepLearning', 'NaturalLanguageProcessing', 'NLP', 'ComputerVision',
    'DataAnalytics', 'BusinessIntelligence', 'BigDataAnalytics', 'DataScience',
    'ArtificialIntelligence', 'AI', 'Robotics', 'IoT', 'Cybersecurity', 'CyberSecurity',
    'FinTech', 'EdTech', 'HealthTech', 'AgriTech', 'PropTech', 'CleanTech',
    'DigitalMarketing', 'ContentMarketing', 'InboundMarketing', 'OutboundMarketing',
    'SocialMediaMarketing', 'SEO', 'SEM', 'EmailMarketing', 'AffiliateMarketing',
    'BrandStrategy', 'Branding', 'PublicRelations', 'PR', 'CorporateCommunications',
    'Sales', 'SalesStrategy', 'B2B', 'B2C', 'CustomerRelationshipManagement', 'CRM',
    'ProjectManagement', 'AgileMethodology', 'Scrum', 'Kanban', 'PMP',
    'Leadership', 'Management', 'TeamBuilding', 'Coaching', 'Mentoring', 'Mentorship',
    'CareerDevelopment', 'JobSearch', 'InterviewTips', 'ResumeWriting', 'PersonalBranding',
    'Entrepreneurship', 'Startups', 'VentureCapital', 'AngelInvesting', 'Fundraising',
    'Innovation', 'Creativity', 'DesignThinking', 'ProblemSolving', 'CriticalThinking',
    'RemoteWork', 'RemoteJobs', 'WorkFromHome', 'HybridWork', 'FutureOfWork',
    'CorporateCulture', 'WorkplaceWellbeing', 'EmployeeEngagement', 'DiversityAndInclusion', 'D&I',
    'Sustainability', 'SustainableDevelopmentGoals', 'SDGs', 'ClimateChange', 'ESG',
    'PublicSpeaking', 'Storytelling', 'CommunicationSkills',
    'DataProtection', 'GDPR', 'Privacy', 'Compliance',
    'UXResearch', 'UserExperience', 'UIUX', 'ProductDesign',
    'AgileCoaching', 'ScrumMaster', 'ProductOwner',
    'CloudSolutions', 'SaaS', 'PaaS', 'IaaS',
    'FinancialPlanning', 'Investment', 'PersonalFinance',
    'SupplyChain', 'Logistics', 'Procurement',
    'RoboticsProcessAutomation', 'RPA', 'Automation',
    'CloudNative', 'Serverless', 'Microservices',
    'BlockchainDevelopment', 'DecentralizedFinance', 'DeFi', 'NFTs', 'Cryptocurrency'
];

const styleMap = {
    'normal': {},
    'serif-bold': { upper: 0x1D400, lower: 0x1D41A, digits: 0x1D7CE },
    'serif-italic': { upper: 0x1D434, lower: 0x1D44E },
    'serif-bold-italic': { upper: 0x1D468, lower: 0x1D482 },
    'sans': { upper: 0x1D5A0, lower: 0x1D5BA },
    'sans-bold': { upper: 0x1D5D4, lower: 0x1D5EE, digits: 0x1D7EC },
    'sans-italic': { upper: 0x1D608, lower: 0x1D622 },
    'sans-bold-italic': { upper: 0x1D63C, lower: 0x1D656 },
    'script': { upper: 0x1D49C, lower: 0x1D4B6 },
    'monospace': { upper: 0x1D670, lower: 0x1D68A, digits: 0x1D7F6 },
    'doublestruck': { upper: 0x1D538, lower: 0x1D552 },
    'fraktur': { upper: 0x1D504, lower: 0x1D51E },
    'circled-negative': {
        'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 'F': '🅕', 'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙', 
        'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞', 'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣', 
        'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨', 'Z': '🅩',
        'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔', 'f': '🅕', 'g': '🅖', 'h': '🅗', 'i': '🅘', 'j': '🅙', 
        'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝', 'o': '🅞', 'p': '🅟', 'q': '🅠', 'r': '🅡', 's': '🅢', 't': '🅣', 
        'u': '🅤', 'v': '🅥', 'w': '🅦', 'x': '🅧', 'y': '🅨', 'z': '🅩'
    },
    'squared-negative': {
        'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹', 
        'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃', 
        'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉',
        'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴', 'f': '🅵', 'g': '🅶', 'h': '🅷', 'i': '🅸', 'j': '🅹', 
        'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽', 'o': '🅾', 'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃', 
        'u': '🆄', 'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 'z': '🆉'
    }
};

const scriptSpecialMap = {
    'B': 'ℬ', 'E': 'ℰ', 'F': 'ℱ', 'H': 'ℋ', 'I': 'ℐ', 'L': 'ℒ', 'M': 'ℳ', 'R': 'ℛ',
    'g': 'ℊ', 'e': 'ℯ', 'o': 'ℴ', 'h': 'ℎ'
};

const revertScriptMap = {
    'ℬ': 'B', 'ℰ': 'E', 'ℱ': 'F', 'ℋ': 'H', 'ℐ': 'I', 'ℒ': 'L', 'ℳ': 'M', 'ℛ': 'R',
    'ℊ': 'g', 'ℯ': 'e', 'ℴ': 'o', 'ℎ': 'h'
};

const revertCircledMap = Object.entries(styleMap['circled-negative']).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

const revertSquaredMap = Object.entries(styleMap['squared-negative']).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

const frenchChars = {
    'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE',
    'Ç': 'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I',
    'Î': 'I', 'Ï': 'I', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O',
    'Ö': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U', 'Ý': 'Y',
    'ß': 'ss', 'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
    'æ': 'ae', 'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i',
    'í': 'i', 'î': 'i', 'ï': 'i', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o',
    'õ': 'o', 'ö': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
    'ý': 'y', 'ÿ': 'y'
};

const directItalicMap = {
    'h': 'ℎ', 'H': '𝐻'
};

const emojiCategoriesData = {
    'Smileys & Emotion': ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😟', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😵', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤫', '🤥', '🤔', '🤨'],
    'Gestures & Body': ['👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤌', '🤏', '✌️', '🤞', '🫰', '🤟', '🤘', '🤙', '👈', '👉', '👆', '👇', '☝️', '👍', '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '🤲', '🤝', '🙏', '✍️', '💅', '🤳', '💪', '🦵', '🦶', '👂', '👃', '🧠'],
    'People & Professions': ['🧑', '‍💻', '👨‍💼', '👩‍💼', '👷‍♂️', '👷‍♀️', '👩‍⚕️', '👨‍⚕️', '🧑‍🎓', '👩‍🏫', '👨‍🏫', '🧑‍🍳', '👩‍🌾', '👨‍🚀', '👩‍🔬', '👨‍🎤', '🧑‍🎨', '👩‍✈️', '👮', '🕵️‍♀️', '💂‍♂️', '👶', '👦', '👧', '👨', '👩', '👴', '👵'],
    'Animals & Nature': ['🐵', '🐒', '🦍', '🦧', '🐶', '🐕', '🐩', '🐺', '🦊', '🦝', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆', '🐴', '🐎', '🦄', '🦓', '🦌', '🦬', '🐮', '🐷', '🐗', '🐭', '🐹', '🐰', '🐸', '🦆', '🦅', '🦉', '🦚', '🦜', '🕊️', '🦢', '🐢', '🐍', '🦎', '🦖', '🦕'],
    'Food & Drink': ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🫐', '🥝', '🍅', '🫒', '🥥', '🥑', '🍆', '🥔', '🥕', '🌽', '🌶️', '🍄', '🥜', '🌰', '🍞', '🥐', '🥖', '🥨', '🥞', '🧇', '🧀', '🥩', '🍗', '🍖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯'],
    'Travel & Places': ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🛵', '🚲', '🛴', '🚆', '🚄', '🚅', '🚇', '🚈', '🚂', '🚃', '🚄', '🚁', '✈️', '🚀', '🛰️', '🛸', '🛖', '🏠', '🏡', '🏢', '🏗️', '🏛️', '⛪', '🕌', '🕍', '🗼', '🗽', '🏰', '🏯'],
    'Activities & Sports': ['⚽', '⚾', '🥎', '🏀', '🏐', '🏈', '🏉', '🎾', '🥏', '🎳', '🏏', '🏑', '🏒', '🥍', '🏓', '🏸', '🥊', '🥋', '🥅', '⛳', '🎣', '🤿', '🎽', '🎿', '🛷', '⛸️', '⛷️', '🏂', '🏃‍♀️', '🏃‍♂️', '🚶‍♀️', '🚶‍♂️', '🤸‍♂️', '🤸‍♀️', '🧘‍♂️', '🧘‍♀️'],
    'Objects & Gadgets': ['⌚', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️', '🗜️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '🔌', '🔋', '📡', '💡', '🔦', '💵', '💶', '💷', '💰', '💳'],
    'Symbols': ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '☪️', '🕉️', '☸️', '☯️', , '🆔', '⚛️', '⚕️', '♻️', '⚜️']
};

function suggestHashtags(input) {
    const query = input.toLowerCase().replace('#', '');
    if (query.length < 2) return [];
    return hashtagDictionary.filter(tag => tag.toLowerCase().includes(query)).slice(0, 10);
}

function showHashtagSuggestions(suggestions) {
    hashtagSuggestions.innerHTML = '';
    if (suggestions.length === 0) {
        hashtagSuggestions.classList.add('hidden');
        return;
    }
    suggestions.forEach(tag => {
        const div = document.createElement('div');
        div.classList.add('px-3', 'py-2', 'cursor-pointer', 'hover:bg-gray-200', 'rounded-md');
        div.textContent = `#${tag}`;
        div.addEventListener('click', () => {
            hashtagInput.value = `#${tag}`;
            hashtagSuggestions.classList.add('hidden');
        });
        hashtagSuggestions.appendChild(div);
    });
    hashtagSuggestions.classList.remove('hidden');
}

function insertHashtag(hashtag) {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const value = editor.value;
    let prefix = (start > 0 && value.charAt(start - 1) !== ' ' && value.charAt(start - 1) !== '\n') ? ' ' : '';
    let formattedHashtag = hashtag.startsWith('#') ? hashtag : '#' + hashtag;
    editor.value = value.substring(0, start) + prefix + formattedHashtag + ' ' + value.substring(end);
    editor.focus();
    editor.setSelectionRange(start + prefix.length + formattedHashtag.length + 1, start + prefix.length + formattedHashtag.length + 1);
}

function convertSelectionToHashtag() {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    if (start === end) {
        showMessage("Please select text to convert to hashtag.", true);
        return;
    }
    const selectedText = editor.value.slice(start, end);
    const hashtag = '#' + selectedText.replace(/\s+/g, '');
    editor.value = editor.value.slice(0, start) + hashtag + editor.value.slice(end);
    editor.focus();
    editor.setSelectionRange(start, start + hashtag.length);
    showMessage("Text converted to hashtag!");
}

function insertEmoji(emoji) {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const value = editor.value;
    editor.value = value.substring(0, start) + emoji + value.substring(end);
    editor.focus();
    editor.setSelectionRange(start + emoji.length, start + emoji.length);
}

function revertToNormal(text) {
    let revertedText = '';
    for (const char of text) {
        let foundMapping = false;
        
        if (revertScriptMap[char]) {
            revertedText += revertScriptMap[char];
            foundMapping = true;
        }
        
        if (!foundMapping && revertCircledMap[char]) {
            revertedText += revertCircledMap[char];
            foundMapping = true;
        }

        if (!foundMapping && revertSquaredMap[char]) {
            revertedText += revertSquaredMap[char];
            foundMapping = true;
        }
        
        if (!foundMapping) {
            for (const style in styleMap) {
                const map = styleMap[style];
                const cp = char.codePointAt(0);
                if (map.upper && cp >= map.upper && cp <= map.upper + 25) {
                    revertedText += String.fromCodePoint('A'.charCodeAt(0) + (cp - map.upper));
                    foundMapping = true;
                    break;
                } else if (map.lower && cp >= map.lower && cp <= map.lower + 25) {
                    revertedText += String.fromCodePoint('a'.charCodeAt(0) + (cp - map.lower));
                    foundMapping = true;
                    break;
                } else if (map.digits && cp >= map.digits && cp <= map.digits + 9) {
                    revertedText += String.fromCodePoint('0'.charCodeAt(0) + (cp - map.digits));
                    foundMapping = true;
                    break;
                }
            }
        }

        if (!foundMapping) {
            if (Object.values(directItalicMap).includes(char)) {
                const originalChar = Object.keys(directItalicMap).find(key => directItalicMap[key] === char);
                revertedText += originalChar;
                foundMapping = true;
            }
        }
        
        if (!foundMapping) {
            revertedText += char;
        }
    }
    return revertedText.replace(/\u0332/g, '').replace(/\u0336/g, '');
}

function transformChunk(text, styleName, addUnderline, addStrike) {
    let transformed = '';
    const style = styleMap[styleName];
    
    for (const char of text) {
        let convertedChar = char;
        
        if (styleName === 'script' && scriptSpecialMap[char]) {
            convertedChar = scriptSpecialMap[char];
        } else if (styleName === 'circled-negative' || styleName === 'squared-negative') {
            convertedChar = style[char] || char;
        } else if (style) {
            const cp = char.codePointAt(0);
            if (styleName === 'serif-italic' && directItalicMap[char]) {
                convertedChar = directItalicMap[char];
            } else if (frenchChars[char]) {
                const simpleChar = frenchChars[char];
                const simpleCp = simpleChar.codePointAt(0);
                if (simpleCp >= 'A'.charCodeAt(0) && simpleCp <= 'Z'.charCodeAt(0) && style.upper) {
                    convertedChar = String.fromCodePoint(style.upper + simpleCp - 'A'.charCodeAt(0));
                } else if (simpleCp >= 'a'.charCodeAt(0) && simpleCp <= 'z'.charCodeAt(0) && style.lower) {
                    convertedChar = String.fromCodePoint(style.lower + simpleCp - 'a'.charCodeAt(0));
                }
            } else if (cp >= 'A'.charCodeAt(0) && cp <= 'Z'.charCodeAt(0) && style.upper) {
                convertedChar = String.fromCodePoint(style.upper + cp - 'A'.charCodeAt(0));
            } else if (cp >= 'a'.charCodeAt(0) && cp <= 'z'.charCodeAt(0) && style.lower) {
                convertedChar = String.fromCodePoint(style.lower + cp - 'a'.charCodeAt(0));
            } else if (cp >= '0'.charCodeAt(0) && cp <= '9'.charCodeAt(0) && style.digits) {
                convertedChar = String.fromCodePoint(style.digits + cp - '0'.charCodeAt(0));
            }
        }

        if (addStrike && convertedChar.trim() !== '') {
            convertedChar = convertedChar + '\u0336';
        }
        
        if (addUnderline && convertedChar.trim() !== '') {
            convertedChar = convertedChar + '\u0332';
        }
        
        transformed += convertedChar;
    }
    return transformed;
}

function showMessage(message, isError = false) {
    messageDiv.textContent = message;
    messageDiv.className = `message opacity-100 transition-opacity duration-300 p-2 rounded-lg text-center ${isError ? 'error' : 'success'}`;
    setTimeout(() => {
        messageDiv.classList.remove('opacity-100');
    }, 3000);
}

function populateEmojiCategories() {
    emojiCategories.innerHTML = '';
    Object.keys(emojiCategoriesData).forEach(category => {
        const button = document.createElement('button');
        button.classList.add('px-3', 'py-1', 'bg-white', 'border', 'border-gray-300', 'rounded-md', 'text-xs', 'cursor-pointer', 'transition-colors', 'hover:bg-gray-200', 'active:bg-[#0a66c2]', 'active:text-white', 'active:border-[#0a66c2]');
        button.textContent = category;
        button.addEventListener('click', () => {
            document.querySelectorAll('#emoji-categories button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            populateEmojis(category);
        });
        emojiCategories.appendChild(button);
    });
    if (Object.keys(emojiCategoriesData).length > 0) {
        document.querySelector('#emoji-categories button').classList.add('active');
        populateEmojis(Object.keys(emojiCategoriesData)[0]);
    }
}

function populateEmojis(category) {
    emojiGrid.innerHTML = '';
    if (emojiCategoriesData[category]) {
        emojiCategoriesData[category].forEach(emoji => {
            const button = document.createElement('button');
            button.classList.add('p-1', 'text-xl', 'bg-white', 'border', 'border-gray-200', 'rounded-md', 'cursor-pointer', 'transition-colors', 'hover:bg-gray-200');
            button.textContent = emoji;
            button.addEventListener('click', () => {
                insertEmoji(emoji);
            });
            emojiGrid.appendChild(button);
        });
    }
}

const editor = document.getElementById('editor');
const ribbonHeaderButtons = document.querySelectorAll('.ribbon-header-btn');
const toolbarPanels = document.querySelectorAll('.toolbar-panel');
const ribbonContentContainer = document.getElementById('ribbon-content-container');
const formatButtons = document.querySelectorAll('.format-btn');
const copyBtn = document.getElementById('copy-btn');
const resetBtn = document.getElementById('reset-btn');
const messageDiv = document.getElementById('message');
const emojiGrid = document.getElementById('emoji-grid');
const emojiCategories = document.getElementById('emoji-categories');
const hashtagInput = document.getElementById('hashtag-input');
const hashtagSuggestions = document.getElementById('hashtag-suggestions');
const addHashtagBtn = document.getElementById('add-hashtag-btn');
const textToHashtagBtn = document.getElementById('text-to-hashtag');

// Initialisation
populateEmojiCategories();

// Events for ribbon headers
ribbonHeaderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        const targetPanel = document.getElementById(targetId);
        toolbarPanels.forEach(panel => panel.classList.add('hidden'));
        targetPanel.classList.remove('hidden');
        ribbonHeaderButtons.forEach(btn => btn.classList.remove('bg-[#378fe9]', 'text-white'));
        button.classList.add('bg-[#378fe9]', 'text-white');
    });
});

ribbonHeaderButtons[0].click();

formatButtons.forEach(button => {
    button.addEventListener('click', () => {
        const styleName = button.dataset.style;
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const value = editor.value;

        if (styleName === 'reset') {
            if (start === end) {
                showMessage("Please select text to reset.", true);
                return;
            }
            const selectedText = value.slice(start, end);
            const revertedText = revertToNormal(selectedText);
            const newValue = value.slice(0, start) + revertedText + value.slice(end);
            editor.value = newValue;
            editor.focus();
            editor.setSelectionRange(start, start + revertedText.length);
            showMessage("Selection reset to normal text.");
            return;
        }

        if (start === end) {
            showMessage("Please select text to format.", true);
            return;
        }

        const selectedText = value.slice(start, end);
        const normalizedText = revertToNormal(selectedText);
        let transformedText;
        let addUnderline = false;
        let addStrike = false;
        let baseStyle = styleName;
        
        if (styleName === 'underline' || styleName === 'bold-underline') {
            addUnderline = true;
            baseStyle = styleName === 'bold-underline' ? 'serif-bold' : 'normal';
        }
        if (styleName === 'strike' || styleName === 'bold-strike') {
            addStrike = true;
            baseStyle = styleName === 'bold-strike' ? 'serif-bold' : 'normal';
        }

        transformedText = transformChunk(normalizedText, baseStyle, addUnderline, addStrike);

        const newValue = value.slice(0, start) + transformedText + value.slice(end);
        editor.value = newValue;
        editor.focus();
        editor.setSelectionRange(start, start + transformedText.length);
        showMessage("Text formatted successfully.");
    });
});

textToHashtagBtn.addEventListener('click', convertSelectionToHashtag);

hashtagInput.addEventListener('input', () => {
    const suggestions = suggestHashtags(hashtagInput.value);
    showHashtagSuggestions(suggestions);
});

hashtagInput.addEventListener('focus', () => {
    const suggestions = suggestHashtags(hashtagInput.value);
    showHashtagSuggestions(suggestions);
});

document.addEventListener('click', (e) => {
    if (!hashtagInput.contains(e.target) && !hashtagSuggestions.contains(e.target)) {
        hashtagSuggestions.classList.add('hidden');
    }
});

addHashtagBtn.addEventListener('click', () => {
    if (hashtagInput.value.trim() !== '') {
        insertHashtag(hashtagInput.value);
        hashtagInput.value = '';
        hashtagSuggestions.classList.add('hidden');
    }
});

hashtagInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (hashtagInput.value.trim() !== '') {
            insertHashtag(hashtagInput.value);
            hashtagInput.value = '';
            hashtagSuggestions.classList.add('hidden');
        }
        e.preventDefault();
    }
});

copyBtn.addEventListener('click', () => {
    if (!editor.value.trim()) {
        showMessage("No text to copy.", true);
        return;
    }
    editor.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showMessage("Text copied to clipboard!");
        } else {
            showMessage("Unable to copy text.", true);
        }
    } catch (err) {
        showMessage("Unable to copy text. Please copy manually.", true);
    }
});

resetBtn.addEventListener('click', () => {
    editor.value = '';
    showMessage("Editor reset.");
});
