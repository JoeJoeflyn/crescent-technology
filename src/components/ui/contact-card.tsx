import { CONTACT_INFO } from "@/constants";
import { cn } from "@/lib/utils";
import { IconMapPin } from "@tabler/icons-react";
import ContactForm from "./contact-form";

export default function ContactCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
      <div className="lg:col-span-2 w-full">
        <ContactForm />
      </div>
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10">
        {CONTACT_INFO.map((info, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col lg:border-r py-10 relative group/feature border-primary",
              (index === 0 || index === 3) && "lg:border-l",
              index < 3 && "lg:border-b"
            )}
          >
            {index < 3 ? (
              <div className="opacity-0 group-hover/feature:opacity-10 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            ) : (
              <div className="opacity-0 group-hover/feature:opacity-10 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-primary">
              <IconMapPin aria-hidden="true" />
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
              <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-primary group-hover/feature:bg-cyan-blue transition-all duration-200 origin-center" />
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary">
                {info.title}
              </span>
            </div>
            <p className="text-sm text-primary max-w-xs relative z-10 px-10">
              <span className="font-semibold">Email:</span> {info.email}
            </p>
            <p className="text-sm text-primary max-w-xs relative z-10 px-10">
              <span className="font-semibold">Phone:</span> {info.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
