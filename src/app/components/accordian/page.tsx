import Wrapper from "../(shared)/Wrapper";
import Accordian, { AccordianItem } from "./Accordian";
import AccordianCode from "./AccordianCode";

const AccordionPage = () => {
  const imports = `import { Accordian, AccordianItem }from "compcrafter";`;
  const usage = `<Accordian className="max-w-lg mb-5">
  <AccordianItem value={1} trigger="1st Accordian">
        Yes! It is the first accordian
  </AccordianItem>
  <AccordianItem value={2} trigger="2nd Accordian">
        Yes! It is the second accordian
  </AccordianItem>
  <AccordianItem value={3} trigger="3rd Accordian">
        Yes! It is the third accordian
  </AccordianItem>
  <AccordianItem value={4} trigger="4th Accordian">
        Yes! It is the fourth accordian
  </AccordianItem>
</Accordian>`;
  return (
    <Wrapper
      title="Accordian"
      description="A vertically stacked set of interactive headings that each reveal a section of content."
      component={
        <Accordian className="max-w-lg mb-5">
          <AccordianItem value={1} trigger="1st Accordian">
            Yes! It is the first accordian
          </AccordianItem>
          <AccordianItem value={2} trigger="2nd Accordian">
            Yes! It is the second accordian
          </AccordianItem>
          <AccordianItem value={3} trigger="3rd Accordian">
            Yes! It is the third accordian
          </AccordianItem>
          <AccordianItem value={4} trigger="4th Accordian">
            Yes! It is the fourth accordian
          </AccordianItem>
        </Accordian>
      }
      code={AccordianCode}
      embedId="dciqfn6vRxc"
      imports={imports}
      usage={usage}
    />
  );
};

export default AccordionPage;
