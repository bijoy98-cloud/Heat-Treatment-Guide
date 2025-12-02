import type { Alloy, GlossaryTerm, Guide, Tutorial, CommunityPost } from '@/lib/types';

export const alloys: Alloy[] = [
  {
    id: '4140',
    name: 'AISI 4140 Steel',
    composition: 'Fe, 1% Cr, 0.2% Mo, 0.4% C',
    description: 'A versatile chromium-molybdenum alloy steel known for its toughness, high fatigue strength, and abrasion and impact resistance.',
  },
  {
    id: '1045',
    name: 'AISI 1045 Steel',
    composition: 'Fe, 0.45% C, 0.75% Mn',
    description: 'A medium carbon steel offering a good balance of strength and ductility. Used for gears, axles, and shafts.',
  },
  {
    id: 'a2',
    name: 'A2 Tool Steel',
    composition: 'Fe, 5% Cr, 1% Mo, 1% C',
    description: 'An air-hardening, cold-work tool steel that provides a good combination of wear resistance and toughness.',
  },
  {
    id: 'd2',
    name: 'D2 Tool Steel',
    composition: 'Fe, 12% Cr, 1% Mo, 1.5% C',
    description: 'A high-carbon, high-chromium tool steel known for its excellent wear and abrasion resistance.',
  },
  {
    id: 'o1',
    name: 'O1 Tool Steel',
    composition: 'Fe, 0.9% C, 1.25% Mn, 0.5% Cr, 0.5% W',
    description: 'An oil-hardening tool steel that is easy to machine and provides good dimensional stability during heat treatment.',
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Annealing',
    definition: 'A heat treatment process that alters the microstructure of a material to change its mechanical or electrical properties. Typically, in steels, annealing is used to reduce hardness, increase ductility and help eliminate internal stresses.',
  },
  {
    term: 'Quenching',
    definition: 'The rapid cooling of a workpiece in water, oil or air to obtain certain material properties. A type of heat treating, quenching prevents low-temperature processes, such as phase transformations, from occurring.',
  },
  {
    term: 'Tempering',
    definition: 'A heat treatment process for iron-based alloys, such as steel or cast iron, to achieve greater toughness by decreasing the hardness of the alloy. The reduction in hardness is usually accompanied by an increase in ductility.',
  },
  {
    term: 'Normalizing',
    definition: 'A heat treatment process used to give steel a uniform, fine-grained structure and to make it more responsive to subsequent heat treatments. It involves heating the steel to a temperature above its upper critical point and then cooling it in air.',
  },
  {
    term: 'Austenite',
    definition: 'A metallic, non-magnetic allotrope of iron or a solid solution of iron with an alloying element. In plain-carbon steel, austenite exists above the critical eutectoid temperature of 1000 K (727 °C).',
  },
];

export const guides: Guide[] = [
  {
    slug: 'annealing',
    title: 'The Complete Guide to Annealing',
    description: 'Learn the principles and practices of annealing to soften metals and improve ductility.',
    content: 'Annealing is a critical heat treatment process used to alter the microstructure of a material, making it softer and more ductile. This guide covers the three stages of annealing: recovery, recrystallization, and grain growth. We will explore how temperature and time affect the final properties of the metal, and discuss common applications in various industries. Understanding annealing is fundamental to successful metalworking and manufacturing.',
    imageId: 'guide-annealing',
  },
  {
    slug: 'quenching',
    title: 'Mastering the Art of Quenching',
    description: 'Explore different quenching mediums and techniques to achieve desired hardness.',
    content: 'Quenching is the process of rapidly cooling a hot workpiece to achieve specific material properties, most notably hardness. This guide delves into the science of quenching, comparing different mediums like water, oil, and air. We will discuss the importance of cooling rates and how to avoid common defects such as cracking and distortion. Mastering quenching is key to creating strong, durable parts.',
    imageId: 'guide-quenching',
  },
  {
    slug: 'tempering',
    title: 'Tempering: Finding the Balance',
    description: 'Understand how to temper steel to reduce brittleness and increase toughness.',
    content: 'After quenching, steel is often too brittle for practical use. Tempering is a secondary heat treatment that reduces this brittleness and increases toughness. This guide explains the relationship between tempering temperature and final hardness. We will provide charts and examples to help you select the right tempering parameters for your specific application, ensuring your components have the perfect balance of strength and durability.',
    imageId: 'guide-tempering',
  },
  {
    slug: 'normalizing',
    title: 'An Introduction to Normalizing',
    description: 'Discover the benefits of normalizing for refining grain structure and improving machinability.',
    content: 'Normalizing is a heat treatment process used to refine the grain structure of steel, which improves its uniformity and machinability. This guide outlines the key differences between normalizing and annealing. We will walk through the process of heating steel above its critical temperature and then air-cooling it, and explain how this simple process can significantly enhance the material\'s mechanical properties for subsequent operations.',
    imageId: 'guide-normalizing',
  },
];

export const tutorials: Tutorial[] = [
    {
        id: '1',
        title: 'Basic Metallurgy for Beginners',
        description: 'A comprehensive introduction to the science of metals.',
        url: '#',
        imageId: 'tutorial-1',
    },
    {
        id: '2',
        title: 'Advanced Quenching Techniques',
        description: 'Learn from experts about controlling cooling rates for optimal results.',
        url: '#',
        imageId: 'tutorial-2',
    },
    {
        id: '3',
        title: 'Safety First: Handling Hot Metals',
        description: 'Essential safety protocols for any heat treatment facility.',
        url: '#',
        imageId: 'tutorial-3',
    },
    {
        id: '4',
        title: 'The Art of Forge Welding',
        description: 'A step-by-step guide to joining metals in a traditional forge.',
        url: '#',
        imageId: 'tutorial-4',
    }
];

export const communityPosts: CommunityPost[] = [
    {
        id: '1',
        title: 'Troubleshooting cracks in D2 tool steel after quenching?',
        author: 'John Doe',
        authorImageId: 'community-author-1',
        date: '2 days ago',
        replies: 12,
        content: 'I\'ve been having issues with micro-cracks appearing in my D2 tool steel parts after oil quenching. I\'m following the recommended austenitizing temperature. Has anyone else experienced this? Any suggestions on pre-heating cycles or quenchant modifications?'
    },
    {
        id: '2',
        title: 'Best practices for tempering 4140 for high toughness applications?',
        author: 'Jane Smith',
        authorImageId: 'community-author-2',
        date: '5 days ago',
        replies: 8,
        content: 'I\'m working on a project that requires maximum toughness from AISI 4140 steel. What tempering temperature and duration would you recommend to achieve the best impact resistance, even if it means sacrificing some hardness? Looking for proven recipes.'
    },
    {
        id: '3',
        title: 'Show off your work: Post-heat-treatment finishes',
        author: 'Sam Wilson',
        authorImageId: 'community-author-3',
        date: '1 week ago',
        replies: 25,
        content: 'Let\'s see those beautiful colors and finishes you\'re getting on your projects after heat treatment! Share your pictures and a brief description of the material and process. I\'ll start: here\'s a knife made from O1 steel with a nice straw-colored temper.'
    }
]
