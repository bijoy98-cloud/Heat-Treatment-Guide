import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CalculatorClient } from './calculator-client';

export default function CalculatorPage() {
  return (
    <div className="container mx-auto max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-headline">
            AI-Powered Parameter Calculator
          </CardTitle>
          <CardDescription>
            Provide alloy composition and desired properties to get AI-optimized
            heat treatment parameters.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CalculatorClient />
        </CardContent>
      </Card>
    </div>
  );
}
