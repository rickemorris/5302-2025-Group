import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import houston from "../assets/profile-pictures/houston.png";


export const navItems = [
  { label: "Pets Available", href: "#hero" },
  { label: "Ways to Help", href: "#help" },
  { label: "Donations", href: "#donate" },
  { label: "Testimonials", href: "#testimonial" },
];

export const testimonials = [
  {
    user: "Ethan Ramirez",
    company: "Houston SPCA",
    image: user1,
    text: "Adopting my dog was the best decision I ever made! He’s brought endless love, laughter, and purpose into my life.",
  },
  {
    user: "Lila Anderson",
    company: "Houston Humane Society",
    image: user2,
    text: "Bringing home my rescue dog completely changed my life! Her loyalty and affection remind me every day how rewarding adoption truly is.",
  },
  {
    user: "Caleb Morgan",
    company: "Special Pals",
    image: user3,
    text: "Adopting from the shelter was an incredible experience, and now I can’t imagine my life without the joy and companionship my dog brings every day.",
  },
  {
    user: "Ronee Robertson",
    company: "Citizens For Animal Protection",
    image: user4,
    text: "I walked into the shelter just looking, but walked out with a best friend who’s filled my life with love ever since.",
  },
  {
    user: "Ethan Wright",
    company: "Harris County Pets",
    image: user5,
    text: "Adopting a dog not only saved his life! It transformed mine with unconditional love and a bond I never expected.",
  },
  {
    user: "Sophia Kim",
    company: "Spring Branch Rescue",
    image: user6,
    text: "Choosing to adopt was the most heartwarming decision I’ve made—my dog’s wagging tail reminds me every day that love is rescued.",
  },
];

export const checklistItems = [
  {
    title: "Make a donation",
    description:
      "You can do so below!",
  },
  {
    title: "Wish List Items",
    description:
      "Check out our wish list. Shelters are always looking for new or gently used items!",
  },
  {
    title: "Host an Event",
    description:
      "Hosting an event to raise money and awareness.",
  },
  {
    title: "Volunteer",
    description:
      "Donating your time is always needed!",
  },
  {
    title: "Run or Walk",
    description:
      "There are many adoption shelters out there that raise money through marathons!",
  },
];

export const donateOptions = [
  {
    title: "Why Donate To",
    features: [
      "Helps provide food, medicine, and care for rescued animals",
      "Supports spay/neuter programs to reduce overpopulation",
      "Improves shelter facilities and living conditions",
      "Contributes to community",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://houstonspca.org/upcoming-events/", text: "Houston SPCA Events" },
  { href: "https://24petconnect.com/", text: "Lost Pet Search" },
  { href: "https://24petconnect.com/", text: "24Pet Connect Pet Adoptions " },
  { href: "https://www.houstonhumane.org/", text: "Houston Humane Society " },
  { href: "https://www.cap4pets.org/", text: "Citizens for Animal Protection" },
];

export const platformLinks = [
  { href: "https://www.paypal.com/donate/?hosted_button_id=PQF9QMC358X6U", text: "Rita B Huff Human Society of Walker County" },
  { href: "https://www.cap4pets.org/151-uncategorised/6352-donate", text: "Citizens for Animal Protection" },
  { href: "https://www.houstonpetsalive.org/donatenow/", text: "Houston Pets Alive Donations" },
  { href: "https://www.houstontx.gov/barc/donate_landingpage.html", text: "Houston BARC Donations" },
  { href: "https://www.houstonhumane.org/?form=GeneralDonation", text: "Houston Humane Society Donations" },
];

export const communityLinks = [
  { href: "https://www.houstontx.gov/barc/get_involved.html", text: "BARC Events" },
  { href: "https://www.houstonhumane.org/fundraisers/k9-fun-run-walk", text: "Houston Human Society Run" },
  { href: "https://houstoncaresrescue.org/adoption/#adoption_events", text: "Houston Cares Rescue Adoption Events" },
  { href: "https://www.houstonpetsalive.org/hpa-event/houston-puppy-adoption-event/", text: "Houston Pets Alive Adoption Event" },
  { href: "https://houstonspca.org/upcoming-events/", text: "Houston SPCA Events" },
];