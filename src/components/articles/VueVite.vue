<template>
  <article>

    <header>
      <h3 id="vue-vite">Vue + Vite</h3>
      <p> Vue plus Vite is my favorite way to create a new web app.
        Vite offers a faster development experience due to its native ES module support and optimized server start-up.
        The default template includes Vue 3, which you know is my favorite framework.  I figured that I would post
        a quick article about how I spin it up.
      </p>
    </header>

    <h3 id="install-node"><strong>To create a new Vue site using Vite, follow these steps:</strong></h3>
    
    <ol>
      <li>
        <h4>Install Node.js:</h4>
        <p>
          Ensure you have Node.js installed on your machine. You can download it from the official 
        <a href="https://nodejs.org/">Node.js website</a>.
        </p>
      </li>
      
      <li>
        <h4>Initialize a Vite Project:</h4>
        <p>Open your command line interface (CLI) and run the following command to create a new Vite project with Vue:</p>
        <pre>
          <code>
          npm create vite@latest my-vue-app -- --template vue
        </code>
        </pre>
        <p>
          Here, <span class="reverse">my-vue-app</span> is the name of your project. You can replace it with whatever name you prefer.

        </p>
      </li>
      <li>
        <h4>Navigate to Your Project Folder:</h4>
        <p>After the project is created, navigate into your new project directory:</p>
        <pre>
          <code>
            cd my-vue-app
          </code>
        </pre>
      </li>

      <li>
        <h4>Install Dependencies:</h4>
        <p> Install the npm packages necessary for your Vue project:</p>
        <pre>
          <code>
            npm install
          </code>
        </pre>
      </li>

      <li>
        <h4>Run the Development Server:</h4>
        <pre>
          <code>
            npm run dev
          </code>
        </pre>
        <p>
          This command will start your Vue application on a local server, typically at <span class="reverse">http://localhost:5173/</span> or similar, depending on the port Vite uses.
        </p>
        <p>
          You can now start editing the files in the <span class="reverse">src</span> directory, 
          particularly <span class="reverse">main.js</span> or <span class="reverse">App.vue</span> to see your changes reflected in real-time.  
          Typically I will create a <span class="reverse">views</span> dir and a <span class="reverse">components</span> directiory as well to effectively separate code.  Maybe I will
          create an article with a more detailed example of project layout?
        </p>
      </li>

      <li>
        <h4>Building for Production:</h4>
        <p>When you're ready to deploy your site, build it with:</p>
        <pre>
          <code>
            npm run build
          </code>
        </pre>
        <p>
          This command will optimize your Vue app for production and place the build files in a 
          <span class="reverse">dist</span> folder.
        </p>
      </li>

    </ol>

    <footer>
      <h2 id="coda"><strong>Coda</strong></h2>

      <p> 
        This setup gives you a basic Vue application ready for development, where you can add components, state management, routing, etc., as needed.
        Next week ( God wiling ) I will post a follow up article outling how I organize files, do routing, state management, etc.
      </p>
     
      😼
    </footer>
  </article>
</template>

<style scoped>
li {margin-bottom: 2.5rem;}
</style>