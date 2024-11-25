import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';

export default function ShadCnExample() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1>ShadCn Accordian Example</h1>
      <div className="w-2/3 md:max-w-[50%]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Accordian Title One</AccordionTrigger>
            <AccordionContent>
              This will be the accoridan one content. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem est blanditiis voluptates veniam debitis natus officia
              mollitia repellat voluptatum. Quam saepe autem at suscipit provident placeat sit cum
              illum quidem!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Accordian Title Two</AccordionTrigger>
            <AccordionContent>
              This will be the accoridan two content. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem est blanditiis voluptates veniam debitis natus officia
              mollitia repellat voluptatum. Quam saepe autem at suscipit provident placeat sit cum
              illum quidem!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
