import { useState } from "react"; // Import useState hook
import { Drawer } from "antd";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderLink } from "../utils";
import Link from "next/link";

const MyDrawer = () => {
  // Step 1: Create a state to control the drawer's visibility
  const [open, setOpen] = useState(false);

  // Step 2: Define a function to toggle the drawer open/close
  const show = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <MenuIcon
        sx={{ fontSize: 35 }}
        onClick={show} // Trigger open state on click
        className="text-orange cursor-pointer sm:hidden" // Hide on larger screens
      />
      <Drawer
        placement="right"
        closable={false}
        onClose={close} // Close the drawer when triggered
        open={open} // Control the drawer's visibility
        width={300}
        style={{ backgroundColor: "#2d2e32", color: "#fff" }}
      >
        <div className="flex flex-col sm:hidden justify-center h-full">
          {HeaderLink.map((link) => (
            <Link
              href={link.url}
              className="ms-5 my-3 text-[18px] xl:text-[20px]"
              key={link.name}
              onClick={close} // Close the drawer when a link is clicked
            >
              {link.name}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default MyDrawer;
