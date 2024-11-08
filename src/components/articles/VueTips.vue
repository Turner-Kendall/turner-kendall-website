<template>
  <article>

    <header>
      <h3>Vue Tips & Tricks</h3>
      <p>Or why I still use VueJs in a React world...</p>
    </header>

    <h2 id="1-take-full-advantage-of-script-setup">
      Use <code>&lt;script setup&gt;</code>
    </h2>

    <p>
      I am exclusively <code>&lt;script setup&gt;</code>.
      The syntax makes component code cleaner and more maintainable
      by eliminating the need for the <code>export default</code> syntax.
      Here's a quick example of a setup block:
    </p>
    <pre><code class="language-vue">
      &lt;script setup&gt;
        import { ref } from &#39;vue&#39;;
        const count = ref(0);
        const increment = () =&gt; count.value++;
      &lt;/script&gt;

      &lt;template&gt;
        &lt;button @click=&quot;increment&quot;&gt;Count is: {{ count }}&lt;/button&gt;
      &lt;/template&gt;
      
      </code></pre>

    <ul>
      <li>Less boilerplate code.</li>
      <li>Automatically exposes variables to the template.</li>
      <li>Enables TypeScript support directly in the setup block.</li>
    </ul>

    <hr class="sep">

    <h2 id="2-use-the-transition-component-for-smooth-animations">
      <code>&lt;Transition&gt;</code> for Animations
    </h2>
    <p>I do not use this enough, but I did in
      <a href="https://memewar.app">Meme War</a> and really like the effect.
      By adding the <code>&lt;Transition&gt;</code> component around elements
      that enter or leave the DOM can make your app feel more polished and
      professional.
    </p>
    <pre><code class="language-vue">
      &lt;template&gt;
        &lt;transition name=&quot;fade&quot;&gt;
          &lt;p v-if=&quot;show&quot;&gt;This text will fade in and out.&lt;/p&gt;
        &lt;/transition&gt;
      &lt;/template&gt;

      &lt;style&gt;
        .fade-enter-active, .fade-leave-active {
          transition: opacity 0.5s;
        }
        .fade-enter, .fade-leave-to {
          opacity: 0;
        }
      &lt;/style&gt;
    </code></pre>

    <ul>
      <li>Enhances user experience by making UI interactions smoother.</li>
      <li>Easy to customize with CSS classes for different animations.</li>
    </ul>
    <hr class="sep">

    <h2 id="3-define-reusable-utility-functions-in-a-utilsjs-file">
      Create Utility Functions in a <code>utils.js</code> File</h2>
    <p>Separate reusable functions into a <code>/js/utils.js</code>
      file that can be shared across components. Here's the idea
      with formating a date for example:</p>
    <pre><code class="language-js">
      // utils.js
      export const formatDate = (date) =&gt; {
        return new Date(date).toLocaleDateString();
      };
      </code></pre>
    <p>You can then import and use this in any component:</p>
    <pre><code class="language-vue">
      &lt;script setup&gt;
      import { formatDate } from &#39;../utils&#39;;
      &lt;/script&gt;
    </code></pre>

    <ul>
      <li>Keeps your components clean and focused on UI logic.</li>
      <li>Encourages reusability and minimizes code duplication.</li>
    </ul>

    <hr class="sep">

    <h2 id="4-use-defineprops-and-defineemits-in-script-setup">
      <code>defineProps</code> and <code>defineEmits</code>
    </h2>
    <p>To keep props and event emissions organized, use <code>defineProps</code> and <code>defineEmits</code> directly
      in the <code>&lt;script setup&gt;</code> block.</p>
    <pre><code class="language-vue">
    &lt;script setup&gt;
      const props = defineProps({
        title: String,
        count: {
          type: Number,
          default: 0
        }
      });

      const emit = defineEmits([&#39;increment&#39;]);
    &lt;/script&gt;
    </code></pre>

    <ul>
      <li><code>defineProps</code> and <code>defineEmits</code> simplify managing props and events without extra
        imports.</li>
      <li>Ensures a clean, modular approach to component structure.</li>
    </ul>
    <hr class="sep">
    <h2 id="5-handy-npm-packages-for-vue-3-projects">Handy NPMs for Vue</h2>
    <p>Here are a few NPM packages that I like. Always make sure to run npm audit
      on every npm you install before you go too far...
    </p>
    <ul>
      <li>
        <p><strong>VueUse</strong>: A collection of utility functions for Vue 3, including composable utilities for
          state management, lifecycle hooks, and more.</p>
        <pre><code class="language-bash">npm install @vueuse/core
</code></pre>
      </li>
      <li>
        <p><strong>Pinia</strong>: The recommended state management library
          for Vue 3. It's not perfect but it features a simpler API and better
          TypeScript support than Vuex.</p>
        <pre><code class="language-bash">npm install pinia
</code></pre>
      </li>
      <li>
        <p><strong>Vite</strong>: The default build tool for Vue 3, optimized for speed and ease of use.</p>
        <pre><code class="language-bash">npm init vite@latest
</code></pre>
      </li>
      <li>
        <p><strong>pico.css</strong>: If you want minimalist styling without a full CSS framework, pico.css is
          lightweight and helps you start with a clean, responsive UI.</p>
        <pre><code class="language-bash">npm install pico.css
</code></pre>
      </li>
    </ul>

    <ul>
      <li><strong>VueUse</strong> simplifies repetitive tasks with built-in utilities.</li>
      <li><strong>Pinia</strong> is the new, simplified Vue state management solution.</li>
      <li><strong>Vite</strong> enables faster development and better performance.</li>
      <li><strong>pico.css</strong> provides a good-looking base for minimal styling.</li>
    </ul>
    <hr class="sep">
    <h2 id="6-use-composables-for-reusable-logic">
      Composables for Reusable Logic
    </h2>
    <p>Composables are reusable functions that use Vue&#39;s reactivity system and can be imported into any component.
      For example, a composable for fetching data might look like this:</p>
    <pre><code class="language-js">
    // useFetch.js
    import { ref } from &#39;vue&#39;;

      export function useFetch(url) {
        const data = ref(null);
        const error = ref(null);

        fetch(url)
          .then(response =&gt; response.json())
          .then(json =&gt; (data.value = json))
          .catch(err =&gt; (error.value = err));

        return { data, error };
      }
  </code></pre>

    <ul>
      <li>Allows you to extract business logic from components.</li>
      <li>Composables are easy to test and reuse across your app.</li>
    </ul>
    <hr class="sep">
    <h2 id="7-take-advantage-of-style-scoped-and-css-variables">
      <code>&lt;style scoped&gt;</code> and CSS Variables
    </h2>
    <p>With <code>&lt;style scoped&gt;</code>, you can limit the CSS styles to the component where they're defined.
      Also, Vue 3 plays well with CSS variables, making it easier to set theme colors or other global styles.</p>
    <pre><code class="language-vue">
      &lt;template&gt;
        &lt;div class=&quot;box&quot;&gt;Styled Box&lt;/div&gt;
      &lt;/template&gt;

      &lt;style scoped&gt;
        .box {
          background-color: var(--box-color);
        }
      &lt;/style&gt;
  </code></pre>

    <ul>
      <li>Scoped styles prevent CSS leakage between components.</li>
      <li>CSS variables make it easy to manage themes and dynamic styling.</li>
    </ul>
    <hr class="sep" />
    <h2 id="8-use-watch-and-watcheffect-for-reactive-logic"><code>watch</code> and <code>watchEffect</code> for
      Reactive Logic</h2>
    <p>Vue 3's <code>watch</code> and <code>watchEffect</code> functions give you powerful ways to react to changes in
      state.</p>
    <pre><code class="language-js">
    import { ref, watch } from &#39;vue&#39;;

    const count = ref(0);

    watch(count, (newCount, oldCount) =&gt; {
      console.log(`Count changed from ${oldCount} to ${newCount}`);
    });
    </code></pre>

    <ul>
      <li>Ideal for performing side effects or triggering functions when data changes.</li>
      <li><code>watchEffect</code> automatically tracks dependencies, saving setup time.</li>
    </ul>

    <hr class="sep" />

    <h2 id="9-test-vue-components-with-vuetest-utils-and-vitest">

      <code>@vue/test-utils</code> and <code>vitest</code>
    </h2>
    <p>Unit testing Vue components ensures they behave as expected. The <code>@vue/test-utils</code> package provides
      helpers for mounting and interacting with Vue components, and <code>vitest</code> works seamlessly with Vite.</p>
    <pre><code class="language-bash">npm install @vue/test-utils vitest --save-dev
</code></pre>
    <ul>
      <li>Simplifies testing, ensuring components are stable.</li>
      <li><code>vitest</code> is optimized for Vite, providing fast, straightforward testing.</li>
    </ul>
    <hr>


    <footer>
      <p>😼</p>
    </footer>

  </article>
</template>