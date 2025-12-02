import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AlloyClient } from './alloy-client';
import { alloys } from '@/lib/data';

export default function AlloyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-headline">
          Comprehensive Alloy Database
        </CardTitle>
        <CardDescription>
          Search for alloys to view their properties and get AI-powered insights.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AlloyClient alloys={alloys} />
      </CardContent>
    </Card>
  );
}
