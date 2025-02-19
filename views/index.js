const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>Reading List</h1>
      </header>

      <main>
         <div class="search" style="text-align: center;">
          <input 
            type="search"
            name="search"
            placeholder="Search books by title..."
            hx-post="/books/search"
            hx-trigger="keyup changed delay:300ms"
            hx-target=".book-list"
          />
        </div> 

        <div class="book-list">
          <button hx-get="/books" hx-target=".book-list" >Show Books</button>
          <!--
          <button hx-get="/books" hx-swap="outerHTML" hx-indicator="#indicator">Show List
            <img class="htmx-indicator" id="indicator" src="/spinner.gif">
          </button>

          <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list">Show Books</button>
          <button hx-get="/books" hx-swap="afterend" hx-target=".book-list">Show Books</button>
          <button hx-get="/books" hx-swap="outerHTML">Show Books</button>
          <button hx-get="/books" hx-swap="innerHTML">Show Books</button>
          -->
        </div>

         <div class="add-book-form">
          <h2>What do you want to read .....!</h2>
          <form
           hx-post="/books"
           hx-target=".book-list ul" 
           hx-swap="beforeend"
           hx-on::after-request="document.querySelector('form').reset()"
          >
            <input 
              id="title" 
              name="title"
              placeholder="title" 
              type="text" 
            />
            <input 
              id="author" 
              name="author"
              placeholder="author" 
              type="text" 
            />
              <button 
               hx-on:click="alert('new book added')"
              >Add</button>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;