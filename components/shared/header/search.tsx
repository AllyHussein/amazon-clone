import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getSetting } from "@/lib/actions/setting.actions";
import { getTranslations } from "next-intl/server";
import { getAllCategories } from "@/lib/actions/product.actions";
export default async function Search() {
  const {
    site: { name },
  } = await getSetting();
  const categories = await getAllCategories();

  const t = await getTranslations();
  return (
    <form action="/search" method="GET" className="flex  items-stretch h-9  ">
      <Select name="category">
        <SelectTrigger className="w-auto h-full bg-black text-white  border-r  rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none  ">
          <SelectValue placeholder={t("Header.All")} />
        </SelectTrigger>
        <SelectContent position="popper" className="bg-white dark:bg-gray-800">
          <SelectItem value="all">{t("Header.All")}</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        className="flex-1 rounded-none dark:border-gray-200 bg-black text-white text-base h-full"
        placeholder={t("Header.Search Site", { name })}
        name="q"
        type="search"
      />
      <button
        type="submit"
        className="bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2 text-black border  "
      >
        <SearchIcon className="w-5 h-5" />
      </button>
    </form>
  );
}
