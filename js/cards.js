async function getPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
    }

    function renderCard(title, body) {
      const cardContainer = document.getElementById('cardContainer');
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="../images/car-2.jpg" alt="car-jpg">
        <h3>${title}</h3>
        <p>${body}</p>
      `;
      cardContainer.appendChild(card);
    }

    async function main() {
      const posts = await getPosts();

      posts.forEach(post => {
        renderCard(post.title, post.body);
      });
    }

    main();
