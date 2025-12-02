'use client';

import type { Alloy } from '@/lib/types';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { summarizeAlloyInformation, type SummarizeAlloyInformationOutput } from '@/ai/flows/summarize-alloy-information';
import { Loader2, Search } from 'lucide-react';

function AiSummary({ alloy }: { alloy: Alloy }) {
    const [summary, setSummary] = useState<SummarizeAlloyInformationOutput | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getSummary = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await summarizeAlloyInformation({ alloy: alloy.name });
            setSummary(result);
        } catch (e) {
            setError('Failed to generate summary.');
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-6 rounded-lg bg-secondary/50 p-4">
            <h4 className="font-semibold text-lg mb-2">AI-Powered Summary</h4>
            {!summary && !loading && (
                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                        Generate a detailed summary of this alloy, including common applications, typical heat treatments, and potential issues.
                    </p>
                    <Button onClick={getSummary} disabled={loading}>
                        Generate AI Summary
                    </Button>
                </div>
            )}
            {loading && (
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="animate-spin h-5 w-5" />
                    <span>Generating summary...</span>
                </div>
            )}
            {error && <p className="text-destructive text-sm">{error}</p>}
            {summary && (
                <p className="text-sm whitespace-pre-wrap font-mono bg-background p-3 rounded-md">
                    {summary.summary}
                </p>
            )}
        </div>
    );
}


export function AlloyClient({ alloys }: { alloys: Alloy[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAlloy, setSelectedAlloy] = useState<Alloy | null>(null);

  const filteredAlloys = useMemo(() => {
    return alloys.filter(
      (alloy) =>
        alloy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alloy.composition.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [alloys, searchTerm]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by name or composition..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Alloy Name</TableHead>
              <TableHead>Composition</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAlloys.map((alloy) => (
              <TableRow
                key={alloy.id}
                onClick={() => setSelectedAlloy(alloy)}
                className="cursor-pointer"
              >
                <TableCell className="font-medium">{alloy.name}</TableCell>
                <TableCell>{alloy.composition}</TableCell>
                <TableCell className="text-muted-foreground">{alloy.description}</TableCell>
              </TableRow>
            ))}
             {filteredAlloys.length === 0 && (
                <TableRow>
                    <TableCell colSpan={3} className="text-center h-24 text-muted-foreground">
                    No alloys found.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      <Sheet open={!!selectedAlloy} onOpenChange={(open) => !open && setSelectedAlloy(null)}>
        <SheetContent className="sm:max-w-xl w-full">
            {selectedAlloy && (
                <>
                <SheetHeader>
                    <SheetTitle className="text-2xl font-headline">{selectedAlloy.name}</SheetTitle>
                    <SheetDescription>{selectedAlloy.composition}</SheetDescription>
                </SheetHeader>
                <div className="py-4">
                    <p>{selectedAlloy.description}</p>
                    <AiSummary alloy={selectedAlloy} />
                </div>
                </>
            )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
