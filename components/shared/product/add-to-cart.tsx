/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import useCartStore from "@/hooks/use-cart-store";
import { useToast } from "@/hooks/use-toast";
import { OrderItem } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function AddToCart({
  item,
  minimal = false,
}: {
  item: OrderItem;
  minimal?: boolean;
}) {
  const router = useRouter();
  const { toast } = useToast();

  const { addItem } = useCartStore();

  const [quantity, setQuantity] = useState(1);
  const t = useTranslations();

  return minimal ? (
    <Button
      className="rounded-full w-auto bg-yellow-500 text-white hover:bg-yellow-600"
      onClick={() => {
        try {
          addItem(item, 1);
          toast({
            title: t("Product.Added to Cart"),
            ddescription: t("Product.Added to Cart"),
            action: (
              <Button
                className="bg-yellow-500 text-white hover:bg-yellow-600"
                onClick={() => {
                  router.push("/cart");
                }}
              >
                {t("Product.Go to Cart")}
              </Button>
            ),
          });
        } catch (error: any) {
          toast({
            title: "Error Adding Product to Cart",
            description: error.message,
          });
        }
      }}
    >
      {t("Product.Add to Cart")}
    </Button>
  ) : (
    <div className="w-full space-y-2">
      <Select
        value={quantity.toString()}
        onValueChange={(i) => setQuantity(Number(i))}
      >
        <SelectValue>
          {t("Product.Quantity")}: {quantity}
        </SelectValue>
        <SelectContent position="popper">
          {Array.from({ length: item.countInStock }).map((_, i) => (
            <SelectItem key={i + 1} value={`${i + 1}`}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        className="rounded-full w-full bg-gray-500 text-white hover:bg-gray-600 mt-3"
        type="button"
        onClick={async () => {
          try {
            const itemId = await addItem(item, quantity);
            router.push(`/cart/${itemId}`);
            toast({
              title: "Added to Cart",
              description: "Item added to cart successfully",
              action: (
                <Button
                  className="bg-yellow-500 text-white hover:bg-yellow-600"
                  onClick={() => {
                    router.push("/cart");
                  }}
                >
                  {t("Product.Go to Cart")}
                </Button>
              ),
            });
          } catch (error: any) {
            toast({
              title: "Error Adding Product to Cart",
              description: error.message,
            });
          }
        }}
      >
        {t("Product.Add to Cart")}{" "}
      </Button>
      <Button
        className="w-full rounded-full bg-yellow-500 text-white hover:bg-yellow-600"
        variant="secondary"
        onClick={() => {
          try {
            addItem(item, quantity);
            router.push(`/checkout`);
          } catch (error: any) {
            toast({
              title: "Error Adding Product to Cart",
              description: error.message,
            });
          }
        }}
      >
        {t("Product.Buy Now")}
      </Button>
    </div>
  );
}
