'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  generateHeatTreatmentParameters,
  type GenerateHeatTreatmentParametersOutput,
} from '@/ai/flows/generate-heat-treatment-parameters';
import { Loader2, Thermometer, Timer, Wind, Target } from 'lucide-react';

const formSchema = z.object({
  alloyComposition: z
    .string()
    .min(10, { message: 'Please provide a more detailed alloy composition.' }),
  desiredMaterialProperties: z.string().min(10, {
    message: 'Please describe the desired properties in more detail.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function CalculatorClient() {
  const [result, setResult] =
    useState<GenerateHeatTreatmentParametersOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      alloyComposition: '',
      desiredMaterialProperties: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await generateHeatTreatmentParameters(values);
      setResult(res);
    } catch (e) {
      setError('An error occurred while generating parameters. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="alloyComposition"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Alloy Composition</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., AISI 4140: Fe, 1% Cr, 0.2% Mo, 0.4% C"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter the elements and their percentages in the alloy.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desiredMaterialProperties"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">
                  Desired Material Properties
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., High hardness (60 HRC), good toughness, for use in a cutting tool."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe the target properties like hardness, tensile
                  strength, or application.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading} size="lg">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Parameters'
            )}
          </Button>
        </form>
      </Form>

      {error && (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      {result && (
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-headline">
            AI-Generated Recommendations
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Temperature</CardTitle>
                <Thermometer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{result.temperature}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Duration</CardTitle>
                <Timer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{result.duration}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Cooling Method</CardTitle>
                <Wind className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{result.coolingMethod}</div>
              </CardContent>
            </Card>
             <Card>
              <CardHeader className="flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Expected Result</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{result.expectedResult}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
