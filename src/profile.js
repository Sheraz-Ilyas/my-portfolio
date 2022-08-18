const animation = {
	animate: false,
	duration: 750,
	once: false,
};

const header = {
	name: "Sheraz Ilyas",
};
const background = {
	type: "Snow",
};

const section2title = "About Me";
const about = {
	paragraph:
		"My name is Sheraz Ilyas and I am a Web Developer who loves to transform ideas into reality using code. With over two years of developing web applications using the latest front-end technologies and frameworks. Motivated web developer with experience creating custom websites with ReactJs and WordPress",
};

const skillsBar = [
	{
		name: "HTML5",
		svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
		faClass: "fab fa-html5",
	},
	{
		name: "CSS3",
		faClass: "fab fa-css3",
	},
	{
		name: "Javascript",
		faClass: "fab fa-js",
	},
	{
		name: "React",
		faClass: "fab fa-react",
	},

	{
		name: "WordPress",
		faClass: "fab fa-wordpress",
	},
	{
		name: "Node",
		faClass: "fab fa-node",
	},
];

const section3Title = "Past Projects";
const projects = [
	{
		id: "project1",
		name: "Todo app",
		skills: ["Html, Css, Js, React Js"],
		url: "https://github.com/Sheraz-Ilyas/todo-app",
	},
	{
		id: "project2",
		name: "Optimus Properties",
		skills: ["WordPress, Js, Css"],
		url: "https://theoptimus.ae/",
	},
	{
		id: "project3",
		name: "Restaurant app",
		skills: ["Html, Css, Js, React Js"],
		url: "https://github.com/Sheraz-Ilyas/restaurant-app-wt",
	},
];

const section4Title = "Find me on";
const miscellaneous = [
	{
		id: "misc1",
		name: "Fiver",
		url: "https://fiver.com/",
	},
	{
		id: "misc2",
		name: "Github",
		url: "https://github.com/Sheraz-Ilyas/",
	},
	{
		id: "misc3",
		name: "dribble",
		url: "https://dribbble.com/",
	},
];

const section5Title = "Get in Touch";
const contact = {
	pitch:
		"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email.",
	copyright: "Sheraz Ilyas",
	contactUrl: "",
};

const social = {
	github: "https://github.com/Sheraz-Ilyas/",
	instagram: "https://instagram.com",
	linkedin: "https://linkedin.com",
};
export {
	animation,
	header,
	background,
	about,
	skillsBar,
	projects,
	miscellaneous,
	contact,
	social,
	section2title,
	section3Title,
	section4Title,
	section5Title,
};
