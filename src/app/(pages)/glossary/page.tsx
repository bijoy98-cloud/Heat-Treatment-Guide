import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { glossaryTerms } from '@/lib/data';

export default function GlossaryPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-headline">
          Interactive Glossary of Terms
        </CardTitle>
        <CardDescription>
          Click on a term to expand it and view its definition.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {glossaryTerms.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {item.term}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.definition}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
