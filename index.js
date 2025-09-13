  const languages = [
    { id: "Cantonese", label: "Cantonese", value: 100, level: "Proficient" },
    { id: "English", label: "English", value: 85, level: "Upper Intermediate" },
    { id: "Mandarin", label: "Mandarin", value: 85, level: "Upper Intermediate" }
  ];
  
  const projects = [
    {
      title: "CS2-Market-Finder",
      url: "https://github.com/antonlam/cs2-market-python",
      description: "",
      image: "Image/cs2-market-python.png",
      date: "2025-03-13"
    },
    {
      title: "Download Stock Market data without yfinance (Github)",
      url: "https://github.com/antonlam/Download-Ticker-Data-without-yfinance",
      description: "",
      image: "Image/stooqdata.png",
      date: "2024-07-20"
    },  {
        title: "Cup Grapping Robot Car",
        url: "",
        description: "Develop a robot car that grap all the the cups along a specific path",
        image: "Image/robot-car-grapper.png",
        date: "2024-09 to 2025-12"
    }, {
        title: "Smart Drink Mixer",
        url: "https://www.youtube.com/watch?v=nlkYOpffhoI&ab_channel=ANTONLAM",
        description: "Developed a beverage mixer for restaurant use, utilizing Arduino, 3D modeling and printing, and app development to enhance efficiency in beverage preparation.",
        image: "Image/smart-drink-mixer.png",
        date: "2022-12 to 2023-05"
    }, {
        title: "Hand Gesture Wheelchair",
        url: "",
        description: "Designed a wheelchair prototype implementing a hand gesture sensor to assist people with disabilities, utillizing Arduino, 3D modeling and printing.",
        image: "Image/hand-gesture-wheelchair.png",
        date: "2020-03 to 2020-12"
    }, {
        title: "Resultant Boot",
        url: "",
        description: "Designed a boot using biodegradable material, implementing 3D scanning, 3D modeling, 3D printing.",
        image: "Image/Resultant-boots.png",
        date: "2019-04 to 2019-05"
    }, {
        title: "Alcohol detection for vehicle",
        url: "",
        description: "Implemented an alcohol sensor to prevent drunk driving through Arduino, laser cutting.",
        image: "Image/arduino-alcohol-sensor.png",
        date: "2018-05 to 2018-06"
    }
  ];

  const skills = [
    { skill : "Python",level : "Proficient",value : 90},
    { skill: "HTML, CSS", level: "Upper Intermediate", value: 75 },
    { skill: "C", level: "Upper Intermediate", value: 75 },
    { skill: "Arduino IDE", level: "Upper Intermediate", value: 75 },
    { skill: "Fusion 360", level: "Upper Intermediate", value: 75 },
    { skill: "SolidWorks", level: "Upper Intermediate", value: 75 },
    { skill: "Blender", level: "Upper Intermediate", value: 75 },
    { skill: "C++", level: "Upper Intermediate", value: 75 },
    { skill: "Linux", level: "Intermediate", value: 65 },
    { skill: "Java", level: "Intermediate", value: 60 }
  ]
  
  const timeline = [
    { start: "Sep 2009", 
      end: "Jul 2015", 
      title: "Primary School", 
      Location: "Chung Sing School" 
    }, 
    
    { start: "Sep 2015", 
      end: "Jul 2021", 
      title: "Secondary School", 
      Location: "Heung To Middle School(Tin Shui Wai)" 
    }, 
    
    { start: "Sep 2021", 
      end: "Jul 2023", 
      title: "Associate of Engineering (Computer Science Theme)", 
      Location: "HKU SPACE Community College, CGPA: 3.54 / 4" 
    }, 
    
    { start: "Sep 2023", 
      end: "Jul 2026", 
      title: "Bachelor of Engineering: Electronic Engineering", 
      Location: "The Chinese University of Hong Kong, Major GPA: 3.404 / 4; CGPA: 3.165 / 4" 
    }
  ];

  const awards = [
    {
      date: "2025-09",
      title: "Gemini Certified Educator",
      bullets: [
        "Passed the exmination for the Google AI education"
      ],
      image : "Certificate/Gemini_certified_educator.jpg"
    },
    {
      date: "2025-09",
      title: "Certificate of Completion Google Cloud (Google)",
      bullets: [
        "Completed the following online courses and exams"
      ],
      image: "Certificate/Certificate of Completion Google Cloud.jpg"
    },
    {
      date: "2025-09",
      title: "Certificate of Completion Digital Marketing (Google)",
      bullets: [
        "Completed the following online courses and exams"
      ],
      image: "Certificate/Certificate of Completion Digital Marketing.jpg"
    },
    {
      date: "2025-08",
      title: "IELTS Exam Band: 6.5",
      bullets: [
        "Listening 6.5, Reading: 8.0, Writing: 6.0, Speaking 5.5"
      ],
      image : "Certificate/IELTS_202508.jpg"
    },
    {
      date: "2021-06",
      title: "AI 900 Microsoft Azure AI Fundamentals (Microsoft)",
      bullets: [
        "Passed the examination for the Azure AI program"
      ],
      image : "Certificate/AI900 Microsoft Azure AI Fundamentals.jpg"
    },
    {
      date: "2020-03",
      title: "World Mathematics Invitational - Bronze medal",
      bullets: [
        "Awarded the bronze medal in WMI competition"
      ],
      image : "Certificate/WMI2020.jpg"
    },
    {
      date: "2019-03",
      title: "World Mathematics Invitational - Gold medal",
      bullets: [
        "Awarded the gold medal in WMI competition"
      ],
      image : "Certificate/WMI2019.jpg"
    }
  ];
  
  const activities = [
    {
      date: "2023-03",
      title: "EH Academy - CIP Cyber Training",
      bullets: ["Learned cybersecurity knowledge and Linux"]
    },
    {
      date: "2021-06",
      title: "AI900 Microsoft Azure AI Fundamentals Course",
      bullets: ["Acquired foundational knowledge in AI field"]
    },
    {
      date: "2019-02",
      title: "HK ICT Award 2019: Student Innovation Award",
      bullets: ["Implemented IoT control light and ventilation system"]
    },
    {
      date: "2018-08",
      title: "Augmented Reality and Product Design",
      bullets: ["Learned and applied 3D Modeling and Printing technique"]
    },
    {
      date: "2018-05",
      title: "Beyond Robot Certificate Program",
      bullets: ["Acquired advanced knowledge in Arduino programming"]
    }
  ];
  
  const el = (tag, props = {}, ...children) => {
    const node = document.createElement(tag);
    Object.entries(props).forEach(([k, v]) => {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    });
    children.forEach(c => node.append(c));
    return node;
  };

  (function renderLanguages() {
    const list = document.getElementById("lang-list");
    languages.forEach(({ id, label, value, level }) => {
      const row = el("div", { class: "lang" },
        el("label", { for: `lang-${id}`, class: "lang-label", text: label }),
        el("meter", { id: `lang-${id}`, class: "lang-meter", min: "0", max: "100", value: String(value) }),
        el("span", { class: "lang-text", text: level })
      );
      list.append(row);
    });
  })();
  
  (function renderVerticalTimeline() {
    const list = document.getElementById('vt-list');
    if (!list || !Array.isArray(timeline) || timeline.length === 0) return;
  
    const items = [...timeline].sort((a, b) => String(b.start).localeCompare(String(a.start)));
    items.forEach(t => {
      const [uni, rest] = (t.Location || '').split(/,\s*/, 2); // "The Chinese University of Hong Kong", "Major GPA: …"
      const text = el('div', { class: 'vt-text' });
  
      text.append(
        el('b', { text: t.title }),
        document.createElement('br'),
        document.createTextNode(uni || ''),
        document.createElement('br'),
        document.createTextNode(rest ? rest : '')
      );
  
      const li = el('li', { class: 'vt-item' },
        el('div', { class: 'vt-year', html: `${t.end} - <br>${t.start}` }),
        el('div', { class: 'vt-icon' }),
        text
      );
      list.append(li);
    });
  })();
  

  (function renderSkills() {
    const list = document.getElementById("skill-list");
    if (!list || !Array.isArray(skills)) return;
    skills.forEach(({ skill, level, value }, index) => {
      const meterId = `skill-${index}`;
      const row = el("div", { class: "lang" },
        el("label", { for: meterId, class: "lang-label", text: skill }),
        el("meter", { id: meterId, class: "lang-meter", min: "0", max: "100", value: String(value) }),
        el("span", { class: "lang-text", text: level })
      );
      list.append(row);
    });
  })();
  
  (function renderProjects() {
    const grid = document.getElementById("projects");
    projects.forEach(p => {
      const hasUrl = Boolean(p.url && p.url.trim() !== "");
      const descriptionText = (p.description ?? "").trim();
      const mediaEl = hasUrl
        ? el("a", { class: "project-media", href: p.url, target: "_blank", rel: "noopener" },
            el("img", { src: p.image, alt: "Screenshot of project interface", loading: "lazy", width: "640", height: "360" })
          )
        : el("div", { class: "project-media" },
            el("img", { src: p.image, alt: "Screenshot of project interface", loading: "lazy", width: "640", height: "360" })
          );

      const titleEl = hasUrl
        ? el("a", { href: p.url, target: "_blank", rel: "noopener", text: p.title })
        : el("span", { text: p.title });

      const metaChildren = hasUrl
        ? [
            el("a", { class: "project-link", href: p.url, target: "_blank", rel: "noopener", text: "View project →" }),
            el("br"),
            el("span", { class: "container-time", text: p.date })
          ]
        : [ el("span", { class: "container-time", text: p.date }) ];

      const card = el("article", { class: "project-card" },
        mediaEl,
        el("div", { class: "project-body" },
          el("h3", { class: "project-title" }, titleEl),
          descriptionText ? el("p", { class: "project-desc", text: descriptionText }) : document.createTextNode(""),
          el("p", { class: "project-meta" }, ...metaChildren)
        )
      );
      grid.append(card);
    });
  })();
  
  // 6) Awards timeline
  (function renderAwards() {
    const root = document.getElementById("awards");
    awards.forEach(a => {
      const dateDiv = el("div", { class: "event-date" }, el("time", { datetime: a.date, text: a.date }));
      const bodyDiv = el("div", { class: "event-body" });
      const titleEl = el("h3", { class: "event-title", text: a.title });
      const pointsEl = el("ul", { class: "event-points" }, ...a.bullets.map(t => el("li", { text: t })));

      // Optional certificate image (hidden by default, toggled on click)
      const imgWrap = a.image
        ? el("div", { class: "award-image", style: "display:none;" },
            el("img", { src: a.image, alt: `${a.title} certificate`, loading: "lazy" })
          )
        : null;

      bodyDiv.append(titleEl, pointsEl);
      if (imgWrap) bodyDiv.append(imgWrap);

      const li = el("li", { class: "event", style: "cursor:pointer;" }, dateDiv, bodyDiv);

      if (imgWrap) {
        li.addEventListener("click", (ev) => {
          ev.stopPropagation();
          const isHidden = imgWrap.style.display === "none";
          imgWrap.style.display = isHidden ? "block" : "none";
        });
      }

      root.append(li);
    });
  })();
  
  // 7) Activities timeline
  (function renderActivities() {
    const root = document.getElementById("activities");
    activities.forEach(a => {
      const li = el("li", { class: "event" },
        el("div", { class: "event-date" }, el("time", { datetime: a.date, text: a.date })),
        el("div", { class: "event-body" },
          el("h3", { class: "event-title", text: a.title }),
          el("ul", { class: "event-points" }, ...a.bullets.map(t => el("li", { text: t })))
        )
      );
      root.append(li);
    });
  })();
  