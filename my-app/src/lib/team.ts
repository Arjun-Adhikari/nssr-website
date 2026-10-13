import type { TeamTab } from "./types";

/**
 * Port of the tabbed member markup in `team.html`. The original switched
 * between `.team-tab-content` panels with a DOM listener in
 * `assets/js/pages/team.js`; those panels are now driven by React state.
 */
export const teamTabs: TeamTab[] = [
  {
    id: "leadership",
    label: "Leadership",
    heading: "Team",
    blurb: "",
    members: [
      {
        name: "Manish Pandey",
        role: "President/Founder",
        affiliation: "Physics, St. Xavier's College",
        image: "/assets/images/pp/manish_pandey.jpg",
        linkedin: "https://www.linkedin.com/in/manish-pandey-24864m/",
        email: "mailto:manish24864pandey@gmail.com",
      },
      {
        name: "Sudiksha Bhattarai",
        role: "Vice President/Founder",
        affiliation: "Microbiology, Tri-Chandra Multiple Campus",
        image: "/assets/images/pp/sudiksha.jpg",
        linkedin: "https://www.linkedin.com/in/sudiksha-bhattarai-035191231/",
        email: "mailto:bhattaraisudiksha1@gmail.com",
      },
      {
        name: "Om Jha",
        role: "Treasurer",
        affiliation: "Physics, St. Xavier's College",
        image: "/assets/images/pp/om jha.jpg",
        linkedin: "https://www.linkedin.com/in/om-jha-1913b6279/",
        email: "mailto:omzha24680@gmail.com",
      },
      {
        name: "Sugyani Bishwokarma",
        role: "Secretary",
        affiliation: "Physics, Tri-Chandra Multiple Campus",
        image: "/assets/images/pp/Sugyani.jpg",
        linkedin: "https://www.linkedin.com/in/sugyani-biswokarma-9566102b7/",
        email: "mailto:biswokarmasugyani62@gmail.com",
      },
      {
        name: "Shaleen Kumar Dhital",
        role: "Research Head/Founder",
        affiliation: "Physics, Tri-Chandra Multiple Campus",
        image: "/assets/images/pp/Shaleen.jpg",
        linkedin: "https://www.linkedin.com/in/shaleen-dhital-097636255/",
        email: "mailto:dronadhital@gmail.com",
      },
      {
        name: "Dhirendra Prasad Upadhyay",
        role: "Event Head",
        affiliation: "Physics, Tri-Chandra Multiple Campus",
        image: "/assets/images/pp/Dhirendra.jpg",
        linkedin:
          "https://www.linkedin.com/in/dhirendra-prasad-upadhyay-311a28316/",
        email: "mailto:dhirendraup07@gmail.com",
      },
      {
        name: "Dikshya Sharma",
        role: "HR Manager",
        affiliation: "Physics, Tri-Chandra Multiple Campus",
        image: "/assets/images/pp/Dikshya_sharma.jpg",
        linkedin: "https://www.linkedin.com/in/dikshyasharma2004/",
        email: "mailto:Kandeldikshya398@gmail.com",
      },
    ],
  },
  {
    id: "advisory",
    label: "Advisory Board",
    heading: "Advisory Board",
    blurb: "",
    members: [
      {
        name: "Prof. Dr. Hari Prasad Lamichhane",
        role: "Advisor",
        affiliation: "Central Department of Physics, Tribhuvan University",
        image: "/assets/images/pp/hari_p_lamichhane.jpeg",
      },
      {
        name: "Prof. Dr. Raju Bhai Tyata",
        role: "Advisor",
        affiliation: "R & D unit Head, Khwopa College of Engineering",
        image: "/assets/images/profdr.jpeg",
      },
      {
        name: "Prof. Dr. Rameshwar Adhikari",
        role: "Advisor",
        affiliation:
          "Central Department of Chemistry, Tribhuvan University",
        image: "/assets/images/pp/rameshwar.jpeg",
      },
      {
        name: "Asst. Prof. Dr. Arjun Acharya",
        role: "Advisor",
        affiliation:
          "Tri-Chandra Multiple Campus, Tribhuvan University",
        image: "/assets/images/pp/AA.webp",
      },
      {
        name: "Asst. Prof. Dr. Basu Dev Ghimire",
        role: "Advisor",
        affiliation: "Head of Department, Physics, St.Xavier's College",
        image: "/assets/images/pp/bdg.png",
      },
      {
        name: "Asst. Prof. Dr. Bishnu Hari Subedi",
        role: "Advisor",
        affiliation:
          "Central Department of Mathematics, Tribhuvan University",
        image: "/assets/images/pp/bishnu.webp",
      },
      {
        name: "Asst. Prof. Dr. Drabindra Pandit",
        role: "Advisor",
        affiliation: "Head of Research, St.Xavier's College",
        image: "/assets/images/pp/DP.png",
      },
      {
        name: "Asst. Prof. Dr. Sanju Shrestha",
        role: "Advisor",
        affiliation: "Central Department of Physics, Tribhuvan University",
        image: "/assets/images/pp/sanju_shrestha.jpg",
      },
      {
        name: "Dr. Manoj Kumar Yadav",
        role: "Advisor",
        affiliation: "Rajarshi Janak University, Janakpurdham, Nepal",
        image: "/assets/images/pp/Manoj_Kumar_Yadav.webp",
      },
    ],
  },
  {
    id: "representatives",
    label: "College Representatives",
    heading: "College Representatives",
    blurb: "",
    members: [
      {
        name: "Dhurbaraj Singh",
        role: "College Representative",
        affiliation: "Graduate School of Engineering, Mid-West University",
        image: "/assets/images/college_representative/dhruv.jpeg",
      },
      {
        name: "Bikash Kadayat",
        role: "College Representative",
        affiliation: "Tech AI College, Kathmandu",
        image: "/assets/images/college_representative/bikash.jpeg",
      },
      {
        name: "Raunak Regmi",
        role: "College Representative",
        affiliation: "Sunway College Kathmandu",
        image: "/assets/images/college_representative/raunak.jpeg",
      },
      {
        name: "Puja Bhatt",
        role: "College Representative",
        affiliation: "Brixton College, Mahendranagar",
        image: "/assets/images/college_representative/puja.jpeg",
      },
    ],
  },
];