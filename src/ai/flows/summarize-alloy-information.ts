'use server';

/**
 * @fileOverview A flow that summarizes key information about an alloy based on its name or composition.
 *
 * - summarizeAlloyInformation - A function that summarizes alloy information.
 * - SummarizeAlloyInformationInput - The input type for the summarizeAlloyInformation function.
 * - SummarizeAlloyInformationOutput - The return type for the summarizeAlloyInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAlloyInformationInputSchema = z.object({
  alloy: z
    .string()
    .describe(
      'The name or composition of the alloy to summarize information about.'
    ),
});
export type SummarizeAlloyInformationInput = z.infer<
  typeof SummarizeAlloyInformationInputSchema
>;

const SummarizeAlloyInformationOutputSchema = z.object({
  summary: z.string().describe('A summary of the key information about the alloy, including common applications, typical heat treatments, and potential issues.'),
});
export type SummarizeAlloyInformationOutput = z.infer<
  typeof SummarizeAlloyInformationOutputSchema
>;

export async function summarizeAlloyInformation(
  input: SummarizeAlloyInformationInput
): Promise<SummarizeAlloyInformationOutput> {
  return summarizeAlloyInformationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeAlloyInformationPrompt',
  input: {schema: SummarizeAlloyInformationInputSchema},
  output: {schema: SummarizeAlloyInformationOutputSchema},
  prompt: `You are an expert metallurgist. Please provide a summary of key information about the following alloy, including its common applications, typical heat treatments, and potential issues.\n\nAlloy: {{{alloy}}}`,
});

const summarizeAlloyInformationFlow = ai.defineFlow(
  {
    name: 'summarizeAlloyInformationFlow',
    inputSchema: SummarizeAlloyInformationInputSchema,
    outputSchema: SummarizeAlloyInformationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
