"use client";

import { useEffect, useMemo, useState } from "react";

type Language = "en" | "ar";

type ProductOption = {
  id: string;
  labelEn: string;
  labelAr: string;
  price: number | null;
};

type FlavorOption = {
  id: string;
  labelEn: string;
  labelAr: string;
  image: string;
};

type GiftOption = {
  id: string;
  labelEn: string;
  labelAr: string;
  price: number;
};

type Product = {
  id: string;
  image: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  note: {
    en: string;
    ar: string;
  };
  options: ProductOption[];
  hasFlavorSelector?: boolean;
};

const WHATSAPP_NUMBER = "971522622363";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_LINK = "https://www.instagram.com/atom_of_sugar";

const giftOptions: GiftOption[] = [
  {
    id: "gift-packaging",
    labelEn: "Gift Packaging (+10 AED)",
    labelAr: "تغليف هدية (+١٠ درهم)",
    price: 10,
  },
  {
    id: "greeting-card",
    labelEn: "Greeting Card (+5 AED)",
    labelAr: "بطاقة تهنئة (+٥ دراهم)",
    price: 5,
  },
  {
    id: "mixed-selection",
    labelEn: "Mixed Selection (+15 AED)",
    labelAr: "تشكيلة متنوعة (+١٥ درهم)",
    price: 15,
  },
];

const flavorOptions: FlavorOption[] = [
  {
    id: "strawberry",
    labelEn: "Strawberry",
    labelAr: "فراولة",
    image: "/flavor-strawberry.png",
  },
  {
    id: "chocolate",
    labelEn: "Chocolate",
    labelAr: "شوكولاتة",
    image: "/flavor-chocolate.png",
  },
  {
    id: "lotus",
    labelEn: "Lotus",
    labelAr: "لوتس",
    image: "/flavor-lotus.png",
  },
];

const products: Product[] = [
  {
    id: "mini-mabrousha",
    image: "/mini-mabrousha-flavors.png",
    title: {
      en: "Mini Mabrousha",
      ar: "ميني مبروشة",
    },
    description: {
      en: "Mini mabrousha sweets available in different flavors ideal for serving and gatherings.",
      ar: "ميني مبروشة بنكهات فاخرة، مثالية للتقديم الأنيق والضيافة.",
    },
    note: {
      en: "Limited quantity - pre-order",
      ar: "الكمية محدودة - الحجز مسبق",
    },
    options: [
      {
        id: "25-pieces",
        labelEn: "25 Pieces — 50 AED",
       labelAr: "٢٥ قطعة — ٥٠ درهم",
        price: 50,
      },
      {
        id: "35-pieces",
        labelEn: "35 Pieces — 70 AED",
        labelAr: "٣٥ قطعة — ٧٠ درهم",
         price: 70,
      },
      {
        id: "60-pieces",
        labelEn: "60 Pieces — 110 AED",
        labelAr: "٦٠ قطعة — ١١٠ درهم",
        price: 110,
      },
    ],
    hasFlavorSelector: true,
  },
  {
    id: "kaak-eid",
    image: "/kaak-eid-new.png",
    title: {
      en: "Kaak Eid",
      ar: "كعك العيد",
    },
    description: {
      en: "Traditional festive kaak filled with dates and coated with sesame.",
      ar: "كعك تقليدي فاخر محشو بالتمر ومغطى بالسمسم.",
    },
    note: {
      en: "Limited quantity - pre-order",
      ar: "الكمية محدودة - الحجز مسبق",
    },
    options: [
      {
        id: "1kg",
        labelEn: "1 KG — 80 AED",
        labelAr: "١ كيلو — ٨٠ درهم",
        price: 80,
      },
      {
        id: "2kg",
        labelEn: "2 KG — 150 AED",
        labelAr: "٢ كيلو — ١٥٠ درهم",
        price: 150,
      },
    ],
  },
  {
    id: "maqroota-tamar",
    image: "/maqroota-tamar.png",
    title: {
      en: "Maqroota Tamar",
      ar: "مقروطة التمر",
    },
    description: {
      en: "Traditional Palestinian date pastry with rich layers and authentic flavor.",
      ar: "مقروطة تمر فلسطينية تقليدية بطبقات غنية ونكهة أصيلة.",
    },
    note: {
      en: "Limited quantity - pre-order",
      ar: "الكمية محدودة - الحجز مسبق",
    },
    options: [
      {
        id: "1kg",
        labelEn: "1 KG – 70 AED",
        labelAr: "كيلو – ٧٠ درهم",
        price: 70,
      },
      {
        id: "2kg",
        labelEn: "2 KG – 130 AED",
        labelAr: "٢ كيلو – ١٣٠ درهم",
        price: 130,
      },
    ],
  },
  {
    id: "maamoul-tamar",
    image: "/maamoul-tamar.png",
    title: {
      en: "Maamoul Tamar",
      ar: "معمول التمر",
    },
    description: {
      en: "Traditional date maamoul with a rich taste and soft texture.",
      ar: "معمول تمر تقليدي بطعم غني وقوام ناعم.",
    },
    note: {
      en: "Limited quantity - pre-order",
      ar: "الكمية محدودة - الحجز مسبق",
    },
    options: [
      {
        id: "1kg",
        labelEn: "1 KG — 80 AED",
        labelAr: "١ كيلو — ٨٠ درهم",
        price: 80,
      },
      {
        id: "2kg",
        labelEn: "2 KG — 150 AED",
        labelAr: "٢ كيلو — ١٥٠ درهم",
        price: 150,
      },
    ],
  },
  {
    id: "qatayef",
    image: "/qatayef.png",
    title: {
      en: "Qatayef",
      ar: "قطايف",
    },
    description: {
      en: "Available with nuts, cream, or asafiri style qatayef.",
      ar: "متوفرة بحشوات متنوعة مثل المكسرات والقشطة وقطايف عصافيري.",
    },
    note: {
      en: "Price will be confirmed after order",
      ar: "سيتم تأكيد السعر بعد الطلب",
    },
    options: [
      {
        id: "plate",
        labelEn: "Plate",
        labelAr: "طبق",
        price: null,
      },
      {
        id: "large-plate",
        labelEn: "Large Plate",
        labelAr: "طبق كبير",
        price: null,
      },
      {
        id: "mixed-plate",
        labelEn: "Mixed Plate",
        labelAr: "طبق مشكل",
        price: null,
      },
    ],
  },
  {
    id: "date-fingers",
    image: "/Date-Fingers.png",
    title: {
      en: "Date Fingers",
      ar: "أصابع تمر",
    },
    description: {
      en: "Palestinian long date fingers covered with sesame.",
      ar: "أصابع تمر فلسطينية طويلة مغطاة بالسمسم.",
    },
    note: {
      en: "Limited quantity - pre-order",
      ar: "الكمية محدودة - الحجز مسبق",
    },
    options: [
      {
        id: "1kg",
        labelEn: "1 KG — 70 AED",
        labelAr: "١ كيلو — ٧٠ درهم",
        price: 70,
      },
      {
        id: "2kg",
        labelEn: "2 KG — 130 AED",
       labelAr: "٢ كيلو — ١٣٠ درهم",
        price: 130,
      },
    ],
  },
  {
    id: "luxury-sweets-box",
    image: "/luxury-sweets-box.png",
    title: {
      en: "Luxury Sweets Box",
      ar: "بوكس حلويات فاخر",
    },
    description: {
      en: "A premium assorted sweets box suitable for occasions and elegant gifting.",
      ar: "بوكس حلويات مشكل فاخر مناسب للمناسبات والتقديم والهدايا الراقية.",
    },
    note: {
      en: "Price will be confirmed after order",
      ar: "سيتم تأكيد السعر بعد الطلب",
    },
    options: [
      {
        id: "small-box",
        labelEn: "Small Box",
        labelAr: "بوكس صغير",
        price: null,
      },
      {
        id: "medium-box",
        labelEn: "Medium Box",
        labelAr: "بوكس متوسط",
        price: null,
      },
      {
        id: "large-box",
        labelEn: "Large Box",
        labelAr: "بوكس كبير",
        price: null,
      },
      {
        id: "custom-box",
        labelEn: "Custom Box",
        labelAr: "بوكس حسب الطلب",
        price: null,
      },
    ],
  },
];

function toArabicDigits(value: number | string) {
  return String(value).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}

function formatAED(value: number, isArabic: boolean) {
  return isArabic ? `${toArabicDigits(value)} درهم` : `${value} AED`;
}

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("ar");
  const isArabic = language === "ar";

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string>("");
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedGiftOptionIds, setSelectedGiftOptionIds] = useState<string[]>([]);
  const [specialNotes, setSpecialNotes] = useState<string>("");

  type BasketItem = {
  id: string;
  productNameEn: string;
  productNameAr: string;
  optionEn: string;
  optionAr: string;
  quantity: number;
  flavorsEn: string[];
  flavorsAr: string[];
  giftsEn: string[];
  giftsAr: string[];
  notes: string;
  totalPrice: number | null;
};

const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
const [isBasketOpen, setIsBasketOpen] = useState(false);

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId) ?? null,
    [selectedProductId]
  );

  const selectedOption = useMemo(
    () => selectedProduct?.options.find((option) => option.id === selectedOptionId) ?? null,
    [selectedProduct, selectedOptionId]
  );

  const selectedGiftOptions = useMemo(
    () => giftOptions.filter((gift) => selectedGiftOptionIds.includes(gift.id)),
    [selectedGiftOptionIds]
  );

  const selectedFlavorObjects = useMemo(
    () => flavorOptions.filter((flavor) => selectedFlavors.includes(flavor.id)),
    [selectedFlavors]
  );

  const totalPrice = useMemo(() => {
    if (!selectedOption || selectedOption.price === null) {
      return null;
    }

    const giftTotal = selectedGiftOptions.reduce((sum, gift) => sum + gift.price, 0);
    return selectedOption.price * quantity + giftTotal;
  }, [selectedOption, quantity, selectedGiftOptions]);

  useEffect(() => {
    if (selectedProduct) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedProduct]);

  const text = {
    brandLine: {
      en: "LUXURY DESSERT BOUTIQUE",
      ar: "بوتيك حلويات فاخرة",
    },
    heroTitle: {
      en: "Luxury Homemade Arabic Sweets",
      ar: "حلويات عربية منزلية فاخرة",
    },
    heroDescription: {
      en: "Handmade Arabic sweets beautifully presented for gifts, gatherings, and special occasions. Order directly on WhatsApp.",
      ar: "حلويات عربية منزلية تُقدم بشكل أنيق للهدايا والتجمعات والمناسبات الخاصة. اطلب مباشرة عبر واتساب.",
    },
    orderNow: {
      en: "Order via WhatsApp",
      ar: "اطلب عبر واتساب",
    },
    viewInstagram: {
      en: "View Instagram",
      ar: "عرض إنستغرام",
    },
    signatureTitle: {
      en: "Our Signature Collection",
      ar: "تشكيلتنا المميزة",
    },
    signatureDescription: {
      en: "A curated selection of premium homemade sweets crafted for elegant gifting and memorable gatherings.",
      ar: "تشكيلة مختارة من الحلويات المنزلية الفاخرة، مثالية للهدايا والتقديم الراقي.",
    },
    viewOptions: {
      en: "View Options",
      ar: "عرض الخيارات",
    },
    finalTitle: {
      en: "Follow Our Sweet Creations",
      ar: "تابعوا إبداعاتنا الحلوة",
    },
    finalDescription: {
      en: "Explore our latest handmade Arabic sweets, gift boxes, and elegant dessert presentations on Instagram.",
      ar: "اكتشفوا أحدث الحلويات العربية المنزلية، بوكسات الضيافة، وتنسيقات التقديم الأنيقة على إنستغرام.",
    },
    finalButton: {
      en: "Follow us on Instagram",
      ar: "تابعنا على إنستغرام",
    },
    footerText: {
      en: "Homemade with care for every occasion",
      ar: "محضرة بعناية لكل مناسبة",
    },
    selectOption: {
      en: "Select Option",
      ar: "اختر الخيار",
    },
    chooseFlavor: {
      en: "Choose Flavor",
      ar: "اختر النكهة",
    },
    quantity: {
      en: "Quantity",
      ar: "الكمية",
    },
    giftOptions: {
      en: "Gift Options",
      ar: "خيارات إضافية",
    },
    specialNotes: {
      en: "Special Notes",
      ar: "ملاحظات خاصة",
    },
    specialNotesPlaceholder: {
      en: "Write your notes here",
      ar: "اكتب ملاحظاتك هنا",
    },
    totalPrice: {
      en: "Total Price",
      ar: "السعر الإجمالي",
    },
    priceConfirmedAfterOrder: {
      en: "Price will be confirmed after order.",
      ar: "سيتم تأكيد السعر بعد الطلب.",
    },
    sendOrder: {
      en: "Send Order on WhatsApp",
      ar: "إرسال الطلب على واتساب",
    },
    close: {
      en: "Close",
      ar: "إغلاق",
    },
    closeTop: {
      en: "Close popup",
      ar: "إغلاق النافذة",
    },
    flavorRequired: {
      en: "Please choose at least one flavor for Mini Mabrousha.",
      ar: "يرجى اختيار نكهة واحدة على الأقل لميني مبروشة.",
    },
  };

  function openProductSheet(product: Product) {
    setSelectedProductId(product.id);
    setSelectedOptionId(product.options[0]?.id ?? "");
    setSelectedFlavors([]);
    setQuantity(1);
    setSelectedGiftOptionIds([]);
    setSpecialNotes("");
  }

  function closeProductSheet() {
    setSelectedProductId(null);
    setSelectedOptionId("");
    setSelectedFlavors([]);
    setQuantity(1);
    setSelectedGiftOptionIds([]);
    setSpecialNotes("");
  }

  function toggleFlavor(flavorId: string) {
    setSelectedFlavors((prev) =>
      prev.includes(flavorId) ? prev.filter((id) => id !== flavorId) : [...prev, flavorId]
    );
  }

  function toggleGiftOption(giftId: string) {
    setSelectedGiftOptionIds((prev) =>
      prev.includes(giftId) ? prev.filter((id) => id !== giftId) : [...prev, giftId]
    );
  }

  function buildWhatsAppMessage() {
    if (!selectedProduct || !selectedOption) {
      return "";
    }

    if (selectedProduct.hasFlavorSelector && selectedFlavors.length === 0) {
      alert(isArabic ? text.flavorRequired.ar : text.flavorRequired.en);
      return "";
    }

    const lines: string[] = [];

    if (isArabic) {
      lines.push("مرحباً،");
      lines.push("");
      lines.push("أرغب في الطلب:");
    } else {
      lines.push("Hello,");
      lines.push("");
      lines.push("I would like to order:");
    }

    lines.push("");

    lines.push(
      isArabic
        ? `المنتج: ${selectedProduct.title.ar}`
        : `Product: ${selectedProduct.title.en}`
    );

    lines.push(
      isArabic
        ? `الخيار: ${selectedOption.labelAr}`
        : `Option: ${selectedOption.labelEn}`
    );

    lines.push(
      isArabic
        ? `الكمية: ${quantity}`
        : `Quantity: ${quantity}`
    );

    if (selectedProduct.hasFlavorSelector && selectedFlavorObjects.length > 0) {
      lines.push(
        isArabic
          ? `النكهات: ${selectedFlavorObjects.map((flavor) => flavor.labelAr).join("، ")}`
          : `Flavors: ${selectedFlavorObjects.map((flavor) => flavor.labelEn).join(", ")}`
      );
    }

    if (selectedGiftOptions.length > 0) {
      lines.push(
        isArabic
          ? `الإضافات: ${selectedGiftOptions.map((gift) => gift.labelAr).join("، ")}`
          : `Gift options: ${selectedGiftOptions.map((gift) => gift.labelEn).join(", ")}`
      );
    }

    if (specialNotes.trim()) {
      lines.push(
        isArabic
          ? `ملاحظات: ${specialNotes.trim()}`
          : `Notes: ${specialNotes.trim()}`
      );
    }

    lines.push("");

    lines.push(
      isArabic
        ? `الإجمالي: ${
            totalPrice !== null
              ? formatAED(totalPrice, true)
              : text.priceConfirmedAfterOrder.ar
          }`
        : `Total: ${
            totalPrice !== null
              ? formatAED(totalPrice, false)
              : text.priceConfirmedAfterOrder.en
          }`
    );

    lines.push("");
    lines.push(isArabic ? "شكراً لكم." : "Thank you.");

    return lines.join("\n");
  }

  function addToBasket() {
  if (!selectedProduct || !selectedOption) {
    return;
  }

  if (selectedProduct.hasFlavorSelector && selectedFlavors.length === 0) {
    alert(isArabic ? text.flavorRequired.ar : text.flavorRequired.en);
    return;
  }

  const newItem: BasketItem = {
    id: `${selectedProduct.id}-${Date.now()}`,
    productNameEn: selectedProduct.title.en,
    productNameAr: selectedProduct.title.ar,
    optionEn: selectedOption.labelEn,
    optionAr: selectedOption.labelAr,
    quantity,
    flavorsEn: selectedFlavorObjects.map((flavor) => flavor.labelEn),
    flavorsAr: selectedFlavorObjects.map((flavor) => flavor.labelAr),
    giftsEn: selectedGiftOptions.map((gift) => gift.labelEn),
    giftsAr: selectedGiftOptions.map((gift) => gift.labelAr),
    notes: specialNotes.trim(),
    totalPrice,
  };

  setBasketItems((prev) => [...prev, newItem]);
  closeProductSheet();
  setIsBasketOpen(true);
}

function removeBasketItem(itemId: string) {
  setBasketItems((prev) => prev.filter((item) => item.id !== itemId));
}

function sendBasketOrder() {
  if (basketItems.length === 0) {
    return;
  }

  const lines: string[] = [];

  if (isArabic) {
    lines.push("مرحباً،");
    lines.push("");
    lines.push("أرغب في طلب المنتجات التالية:");
  } else {
    lines.push("Hello,");
    lines.push("");
    lines.push("I would like to order the following items:");
  }

  lines.push("");

  basketItems.forEach((item, index) => {
    lines.push(isArabic ? `الطلب رقم ${toArabicDigits(index + 1)}:` : `Item ${index + 1}:`);
    lines.push(isArabic ? `المنتج: ${item.productNameAr}` : `Product: ${item.productNameEn}`);
    lines.push(isArabic ? `الخيار: ${item.optionAr}` : `Option: ${item.optionEn}`);
    lines.push(isArabic ? `الكمية: ${toArabicDigits(item.quantity)}` : `Quantity: ${item.quantity}`);

    if (item.flavorsAr.length > 0) {
      lines.push(
        isArabic
          ? `النكهات: ${item.flavorsAr.join("، ")}`
          : `Flavors: ${item.flavorsEn.join(", ")}`
      );
    }

    if (item.giftsAr.length > 0) {
      lines.push(
        isArabic
          ? `الإضافات: ${item.giftsAr.join("، ")}`
          : `Gift options: ${item.giftsEn.join(", ")}`
      );
    }

    if (item.notes) {
      lines.push(isArabic ? `ملاحظات: ${item.notes}` : `Notes: ${item.notes}`);
    }

    lines.push(
      isArabic
        ? `السعر: ${
            item.totalPrice !== null
              ? formatAED(item.totalPrice, true)
              : text.priceConfirmedAfterOrder.ar
          }`
        : `Price: ${
            item.totalPrice !== null
              ? formatAED(item.totalPrice, false)
              : text.priceConfirmedAfterOrder.en
          }`
    );

    lines.push("");
  });

  const knownTotal = basketItems
    .filter((item) => item.totalPrice !== null)
    .reduce((sum, item) => sum + (item.totalPrice ?? 0), 0);

  lines.push(
    isArabic
      ? `الإجمالي التقريبي: ${formatAED(knownTotal, true)}`
      : `Estimated total: ${formatAED(knownTotal, false)}`
  );

  lines.push("");
  lines.push(isArabic ? "شكراً لكم." : "Thank you.");

  const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
  

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#e9e5e1",
        color: "#6b5143",
        direction: isArabic ? "rtl" : "ltr",
        fontFamily: 'Arial, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <style>{`
        body.no-scroll {
          overflow: hidden;
        }

        .page-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px 16px 56px;
        }

        .lang-wrap {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 16px;
        }

        .lang-switch {
          display: flex;
          align-items: center;
          background: #f4f1ed;
          border: 1px solid #ddd4ca;
          border-radius: 999px;
          padding: 4px;
          gap: 4px;
          box-shadow: 0 4px 14px rgba(90, 70, 55, 0.08);
        }

        .lang-btn {
          min-width: 84px;
          height: 44px;
          padding: 0 20px;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          font-size: 18px;
          font-weight: 600;
          font-family: inherit;
          transition: all 0.25s ease;
        }

        .lang-btn.active {
          background: #6b5143;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(107, 81, 67, 0.18);
        }

        .lang-btn.inactive {
          background: transparent;
          color: #6b5143;
        }

        .hero {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          padding-top: 4px;
        }

        .hero-logo {
          width: 420px;
          height: 420px;
          object-fit: contain;
          display: block;
          margin: 0 auto 30px;
        }

        .brand-line {
          font-size: 14px;
          color: #c79f61;
          margin-bottom: 18px;
          font-weight: 600;
        }

        .brand-line.en {
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: clamp(2.4rem, 5vw, 4.3rem);
          line-height: 1.12;
          margin: 0 0 16px;
          font-weight: 700;
          color: #6b5143;
        }

        .hero-title.ar {
          font-size: clamp(2.2rem, 4.8vw, 4rem);
        }

        .hero-description {
          max-width: 860px;
          margin: 0 auto;
          font-size: clamp(1rem, 2vw, 1.08rem);
          line-height: 1.85;
          color: #a27f61;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .btn-primary,
        .btn-secondary {
          min-width: 210px;
          text-align: center;
          padding: 16px 24px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          display: inline-block;
        }

        .btn-primary {
          background: #25d366;
          color: #ffffff;
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.18);
        }

        .btn-secondary {
          background: #ffffff;
          color: #6b5143;
          border: 1px solid #dfd5ca;
          box-shadow: 0 6px 14px rgba(90, 70, 55, 0.06);
        }

        .divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin: 40px auto 34px;
        }

        .divider-line {
          width: 80px;
          height: 1px;
          background: #d6b07a;
        }

        .divider-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #d6b07a;
        }

        .section-intro {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 24px;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.1rem);
          line-height: 1.14;
          margin: 0 0 12px;
          font-weight: 700;
          color: #6b5143;
        }

        .section-description {
          margin: 0 auto;
          max-width: 860px;
          font-size: clamp(0.98rem, 2vw, 1.05rem);
          line-height: 1.85;
          color: #a27f61;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-top: 24px;
        }

        .product-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 14px 14px 16px;
          box-shadow: 0 10px 24px rgba(90, 70, 55, 0.08);
          border: 1px solid #eee5dc;
          display: flex;
          flex-direction: column;
        }

        .product-image-wrap {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 12px;
          background: #f7f3ef;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .product-title {
          margin: 0 0 10px;
          font-size: 1.05rem;
          line-height: 1.25;
          font-weight: 700;
          text-align: center;
          color: #6b5143;
          min-height: 40px;
        }

        .product-description {
          margin: 0 0 10px;
          font-size: 0.9rem;
          line-height: 1.75;
          color: #8f735d;
          text-align: center;
          flex-grow: 1;
        }

        .product-note {
          margin: 0 0 12px;
          font-size: 0.82rem;
          line-height: 1.6;
          color: #c79f61;
          text-align: center;
        }

        .product-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .product-btn,
        .product-link {
          width: 100%;
          padding: 12px 14px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.9rem;
          text-align: center;
        }

        .product-btn {
          border: 1px solid #ddd4ca;
          background: #f7f3ef;
          color: #6b5143;
          cursor: pointer;
        }

        .product-link {
          background: #25d366;
          color: #ffffff;
          text-decoration: none;
          box-shadow: 0 8px 18px rgba(37, 211, 102, 0.16);
          display: inline-block;
        }

        .final-section {
          margin-top: 50px;
          background: #6b5143;
          color: #ffffff;
          border-radius: 28px;
          padding: 38px 24px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        .final-title {
          margin: 0 0 14px;
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          line-height: 1.2;
          font-weight: 700;
          color: #ffffff;
        }

        .final-description {
          margin: 0 auto 22px;
          max-width: 760px;
          font-size: 1rem;
          line-height: 1.85;
          color: #f3e7db;
        }

        .final-button {
          display: inline-block;
          padding: 16px 28px;
          border-radius: 999px;
          background: #ffffff;
          color: #6b5143;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
        }

        .site-footer {
          padding: 12px 20px 28px;
          text-align: center;
          color: #9a7c63;
          font-size: 0.95rem;
        }

        .sheet-overlay {
          position: fixed;
          inset: 0;
          background: rgba(29, 20, 14, 0.42);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 9999;
          padding: 0;
          overscroll-behavior: contain;
        }

        .sheet-panel {
          width: 100%;
          max-width: 720px;
          background: #fffaf5;
          border-top-left-radius: 28px;
          border-top-right-radius: 28px;
          box-shadow: 0 -12px 40px rgba(0, 0, 0, 0.16);
          max-height: 92vh;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          padding: 14px 18px 22px;
          animation: sheetUp 0.22s ease-out;
          position: relative;
        }

        .sheet-close {
          position: absolute;
          top: 14px;
          z-index: 10;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #decfbe;
          background: #ffffff;
          color: #6b5143;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
          transition: 0.2s ease;
        }

        .sheet-close:hover {
          background: #f6efe8;
        }

        .sheet-close.en {
          left: 14px;
        }

        .sheet-close.ar {
          right: 14px;
        }

        @keyframes sheetUp {
          from {
            transform: translateY(24px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .sheet-handle {
          width: 54px;
          height: 6px;
          border-radius: 999px;
          background: #dccfc2;
          margin: 0 auto 14px;
        }

        .sheet-image-wrap {
          width: 100%;
          max-width: 320px;
          margin: 0 auto 16px;
          border-radius: 22px;
          overflow: hidden;
          background: #f6f1ea;
          aspect-ratio: 1 / 1;
        }

        .sheet-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .sheet-title {
          margin: 0 0 10px;
          text-align: center;
          font-size: 1.6rem;
          line-height: 1.2;
          color: #6b5143;
          font-weight: 700;
        }

        .sheet-description {
          margin: 0 auto 18px;
          max-width: 560px;
          text-align: center;
          font-size: 0.98rem;
          line-height: 1.75;
          color: #8f735d;
        }

        .sheet-section {
          margin-bottom: 18px;
        }

        .sheet-section-title {
          margin: 0 0 10px;
          font-size: 0.98rem;
          line-height: 1.2;
          color: #6b5143;
          font-weight: 700;
        }

        .option-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .option-card {
          border: 1px solid #e5d8cb;
          background: #fff;
          color: #6b5143;
          border-radius: 18px;
          padding: 14px 12px;
          text-align: center;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
          box-shadow: 0 4px 12px rgba(90, 70, 55, 0.04);
        }

        .option-card.active {
          border-color: #6b5143;
          background: #f6efe8;
          box-shadow: 0 8px 18px rgba(90, 70, 55, 0.12);
        }

        .flavor-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .flavor-card {
          border: 1px solid #eaded2;
          background: #fffdfb;
          border-radius: 20px;
          padding: 12px 10px;
          text-align: center;
          cursor: pointer;
          transition: 0.2s ease;
          box-shadow: 0 6px 16px rgba(90, 70, 55, 0.05);
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .flavor-card.active {
          border-color: #6b5143;
          background: #f7efe6;
          box-shadow: 0 10px 20px rgba(90, 70, 55, 0.12);
        }

        .flavor-image {
          width: 72px;
          height: 72px;
          object-fit: cover;
          border-radius: 14px;
          display: block;
          margin-bottom: 8px;
        }

        .flavor-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: #6b5143;
        }

        .flavor-check {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #6b5143;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .quantity-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .qty-btn {
          width: 42px;
          height: 42px;
          border-radius: 999px;
          border: 1px solid #d8c8ba;
          background: #fff;
          color: #6b5143;
          font-size: 1.3rem;
          font-weight: 700;
          cursor: pointer;
        }

        .qty-value {
          min-width: 42px;
          text-align: center;
          font-size: 1.05rem;
          font-weight: 700;
          color: #6b5143;
        }

        .gift-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .gift-item {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #eaded2;
          background: #fff;
          padding: 12px 14px;
          border-radius: 16px;
          cursor: pointer;
        }

        .gift-checkbox {
          width: 18px;
          height: 18px;
          accent-color: #6b5143;
          flex-shrink: 0;
        }

        .gift-label {
          font-size: 0.95rem;
          color: #6b5143;
          line-height: 1.5;
        }

        .notes-input {
          width: 100%;
          min-height: 96px;
          border-radius: 16px;
          border: 1px solid #decfbe;
          background: #fff;
          padding: 14px;
          font: inherit;
          color: #6b5143;
          resize: vertical;
          outline: none;
        }

        .total-box {
          background: #f7efe6;
          border: 1px solid #eadbcc;
          border-radius: 18px;
          padding: 14px 16px;
          text-align: center;
        }

        .total-label {
          font-size: 0.9rem;
          color: #8f735d;
          margin-bottom: 6px;
        }

        .total-value {
          font-size: 1.3rem;
          font-weight: 800;
          color: #6b5143;
        }

        .sheet-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 8px;
        }

        .sheet-primary,
        .sheet-secondary {
          border: none;
          border-radius: 999px;
          padding: 15px 16px;
          font-size: 0.96rem;
          font-weight: 700;
          cursor: pointer;
        }

        .sheet-primary {
          background: #25d366;
          color: #ffffff;
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.18);
        }

        .sheet-secondary {
          background: #ffffff;
          color: #6b5143;
          border: 1px solid #decfbe;
        }

        @media (max-width: 1199px) {
          .products-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 1024px) {
          .hero-logo {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 767px) {
          .page-wrap {
            padding: 8px 8px 34px;
          }

          .lang-wrap {
            justify-content: center;
            margin-bottom: 12px;
          }

          .lang-btn {
            min-width: 86px;
            height: 44px;
            font-size: 16px;
            padding: 0 14px;
          }

          .hero-logo {
            width: 240px;
            height: 240px;
            margin-bottom: 18px;
          }

          .brand-line {
            font-size: 12px;
            margin-bottom: 12px;
          }

          .brand-line.en {
            letter-spacing: 0.14em;
          }

          .hero-title {
            font-size: 2.15rem;
            margin-bottom: 12px;
          }

          .hero-title.ar {
            font-size: 2.05rem;
          }

          .hero-description {
            font-size: 0.94rem;
            line-height: 1.8;
            max-width: 96%;
          }

          .hero-buttons {
            gap: 10px;
            margin-top: 18px;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 250px;
            min-width: 0;
            padding: 13px 18px;
            font-size: 0.92rem;
          }

          .divider {
            margin: 26px auto 22px;
            gap: 12px;
          }

          .divider-line {
            width: 52px;
          }

          .divider-dot {
            width: 11px;
            height: 11px;
          }

          .section-title {
            font-size: 1.9rem;
            margin-bottom: 10px;
          }

          .section-description {
            font-size: 0.92rem;
            max-width: 96%;
          }

          .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            margin-top: 18px;
          }

          .product-card {
            padding: 9px 9px 11px;
            border-radius: 16px;
          }

          .product-image-wrap {
            border-radius: 12px;
            margin-bottom: 8px;
          }

          .product-title {
            font-size: 0.86rem;
            min-height: 32px;
            margin-bottom: 6px;
          }

          .product-description {
            font-size: 0.68rem;
            line-height: 1.5;
            margin-bottom: 6px;
          }

          .product-note {
            font-size: 0.64rem;
            margin-bottom: 8px;
          }

          .product-actions {
            gap: 6px;
          }

          .product-btn,
          .product-link {
            padding: 9px 8px;
            font-size: 0.68rem;
          }

          .final-section {
            margin-top: 26px;
            padding: 26px 14px;
            border-radius: 20px;
          }

          .final-title {
            font-size: 1.45rem;
            margin-bottom: 10px;
          }

          .final-description {
            font-size: 0.9rem;
            line-height: 1.75;
            margin-bottom: 16px;
          }

          .final-button {
            width: 100%;
            max-width: 240px;
            padding: 13px 16px;
            font-size: 0.92rem;
          }

          .site-footer {
            font-size: 0.8rem;
            padding-bottom: 18px;
          }

          .sheet-panel {
            max-width: 100%;
            border-top-left-radius: 24px;
            border-top-right-radius: 24px;
            padding: 12px 12px 18px;
          }

          .sheet-close {
            top: 12px;
            width: 38px;
            height: 38px;
            font-size: 24px;
          }

          .sheet-close.en {
            left: 12px;
          }

          .sheet-close.ar {
            right: 12px;
          }

          .sheet-image-wrap {
            max-width: 230px;
            margin-bottom: 14px;
          }

          .sheet-title {
            font-size: 1.35rem;
          }

          .sheet-description {
            font-size: 0.9rem;
            margin-bottom: 14px;
          }

          .option-grid {
            grid-template-columns: 1fr;
          }

          .flavor-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 8px;
          }

          .flavor-card {
            padding: 10px 8px;
            border-radius: 16px;
          }

          .flavor-image {
            width: 56px;
            height: 56px;
            margin-bottom: 6px;
            border-radius: 12px;
          }

          .flavor-name {
            font-size: 0.8rem;
          }

          .sheet-buttons {
            grid-template-columns: 1fr;
          }

          .sheet-primary,
          .sheet-secondary {
            width: 100%;
          }
        }
      `}</style>

      <section className="page-wrap">
        <div className="lang-wrap">
          <div className="lang-switch">
            <button
              onClick={() => setLanguage("ar")}
              className={`lang-btn ${language === "ar" ? "active" : "inactive"}`}
              aria-label="Switch to Arabic"
              type="button"
            >
              عربي
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`lang-btn ${language === "en" ? "active" : "inactive"}`}
              aria-label="Switch to English"
              type="button"
            >
              English
            </button>
          </div>
        </div>

        <div className="hero">
          <img src="/Logo.png" alt="Atom of Sugar" className="hero-logo" />

          <div className={`brand-line ${isArabic ? "ar" : "en"}`}>
            {isArabic ? text.brandLine.ar : text.brandLine.en}
          </div>

          <h1 className={`hero-title ${isArabic ? "ar" : ""}`}>
            {isArabic ? text.heroTitle.ar : text.heroTitle.en}
          </h1>

          <p className="hero-description">
            {isArabic ? text.heroDescription.ar : text.heroDescription.en}
          </p>

          <div className="hero-buttons">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {isArabic ? text.orderNow.ar : text.orderNow.en}
            </a>

            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {isArabic ? text.viewInstagram.ar : text.viewInstagram.en}
            </a>
          </div>

          <div className="divider">
            <span className="divider-line" />
            <span className="divider-dot" />
            <span className="divider-line" />
          </div>
        </div>

        <div className="section-intro">
          <h2 className="section-title">
            {isArabic ? text.signatureTitle.ar : text.signatureTitle.en}
          </h2>

          <p className="section-description">
            {isArabic ? text.signatureDescription.ar : text.signatureDescription.en}
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img
                  src={product.image}
                  alt={isArabic ? product.title.ar : product.title.en}
                  className="product-image"
                />
              </div>

              <h3 className="product-title">
                {isArabic ? product.title.ar : product.title.en}
              </h3>

              <p className="product-description">
                {isArabic ? product.description.ar : product.description.en}
              </p>

              <p className="product-note">
                {isArabic ? product.note.ar : product.note.en}
              </p>

              <div className="product-actions">
                <button
                  type="button"
                  className="product-btn"
                  onClick={() => openProductSheet(product)}
                >
                  {isArabic ? text.viewOptions.ar : text.viewOptions.en}
                </button>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-link"
                >
                  {isArabic ? text.orderNow.ar : text.orderNow.en}
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="final-section">
          <h2 className="final-title">
            {isArabic ? text.finalTitle.ar : text.finalTitle.en}
          </h2>

          <p className="final-description">
            {isArabic ? text.finalDescription.ar : text.finalDescription.en}
          </p>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="final-button"
          >
            {isArabic ? text.finalButton.ar : text.finalButton.en}
          </a>
        </section>
      </section>

<div
  onClick={() => setIsBasketOpen(true)}
  style={{
    position: "fixed",
    bottom: "24px",
    right: isArabic ? "24px" : "24px",
    zIndex: 9999,
    background: "#25d366",
    color: "#fff",
    borderRadius: "999px",
    padding: "14px 20px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <span>🛒</span>

  <span>
    {isArabic
      ? `السلة (${toArabicDigits(basketItems.length)})`
      : `Basket (${basketItems.length})`}
  </span>
</div>

      <footer className="site-footer">
        {isArabic ? text.footerText.ar : text.footerText.en}
      </footer>

{isBasketOpen && (
  <div
    className="sheet-overlay"
    onClick={() => setIsBasketOpen(false)}
  >
    <div
      className="sheet-panel"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className={`sheet-close ${isArabic ? "ar" : "en"}`}
        onClick={() => setIsBasketOpen(false)}
      >
        ×
      </button>

      <div className="sheet-handle" />

      <h2 className="sheet-title">
        {isArabic ? "سلة الطلبات" : "Your Basket"}
      </h2>

      {basketItems.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "#8f735d",
            marginTop: "20px",
          }}
        >
          {isArabic
            ? "لا توجد منتجات في السلة"
            : "Your basket is empty"}
        </p>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {basketItems.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "#fff",
                  border: "1px solid #eaded2",
                  borderRadius: "18px",
                  padding: "14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    gap: "10px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#6b5143",
                        marginBottom: "6px",
                      }}
                    >
                      {isArabic
                        ? item.productNameAr
                        : item.productNameEn}
                    </div>

                    <div style={{ color: "#8f735d", fontSize: "14px" }}>
                      {isArabic
                        ? item.optionAr
                        : item.optionEn}
                    </div>

                    <div
                      style={{
                        color: "#8f735d",
                        fontSize: "14px",
                        marginTop: "4px",
                      }}
                    >
                      {isArabic
                        ? `الكمية: ${toArabicDigits(item.quantity)}`
                        : `Quantity: ${item.quantity}`}
                    </div>
                  </div>

                  <button
                    onClick={() => removeBasketItem(item.id)}
                    style={{
                      border: "none",
                      background: "#ffeded",
                      color: "#c0392b",
                      borderRadius: "999px",
                      padding: "8px 12px",
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "18px" }}>
            <button
              type="button"
              className="sheet-primary"
              onClick={sendBasketOrder}
              style={{ width: "100%" }}
            >
              {isArabic
                ? "إرسال الطلب عبر واتساب"
                : "Send Order on WhatsApp"}
            </button>
          </div>
        </>
      )}
    </div>
  </div>
)}

      {selectedProduct && (
        <div
          className="sheet-overlay"
          onClick={closeProductSheet}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="sheet-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={`sheet-close ${isArabic ? "ar" : "en"}`}
              onClick={closeProductSheet}
              aria-label={isArabic ? text.closeTop.ar : text.closeTop.en}
            >
              ×
            </button>

            <div className="sheet-handle" />

            <div className="sheet-image-wrap">
              <img
                src={selectedProduct.image}
                alt={isArabic ? selectedProduct.title.ar : selectedProduct.title.en}
                className="sheet-image"
              />
            </div>

            <h3 className="sheet-title">
              {isArabic ? selectedProduct.title.ar : selectedProduct.title.en}
            </h3>

            <p className="sheet-description">
              {isArabic ? selectedProduct.description.ar : selectedProduct.description.en}
            </p>

            <div className="sheet-section">
              <p className="sheet-section-title">
                {isArabic ? text.selectOption.ar : text.selectOption.en}
              </p>

              <div className="option-grid">
                {selectedProduct.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`option-card ${selectedOptionId === option.id ? "active" : ""}`}
                    onClick={() => setSelectedOptionId(option.id)}
                  >
                    {isArabic ? option.labelAr : option.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {selectedProduct.hasFlavorSelector && (
              <div className="sheet-section">
                <p className="sheet-section-title">
                  {isArabic ? text.chooseFlavor.ar : text.chooseFlavor.en}
                </p>

                <div className="flavor-grid">
                  {flavorOptions.map((flavor) => {
                    const active = selectedFlavors.includes(flavor.id);

                    return (
                      <button
                        key={flavor.id}
                        type="button"
                        className={`flavor-card ${active ? "active" : ""}`}
                        onClick={() => toggleFlavor(flavor.id)}
                      >
                        {active && <span className="flavor-check">✓</span>}
                        <img
                          src={flavor.image}
                          alt={isArabic ? flavor.labelAr : flavor.labelEn}
                          className="flavor-image"
                        />
                        <span className="flavor-name">
                          {isArabic ? flavor.labelAr : flavor.labelEn}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="sheet-section">
              <p className="sheet-section-title">
                {isArabic ? text.quantity.ar : text.quantity.en}
              </p>

              <div className="quantity-row">
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>

                <div className="qty-value">{quantity}</div>

                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="sheet-section">
              <p className="sheet-section-title">
                {isArabic ? text.giftOptions.ar : text.giftOptions.en}
              </p>

              <div className="gift-list">
                {giftOptions.map((gift) => (
                  <label key={gift.id} className="gift-item">
                    <input
                      type="checkbox"
                      className="gift-checkbox"
                      checked={selectedGiftOptionIds.includes(gift.id)}
                      onChange={() => toggleGiftOption(gift.id)}
                    />
                    <span className="gift-label">
                      {isArabic ? gift.labelAr : gift.labelEn}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="sheet-section">
              <p className="sheet-section-title">
                {isArabic ? text.specialNotes.ar : text.specialNotes.en}
              </p>

              <textarea
                className="notes-input"
                placeholder={
                  isArabic
                    ? text.specialNotesPlaceholder.ar
                    : text.specialNotesPlaceholder.en
                }
                value={specialNotes}
                onChange={(event) => setSpecialNotes(event.target.value)}
              />
            </div>

            <div className="sheet-section">
              <div className="total-box">
                <div className="total-label">
                  {isArabic ? text.totalPrice.ar : text.totalPrice.en}
                </div>

                <div className="total-value">
                  {totalPrice !== null
                    ? formatAED(totalPrice, isArabic)
                    : isArabic
                    ? text.priceConfirmedAfterOrder.ar
                    : text.priceConfirmedAfterOrder.en}
                </div>
              </div>
            </div>

            <div className="sheet-buttons">
              <button
                type="button"
                className="sheet-primary"
                onClick={addToBasket}
              >
                {isArabic ? "أضف إلى سلة الطلبات" : "Add to Basket"}
              </button>

              <button
                type="button"
                className="sheet-secondary"
                onClick={closeProductSheet}
              >
                {isArabic ? text.close.ar : text.close.en}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}