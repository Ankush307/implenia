interface StoriesItem {
    image: string;
    title: string;
    cardBoxClass: string;
    boxContent: string;
}
interface CommunityItem {
    heading: string;
    profile: string;
    post: string;
    name: string;
}
interface FaqItem {
    title: string;
    description: string;
}
interface FooterItem {
    title: string;
    link: string;
}


export const HEADER_LIST = [
    {
        title: "Home",
        link: "#home",
    },
    {
        title: "Stories",
        link: "#stories",
    },
    {
        title: "Community",
        link: "#community",
    },
    {
        title: "Contact",
        link: "#contact",
    },

];
export const KICKBOX_LIST = [
    {
        description: "Ideas submitted",
    },
    {
        description: "Active Platform users",
    },
    {
        description: "Community Members",
    }
];
export const KICKBOX_PROCESS_LIST = [
    {
        image: "/assets/images/webp/red-kickbox.webp",
        imageAlt: "red-kickbox",
        subTitle: "Validate",
        title: "RedBox",
        description:
            "You’ve taken the first step -welcome to the RedBox phase! In this phase, you’ll validate your idea and test its business potential. The RedBox concludes with you pitching your idea to internal sponsors to secure funding for the BlueBox phase.",
        boxDuration: "Duration: 2 months",
        budget: "Start Budget: 700 CHF/EUR 20% of your working time",
    },
    {
        image: "/assets/images/webp/blue-kickbox.webp",
        imageAlt: "blue-kickbox",
        subTitle: "Pilot",
        title: "BlueBox",
        description:
            "This phase begins once you’ve secured a sponsor. Here, you’ll test your pilot with real customers, gather insights, and make improvements. Upon successful testing, you’ll receive support to secure a sponsor for the final implementation phase.",
        boxDuration: "Duration: 4-6 months",
        budget: "Budget: According to funding 20% of  your working time",
    },
    {
        image: "/assets/images/webp/yellow-kickbox.webp",
        imageAlt: "yellow-kickbox",
        subTitle: "Implement",
        title: "GoldBox",
        description:
            "Once you've proven that your idea has real business potential, you'll move to the GoldBox phase. Congratulations! This is your opportunity to scale and implement your idea within the organization, as a separate project, or even as a spin-off.",
        boxDuration: "Duration: ongoing",
        budget: "Budget: According to funding 20-100% of your working time",
    },
];

export const COMMUNITY_LIST: CommunityItem[] = [
    {
        heading:
            "With innovative and efficient solutions we can surprise our customers and increase our chances of success - I experienced this in many projects. Take the time to be courageous and active with new ideas!",
        profile: "/assets/images/png/profile-image.png",
        post: "Head Division Buildings",
        name: "Jens Vollmar",
    },
    {
        heading:
            "With innovative and efficient solutions we can surprise our customers and increase our chances of success - I experienced this in many projects. Take the time to be courageous and active with new ideas!",
        profile: "/assets/images/png/profile-image.png",
        post: "Head Division Buildings",
        name: "Jens Vollmar",
    },
    {
        heading:
            "With innovative and efficient solutions we can surprise our customers and increase our chances of success - I experienced this in many projects. Take the time to be courageous and active with new ideas!",
        profile: "/assets/images/png/profile-image.png",
        post: "Head Division Buildings",
        name: "Jens Vollmar",
    },
];

export const STORIES_LIST: StoriesItem[] = [
    {
        image: "/assets/images/png/friends-gameplay.png",
        title: "Family Friendly Implenia",
        cardBoxClass: "bg-lightBlue",
        boxContent: "BlueBox",
    },
    {
        image: "/assets/images/png/mobile-sos.png",
        title: "Mobile SOS-Station",
        cardBoxClass: "bg-orange",
        boxContent: "GoldBox",
    },
    {
        image: "/assets/images/png/tunnel.png",
        title: "HPS-EPS Tunnelelement",
        cardBoxClass: "bg-orange",
        boxContent: "GoldBox",
    },
];

export const FAQ_LIST: FaqItem[] = [
    {
        title: "What kind of ideas can I submit?",
        description:
            "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
    },
    {
        title: "Can we also start the RedBox as a team?",
        description:
            "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
    },
    {
        title:
            "I have a good idea for the company, but I do not want to work on it myself, can I still submit?",
        description:
            "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
    },
    {
        title: "When can I submit my idea?",
        description:
            "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
    },
    {
        title: "When do I get my RedBox?",
        description:
            "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
    },
    {
        title: "How do I get a BlueBox?",
        description:
            "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
    },
    {
        title: "How do I get a GoldBox?",
        description:
            "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
    },
];
export const FOOTER_LIST: FooterItem[] = [
    {
        title: "Home",
        link: "#hero",
    },
    {
        title: "Projects",
        link: "#projects",
    },
    {
        title: "Community",
        link: "#community",
    },
    {
        title: "Contact",
        link: "#contact",
    },
];
