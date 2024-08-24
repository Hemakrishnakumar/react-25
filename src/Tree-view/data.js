export const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/details",
        children: [
          {
            label: "Location",
            to: "/location",
            children: [
              {
                label: "City",
                to: "/",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/profile",
    children: [
      {
        label: "Account",
        to: "/details",
        children: [
          {
            label: "security",
            to: "/location",
          },
          {
            label: "Login",
            to: "/location",
          },
        ],
      },
    ],
  },
];
