<template>
  <article>

    <header>
      <p>
        I've been doing HTML and CSS in one form or another for over 20 years.  
        I like to try and keep things fresh.  One way I do it is by trying to 
        incorporate different html entities in each project I do.  Here are some 
        of my favorites.
      </p>
    </header>

    <h3 id="1-aside">1. <code>&lt;aside&gt;</code></h3>
    <p>Represents content that is tangentially related to the content around it, such as sidebars, pull quotes, or
      related
      links.</p>
    <pre><code class="language-html">&lt;aside&gt;
  &lt;h2&gt;Related Articles&lt;/h2&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Article 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Article 2&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/aside&gt;
</code></pre>
    <h3 id="2-figure-and-figcaption">2. <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code></h3>
    <p>Used for self-contained content, like images, diagrams, or illustrations, along with a caption.</p>
    <pre><code class="language-html">&lt;figure&gt;
  &lt;img src=&quot;image.jpg&quot; alt=&quot;Description of image&quot;&gt;
  &lt;figcaption&gt;This is a caption for the image.&lt;/figcaption&gt;
&lt;/figure&gt;
</code></pre>
    <h3 id="3-main">3. <code>&lt;main&gt;</code></h3>
    <p>Defines the main content area of a document, excluding headers, footers, sidebars, etc.</p>
    <pre><code class="language-html">&lt;main&gt;
  &lt;article&gt;
    &lt;h1&gt;Main Article Title&lt;/h1&gt;
    &lt;p&gt;Content goes here...&lt;/p&gt;
  &lt;/article&gt;
&lt;/main&gt;
</code></pre>
    <h3 id="4-mark">4. <code>&lt;mark&gt;</code></h3>
    <p>Indicates text that has been highlighted or marked for reference or emphasis.</p>
    <pre><code class="language-html">&lt;p&gt;This is a &lt;mark&gt;highlighted&lt;/mark&gt; text example.&lt;/p&gt;
</code></pre>
    <h3 id="5-time">5. <code>&lt;time&gt;</code></h3>
    <p>Represents a specific period in time, which can be useful for dates and times.</p>
    <pre><code class="language-html">&lt;p&gt;Event Date: &lt;time datetime=&quot;2024-10-30&quot;&gt;October 30, 2024&lt;/time&gt;&lt;/p&gt;
</code></pre>
    <h3 id="6-address">6. <code>&lt;address&gt;</code></h3>
    <p>Used to provide contact information for a person or organization.</p>
    <pre><code class="language-html">&lt;address&gt;
  &lt;p&gt;Contact us at:&lt;/p&gt;
  &lt;p&gt;John Doe&lt;br&gt;
  1234 Main St.&lt;br&gt;
  City, State, Zip&lt;br&gt;
  &lt;a href=&quot;mailto:john.doe@example.com&quot;&gt;john.doe@example.com&lt;/a&gt;&lt;/p&gt;
&lt;/address&gt;
</code></pre>
    <h3 id="7-details-and-summary">7. <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code></h3>
    <p>Used to create a disclosure widget from which the user can obtain additional information or controls.</p>
    <pre><code class="language-html">&lt;details&gt;
  &lt;summary&gt;More Info&lt;/summary&gt;
  &lt;p&gt;This is additional information that is hidden by default.&lt;/p&gt;
&lt;/details&gt;
</code></pre>
    <h3 id="8-template">8. <code>&lt;template&gt;</code></h3>
    <p>Represents a container for HTML that won’t be rendered when the page loads but can be instantiated later.</p>
    <pre><code class="language-html">&lt;template id=&quot;my-template&quot;&gt;
  &lt;div class=&quot;item&quot;&gt;
    &lt;h2&gt;Item Title&lt;/h2&gt;
    &lt;p&gt;Item description.&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>
    <h3 id="9-progress">9. <code>&lt;progress&gt;</code></h3>
    <p>Represents the completion progress of a task.</p>
    <pre><code class="language-html">&lt;progress value=&quot;70&quot; max=&quot;100&quot;&gt;70%&lt;/progress&gt;
</code></pre>
    <h3 id="10-output">10. <code>&lt;output&gt;</code></h3>
    <p>Represents the result of a calculation or user action.</p>
    <pre><code class="language-html">&lt;form onsubmit=&quot;calculate(); return false;&quot;&gt;
  &lt;input type=&quot;number&quot; id=&quot;number1&quot; required&gt;
  &lt;input type=&quot;number&quot; id=&quot;number2&quot; required&gt;
  &lt;button type=&quot;submit&quot;&gt;Add&lt;/button&gt;
  &lt;output id=&quot;result&quot;&gt;&lt;/output&gt;
&lt;/form&gt;

&lt;script&gt;
function calculate() {
  const num1 = document.getElementById(&#39;number1&#39;).value;
  const num2 = document.getElementById(&#39;number2&#39;).value;
  document.getElementById(&#39;result&#39;).value = Number(num1) + Number(num2);
}
&lt;/script&gt;
</code></pre>

    <footer>
      <p>Using these semantic HTML tags not only makes your markup clearer and more meaningful but also improves
        accessibility and SEO. I think Keeping your skills fresh using semantic tags is a
        fantastic way to enhance your HTML practices 😼
      </p>
    </footer>

  </article>
</template>
