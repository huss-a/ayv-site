import { StaffList } from "../types/StaffList";

const staffMembers: StaffList = {
  seniorManagement: [
    {
      name: "Hussain Aqeel",
      role: "Founder & Chief Operations Officer",
      desc:
        "Hi! I'm Hussain! I'm from the country of India, but I live in Kuwait, I'm the COO & Founder of Finnair Virtual! I aim to be as friendly, kind and welcoming as possible to everyone! Feel free to drop me a PM on the IFC @Hardlanding_hussain If you wanna know anything about AYVA, wanna have a chat, or have me escort you! (TS & CS only) This was some basic info about me, if you've got any questions, ya know what to do!",
      ifcName: "Hardlanding_Hussain",
      location: "Kuwait",
      social: {
        yt: "https://youtube.com/channel/UC0gReEDa4RwNAWfDvjtg6sw",
        gh: "https://github.com/huss-a",
      },
    },
    {
      name: "Gabriel Karpovas",
      role: "Chief Executive Officer",
      desc:
        "Hi there! I am Gabriel, but you probably know me as GBKarp. I am an aviation enthusiast, and I want to become a pilot. I am the CEO, so I may be the person who runs the VA behind the scenes! In addition, I am an events manager, so our first thread of our next event was probably made by me and the other Events Managers. This VA is amazing, and I’ve loved to be here since the day I joined. Everyone is really cool, and we have a diversity of partners so we have a lot of route options! AYVA is one of the best VAs in existence, and you won’t regret applying!",
      ifcName: "GBKarp",
      location: "Brazil",
      social: {
        yt: "https://youtube.com/channel/UCfOmgUsAMiiDMSrmX9K9J7w",
        ig: "https://instagram.com/gbkarp_aviation/",
        gh: "https://github.com/GBKarp",
      },
    },
    {
      name: "Jacob Cline",
      role: "Chief Operations Officer",
      desc:
        "Hi, I’m Jacob and I’m the COO at Finnair Virtual. I’m a big avgeek and have hopes of being a commercial pilot one day! Some facts about me are: I’m currently working towards my PPL, I live in the United States, and the first time I ever went on a plane was when I was about 5 months old! If you have any questions regarding this VA or just any questions in general, feel free to contact me @That_Guy14!",
      ifcName: "That_guy14",
      location: "United States",
      social: {
        ig: "https://instagram.com/that_guy_over_yonder/",
      },
    },
  ],

  juniorManagement: [
    {
      name: "William Crane",
      role: "Mentor & Flight Supervisor",
      desc:
        "Hi! I am William, I am from the UK and joined AYVA in August 2020. I am the flight supervisor here at AYVA which means I will review any flights you have submitted for approval. Irl I am working towards my PPL and I love to do water-sports in my free time. AYVA is a great VA so definitely apply and remember you can always PM me with questions. Bye!",
      ifcName: "airbus7447skyhawk",
      location: "United Kingdom",
      social: {
        ig: "https://instagram.com/wcrane001/",
      },
    },
    {
      name: "Aftab Nadaf",
      role: "Routes Manager & Events Manager",
      desc:
        "Hi! I am Aftab Nadaf and born in Bangalore and live in Dubai, I recently joined the AYVA, I am the Routes Manager for AYVA which is to with great routes for the week and adding more normal flying routes so our pilots can fly to many places with great experience, I do a lot of sports and I respect and relate to everyone as they are my friends, Feel free to email me at aftabnadaf957@gmail.com, Do visit my Channel Emirates CaptainAftab, Please join AYVA, its a great journey in AYVA!",
      ifcName: "ECOFRIENDLY_TIME",
      location: "United Arab Emirates",
      social: {
        yt: "https://youtube.com/channel/UCDeirxl0-YT-yh_veHJ0KOA",
      },
    },
    {
      name: "Erick Adorno",
      role: "Events Manager",
      desc: "Hi! I am Erick I am 17 years old I am located at New Jersey or new KEWR I part of the AYVA or the (Finnair VA) I am also part of the ACVA (Air Canada VA) I am Staff at the AYVA and my staff position Events manager also with the callsign AYVA 128 but what I basically do is create Events for the AYVA but stay in mind that when I am creating The events I need to stay Creative because with the creative mind takes you to the beyond of awesomeness",
      ifcName: "infinite7779x",
      location: "United States",
      social: {
        yt: "https://youtube.com/channel/UCXBgQbexInz4QVJgSOnMcVQ",
      },
    },
    {
      name: "Ari Aaltonen",
      role: "Flight Supervisor",
      desc: "Hey! I am Ari and I’ve been in the VA since autumn 2020 as a pilot and as Flight Supervisor since May 2021. My background consist of many years of work experience in Airline business in the Nordic market. I've been flying in IF about 2 years now and enjoy the like-minded community at IFC and Finnair Virtual. I also appreciate how the simulator has evolved during these years. I try to fly every day even a short hop from the Helsinki base, but most likely you will find me flying the evening hours or weekends inbound or outbound EFHK. Keeping my Grade 5 now is one of my challenges. Looking forward to fly together with you.",
      ifcName: "Pilot_Aaltonen",
      location: "Finland",
    },
  ],
};

staffMembers.seniorManagement.forEach(
  (mem) => (mem.id = mem.name.toLowerCase().split(" ").join("-"))
);

staffMembers.juniorManagement.forEach(
  (mem) => (mem.id = mem.name.toLowerCase().split(" ").join("-"))
);

export default staffMembers;
