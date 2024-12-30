export type MenuItems = {
  title: string;
  path: string;
};

export type MenuChild = {
  title: string;
  menuList: MenuItems[];
};

export type MenuProps = {
  name: string;
  collapsable: boolean;
  path: string;
  children: MenuChild[];
};

export const menus: MenuProps[] = [
  {
    name: "Restaurants",
    collapsable: true,
    path: "",
    children: [
      {
        title: "Types",
        menuList: [
          { title: "All restaurants solutions", path: "" },
          { title: "Quick service", path: "" },
          { title: "Full service", path: "" },
          { title: "Coffee shops", path: "" },
          { title: "Fast casual", path: "" },
          { title: "Bars & breweries", path: "" },
          { title: "Ghost kitchens", path: "" },
          { title: "Caterers", path: "" },
          { title: "Large businesses", path: "" },
          { title: "Franchises", path: "" },
        ],
      },
      {
        title: "Products",
        menuList: [
          { title: "Restaurants POS", path: "" },
          { title: "Square Point of Sale", path: "" },
          { title: "Hardware", path: "" },
          { title: "KDS", path: "" },
          { title: "Kiosk", path: "" },
          { title: "Online ordering", path: "" },
          { title: "Marketing", path: "" },
          { title: "Loyalty programs", path: "" },
          { title: "Gift cards", path: "" },
          { title: "Staff & payroll", path: "" },
          { title: "Banking", path: "" },
          { title: "Payments", path: "" },
          { title: "Invoices", path: "" },
          { title: "Integrations", path: "" },
        ],
      },
      {
        title: "Explore",
        menuList: [
          { title: "Restaurants pricing", path: "" },
          { title: "Quick service solution demo", path: "" },
          { title: "Full service solution demo", path: "" },
          { title: "Contact sales", path: "" },
          { title: "Switch to Square", path: "" },
          { title: "The Bottom Line", path: "" },
          { title: "Why Square", path: "" },
          { title: "Referrals", path: "" },
          { title: "Testimonials", path: "" },
        ],
      },
      {
        title: "Featured",
        menuList: [
          {
            title: "The Future of Restaurants Report: 2024 Edition",
            path: "",
          },
        ],
      },
    ],
  },

  {
    name: "Retail",
    collapsable: true,
    path: "",
    children: [
      {
        title: "Types",
        menuList: [
          { title: "All retail solutions", path: "" },
          { title: "Clothing & accessories", path: "" },
          { title: "Grocery & convenience", path: "" },
          { title: "Home goods & furniture", path: "" },
          { title: "Wine & liquor", path: "" },
          { title: "CBD retail", path: "" },
          { title: "Large businesses", path: "" },
          { title: "Franchises", path: "" },
        ],
      },
      {
        title: "Products",
        menuList: [
          { title: "Retail POS", path: "" },
          { title: "Hardware", path: "" },
          { title: "Online store", path: "" },
          { title: "Staff", path: "" },
          { title: "Payroll", path: "" },
          { title: "Marketing", path: "" },
          { title: "Loyalty programs", path: "" },
          { title: "Gift cards", path: "" },
          { title: "Invoices", path: "" },
          { title: "Banking", path: "" },
        ],
      },
      {
        title: "Explore",
        menuList: [
          { title: "Retail pricing", path: "" },
          { title: "Contact sales", path: "" },
          { title: "Switch to Square", path: "" },
          { title: "The Bottom Line", path: "" },
          { title: "Why Square", path: "" },
          { title: "Referrals", path: "" },
          { title: "Testimonials", path: "" },
        ],
      },
      {
        title: "Featured",
        menuList: [
          {
            title: "The Future of Retail Report: 2024 Edition",
            path: "",
          },
          {
            title: "A Crash Course in Inventory and Supply Chain",
            path: "",
          },
        ],
      },
    ],
  },

  {
    name: "Beauty",
    collapsable: true,
    path: "/",
    children: [
      {
        title: "Types",
        menuList: [
          {
            title: "All Beauty Solutions",
            path: "/all-beauty-solutions",
          },
          {
            title: "Beauty Salon",
            path: "/beauty-salon",
          },
          {
            title: "Nail Salon",
            path: "/nail-salon",
          },
          {
            title: "Hair Salon",
            path: "/hair-salon",
          },
          {
            title: "Day Spa",
            path: "/day-spa",
          },
          {
            title: "Barbershop",
            path: "/barbershop",
          },
          {
            title: "Tattoo & Piercing",
            path: "/tattoo-piercing",
          },
          {
            title: "Med Spa",
            path: "/med-spa",
          },
          {
            title: "Large Businesses",
            path: "/large-businesses",
          },
        ],
      },
      {
        title: "Products",
        menuList: [
          {
            title: "Appointments & POS",
            path: "/appointments-pos",
          },
          {
            title: "Hardware",
            path: "/hardware",
          },
          {
            title: "Invoices",
            path: "/invoices",
          },
          {
            title: "Online Store",
            path: "/online-store",
          },
          {
            title: "Payment Links",
            path: "/payment-links",
          },
          {
            title: "Staff",
            path: "/staff",
          },
          {
            title: "Payroll",
            path: "/payroll",
          },
          {
            title: "Banking",
            path: "/banking",
          },
          {
            title: "Marketing",
            path: "/marketing",
          },
          {
            title: "Messages",
            path: "/messages",
          },
          {
            title: "Integrations",
            path: "/integrations",
          },
        ],
      },
      {
        title: "Explore",
        menuList: [
          {
            title: "Beauty Pricing",
            path: "/beauty-pricing",
          },
          {
            title: "Contact Sales",
            path: "/contact-sales",
          },
          {
            title: "Switch to Square",
            path: "/switch-to-square",
          },
          {
            title: "The Bottom Line",
            path: "/the-bottom-line",
          },
          {
            title: "Why Square",
            path: "/why-square",
          },
          {
            title: "Referrals",
            path: "/referrals",
          },
          {
            title: "Testimonials",
            path: "/testimonials",
          },
        ],
      },
      {
        title: "Featured",
        menuList: [
          {
            title: "The Future of Customers Report: 2024 Edition",
            path: "/future-of-customers-report",
          },
          {
            title: "The Tools That Helped This Salon Achieve Massive Growth",
            path: "/tools-for-salon-growth",
          },
        ],
      },
    ],
  },

  {
    name: "Services",
    collapsable: true,
    path: "/",
    children: [
      {
        title: "Types",
        menuList: [
          {
            title: "Professional Services",
            path: "/professional-services",
          },
          {
            title: "Health & Fitness",
            path: "/health-fitness",
          },
          {
            title: "Home & Repair",
            path: "/home-repair",
          },
          {
            title: "Automotive",
            path: "/automotive",
          },
          {
            title: "Cleaning",
            path: "/cleaning",
          },
          {
            title: "Contractors",
            path: "/contractors",
          },
          {
            title: "Landscapers",
            path: "/landscapers",
          },
          {
            title: "Transportation",
            path: "/transportation",
          },
          {
            title: "Group Recreation",
            path: "/group-recreation",
          },
          {
            title: "Pet Services",
            path: "/pet-services",
          },
          {
            title: "Caterers",
            path: "/caterers",
          },
          {
            title: "Large Businesses",
            path: "/large-businesses",
          },
        ],
      },
      {
        title: "Products",
        menuList: [
          {
            title: "Appointments & POS",
            path: "/appointments-pos",
          },
          {
            title: "Hardware",
            path: "/hardware",
          },
          {
            title: "Invoices",
            path: "/invoices",
          },
          {
            title: "Online Store",
            path: "/online-store",
          },
          {
            title: "Payment Links",
            path: "/payment-links",
          },
          {
            title: "Staff & Payroll",
            path: "/staff-payroll",
          },
          {
            title: "Banking",
            path: "/banking",
          },
          {
            title: "Marketing",
            path: "/marketing",
          },
          {
            title: "Messages",
            path: "/messages",
          },
          {
            title: "Integrations",
            path: "/integrations",
          },
        ],
      },
      {
        title: "Explore",
        menuList: [
          {
            title: "Service Pricing",
            path: "/service-pricing",
          },
          {
            title: "Contact Sales",
            path: "/contact-sales",
          },
          {
            title: "Switch to Square",
            path: "/switch-to-square",
          },
          {
            title: "The Bottom Line",
            path: "/the-bottom-line",
          },
          {
            title: "Why Square",
            path: "/why-square",
          },
          {
            title: "Referrals",
            path: "/referrals",
          },
          {
            title: "Testimonials",
            path: "/testimonials",
          },
        ],
      },
      {
        title: "Featured",
        menuList: [
          {
            title: "The Future of Commerce Report: 2024 Edition",
            path: "/future-of-commerce-report",
          },
          {
            title: "How to Choose an Online Booking System",
            path: "/how-to-choose-an-online-booking-system",
          },
        ],
      },
    ],
  },

  {
    name: "Products",
    collapsable: true,
    path: "/",
    children: [
      {
        title: "Commerce",
        menuList: [
          {
            title: "All commerce products",
            path: "/all-commerce-products",
          },
          {
            title: "Hardware",
            path: "/hardware",
          },
          {
            title: "Point of sale",
            path: "/point-of-sale",
          },
          {
            title: "Restaurants POS",
            path: "/restaurants-pos",
          },
          {
            title: "Retail POS",
            path: "/retail-pos",
          },
          {
            title: "Appointments POS",
            path: "/appointments-pos",
          },
          {
            title: "Invoices",
            path: "/invoices",
          },
          {
            title: "Online ordering",
            path: "/online-ordering",
          },
          {
            title: "Online store",
            path: "/online-store",
          },
          {
            title: "Payment links",
            path: "/payment-links",
          },
          {
            title: "Payments",
            path: "/payments",
          },
        ],
      },
      {
        title: "Customers",
        menuList: [
          {
            title: "All customer products",
            path: "/all-customer-products",
          },
          {
            title: "Marketing",
            path: "/marketing",
          },
          {
            title: "Messages",
            path: "/messages",
          },
          {
            title: "Loyalty programs",
            path: "/loyalty-programs",
          },
          {
            title: "Customer directory",
            path: "/customer-directory",
          },
          {
            title: "Gift cards",
            path: "/gift-cards",
          },
          {
            title: "Photo studio",
            path: "/photo-studio",
          },
          {
            title: "Marketplace",
            path: "/marketplace",
          },
          {
            title: "Contracts",
            path: "/contracts",
          },
        ],
      },
      {
        title: "Staff",
        menuList: [
          {
            title: "All staff products",
            path: "/all-staff-products",
          },
          {
            title: "Shifts",
            path: "/shifts",
          },
          {
            title: "Payroll",
            path: "/payroll",
          },
          {
            title: "Advanced access",
            path: "/advanced-access",
          },
          {
            title: "Team communication",
            path: "/team-communication",
          },
          {
            title: "HR experts",
            path: "/hr-experts",
          },
        ],
      },
      {
        title: "Banking",
        menuList: [
          {
            title: "All banking products",
            path: "/all-banking-products",
          },
          {
            title: "Checking",
            path: "/checking",
          },
          {
            title: "Savings",
            path: "/savings",
          },
          {
            title: "Loans",
            path: "/loans",
          },
          {
            title: "Credit card",
            path: "/credit-card",
          },
        ],
      },
      {
        title: "Developer",
        menuList: [
          {
            title: "Developer APIs",
            path: "/developer-apis",
          },
          {
            title: "All partner directories",
            path: "/all-partner-directories",
          },
          {
            title: "App marketplace",
            path: "/app-marketplace",
          },
          {
            title: "Specialists",
            path: "/specialists",
          },
          {
            title: "Partner offers",
            path: "/partner-offers",
          },
        ],
      },
      {
        title: "Featured",
        menuList: [
          {
            title: "Refer businesses you know",
            path: "/refer-businesses",
          },
        ],
      },
    ],
  },

  {
    name: "Pricing",
    collapsable: false,
    path: "/pricing",
    children: [
      {
        title: "",
        menuList: [
          {
            title: "",
            path: "",
          },
        ],
      },
    ],
  },
];

export const actionMenus: MenuProps[] = [
  {
    name: "Sign In",
    collapsable: false,
    path: "",
    children: [],
  },
  {
    name: "Support",
    collapsable: false,
    path: "",
    children: [],
  },
  {
    name: "Shop",
    collapsable: false,
    path: "",
    children: [],
  },
];
