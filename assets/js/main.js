// header element related
let headerElement = document.querySelector(".header-banner");
//creating element title for header
let h1Header = document.createElement("h1");
h1Header.innerHTML = headerData.headerTitle;
headerElement.appendChild(h1Header);
// creating element paragraph for header
let pParagraph = document.createElement("p");
pParagraph.innerHTML = headerData.paragraph
headerElement.appendChild(pParagraph);

// about me related
let aboutElement = document.getElementById("aboutme");
// creating aboutme title
let aboutTitle = document.createElement("h1");
aboutTitle.innerHTML = aboutData.title;
aboutElement.appendChild(aboutTitle)
// creating aboutme paragraph 1
let aboutPara1 = document.createElement("p");
aboutPara1.innerHTML = aboutData.paragraph1
aboutElement.appendChild(aboutPara1);
// creating aboutme paragraph 2
let aboutPara2 = document.createElement("p");
aboutPara2.innerHTML = aboutData.paragraph2;
aboutElement.appendChild(aboutPara2);

// skillset related
let skillElement = document.querySelector("#skillset")
// creating skillset header
let skillHeader = document.createElement("h1");
skillHeader.innerHTML = skillData.title;
skillElement.appendChild(skillHeader);
let skillsetDiv = document.createElement("div");
skillsetDiv.setAttribute("id", "skillset-section");
skillElement.appendChild(skillsetDiv);
// skill list related
let skillSection;
for(let i in skillData.skillList){
  // console.log(skillData.skillList[i].name);
  skillSection = document.createElement("section");
  let skillImg = document.createElement("img");
  let skillPara = document.createElement("p");
  skillImg.setAttribute("src", "./assets/images/" + skillData.skillList[i].icon + ".png");
  skillImg.setAttribute("alt", skillData.skillList[i].icon + "icon");
  skillPara.innerHTML = skillData.skillList[i].name
  skillSection.appendChild(skillImg);
  skillSection.appendChild(skillPara);
  skillsetDiv.appendChild(skillSection);
}

// aside related
let asideElement = document.querySelector("aside");
// creating title
let profileTitle = document.createElement("h1");
profileTitle.innerHTML = profileData.title;
asideElement.appendChild(profileTitle);
// creating profile img
let profileImg = document.createElement("img");
profileImg.setAttribute("src", "./assets/images/" + profileData.image + ".jpg");
asideElement.appendChild(profileImg);
// creating paragraph 1
let profilePara1 = document.createElement("p");
profilePara1.innerHTML = "name : " + profileData.name;
asideElement.appendChild(profilePara1);
// creating paragraph 2
let profilePara2 = document.createElement("p");
profilePara2.innerHTML = "city : " + profileData.city;
asideElement.appendChild(profilePara2);
// creating paragraph 3
let profilePara3 = document.createElement("p");
profilePara3.innerHTML = "birth date : " + profileData.birthdate;
asideElement.appendChild(profilePara3);
// creating loop for links
let profileLinks = document.createElement("section");
profileLinks.setAttribute("id", "link-section");
asideElement.appendChild(profileLinks);
for(let i in profileData.links) {
  let linkA = document.createElement("a");
  linkA.setAttribute("href", profileData.links[i].link);
  linkA.setAttribute("target", "_blank");
  let imgA = document.createElement("img");
  imgA.setAttribute("src", "./assets/images/icon-" + profileData.links[i].name + ".png")
  linkA.appendChild(imgA);
  profileLinks.appendChild(linkA)
}