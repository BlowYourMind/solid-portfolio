import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { i18n, supportedLanguages } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/routing";
import { LanguagesIcon } from "lucide-react";
const LocaleSwitcher = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="size-9 p-0">
          <LanguagesIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <Item key={locale} locale={locale} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type ItemProps = {
  locale: string;
};

const Item = (props: ItemProps) => {
  const { locale } = props;
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    startTransition(() => router.replace(pathname, { locale }));
  };

  return (
    <DropdownMenuItem
      key={locale}
      disabled={isPending}
      onClick={switchLanguage}
    >
      {supportedLanguages.find((l) => l.code === locale)?.label}
    </DropdownMenuItem>
  );
};

export default LocaleSwitcher;
