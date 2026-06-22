import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        title: z.string(),
        slug: z.string(),
        type: z.array(z.string()),
        status: z.string(),
        year: z.number(),
        description: z.string(),
        shortDescription: z.string(),
        tags: z.array(z.string()),
        stack: z.record(z.array(z.string())), // Objeto dinámico con arrays de strings
        features: z.array(z.string()),
        images: z.array(z.string()),
        links: z.object({
        demo: z.string().nullable(),
        frontendRepo: z.string().nullable(),
        backendRepo: z.string().nullable(),
        docs: z.string().nullable(),
        }),
        services: z.array(z.string()),
        highlight: z.boolean(),
    }),
});

const servicesCollection = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        tools: z.array(z.string()),
        useCases: z.array(z.string()),
        tags: z.array(z.string()),
        details: z.array(z.string()).optional(), // ¡Campo opcional!
    }),
});

export const collections = {
    'projects': projectsCollection,
    'services': servicesCollection,
};