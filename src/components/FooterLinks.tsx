import SmartButton from "@/components/SmartButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
type FooterLinksProps = {
  data: { name: string; url: string }[];
};

function FooterLinks({ data }: FooterLinksProps) {
  return (
    <>
      <h3 className="text-lg font-semibold mb-4">{data[0].name}</h3>
      <ul className="space-y-2">
        {data.slice(1).map((item, index) => (
          <li key={index} className="flex items-center">
            <span>
              <ChevronRightIcon sx={{ color: "#FFAA17" }} />
            </span>
            <SmartButton
              as="a"
              href={item.url}
              label={item.name}
              linkClassName="pb-[2px] relative inline-flex items-center text-gray-300 hover:text-orange transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange after:transition-all after:duration-500 hover:after:w-full"
            >
              {item.name}
            </SmartButton>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FooterLinks;
