// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: ":)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-participated-in-the-national-polymer-conference-2023-my-very-first-academic-meeting-an-enriching-and-memorable-experience",
          title: 'Participated in the National Polymer Conference 2023. My very first academic meeting—an enriching...',
          description: "",
          section: "News",},{id: "news-joined-the-4th-international-symposium-on-soft-matter-science-and-engineering-absolutely-mind-blowing",
          title: 'Joined the 4th International Symposium on Soft Matter Science and Engineering. Absolutely mind-blowing....',
          description: "",
          section: "News",},{id: "news-attended-the-14th-international-symposium-on-polymer-physics-pp-2024-chongqing-three-days-filled-with-knowledge-and-spicy-food-️",
          title: 'Attended the 14th International Symposium on Polymer Physics (PP’2024, Chongqing). Three days filled...',
          description: "",
          section: "News",},{id: "news-attended-the-5th-international-symposium-on-soft-matter-science-and-engineering-a-true-feast-for-the-eyes-in-polymer-physics",
          title: 'Attended the 5th International Symposium on Soft Matter Science and Engineering. A true...',
          description: "",
          section: "News",},{id: "news-participated-in-soft-matter-a-realm-of-theary-and-simulation-my-very-first-poster-presentation",
          title: 'Participated in SOFT MATTER: A REALM OF THEARY AND SIMULATION. My very first...',
          description: "",
          section: "News",},{id: "news-attended-the-cecam-cn-flagship-school-understanding-molecular-simulation-enjoyed-insightful-lectures-by-daan-frenkel-and-an-inspiring-poster-discussion-️-picture",
          title: 'Attended the CECAM-CN Flagship School “Understanding Molecular Simulation”. Enjoyed insightful lectures by Daan...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
