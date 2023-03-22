window.onload = () => {
    const guestSpeakers = [
      {
        image: '../images/google-head.jpeg',
        name: 'Faith kocka',
        role: 'Head of Data science',
        bio: 'Leader of data team of the biggest data center',
      },
      {
        image: '../images/kaggle-ceo.jpeg',
        name: 'Anthony Goldbloom',
        role: 'kaggle CEO and co-founder',
        bio: 'foremost expert on the exploding field of data science.',
      },
      {
        image: '../images/behance-ceo.jpeg',
        name: 'Michael Kutuzov',
        role: 'Behance CEO',
        bio: 'founder of the largest creative network for showcasing and discovering creative work',
      },
      {
        image: '../images/Derek.jpeg',
        name: 'Derek Jedamski',
        role: 'Senior Manager, Data Science @ GitHub',
        bio: 'worked on various projects like Regression modeling, classification, NLP and regression',
      },
      {
        image: '../images/Marilyn-Moodley.jpg',
        name: 'Marilyn Moodley',
        role: 'Director/ Country Leader SA and WECA ',
        bio: 'worked as a data specialist at Microsoft',
      },
      {
        image: '../images/adeyami.png',
        name: 'Adekemi Omotubora',
        role: 'Senior Lecturer',
        bio: 'research on regulation of emerging technologies and the development, inclusion and gender aspects of technology',
      },
    ];
  
    function displaySpeakerInfo(speakerInfo) {
      const speakers = `<div class="speaker-1">
        <div class="speaker-image">
            <img src=${speakerInfo.image} alt="speaker-1">
        </div>
        <div>
            <h2>${speakerInfo.name}</h2>
            <h3>${speakerInfo.role}</h3>
            <h4>${speakerInfo.bio}</h4>
        </div>
    </div>`;
      return speakers;
    }
    const guestSpeakerAtEvent = document.querySelector('.image-display-1');
    guestSpeakers.forEach((card) => {
      guestSpeakerAtEvent.innerHTML += displaySpeakerInfo(card);
    });
  
    const hamburger = document.querySelector('.menu');
    const closeBtn = document.querySelector('.closeBtn');
  
    function close(menu, toBeClose) {
      menu.addEventListener('click', () => {
        const value = document.querySelector(toBeClose);
        value.style.display = 'none';
      });
    }
  
    hamburger.addEventListener('click', () => {
      console.log('clicked');
      const menu = document.querySelector('.mobile-menu');
      menu.style.display = 'block';
    });
  
    close(closeBtn, '.mobile-menu');
    closeBtn.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      menu.style.display = 'none';
      close(menu);
    });
  
    const backToMainPage = document.querySelector('.menuPopUp');
    close(backToMainPage, '.mobile-menu');
    backToMainPage.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      menu.style.display = 'none';
    });
  };
  