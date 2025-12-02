'use server';

/**
 * @fileOverview Generates optimized heat treatment parameters based on alloy composition and desired material properties.
 *
 * - generateHeatTreatmentParameters - A function that generates heat treatment parameters.
 * - GenerateHeatTreatmentParametersInput - The input type for the generateHeatTreatmentParameters function.
 * - GenerateHeatTreatmentParametersOutput - The return type for the generateHeatTreatmentParameters function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeatTreatmentParametersInputSchema = z.object({
  alloyComposition: z
    .string()
    .describe('The composition of the alloy, including the elements and their percentages.'),
  desiredMaterialProperties: z
    .string()
    .describe('The desired material properties after heat treatment, such as hardness, tensile strength, etc.'),
});

export type GenerateHeatTreatmentParametersInput = z.infer<
  typeof GenerateHeatTreatmentParametersInputSchema
>;

const GenerateHeatTreatmentParametersOutputSchema = z.object({
  temperature: z
    .string()
    .describe('The recommended temperature for the heat treatment process.'),
  duration: z.string().describe('The recommended duration of the heat treatment process.'),
  coolingMethod: z
    .string()
    .describe('The recommended cooling method after the heat treatment process.'),
  expectedResult: z
    .string()
    .describe('The expected material properties after heat treatment'),
});

export type GenerateHeatTreatmentParametersOutput = z.infer<
  typeof GenerateHeatTreatmentParametersOutputSchema
>;

export async function generateHeatTreatmentParameters(
  input: GenerateHeatTreatmentParametersInput
): Promise<GenerateHeatTreatmentParametersOutput> {
  return generateHeatTreatmentParametersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeatTreatmentParametersPrompt',
  input: {schema: GenerateHeatTreatmentParametersInputSchema},
  output: {schema: GenerateHeatTreatmentParametersOutputSchema},
  prompt: `You are an expert metallurgist specializing in heat treatment processes.

You will use the provided alloy composition and desired material properties to generate optimized heat treatment parameters, including temperature, duration, and cooling method.

Alloy Composition: {{{alloyComposition}}}
Desired Material Properties: {{{desiredMaterialProperties}}}

Based on this information, provide the following heat treatment parameters:

Temperature: The recommended temperature for the heat treatment process.
Duration: The recommended duration of the heat treatment process.
Cooling Method: The recommended cooling method after the heat treatment process.
Expected Result: The expected material properties after heat treatment.
`,
});

const generateHeatTreatmentParametersFlow = ai.defineFlow(
  {
    name: 'generateHeatTreatmentParametersFlow',
    inputSchema: GenerateHeatTreatmentParametersInputSchema,
    outputSchema: GenerateHeatTreatmentParametersOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
