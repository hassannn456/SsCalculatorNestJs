import WebDevelopmentImage from "/assets/images/services/WebDev.webp";
import WebDevExtraImage from "/assets/images/services/WebDevExtraImage.webp";
import webDevelopment from "/assets/images/webdevelopment.avif";
import WebDevExtraImage1 from "/assets/images/services/webExtraImage1.webp";

import MobileDevelopmentImage from "/assets/images/services/MobileAppDevelopment.webp";
import mobileDevelopment from "/assets/images/services/mobileDevelopment.webp";
import MobileDevExtraImage from "/assets/images/services/MobileDevImage2.webp";
import MobileDevExtraImage1 from "/assets/images/services/mobileExtraImage1.webp";

import UIHeaderImage from "/assets/images/services/UIHeaderImage.avif";
import UIDesignImage from "/assets/images/services/UIDesignImage.webp";
import UIDesignExtraImage from "/assets/images/services/UIDesignExtraImage.webp";
import UIDesignExtraImage1 from "/assets/images/services/UIExtraImage1.webp";

import BlockchainHeaderImage from "/assets/images/services/BlockchainHeaderImage.webp";
import BlockchainImage from "/assets/images/services/BlockchainImage.svg";
import BlockchainExtraImage from "/assets/images/services/BlockchainExtraImage.webp";
import BlockchainExtraImage1 from "/assets/images/services/blockchainExtraImage1.webp";

import SEO from "/assets/images/services/seo.avif";
import SEO1 from "/assets/images/services/seo1.webp";
import SEO2 from "/assets/images/services/seo2.webp";
import SEO3 from "/assets/images/services/seo3.svg";

import Content from "/assets/images/services/content.webp";
import Content1 from "/assets/images/services/content1.webp";
import Content2 from "/assets/images/services/content2.webp";
import Content3 from "/assets/images/services/content3.svg";

import Social from "/assets/images/services/social.webp";
import Social1 from "/assets/images/services/social1.webp";
import Social2 from "/assets/images/services/social2.webp";
import Social3 from "/assets/images/services/social3.svg";

import Email from "/assets/images/services/email.avif";
import Email1 from "/assets/images/services/email1.webp";
import Email2 from "/assets/images/services/email2.webp";
import Email3 from "/assets/images/services/email3.svg";

const servicesData = [
  {
    title: "Web Development",
    title1: "Innovative, Scalable Web Solutions",
    title2: "Future-Proof Web Experiences for Growth",
    title3: "Transforming Digital Presence with Custom Websites",
    slug: "web-development",
    description:
      "At Techietribe, our web development services transcend traditional websites, crafting immersive, next-gen web applications tailored to propel your business forward. We integrate advanced technologies like AI, machine learning, and cloud-native solutions into your site, ensuring scalability and unparalleled performance. Whether you're seeking responsive design, real-time functionalities, or custom APIs, we create future-proof web experiences that engage users and drive results.",
    headerImageSrc: webDevelopment,
    image: WebDevelopmentImage,
    extraDescription: [
      "Our web development approach centers on creating dynamic, responsive platforms that leverage cutting-edge frameworks such as React, Next.js, and Vue.js. We prioritize performance, security, and seamless integration with third-party tools, ensuring your website is equipped to meet both current and future demands.",
      "With Techietribe’s web solutions, your business transforms its online presence into a scalable, user-friendly platform capable of driving conversions, improving user engagement, and streamlining operations. Our expert team delivers a strategic blend of innovation and practicality, empowering your digital growth.",
    ],
    extraImage: WebDevExtraImage,
    extraImage1: WebDevExtraImage1,
    scaleOne: 1.5,
    scaleTwo: 1.3,
    scaleThree: 1.2,
  },
  {
    title: "Mobile Application Development",
    title1: "Next-Gen Mobile Solutions",
    title2: "Seamless User Experiences Across Devices",
    title3: "Empowering Businesses with Mobile Innovation",
    slug: "mobile-application",
    description:
      "In today’s mobile-first world, Techietribe excels at developing apps that deliver seamless user experiences across platforms. We specialize in both native iOS and Android development as well as cross-platform solutions using Flutter and React Native, ensuring your app performs flawlessly on any device. From social networking apps to enterprise-level platforms, we turn your vision into sleek, high-performance applications.",
    headerImageSrc: mobileDevelopment,
    image: MobileDevelopmentImage,
    extraDescription: [
      "We build mobile apps that harness the power of modern technologies like augmented reality (AR), artificial intelligence (AI), and IoT to create captivating user experiences. Whether you're looking for intuitive UX/UI design, seamless API integration, or robust data security, we provide a complete mobile development solution tailored to your needs.",
      "Your mobile app becomes more than just a digital tool—it’s an essential business asset. With Techietribe, you’ll launch a mobile application that enhances customer engagement, simplifies complex operations, and opens new opportunities for growth in today’s fast-paced digital ecosystem.",
    ],
    extraImage: MobileDevExtraImage,
    extraImage1: MobileDevExtraImage1,
    scaleOne: 1.1,
    scaleTwo: 1.1,
    scaleThree: 1.3,
  },
  {
    title: "UI/UX Design",
    title1: "Designing for Impact and Usability",
    title2: "Transforming User Journeys with Intuitive Designs",
    title3: "Creating Immersive and User-Centric Interfaces",
    slug: "ui-design",
    description:
      "At Techietribe, we believe great design goes beyond aesthetics—it's about creating intuitive, user-centric experiences. Our UI/UX design services ensure that every interaction with your digital product is seamless, visually engaging, and optimized for conversion. We blend creativity with data-driven insights to design interfaces that are both beautiful and functional.",
    headerImageSrc: UIHeaderImage,
    image: UIDesignImage,
    extraDescription: [
      "Our UI/UX design process is deeply rooted in user research, wireframing, and prototyping, allowing us to create intuitive designs that are not only visually appealing but also enhance usability. We utilize the latest design tools like Figma, Sketch, and Adobe XD to deliver modern, responsive designs that work across all platforms.",
      "With Techietribe, your digital interface transforms into a powerful tool that drives user satisfaction and engagement. We design experiences that resonate with your target audience, streamline navigation, and ultimately boost conversions and brand loyalty.",
    ],
    extraImage: UIDesignExtraImage,
    extraImage1: UIDesignExtraImage1,
    scaleOne: 1.2,
    scaleTwo: 1.1,
    scaleThree: 1.2,
  },
  {
    title: "Blockchain Development",
    title1: "Secure and Transparent Blockchain Solutions",
    title2: "Leveraging Decentralized Technology for Growth",
    title3: "Building Trust with Advanced Blockchain Technologies",
    slug: "blockchain",
    description:
      "Leverage the power of decentralized systems with Techietribe’s blockchain development services. We create secure, transparent, and efficient blockchain-based solutions tailored to your business goals. Whether it's smart contracts, decentralized applications (dApps), or custom blockchain integrations, we help you harness the full potential of this transformative technology.",
    headerImageSrc: BlockchainHeaderImage,
    image: BlockchainImage,
    extraDescription: [
      "Our blockchain solutions focus on enhancing data security, ensuring transparency, and automating business processes using smart contracts. We work with leading blockchain platforms such as Ethereum, Hyperledger, and Polkadot to deliver cutting-edge decentralized applications.",
      "With Techietribe, your business taps into the future of technology, gaining secure, scalable blockchain solutions that streamline operations and increase trust in your transactions. Our expertise ensures your blockchain initiatives are positioned for success in the ever-evolving digital landscape.",
    ],
    extraImage: BlockchainExtraImage,
    extraImage1: BlockchainExtraImage1,
    scaleOne: 2.2,
    scaleTwo: 1.3,
    scaleThree: 1.4,
  },
  {
    title: "Search Engine Optimization (SEO)",
    title1: "Data-Driven SEO Strategies for Success",
    title2: "Maximizing Visibility with Strategic SEO",
    title3: "Improving Search Rankings with Proven Techniques",
    slug: "seo",
    description:
      "Stay ahead of the competition with Techietribe’s advanced SEO services. Our data-driven approach to search engine optimization helps businesses rank higher on Google and other search engines, driving organic traffic and conversions. We optimize your site architecture, content, and backlinks to ensure long-term growth and online visibility.",
    headerImageSrc: SEO,
    image: SEO1,
    extraDescription: [
      "From local SEO to enterprise-level solutions, we use a full spectrum of SEO strategies, including technical SEO, content optimization, and link building, to help your site perform better in search rankings. Our team also provides regular reports and analytics so you can measure your success and refine strategies over time.",
      "Techietribe’s SEO services help your website achieve top rankings, bringing more organic traffic and improving your online authority. Our tailored SEO plans focus on maximizing your visibility and ensuring sustainable, long-term success in search engine results.",
    ],
    extraImage: SEO2,
    extraImage1: SEO3,
    scaleOne: 1.1,
    scaleTwo: 0.8,
    scaleThree: 2.3,
  },
  {
    title: "Content Marketing",
    title1: "Crafting High-Impact Content",
    title2: "Engaging Audiences with Targeted Content",
    title3: "Driving Brand Authority Through Compelling Content",
    slug: "content-marketing",
    description:
      "Techietribe’s content marketing services help businesses create, distribute, and optimize engaging content that resonates with their audience. From blog posts to video content, we craft high-quality, targeted content that boosts brand visibility, drives traffic, and enhances customer engagement across multiple platforms.",
    headerImageSrc: Content,
    image: Content1,
    extraDescription: [
      "Our content marketing strategies are designed to tell your brand’s story in a way that captivates and converts. Whether it's long-form blog posts, social media content, or video marketing, we create compelling narratives that build trust and loyalty while supporting your overall digital marketing efforts.",
      "With Techietribe’s content marketing, your brand will gain increased recognition, a stronger digital presence, and meaningful connections with your audience. We ensure that every piece of content is optimized for maximum visibility, engagement, and conversion potential.",
    ],
    extraImage: Content2,
    extraImage1: Content3,
    scaleOne: 1.4,
    scaleTwo: 0.9,
    scaleThree: 2,
  },
  {
    title: "Social Media Marketing",
    title1: "Building Connections Through Social Media",
    title2: "Driving Engagement with Data-Driven Social Strategies",
    title3: "Amplifying Your Brand Across Social Channels",
    slug: "social-media",
    description:
      "In today’s digital world, a strong social media presence is essential. At Techietribe, we provide social media marketing services that help you build brand awareness, engage your audience, and drive conversions. From strategy development to content creation and analytics, we manage all aspects of your social media to ensure success across platforms.",
    headerImageSrc: Social,
    image: Social1,
    extraDescription: [
      "We specialize in creating engaging social media campaigns that resonate with your audience. By utilizing platforms like Instagram, Facebook, LinkedIn, and Twitter, we help you reach new customers, foster brand loyalty, and achieve measurable growth. Our team stays on top of trends to keep your social media strategy fresh and effective.",
      "With Techietribe’s social media expertise, your business gains a consistent and impactful presence across all major platforms, fostering real connections with your target audience. Our strategies are data-driven, ensuring continuous improvement and maximum ROI on every post and campaign.",
    ],
    extraImage: Social2,
    extraImage1: Social3,
    scaleOne: 1.2,
    scaleTwo: 1,
    scaleThree: 2.2,
  },
  {
    title: "Email Marketing",
    title1: "Personalized Email Campaigns for Conversion",
    title2: "Boosting Retention with Strategic Email Marketing",
    title3: "Engaging Customers Through Targeted Email Strategies",
    slug: "email-marketing",
    description:
      "Boost customer retention and conversion rates with Techietribe’s targeted email marketing services. We design and execute email campaigns that deliver personalized content directly to your audience’s inbox, increasing engagement and driving results. From newsletters to automated workflows, we craft email strategies that align with your business goals.",
    headerImageSrc: Email,
    image: Email1,
    extraDescription: [
      "Our email marketing strategies focus on building meaningful relationships with your audience. We create visually appealing emails with strong calls to action, using automation tools like MailChimp and HubSpot to streamline and optimize your campaigns for maximum impact.",
      "With Techietribe’s email marketing solutions, your business will experience improved engagement and higher conversion rates. Our tailored campaigns ensure that your messages reach the right audience at the right time, providing measurable results that support your overall marketing efforts.",
    ],
    extraImage: Email2,
    extraImage1: Email3,
    scaleOne: 0.9,
    scaleTwo: 1,
    scaleThree: 2.2,
  },
];


export default servicesData;
